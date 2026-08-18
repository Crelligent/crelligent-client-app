import { NextResponse } from 'next/server'
import { generateObject } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { z } from 'zod'
import { OsScore, L1BusinessDesign, Process } from '@/types/platform.types'
import { calculateDeterministicScore } from '@/lib/scoring/engine'

const ScoringResponseSchema = z.object({
  primary_constraint: z.string().describe("The most critical layer currently holding the company back from scale (e.g. 'L2 Operating Model')"),
  ai_narrative: z.string().describe("A 3-4 sentence qualitative analysis explaining the score and the primary constraint.")
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { l1Data, processes, documents } = body as {
      l1Data: L1BusinessDesign | null
      processes: Process[]
      documents: any[]
    }

    // 1. Calculate deterministic base score
    const baseScore: OsScore = calculateDeterministicScore(l1Data, processes, documents)

    // 2. Call Anthropic Claude 3.5 Sonnet for qualitative analysis
    const { object } = await generateObject({
      model: anthropic('claude-3-5-sonnet-20240620'),
      schema: ScoringResponseSchema,
      prompt: `
        Analyze the following enterprise operating system data:
        L1 Business Design: ${JSON.stringify(l1Data)}
        L2 Processes Count: ${processes.length}
        L2 Sample Processes: ${JSON.stringify(processes.slice(0, 3))}
        Calculated Base Score: ${baseScore.total_score}/100

        Based on this data, identify the primary constraint layer holding back scale.
        Write a concise, professional executive narrative explaining why this constraint exists
        and what needs to happen to improve the OS Performance Score.
      `,
    })

    // 3. Merge and return
    const finalScore: OsScore = {
      ...baseScore,
      primary_constraint: object.primary_constraint,
      ai_narrative: object.ai_narrative,
    }

    return NextResponse.json(finalScore)
  } catch (error) {
    console.error('Error generating OS score:', error)
    return NextResponse.json({ error: 'Failed to generate OS score' }, { status: 500 })
  }
}

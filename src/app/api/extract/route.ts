import { NextResponse } from 'next/server'
import { generateObject } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { z } from 'zod'

const ExtractionSchema = z.object({
  processes: z.array(z.object({
    name: z.string(),
    department: z.string(),
    description: z.string(),
    frequency: z.string().optional()
  })),
  roles: z.array(z.object({
    title: z.string(),
    responsibilities: z.string()
  }))
})

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Note: MVP implementation handles text for simplicity.
    // In production, pdfjs-dist or mammoth would extract raw text from PDF/Docx here.
    const textContent = await file.text()

    const { object } = await generateObject({
      model: anthropic('claude-3-5-sonnet-20240620'),
      schema: ExtractionSchema,
      prompt: `
        Extract all business processes and role definitions from the following text document.
        Return them as structured JSON data for importing into an operating system database.
        
        Text Content:
        ${textContent.substring(0, 50000)} // Ensure we don't exceed token limits for massive docs
      `,
    })

    return NextResponse.json(object)
  } catch (error) {
    console.error('Error extracting document:', error)
    return NextResponse.json({ error: 'Failed to extract document' }, { status: 500 })
  }
}

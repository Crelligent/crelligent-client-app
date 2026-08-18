import { OsScore, Process, L1BusinessDesign, Document } from '@/types/platform.types'

// Constants for deterministic scoring
const WEIGHTS = {
  L1: 0.15,
  L2: 0.35,
  L3: 0.20,
  L4: 0.15,
  L5: 0.15
}

/**
 * Calculates a baseline deterministic score based on the raw quantitative data.
 * This is passed to the AI Engine which then adds qualitative modifiers.
 */
export function calculateDeterministicScore(
  l1Data: L1BusinessDesign | null,
  processes: Process[],
  documents: Document[]
): OsScore {
  
  // L1: Business Design (0-100)
  // Scored based on completion of core fields
  let l1_score = 0
  if (l1Data) {
    if (l1Data.value_proposition) l1_score += 25
    if (l1Data.target_market) l1_score += 25
    if (l1Data.revenue_model) l1_score += 25
    if (l1Data.competitive_advantage) l1_score += 25
  }

  // L2: Operating Model (0-100)
  // Scored based on volume and detail of mapped processes
  let l2_score = 0
  if (processes.length > 0) {
    // Base score for having processes mapped
    l2_score += Math.min(processes.length * 5, 50) 
    
    // Bonus for detailed processes (having descriptions and automation potential)
    const detailedCount = processes.filter(p => p.description && p.automation_potential !== null).length
    l2_score += Math.min(detailedCount * 5, 50)
  }

  // MVP placeholders for L3, L4, L5
  const l3_score = 50 // Default baseline
  const l4_score = 50 
  const l5_score = 50 

  // Calculate Weighted Total
  const total_score = 
    (l1_score * WEIGHTS.L1) +
    (l2_score * WEIGHTS.L2) +
    (l3_score * WEIGHTS.L3) +
    (l4_score * WEIGHTS.L4) +
    (l5_score * WEIGHTS.L5)

  return {
    id: 'draft',
    company_id: l1Data?.company_id || 'unknown',
    total_score: Math.round(total_score),
    l1_score,
    l2_score,
    l3_score,
    l4_score,
    l5_score,
    primary_constraint: null, // Will be filled by AI
    ai_narrative: null,       // Will be filled by AI
    calculated_at: new Date().toISOString()
  }
}

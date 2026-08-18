export type OsScore = {
  id: string
  company_id: string
  total_score: number
  l1_score: number | null
  l2_score: number | null
  l3_score: number | null
  l4_score: number | null
  l5_score: number | null
  primary_constraint: string | null
  ai_narrative: string | null
  calculated_at: string
}

export type L1BusinessDesign = {
  id: string
  company_id: string
  value_proposition: string | null
  target_market: string | null
  revenue_model: string | null
  cost_structure: string | null
  competitive_advantage: string | null
  updated_at: string
}

export type Process = {
  id: string
  company_id: string
  name: string
  department: string
  frequency: string | null
  description: string | null
  owner_role_id: string | null
  automation_potential: number | null
  created_at: string
}

export type RoleDefinition = {
  id: string
  company_id: string
  title: string
  department: string
  responsibilities: string | null
  reports_to: string | null
  created_at: string
}

export type DecisionRight = {
  id: string
  process_id: string
  role_id: string
  authority_level: 'Accountable' | 'Responsible' | 'Consulted' | 'Informed'
}

export type Document = {
  id: string
  company_id: string
  filename: string
  storage_path: string
  document_type: string | null
  extraction_status: 'pending' | 'processing' | 'completed' | 'failed'
  extracted_data: any | null
  uploaded_at: string
}

export type Recommendation = {
  id: string
  company_id: string
  layer: 'L1' | 'L2' | 'L3' | 'L4' | 'L5'
  title: string
  description: string | null
  impact_score: number | null
  effort_score: number | null
  status: 'open' | 'in_progress' | 'implemented' | 'dismissed'
  created_at: string
}

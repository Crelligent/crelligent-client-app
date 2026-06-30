'use client'

import React, { useState } from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Target, TrendingUp, TrendingDown, ArrowRight, BrainCircuit, Activity, Wrench, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Mock Data structure for ESRE Framework
const domains = [
    {
        id: 'dom-behaviour',
        name: 'Behaviour',
        score: 45,
        capabilities: [
            { id: 'cap-leadership', name: 'Leadership & Culture', score: 38, delta: -2, status: 'Critical Deficit', assessment: 'Executive alignment is fractured regarding the digital transformation strategy. Mid-level management is resisting new KPIs, leading to a culture of compliance rather than innovation.', actions: ['Conduct localized KPI realignment workshops.', 'Establish direct feedback loop between C-suite and regional managers.'], bottlenecks: ['BTN-042'] },
            { id: 'cap-talent', name: 'Talent & Capacity', score: 55, delta: 5, status: 'At Risk', assessment: 'Recruitment pipelines are healthy, but retention of highly skilled technical staff is lagging industry benchmarks by 12%.', actions: ['Implement retention bonuses tied to project milestones.', 'Upskill existing staff in new tech stack.'], bottlenecks: [] },
            { id: 'cap-customer', name: 'Customer Experience', score: 42, delta: -5, status: 'Critical Deficit', assessment: 'Driver interactions with the new proof-of-delivery system are poor, resulting in inaccurate ETA communications to end customers.', actions: ['Deploy simplified UI for driver application.', 'Initiate driver training sprint.'], bottlenecks: ['BTN-035'] }
        ]
    },
    {
        id: 'dom-governance',
        name: 'Governance',
        score: 62,
        capabilities: [
            { id: 'cap-strategy', name: 'Strategy & Execution', score: 75, delta: 8, status: 'Optimized', assessment: 'The Q3 strategic roadmap is well-defined and widely understood across top-level management. Execution velocity is meeting targets.', actions: ['Maintain current cadence.', 'Begin Q4 scenario planning.'], bottlenecks: [] },
            { id: 'cap-process', name: 'Process Architecture', score: 48, delta: -1, status: 'At Risk', assessment: 'Core operational processes are heavily siloed. Approval matrices are over-engineered, causing significant delays in route adjustments.', actions: ['Draft Governance Blueprint v2.1 to automate L1/L2 approvals.', 'Map cross-functional dependencies.'], bottlenecks: ['BTN-041'] },
            { id: 'cap-performance', name: 'Performance Management', score: 65, delta: 3, status: 'Stable', assessment: 'Performance metrics are tracked consistently, though feedback cycles are too slow to allow for dynamic course correction during the month.', actions: ['Shift from monthly to weekly performance reviews.', 'Automate data aggregation for dashboards.'], bottlenecks: [] }
        ]
    },
    {
        id: 'dom-technology',
        name: 'Technology',
        score: 51,
        capabilities: [
            { id: 'cap-data', name: 'Data & Architecture', score: 40, delta: 0, status: 'Critical Deficit', assessment: 'The legacy ERP system is severely throttling data requests. The routing engine is operating on batch data rather than real-time streams.', actions: ['Implement middleware caching layer.', 'Migrate to event-driven architecture.'], bottlenecks: ['BTN-038'] },
            { id: 'cap-digital', name: 'Digital Operations', score: 58, delta: 4, status: 'At Risk', assessment: 'Automation of manual tasks is progressing, but integration between the warehouse management system and the driver app remains fragile.', actions: ['Audit WMS API endpoints.', 'Establish automated integration testing.'], bottlenecks: [] },
            { id: 'cap-innovation', name: 'Innovation Engine', score: 55, delta: 2, status: 'At Risk', assessment: 'R&D initiatives exist but lack a structured pipeline to move from ideation to pilot testing to full-scale deployment.', actions: ['Define clear stage-gate criteria for R&D projects.', 'Allocate dedicated simulation lab resources.'], bottlenecks: [] }
        ]
    }
]

// Helpers for color and status
const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-[#00B67A] bg-[#00B67A]'
    if (score >= 40) return 'text-yellow-400 bg-yellow-400'
    return 'text-red-400 bg-red-400'
}

const getScoreBg = (score: number) => {
    if (score >= 70) return 'bg-[#00B67A]/20'
    if (score >= 40) return 'bg-yellow-400/20'
    return 'bg-red-400/20'
}

export default function EsreScorecardPage() {
    const [expandedCapability, setExpandedCapability] = useState<string | null>(null)

    const overallScore = Math.round(domains.reduce((acc, dom) => acc + dom.score, 0) / domains.length)

    const toggleCapability = (id: string) => {
        if (expandedCapability === id) setExpandedCapability(null)
        else setExpandedCapability(id)
    }

    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col min-h-0">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#00B67A] mb-2 flex items-center gap-2">
                            <Target className="w-3.5 h-3.5" /> Diagnostic Framework
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">
                            ESRE Scorecard
                        </h1>
                        <p className="text-white/50 text-sm">9-Dimensional Systemic Readiness Evaluation</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex gap-3">
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors flex items-center gap-2 text-white/70">
                            View Historical
                        </button>
                        <button className="px-4 py-2 bg-[#00B67A]/10 text-[#00B67A] hover:bg-[#00B67A]/20 border border-[#00B67A]/30 rounded-lg text-sm transition-colors flex items-center gap-2 font-medium">
                            <Activity className="w-4 h-4" /> Run Fresh Diagnostic
                        </button>
                    </motion.div>
                </header>

                {/* Macro Diagnostic Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 shrink-0">
                    
                    {/* Overall Score */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-1 glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center items-center text-center group"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br from-transparent opacity-30 ${overallScore >= 70 ? 'to-[#00B67A]/20' : overallScore >= 40 ? 'to-yellow-500/20' : 'to-red-500/20'}`} />
                        
                        <div className="relative z-10">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-4">Overall System Readiness</div>
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className={`text-6xl font-light ${overallScore >= 70 ? 'text-[#00B67A]' : overallScore >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                                    {overallScore}
                                </span>
                                <span className="text-xl text-white/30">/100</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                                <TrendingUp className="w-3.5 h-3.5 text-[#00B67A]" /> +2% from last month
                            </div>
                        </div>
                    </motion.div>

                    {/* AI Insight */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/10 to-transparent opacity-50" />
                        
                        <div className="relative z-10 flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <BrainCircuit className="w-4 h-4 text-[#7B61FF]" />
                                <span className="text-xs font-mono uppercase tracking-widest text-white/70">Engine Intelligence Insight</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-light text-white mb-2">The Behavioural domain is throttling execution.</h3>
                            <p className="text-sm text-white/60 leading-relaxed max-w-2xl mb-4">
                                While Governance structures are relatively stable, severe deficits in Leadership & Culture (Score: 38) are preventing top-down strategy from being operationalized. Resolving KPI misalignment will unblock ₦1.2M in weekly operational waste.
                            </p>
                            <button className="text-xs text-[#7B61FF] hover:text-white transition-colors flex items-center gap-1">
                                View Recommended Mitigation Blueprint <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </motion.div>

                </div>

                {/* The 9-Dimension Breakdown */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-8 pb-8">
                    {domains.map((domain, dIdx) => (
                        <motion.div 
                            key={domain.id}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + (dIdx * 0.1) }}
                            className="glass-card rounded-2xl overflow-hidden"
                        >
                            {/* Domain Header */}
                            <div className="p-6 border-b border-white/10 bg-white/[0.01] flex flex-col md:flex-row justify-between md:items-center gap-4">
                                <div>
                                    <h2 className="text-lg font-medium text-white mb-1">{domain.name} Domain</h2>
                                    <div className="text-xs text-white/40 font-mono">Aggregated Score: <span className={getScoreColor(domain.score).split(' ')[0]}>{domain.score}/100</span></div>
                                </div>
                            </div>

                            {/* Capabilities List */}
                            <div className="divide-y divide-white/5">
                                {domain.capabilities.map((cap) => (
                                    <div key={cap.id} className="group">
                                        {/* Capability Row */}
                                        <div 
                                            onClick={() => toggleCapability(cap.id)}
                                            className="p-6 hover:bg-white/[0.02] transition-colors cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                                        >
                                            {/* Name & Delta */}
                                            <div className="w-full md:w-1/4 shrink-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-sm font-medium text-white/90">{cap.name}</h3>
                                                    {cap.delta > 0 ? <TrendingUp className="w-3 h-3 text-[#00B67A]" /> : cap.delta < 0 ? <TrendingDown className="w-3 h-3 text-red-400" /> : <TrendingUp className="w-3 h-3 text-white/20" />}
                                                </div>
                                                <div className="text-[10px] font-mono text-white/40">{cap.delta > 0 ? '+' : ''}{cap.delta} pts</div>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full md:flex-1 flex items-center gap-4">
                                                <div className={`text-xl font-light w-12 text-right ${getScoreColor(cap.score).split(' ')[0]}`}>
                                                    {cap.score}
                                                </div>
                                                <div className={`flex-1 h-2 rounded-full ${getScoreBg(cap.score)} overflow-hidden`}>
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${cap.score}%` }}
                                                        transition={{ duration: 1, ease: "easeOut" }}
                                                        className={`h-full rounded-full ${getScoreColor(cap.score).split(' ')[1]}`} 
                                                    />
                                                </div>
                                            </div>

                                            {/* Status Badge & Expand Icon */}
                                            <div className="w-full md:w-1/4 shrink-0 flex items-center justify-between md:justify-end gap-4">
                                                <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest border ${cap.score >= 70 ? 'border-[#00B67A]/30 text-[#00B67A] bg-[#00B67A]/10' : cap.score >= 40 ? 'border-yellow-400/30 text-yellow-400 bg-yellow-400/10' : 'border-red-400/30 text-red-400 bg-red-400/10'}`}>
                                                    {cap.status}
                                                </span>
                                                <div className="text-white/20 group-hover:text-white/60 transition-colors">
                                                    {expandedCapability === cap.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Deep-Dive Expandable Panel */}
                                        <AnimatePresence>
                                            {expandedCapability === cap.id && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }} 
                                                    animate={{ height: 'auto', opacity: 1 }} 
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-black/20 border-t border-white/5"
                                                >
                                                    <div className="p-6 md:pl-[25%]">
                                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                            
                                                            {/* Assessment */}
                                                            <div>
                                                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#7B61FF] mb-2 flex items-center gap-1.5">
                                                                    <BrainCircuit className="w-3 h-3" /> Diagnostic Assessment
                                                                </div>
                                                                <p className="text-sm text-white/70 leading-relaxed mb-6">
                                                                    {cap.assessment}
                                                                </p>

                                                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#00B67A] mb-2 flex items-center gap-1.5">
                                                                    <ShieldCheck className="w-3 h-3" /> Prescriptive Actions
                                                                </div>
                                                                <ul className="space-y-2">
                                                                    {cap.actions.map((action, i) => (
                                                                        <li key={i} className="text-sm text-white/80 flex items-start gap-2">
                                                                            <span className="text-[#00B67A] mt-0.5">•</span> {action}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Linked Bottlenecks */}
                                                            <div>
                                                                <div className="text-[10px] font-mono uppercase tracking-widest text-orange-400 mb-2 flex items-center gap-1.5">
                                                                    <Wrench className="w-3 h-3" /> Active Bottlenecks Throttling Score
                                                                </div>
                                                                {cap.bottlenecks.length > 0 ? (
                                                                    <div className="space-y-3">
                                                                        {cap.bottlenecks.map((btn, i) => (
                                                                            <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
                                                                                <div className="flex items-center gap-2">
                                                                                    <span className="text-xs font-mono text-white/40">{btn}</span>
                                                                                    <span className="text-sm text-white/80">View in Tracker</span>
                                                                                </div>
                                                                                <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <div className="text-sm text-white/30 italic p-3 border border-dashed border-white/10 rounded-lg text-center">
                                                                        No active bottlenecks mapped to this capability.
                                                                    </div>
                                                                )}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </PortalLayout>
    )
}

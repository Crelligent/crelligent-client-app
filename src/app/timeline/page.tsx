'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Calendar, BrainCircuit, User, Clock, ChevronRight, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

// Mock Data
const weeks = ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6', 'Wk 7', 'Wk 8', 'Wk 9', 'Wk 10', 'Wk 11', 'Wk 12']

const deployments = [
    {
        id: 'DEP-101',
        title: 'Embedded Behavioural Lead',
        assignee: 'Sarah J.',
        type: 'Human',
        dimension: 'Behaviour',
        blocks: [
            { phase: 'Observation & Baselining', start: 1, duration: 2, color: 'bg-[#7B61FF]', status: 'Completed' },
            { phase: 'Algorithm Implementation', start: 3, duration: 6, color: 'bg-[#7B61FF]', status: 'Active' },
            { phase: 'Handover & Training', start: 9, duration: 4, color: 'bg-[#7B61FF]/40 border border-[#7B61FF]/50', status: 'Pending' }
        ]
    },
    {
        id: 'DEP-102',
        title: 'Dynamic Routing Topography Compute',
        assignee: 'Simulation Lab',
        type: 'System',
        dimension: 'Technology',
        blocks: [
            { phase: 'Ingestion & Topology Mapping', start: 1, duration: 4, color: 'bg-[#38BDF8]', status: 'Completed' },
            { phase: 'Live Scenario Testing', start: 5, duration: 4, color: 'bg-[#38BDF8]/40 border border-[#38BDF8]/50', status: 'Pending' }
        ]
    },
    {
        id: 'DEP-103',
        title: 'Governance Restructuring',
        assignee: 'Blueprint Generator',
        type: 'System',
        dimension: 'Governance',
        blocks: [
            { phase: 'Matrix Generation v2.1', start: 3, duration: 2, color: 'bg-[#38BDF8]', status: 'Completed' },
            { phase: 'Executive Sign-off Period', start: 5, duration: 2, color: 'bg-orange-500', status: 'Active' },
            { phase: 'Protocol Enforcement', start: 7, duration: 6, color: 'bg-[#00B67A]/40 border border-[#00B67A]/50', status: 'Pending' }
        ]
    },
    {
        id: 'DEP-104',
        title: 'Driver UI Realignment',
        assignee: 'David M.',
        type: 'Human',
        dimension: 'Customer Exp.',
        blocks: [
            { phase: 'Wireframing & A/B Testing', start: 6, duration: 3, color: 'bg-[#7B61FF]/40 border border-[#7B61FF]/50', status: 'Pending' },
            { phase: 'Field Deployment', start: 9, duration: 4, color: 'bg-[#7B61FF]/40 border border-[#7B61FF]/50', status: 'Pending' }
        ]
    }
]

export default function TimelinePage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col min-h-0 h-[calc(100vh-64px)]">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#7B61FF] mb-2 flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5" /> Execution Roadmap
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">
                            Operator Timeline
                        </h1>
                        <p className="text-white/50 text-sm">Unified scheduling for Human Operators and AI Compute</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex gap-3">
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white/70 transition-colors flex items-center gap-2">
                            <Filter className="w-4 h-4" /> Filter Dimension
                        </button>
                        <div className="flex bg-white/5 border border-white/10 rounded-lg p-1">
                            <button className="px-3 py-1 rounded bg-white/10 text-white text-xs font-medium shadow-sm">Q3</button>
                            <button className="px-3 py-1 rounded text-white/40 hover:text-white transition-colors text-xs">Q4</button>
                        </div>
                    </motion.div>
                </header>

                {/* Gantt Timeline */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 glass-card rounded-2xl border border-white/10 flex flex-col overflow-hidden relative"
                >
                    {/* Time Header Row */}
                    <div className="flex border-b border-white/10 bg-white/[0.02] shrink-0">
                        {/* Info Column Header */}
                        <div className="w-[300px] shrink-0 p-4 border-r border-white/10 flex items-center">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/50">Deployment Vector</span>
                        </div>
                        {/* Weeks Header */}
                        <div className="flex-1 flex min-w-[800px]">
                            {weeks.map((week, i) => (
                                <div key={week} className="flex-1 border-r border-white/5 last:border-r-0 p-4 text-center relative">
                                    <span className="text-xs font-mono text-white/50">{week}</span>
                                    {/* Active Week Highlight Indicator */}
                                    {i === 3 && (
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-orange-500/30 z-0 h-[1000px] pointer-events-none">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-[9px] font-bold px-1 py-0.5 rounded-b">NOW</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Rows */}
                    <div className="flex-1 overflow-y-auto overflow-x-auto relative z-10 custom-scrollbar">
                        <div className="min-w-[1100px]">
                            {deployments.map((dep, i) => (
                                <div key={dep.id} className="flex border-b border-white/5 last:border-b-0 hover:bg-white/[0.01] transition-colors group">
                                    
                                    {/* Info Column */}
                                    <div className="w-[300px] shrink-0 p-4 border-r border-white/10">
                                        <div className="flex items-center gap-2 mb-1">
                                            {dep.type === 'Human' ? <User className="w-3.5 h-3.5 text-[#7B61FF]" /> : <BrainCircuit className="w-3.5 h-3.5 text-[#38BDF8]" />}
                                            <span className="text-xs font-mono uppercase tracking-widest text-white/40">{dep.type} • {dep.dimension}</span>
                                        </div>
                                        <h3 className="text-sm font-medium text-white mb-1 line-clamp-1 group-hover:text-white transition-colors">{dep.title}</h3>
                                        <div className="text-xs text-white/50">{dep.assignee}</div>
                                    </div>

                                    {/* Gantt Area */}
                                    <div className="flex-1 relative flex">
                                        {/* Grid Lines */}
                                        <div className="absolute inset-0 flex pointer-events-none">
                                            {weeks.map((w, index) => (
                                                <div key={index} className="flex-1 border-r border-white/5 last:border-r-0" />
                                            ))}
                                        </div>

                                        {/* Blocks */}
                                        <div className="relative w-full h-full py-4 flex items-center">
                                            {dep.blocks.map((block, idx) => {
                                                const leftPercent = ((block.start - 1) / 12) * 100;
                                                const widthPercent = (block.duration / 12) * 100;
                                                
                                                return (
                                                    <div 
                                                        key={idx}
                                                        className={`absolute h-8 rounded-md flex items-center px-3 overflow-hidden cursor-pointer hover:brightness-110 transition-all ${block.color}`}
                                                        style={{ left: `${leftPercent}%`, width: `${widthPercent}%`, top: '50%', transform: 'translateY(-50%)' }}
                                                    >
                                                        {block.status === 'Completed' && <div className="absolute inset-0 bg-black/20" />}
                                                        {block.status === 'Active' && <div className="absolute inset-0 bg-white/10 animate-pulse" />}
                                                        
                                                        <span className="relative z-10 text-[10px] font-medium text-white whitespace-nowrap truncate drop-shadow-md">
                                                            {block.phase}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Legend Footer */}
                    <div className="border-t border-white/10 bg-[#050505] p-4 flex items-center justify-between shrink-0">
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2 text-xs text-white/60">
                                <div className="w-3 h-3 rounded bg-[#7B61FF]" /> Human Operator
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/60">
                                <div className="w-3 h-3 rounded bg-[#38BDF8]" /> AI System Compute
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/60">
                                <div className="w-3 h-3 rounded border border-white/30" /> Pending Phase
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40">
                            <Clock className="w-3.5 h-3.5" /> Timeline updates automatically based on Diagnostic inputs
                        </div>
                    </div>

                </motion.div>

            </div>
        </PortalLayout>
    )
}

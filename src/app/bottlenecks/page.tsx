'use client'

import React, { useState } from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { AlertTriangle, Activity, TrendingDown, Target, Wrench, ArrowRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Mock Data
const bottlenecks = [
    {
        id: 'BTN-042',
        title: 'Siloed Procurement Data',
        dimension: 'Behaviour',
        severity: 'Critical',
        leakage: '₦1.2M / week',
        status: 'Mitigation Active',
        desc: 'Procurement teams are hoarding supplier lead-time data, preventing the last-mile algorithm from dynamically adjusting routes based on inventory delays.',
        mitigation: {
            action: 'Deploying Embedded Behavioural Lead to realign KPIs and establish data-sharing SLAs between departments.',
            operator: 'Sarah J.',
            timeToResolution: '14 Days',
            clientAction: 'Approve updated departmental KPIs.'
        }
    },
    {
        id: 'BTN-041',
        title: 'Over-Engineered Approval Matrix',
        dimension: 'Governance',
        severity: 'Critical',
        leakage: '₦800K / week',
        status: 'Identified',
        desc: 'Route adjustment approvals require 4 signatures across 3 management layers, causing an average 48-hour delay in execution.',
        mitigation: {
            action: 'Drafting Governance Blueprint v2.1 to automate level-1 and level-2 approvals based on financial thresholds.',
            operator: 'Blueprint Generator',
            timeToResolution: '7 Days',
            clientAction: 'Review and sign Governance Blueprint v2.1.'
        }
    },
    {
        id: 'BTN-038',
        title: 'Legacy API Rate Limits',
        dimension: 'Technology',
        severity: 'High',
        leakage: '₦400K / week',
        status: 'Analyzing',
        desc: 'The legacy ERP system throttles data requests to 100/min, causing the AI routing engine to operate on stale batch data.',
        mitigation: {
            action: 'Simulation Lab testing a middleware caching layer to abstract ERP constraints.',
            operator: 'System Allocation',
            timeToResolution: '21 Days',
            clientAction: 'Provide IT staging environment access.'
        }
    },
    {
        id: 'BTN-035',
        title: 'Driver Training Deficit',
        dimension: 'Customer Exp.',
        severity: 'Moderate',
        leakage: '₦150K / week',
        status: 'Resolved',
        desc: 'Drivers failing to utilize the new electronic proof-of-delivery, leading to manual data entry errors at HQ.',
        mitigation: {
            action: 'Conducted localized operator training workshops and deployed simplified UI.',
            operator: 'Training Team',
            timeToResolution: 'Resolved',
            clientAction: 'None'
        }
    }
]

const severityColors: Record<string, string> = {
    'Critical': 'text-red-400 bg-red-500/10 border-red-500/20',
    'High': 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    'Moderate': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
}

const statusColors: Record<string, string> = {
    'Identified': 'text-white/60 bg-white/5 border-white/10',
    'Analyzing': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    'Mitigation Active': 'text-[#00B67A] bg-[#00B67A]/10 border-[#00B67A]/20',
    'Resolved': 'text-[#7B61FF] bg-[#7B61FF]/10 border-[#7B61FF]/20',
}

export default function BottleneckTrackerPage() {
    const [selectedBottleneck, setSelectedBottleneck] = useState<string | null>(null)

    const activeList = bottlenecks.filter(b => b.status !== 'Resolved')
    
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col h-full">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-3.5 h-3.5" /> Diagnostics Protocol
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">
                            Bottleneck Tracker
                        </h1>
                        <p className="text-white/50 text-sm">Systemic friction identification and mitigation active tracking</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <button className="px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-sm transition-colors flex items-center gap-2 font-medium">
                            <Activity className="w-4 h-4" /> Generate Diagnostic Report
                        </button>
                    </motion.div>
                </header>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 shrink-0">
                    
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Active Bottlenecks</span>
                            <AlertTriangle className="w-4 h-4 text-orange-400" />
                        </div>
                        <div className="mt-auto">
                            <div className="text-4xl font-light text-white mb-1">
                                {activeList.length}
                            </div>
                            <div className="text-[10px] text-white/40 border-t border-white/10 pt-3">
                                2 Critical, 1 High
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">System Friction Score</span>
                            <Activity className="w-4 h-4 text-red-400" />
                        </div>
                        <div className="mt-auto">
                            <div className="text-4xl font-light text-red-400 mb-1 flex items-baseline gap-2">
                                High <span className="text-lg text-red-400/50">Degradation</span>
                            </div>
                            <div className="text-[10px] text-white/40 border-t border-white/10 pt-3">
                                Affecting 3 of 9 ESRE Dimensions
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-red-500/10 to-transparent opacity-50" />
                        <div className="relative z-10 flex items-center justify-between mb-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Estimated Leakage</span>
                            <TrendingDown className="w-4 h-4 text-red-400" />
                        </div>
                        <div className="relative z-10 mt-auto">
                            <div className="text-4xl font-light text-red-400 mb-1">
                                ₦2.4<span className="text-lg text-red-400/50">M</span>
                            </div>
                            <div className="text-[10px] text-white/40 border-t border-white/10 pt-3">
                                Weekly Operational Waste
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Content: Registry & Intelligence Panel */}
                <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
                    
                    {/* Left Col: Bottleneck Registry List */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex-1 glass-card rounded-2xl flex flex-col overflow-hidden"
                    >
                        <div className="p-6 border-b border-white/10 shrink-0">
                            <h3 className="text-sm font-medium text-white">Bottleneck Registry</h3>
                            <p className="text-xs text-white/40 mt-1">Select an item to view mitigation intelligence.</p>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {bottlenecks.map((btn) => (
                                <div 
                                    key={btn.id}
                                    onClick={() => setSelectedBottleneck(btn.id)}
                                    className={`p-4 rounded-xl border transition-all cursor-pointer ${selectedBottleneck === btn.id ? 'bg-white/10 border-white/20 shadow-lg' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'}`}
                                >
                                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span className="text-xs font-mono text-white/30">{btn.id}</span>
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest border ${severityColors[btn.severity]}`}>
                                                    {btn.severity}
                                                </span>
                                                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest border border-[#7B61FF]/30 bg-[#7B61FF]/10 text-[#7B61FF]">
                                                    {btn.dimension}
                                                </span>
                                            </div>
                                            <h4 className="text-base font-medium text-white mb-1">{btn.title}</h4>
                                            <p className="text-xs text-white/50 leading-relaxed max-w-xl line-clamp-2">{btn.desc}</p>
                                        </div>
                                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-2 shrink-0">
                                            <div className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest border ${statusColors[btn.status]}`}>
                                                {btn.status}
                                            </div>
                                            <div className="text-xs font-bold text-red-400">Leakage: {btn.leakage}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Col: Mitigation Intelligence Side Panel */}
                    <AnimatePresence mode="wait">
                        {selectedBottleneck ? (
                            <motion.div 
                                key={selectedBottleneck}
                                initial={{ opacity: 0, x: 20, width: 0 }} 
                                animate={{ opacity: 1, x: 0, width: '100%', maxWidth: '400px' }} 
                                exit={{ opacity: 0, x: 20, width: 0 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card rounded-2xl flex flex-col shrink-0 relative overflow-hidden"
                            >
                                {(() => {
                                    const btn = bottlenecks.find(b => b.id === selectedBottleneck)!
                                    return (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#7B61FF]/5 to-transparent pointer-events-none" />
                                            <div className="p-6 border-b border-white/10 shrink-0 flex justify-between items-center relative z-10">
                                                <h3 className="text-sm font-medium text-white flex items-center gap-2">
                                                    <Wrench className="w-4 h-4 text-[#7B61FF]" /> Mitigation Intelligence
                                                </h3>
                                                <button onClick={() => setSelectedBottleneck(null)} className="text-white/40 hover:text-white transition-colors">
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                            
                                            <div className="p-6 flex-1 overflow-y-auto relative z-10 space-y-6">
                                                <div>
                                                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Target Constraint</div>
                                                    <div className="text-sm text-white font-medium">{btn.title}</div>
                                                    <p className="text-xs text-white/60 mt-2 leading-relaxed">{btn.desc}</p>
                                                </div>

                                                <div className="h-px bg-white/10" />

                                                <div>
                                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#7B61FF] mb-3">Active Intervention</div>
                                                    <div className="p-4 bg-[#7B61FF]/10 border border-[#7B61FF]/20 rounded-xl">
                                                        <p className="text-sm text-white/90 leading-relaxed mb-4">
                                                            {btn.mitigation.action}
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <div className="text-[10px] text-white/40 mb-1">Assigned Operator</div>
                                                                <div className="text-xs text-white font-medium">{btn.mitigation.operator}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] text-white/40 mb-1">Est. Resolution</div>
                                                                <div className="text-xs text-[#00B67A] font-medium">{btn.mitigation.timeToResolution}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {btn.mitigation.clientAction !== 'None' && (
                                                    <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                                                        <div className="flex items-center gap-2 text-orange-400 mb-2">
                                                            <Target className="w-4 h-4" />
                                                            <div className="text-xs font-bold uppercase tracking-widest">Client Action Required</div>
                                                        </div>
                                                        <div className="text-sm text-white/80">{btn.mitigation.clientAction}</div>
                                                        <button className="mt-3 text-xs bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 px-3 py-1.5 rounded transition-colors w-full flex items-center justify-center gap-2">
                                                            Resolve Action <ArrowRight className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )
                                })()}
                            </motion.div>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="hidden lg:flex w-[400px] shrink-0 items-center justify-center border border-white/5 border-dashed rounded-2xl bg-white/[0.01]"
                            >
                                <div className="text-center">
                                    <Wrench className="w-8 h-8 text-white/10 mx-auto mb-3" />
                                    <div className="text-sm text-white/30">Select a bottleneck to view mitigation data</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </PortalLayout>
    )
}

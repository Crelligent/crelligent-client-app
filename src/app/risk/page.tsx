'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { ShieldAlert, AlertCircle, ArrowUpRight, ShieldCheck, Download } from 'lucide-react'
import { motion } from 'framer-motion'

// Mock Data
const risks = [
    {
        id: 'RSK-092',
        title: 'Supplier API Deprecation',
        dimension: 'Technology',
        impact: 'High',
        likelihood: 'High',
        owner: 'Crelligent Tech Lead',
        status: 'Mitigating',
        desc: 'Primary external logistics supplier is deprecating their v1 API in 45 days, threatening data flow to the routing engine.'
    },
    {
        id: 'RSK-091',
        title: 'Q3 Budget Overrun in R&D',
        dimension: 'Governance',
        impact: 'High',
        likelihood: 'Medium',
        owner: 'Finance Director',
        status: 'Monitoring',
        desc: 'Current burn rate in the exploratory simulation lab is trending 15% over allocated Q3 budget.'
    },
    {
        id: 'RSK-088',
        title: 'Driver Union Negotiation Delay',
        dimension: 'Behaviour',
        impact: 'Critical',
        likelihood: 'Medium',
        owner: 'HR Director',
        status: 'Escalated',
        desc: 'Contract negotiations stalled, potential strike action within 60 days if KPIs are not realigned.'
    },
    {
        id: 'RSK-085',
        title: 'Competitor Route Cloning',
        dimension: 'Market',
        impact: 'Medium',
        likelihood: 'Low',
        owner: 'Strategy Lead',
        status: 'Monitoring',
        desc: 'Competitor XYZ attempting to reverse-engineer our new dynamic routing topology.'
    },
    {
        id: 'RSK-082',
        title: 'Server Latency Spikes',
        dimension: 'Technology',
        impact: 'Medium',
        likelihood: 'High',
        owner: 'DevOps',
        status: 'Mitigating',
        desc: 'Peak hour loads causing 200ms latency spikes in the driver app.'
    }
]

// Helpers for the 3x3 Matrix
const getMatrixRisks = (impact: string, likelihood: string) => {
    return risks.filter(r => r.impact === impact && r.likelihood === likelihood)
}

const impactLevels = ['Critical', 'High', 'Medium', 'Low']
const likelihoodLevels = ['High', 'Medium', 'Low']

const matrixCellColor = (impact: string, likelihood: string) => {
    if (impact === 'Critical') return 'bg-red-500/20 border-red-500/30'
    if (impact === 'High' && likelihood === 'High') return 'bg-red-500/20 border-red-500/30'
    if (impact === 'High' && likelihood === 'Medium') return 'bg-orange-500/20 border-orange-500/30'
    if (impact === 'Medium' && likelihood === 'High') return 'bg-orange-500/20 border-orange-500/30'
    if (impact === 'Low' && likelihood === 'Low') return 'bg-[#00B67A]/10 border-[#00B67A]/20'
    return 'bg-yellow-500/10 border-yellow-500/20'
}

export default function RiskRegisterPage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col min-h-0">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-2 flex items-center gap-2">
                            <ShieldAlert className="w-3.5 h-3.5" /> Vulnerability Mapping
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">
                            Risk Register
                        </h1>
                        <p className="text-white/50 text-sm">Enterprise threat matrix and active mitigation ledger</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex gap-3">
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors flex items-center gap-2 text-white/70">
                            <Download className="w-4 h-4" /> Export Report
                        </button>
                        <button className="px-4 py-2 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg text-sm transition-colors flex items-center gap-2 font-medium">
                            <AlertCircle className="w-4 h-4" /> Log New Risk
                        </button>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left: 3x3 Risk Matrix */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-1 glass-card rounded-2xl p-6 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-sm font-medium text-white">Heat Matrix</h3>
                            <span className="text-[10px] font-mono text-white/40 uppercase">Impact vs Likelihood</span>
                        </div>

                        <div className="flex-1 flex items-center justify-center relative">
                            {/* Y-Axis Label */}
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono uppercase tracking-widest text-white/40 w-32 text-center origin-center">
                                Likelihood
                            </div>
                            {/* X-Axis Label */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                                Impact Severity
                            </div>

                            <div className="grid grid-cols-3 gap-2 w-full max-w-[300px] aspect-square ml-4 mb-4">
                                {likelihoodLevels.map((like) => (
                                    impactLevels.slice(0, 3).map((imp) => { // Skip 'Low' impact for standard 3x3 matrix aesthetic
                                        const cellRisks = getMatrixRisks(imp, like)
                                        return (
                                            <div 
                                                key={`${imp}-${like}`} 
                                                className={`rounded-lg border flex items-center justify-center relative group transition-colors ${matrixCellColor(imp, like)} hover:brightness-125 cursor-pointer`}
                                            >
                                                {cellRisks.length > 0 ? (
                                                    <span className="text-xl font-bold text-white shadow-sm drop-shadow-md">{cellRisks.length}</span>
                                                ) : (
                                                    <span className="text-white/10">-</span>
                                                )}
                                                
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-[150px] bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center">
                                                    {imp} Impact, {like} Likelihood
                                                </div>
                                            </div>
                                        )
                                    })
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Risk Ledger */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-2 glass-card rounded-2xl flex flex-col overflow-hidden"
                    >
                        <div className="p-6 border-b border-white/10 flex justify-between items-center shrink-0">
                            <h3 className="text-sm font-medium text-white">Detailed Ledger</h3>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">5 Active Threats</div>
                        </div>

                        <div className="overflow-x-auto flex-1 p-0">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/[0.02]">
                                        <th className="py-4 pl-6 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Risk Profile</th>
                                        <th className="py-4 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Vector</th>
                                        <th className="py-4 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Owner</th>
                                        <th className="py-4 pr-6 text-xs font-mono uppercase tracking-widest text-white/40 font-normal text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {risks.map((risk) => (
                                        <tr key={risk.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors group cursor-pointer">
                                            <td className="py-4 pl-6">
                                                <div className="flex items-start gap-3">
                                                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${risk.impact === 'Critical' ? 'bg-red-500' : risk.impact === 'High' ? 'bg-orange-500' : 'bg-yellow-500'}`} />
                                                    <div>
                                                        <div className="text-white/90 font-medium mb-1">{risk.title}</div>
                                                        <div className="text-xs text-white/40 line-clamp-1 max-w-sm">{risk.desc}</div>
                                                        <div className="text-[10px] font-mono text-white/30 mt-2">{risk.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 align-top pt-5">
                                                <span className="px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest border border-white/10 bg-white/5 text-white/60">
                                                    {risk.dimension}
                                                </span>
                                            </td>
                                            <td className="py-4 align-top pt-5 text-white/70 text-xs">
                                                {risk.owner}
                                            </td>
                                            <td className="py-4 pr-6 align-top pt-5 text-right">
                                                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest border ${
                                                    risk.status === 'Mitigating' ? 'text-[#00B67A] bg-[#00B67A]/10 border-[#00B67A]/20' : 
                                                    risk.status === 'Escalated' ? 'text-red-400 bg-red-500/10 border-red-500/20' : 
                                                    'text-blue-400 bg-blue-500/10 border-blue-500/20'
                                                }`}>
                                                    {risk.status === 'Mitigating' && <ShieldCheck className="w-3 h-3" />}
                                                    {risk.status === 'Escalated' && <AlertCircle className="w-3 h-3" />}
                                                    {risk.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>

            </div>
        </PortalLayout>
    )
}

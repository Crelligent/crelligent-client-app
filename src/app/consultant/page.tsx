'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Briefcase, Building, ChevronRight, LayoutDashboard } from 'lucide-react'

// Mock Data
const clients = [
    { id: 1, name: 'Apex Logistics', industry: 'Supply Chain', osScore: 84, activePhase: 'L2 Implementation', mrr: '$15,000' },
    { id: 2, name: 'Zenith Health', industry: 'Healthcare', osScore: 62, activePhase: 'L1 Diagnostic', mrr: '$22,500' },
    { id: 3, name: 'Quantum Energy', industry: 'Energy', osScore: 91, activePhase: 'Continuous Monitoring', mrr: '$18,000' },
]

export default function ConsultantPortalPage() {
    return (
        <PortalLayout>
            <div className="min-h-full w-full bg-[#050505] text-white flex flex-col relative">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-lime)]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

                <div className="p-8 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md shrink-0 relative z-10">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Briefcase className="w-4 h-4 text-[var(--color-lime)]" />
                                <span className="text-xs font-mono tracking-widest text-white/50 uppercase">CRELLIGENT INTERNAL</span>
                            </div>
                            <h1 className="text-3xl font-display font-medium text-white tracking-tight">Consultant Portal</h1>
                            <p className="text-sm text-white/50 mt-1 font-light">Manage ESRE OS installations and client portfolios.</p>
                        </div>
                        <div className="flex gap-4 items-center bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-sm">
                            <div className="text-right">
                                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Total MRR</div>
                                <div className="text-xl font-medium text-[var(--color-lime)]">$55,500</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-8 max-w-6xl mx-auto w-full relative z-10">
                    <div className="grid gap-4">
                        {clients.map(client => (
                            <div key={client.id} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl flex items-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
                                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:scale-105 group-hover:border-[var(--color-lime)]/50 transition-all">
                                    <Building className="w-6 h-6 text-white/70 group-hover:text-[var(--color-lime)] transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-display font-medium text-white/90 group-hover:text-white">{client.name}</h3>
                                    <p className="text-xs text-white/40 font-mono tracking-wider uppercase mt-1">{client.industry}</p>
                                </div>
                                <div className="flex-1 text-center hidden md:block">
                                    <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-1.5">Active Phase</div>
                                    <div className="text-sm font-medium text-white/80 bg-white/5 py-1.5 px-4 rounded-full border border-white/10 inline-block">{client.activePhase}</div>
                                </div>
                                <div className="flex-1 flex flex-col items-center border-l border-white/10 px-6">
                                    <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-1.5">OS Score</div>
                                    <div className={`text-2xl font-display font-medium ${client.osScore > 80 ? 'text-[var(--color-lime)]' : 'text-[var(--color-amber)]'}`}>
                                        {client.osScore}
                                    </div>
                                </div>
                                <div className="shrink-0 pl-6">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-lime)]/20 transition-colors">
                                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-[var(--color-lime)] transition-colors" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PortalLayout>
    )
}

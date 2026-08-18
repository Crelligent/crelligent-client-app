'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Shield, Save } from 'lucide-react'

export default function L5GovernancePage() {
    return (
        <PortalLayout>
            <div className="min-h-full w-full bg-[#050505] text-white flex flex-col relative">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-amber)]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

                <div className="p-8 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md shrink-0 relative z-10">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Shield className="w-4 h-4 text-[var(--color-amber)]" />
                                <span className="text-xs font-mono tracking-widest text-white/50 uppercase">LAYER 5</span>
                            </div>
                            <h1 className="text-3xl font-display font-medium text-white tracking-tight">Governance & Risk</h1>
                            <p className="text-sm text-white/50 mt-1 font-light">Define your compliance frameworks, authority matrices, and risk controls.</p>
                        </div>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                            <Save className="w-4 h-4" /> Save Configuration
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-8 max-w-6xl mx-auto w-full relative z-10">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-16 text-center shadow-2xl">
                        <div className="w-20 h-20 bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(186,117,23,0.3)]">
                            <Shield className="w-10 h-10 text-[var(--color-amber)]" />
                        </div>
                        <h2 className="text-2xl font-display font-medium mb-3 text-white/90">Authority Matrix Builder</h2>
                        <p className="text-white/50 max-w-md mx-auto mb-8 font-light leading-relaxed">
                            Link decision rights from L2 to formal governance structures.
                        </p>
                        <button className="px-8 py-3 bg-[var(--color-amber)]/20 border border-[var(--color-amber)]/50 text-[var(--color-amber)] rounded-lg hover:bg-[var(--color-amber)] hover:text-white font-medium transition-all">
                            + Add Governance Policy
                        </button>
                    </div>
                </div>
            </div>
        </PortalLayout>
    )
}

'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Zap, Save } from 'lucide-react'

export default function L3TechnologyPage() {
    return (
        <PortalLayout>
            <div className="min-h-full w-full bg-[#050505] text-white flex flex-col relative">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-purple)]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

                <div className="p-8 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md shrink-0 relative z-10">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-4 h-4 text-[var(--color-purple)]" />
                                <span className="text-xs font-mono tracking-widest text-white/50 uppercase">LAYER 3</span>
                            </div>
                            <h1 className="text-3xl font-display font-medium text-white tracking-tight">Technology Platform</h1>
                            <p className="text-sm text-white/50 mt-1 font-light">Map your software systems, integrations, and automation footprint.</p>
                        </div>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                            <Save className="w-4 h-4" /> Save Configuration
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-8 max-w-6xl mx-auto w-full relative z-10">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-16 text-center shadow-2xl">
                        <div className="w-20 h-20 bg-[var(--color-purple)]/10 border border-[var(--color-purple)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(83,74,183,0.3)]">
                            <Zap className="w-10 h-10 text-[var(--color-purple)]" />
                        </div>
                        <h2 className="text-2xl font-display font-medium mb-3 text-white/90">Systems Inventory Mapper</h2>
                        <p className="text-white/50 max-w-md mx-auto mb-8 font-light leading-relaxed">
                            The L3 integration scanner is currently in MVP mode. Please enter your primary software systems manually.
                        </p>
                        <button className="px-8 py-3 bg-[var(--color-purple)]/20 border border-[var(--color-purple)]/50 text-[var(--color-purple)] rounded-lg hover:bg-[var(--color-purple)] hover:text-white font-medium transition-all">
                            + Add Software System
                        </button>
                    </div>
                </div>
            </div>
        </PortalLayout>
    )
}

'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { GitMerge, Save } from 'lucide-react'
import { ProcessBuilder } from '@/components/l2/ProcessBuilder'

export default function L2OperatingModelPage() {
    return (
        <PortalLayout>
            <div className="min-h-full w-full bg-[#050505] text-white flex flex-col relative">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-red)]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

                <div className="p-8 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md shrink-0 relative z-10">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <GitMerge className="w-4 h-4 text-[var(--color-red)]" />
                                <span className="text-xs font-mono tracking-widest text-white/50 uppercase">LAYER 2</span>
                            </div>
                            <h1 className="text-3xl font-display font-medium text-white tracking-tight">Operating Model</h1>
                            <p className="text-sm text-white/50 mt-1 font-light">Map your core processes, departments, and execution flow.</p>
                        </div>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                            <Save className="w-4 h-4" /> Save Configuration
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-8 max-w-4xl mx-auto w-full relative z-10">
                    <div className="mb-8">
                        <h2 className="text-xl font-display font-medium mb-3 flex items-center gap-3 text-white/90">
                            <div className="w-2 h-2 rounded-full bg-[var(--color-red)] shadow-[0_0_10px_rgba(192,57,43,0.8)]" />
                            Process Library Builder
                        </h2>
                        <p className="text-sm text-white/50 mb-8 max-w-2xl font-light">
                            Define the discrete processes that make up your operating model. Drag and drop to reorder their execution flow.
                        </p>
                        
                        <ProcessBuilder />
                    </div>
                </div>
            </div>
        </PortalLayout>
    )
}

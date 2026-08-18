'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Target, Save } from 'lucide-react'

export default function L1BusinessDesignPage() {
    return (
        <PortalLayout>
            <div className="min-h-full w-full bg-[#050505] text-white flex flex-col relative">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-teal)]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

                <div className="p-8 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md shrink-0 relative z-10">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-4 h-4 text-[var(--color-teal)]" />
                                <span className="text-xs font-mono tracking-widest text-white/50 uppercase">LAYER 1</span>
                            </div>
                            <h1 className="text-3xl font-display font-medium text-white tracking-tight">Business Design</h1>
                            <p className="text-sm text-white/50 mt-1 font-light">Define your operating environment, value proposition, and structural advantages.</p>
                        </div>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                            <Save className="w-4 h-4" /> Save Configuration
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-8 max-w-6xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Value Proposition */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl">
                            <h3 className="text-lg font-display font-medium mb-6 flex items-center gap-3 text-white/90">
                                <div className="w-2 h-2 rounded-full bg-[var(--color-teal)] shadow-[0_0_10px_rgba(26,107,138,0.8)]" />
                                Value Proposition
                            </h3>
                            <textarea 
                                className="w-full h-32 p-4 text-sm bg-white/5 border border-white/10 rounded-xl resize-none focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] text-white placeholder:text-white/20 transition-all font-light"
                                placeholder="What core problem do you solve better than anyone else?"
                            />
                        </div>

                        {/* Target Market */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl">
                            <h3 className="text-lg font-display font-medium mb-6 flex items-center gap-3 text-white/90">
                                <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] shadow-[0_0_10px_rgba(0,201,133,0.8)]" />
                                Target Market
                            </h3>
                            <textarea 
                                className="w-full h-32 p-4 text-sm bg-white/5 border border-white/10 rounded-xl resize-none focus:outline-none focus:border-[var(--color-lime)] focus:ring-1 focus:ring-[var(--color-lime)] text-white placeholder:text-white/20 transition-all font-light"
                                placeholder="Who are your primary customers? Define your segments."
                            />
                        </div>

                        {/* Revenue Model */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl md:col-span-2">
                            <h3 className="text-lg font-display font-medium mb-6 flex items-center gap-3 text-white/90">
                                <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] shadow-[0_0_10px_rgba(186,117,23,0.8)]" />
                                Revenue Model & Streams
                            </h3>
                            <textarea 
                                className="w-full h-32 p-4 text-sm bg-white/5 border border-white/10 rounded-xl resize-none focus:outline-none focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] text-white placeholder:text-white/20 transition-all font-light"
                                placeholder="How does value translate into revenue?"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PortalLayout>
    )
}

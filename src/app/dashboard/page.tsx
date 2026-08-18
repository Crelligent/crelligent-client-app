'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { LayoutDashboard } from 'lucide-react'

export default function DashboardPage() {
    return (
        <PortalLayout>
            <div className="min-h-full w-full bg-[#050505] text-white flex flex-col relative">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-teal)]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

                <div className="p-8 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md shrink-0 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl font-display font-medium text-white tracking-tight flex items-center gap-3">
                            <LayoutDashboard className="w-8 h-8 text-[var(--color-teal)]" />
                            OS Dashboard
                        </h1>
                        <p className="text-sm text-white/50 mt-2 font-light">Live view into OS layer health and performance score.</p>
                    </div>
                </div>

                <div className="flex-1 p-8 max-w-6xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Score Card */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl flex flex-col items-center justify-center text-center col-span-1 lg:col-span-1 relative overflow-hidden group hover:border-white/20 transition-all">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-xs font-mono text-white/40 tracking-widest uppercase font-medium mb-8">OS Performance Score</h3>
                            <div className="relative w-48 h-48 flex items-center justify-center mb-8">
                                {/* Glow under ring */}
                                <div className="absolute inset-0 rounded-full bg-[var(--color-lime)]/20 blur-xl" />
                                <div className="absolute inset-0 rounded-full border border-white/10"></div>
                                <div className="absolute inset-0 rounded-full border-[6px] border-[var(--color-lime)] border-r-transparent border-b-transparent transform rotate-45 shadow-[0_0_15px_rgba(0,201,133,0.5)]"></div>
                                <div className="text-7xl font-display font-light text-white drop-shadow-lg">84</div>
                            </div>
                            <p className="text-sm text-[var(--color-lime)] font-medium bg-[var(--color-lime)]/10 px-4 py-1.5 rounded-full border border-[var(--color-lime)]/20">Healthy • +2 points this month</p>
                        </div>

                        {/* Layer Breakdown */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl col-span-1 lg:col-span-2 overflow-hidden flex flex-col">
                            <div className="p-6 border-b border-white/10 bg-white/[0.02]">
                                <h3 className="text-lg font-display font-medium text-white/90">Layer Performance Grid</h3>
                            </div>
                            <div className="divide-y divide-white/5 flex-1">
                                <div className="p-5 flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-teal)] shadow-[0_0_10px_rgba(26,107,138,0.8)]" />
                                        </div>
                                        <span className="font-medium text-[15px] text-white/80 group-hover:text-white transition-colors">L1 Business Design</span>
                                    </div>
                                    <span className="text-sm font-mono text-white/70">92 / 100</span>
                                </div>
                                <div className="p-5 flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--color-red)]/10 border border-[var(--color-red)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-red)] shadow-[0_0_10px_rgba(192,57,43,0.8)]" />
                                        </div>
                                        <span className="font-medium text-[15px] text-white/80 group-hover:text-white transition-colors">L2 Operating Model</span>
                                    </div>
                                    <span className="text-sm font-mono text-white/70">88 / 100</span>
                                </div>
                                <div className="p-5 flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--color-purple)]/10 border border-[var(--color-purple)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-purple)] shadow-[0_0_10px_rgba(83,74,183,0.8)]" />
                                        </div>
                                        <span className="font-medium text-[15px] text-white/80 group-hover:text-white transition-colors">L3 Technology</span>
                                    </div>
                                    <span className="text-sm font-mono text-white/70">75 / 100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PortalLayout>
    )
}

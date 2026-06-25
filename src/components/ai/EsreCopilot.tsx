'use client'

import React, { useState } from 'react'
import { Sparkles, X, Minimize2, Send, Paperclip, ChevronRight, Activity, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react'

export function EsreCopilot() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Floating Action Button */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 group w-14 h-14 bg-gradient-to-br from-[#7B61FF] to-[#38BDF8] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(123,97,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    <Sparkles className="w-6 h-6 text-white" />
                </button>
            )}

            {/* Sliding Chat Panel */}
            <div className={`fixed bottom-0 right-6 z-50 w-[400px] h-[600px] bg-[#050505] border border-white/10 rounded-t-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col transition-transform duration-300 transform origin-bottom ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
                
                {/* Header */}
                <div className="h-16 border-b border-white/10 px-5 flex items-center justify-between shrink-0 bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-[#7B61FF]/20 to-[#38BDF8]/20 border border-[#7B61FF]/30 flex items-center justify-center">
                            <Cpu className="w-4 h-4 text-[#38BDF8]" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-white flex items-center gap-2">
                                ESRE™ Co-Pilot 
                                <span className="px-1.5 py-0.5 bg-white/10 rounded text-[9px] font-mono uppercase tracking-widest text-[#38BDF8]">Online</span>
                            </div>
                            <div className="text-xs text-white/40">Strategic Advisory AI</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-white/50 hover:text-white">
                            <Minimize2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Chat Body */}
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                    {/* Welcome Message */}
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4 text-[#7B61FF]" />
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm text-white/90">
                                Good morning. I've analyzed Apex Logistics' latest telemetry.
                            </div>
                            <div className="text-sm text-white/90">
                                Your <span className="text-[#00B67A] font-medium">ESRE Score (+13 pts)</span> is trending up, but the <strong>Behavioural Constraint</strong> in the last-mile team is currently delaying the Route Optimization Go-Live by an estimated 14 days.
                            </div>
                            <div className="text-sm text-white/90">
                                How would you like to proceed?
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="pl-11 space-y-2">
                        <button className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group flex items-center justify-between">
                            <div>
                                <div className="text-xs font-medium text-white mb-1">Model Financial Impact</div>
                                <div className="text-[10px] text-white/40">Calculate cost of 14-day delay vs operator intervention.</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#7B61FF]" />
                        </button>
                        <button className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group flex items-center justify-between">
                            <div>
                                <div className="text-xs font-medium text-white mb-1">Deploy Change Manager</div>
                                <div className="text-[10px] text-white/40">Use 8,000 CRD to embed an ESRE Behavioural lead.</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#7B61FF]" />
                        </button>
                    </div>

                    {/* User Reply */}
                    <div className="flex gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#38BDF8] shrink-0" />
                        <div className="bg-[#7B61FF]/10 border border-[#7B61FF]/20 rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                            <div className="text-sm text-white/90">
                                Calculate the cost of the delay.
                            </div>
                        </div>
                    </div>

                    {/* AI Reply with Data Card */}
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4 text-[#7B61FF]" />
                        </div>
                        <div className="space-y-3 w-full">
                            <div className="text-sm text-white/90">
                                Running the financial model based on your current fuel consumption rate and SLA penalty risk...
                            </div>
                            
                            <div className="p-4 bg-[#141518] border border-white/10 rounded-xl">
                                <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                                    <span className="text-xs font-mono uppercase tracking-widest text-white/50">Impact Analysis</span>
                                    <Activity className="w-4 h-4 text-[#FFB020]" />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-white/60">Estimated Fuel Waste (14d)</span>
                                        <span className="text-sm font-mono text-white">₦4,200,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-white/60">SLA Penalty Risk</span>
                                        <span className="text-sm font-mono text-white">₦1,500,000</span>
                                    </div>
                                    <div className="flex justify-between pt-3 border-t border-white/10">
                                        <span className="text-sm font-medium text-white">Total Cost of Delay</span>
                                        <span className="text-sm font-mono font-medium text-[#FF6B35]">₦5,700,000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm text-white/90">
                                Deploying a Change Manager costs <strong>8,000 CRD (₦8,000,000)</strong> but ensures the ₦180M annualized savings target is hit. Shall I draft the Statement of Work?
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10 shrink-0 bg-[#050505]">
                    <div className="relative flex items-end gap-2 bg-white/5 border border-white/10 rounded-xl p-2 focus-within:border-[#7B61FF]/50 focus-within:bg-white/10 transition-all">
                        <button className="p-2 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/10 shrink-0">
                            <Paperclip className="w-4 h-4" />
                        </button>
                        <textarea 
                            placeholder="Ask ESRE Co-Pilot..." 
                            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white resize-none max-h-32 min-h-[40px] py-2 placeholder:text-white/30"
                            rows={1}
                        />
                        <button className="p-2 bg-gradient-to-r from-[#7B61FF] to-[#38BDF8] text-white rounded-lg hover:opacity-90 transition-opacity shrink-0">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="mt-2 text-center">
                        <span className="text-[10px] text-white/30">ESRE Co-Pilot can make mistakes. Verify strategic recommendations.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

'use client'

import React from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Wallet, Plus, CreditCard, Activity, ArrowUpRight, ShieldCheck, MapPin, Server, BarChart2, Search, Bell, AlertTriangle, TrendingUp, CheckSquare, Target, FileText } from 'lucide-react'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip
} from 'recharts'

export default function ClientPortalPage() {
    // 9 ESRE Capabilities
    const radarData = [
        { subject: 'Business Design', A: 85, fullMark: 100 },
        { subject: 'Operating Model', A: 65, fullMark: 100 },
        { subject: 'Data Intelligence', A: 90, fullMark: 100 },
        { subject: 'Technology', A: 70, fullMark: 100 },
        { subject: 'Governance', A: 60, fullMark: 100 },
        { subject: 'Behaviour', A: 45, fullMark: 100 },
        { subject: 'Strategy', A: 80, fullMark: 100 },
        { subject: 'Economics', A: 75, fullMark: 100 },
        { subject: 'Customer Exp.', A: 85, fullMark: 100 },
    ]

    const benchmarkData = [
        { month: 'Jan', you: 45, sector: 55 },
        { month: 'Feb', you: 52, sector: 56 },
        { month: 'Mar', you: 68, sector: 58 },
        { month: 'Apr', you: 78, sector: 59 },
    ]

    const scoreTrendData = [
        { q: 'Q3', score: 65 },
        { q: 'Q4', score: 68 },
        { q: 'Q1', score: 72 },
        { q: 'Q2', score: 78 },
    ]

    return (
        <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto relative">
                
                {/* Alert Banner */}
                <div className="bg-orange-500/10 border-b border-orange-500/20 px-6 py-2 flex items-center justify-center gap-3">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-orange-200">SLA Warning: External ERP integration latency exceeded 200ms at 04:00 AM. Crelligent engineers are investigating.</span>
                </div>

                <div className="p-6 lg:p-8 max-w-7xl mx-auto">
                    
                    {/* Header & Command Palette */}
                    <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-[#7B61FF] mb-2">Executive Command Center</div>
                            <h1 className="text-3xl font-light tracking-tight text-white mb-1 flex items-center gap-4">
                                Apex Logistics 
                                <span className="px-2 py-0.5 bg-[#00B67A]/10 border border-[#00B67A]/20 rounded text-[#00B67A] text-[10px] font-mono uppercase tracking-widest flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B67A] animate-pulse"/> Online
                                </span>
                            </h1>
                            <p className="text-white/50 text-sm">ESRE™ Diagnostic & Implementation Portal</p>
                        </div>

                        <div className="flex flex-col items-end gap-4">
                            {/* Command Search Bar */}
                            <div className="relative group">
                                <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 group-hover:text-white/70 transition-colors" />
                                <input 
                                    type="text" 
                                    placeholder="Search reports, metrics, alerts..." 
                                    className="w-64 bg-white/5 border border-white/10 rounded-lg pl-9 pr-12 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#7B61FF]/50 transition-all focus:bg-white/10"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                                    <kbd className="px-1.5 py-0.5 bg-black/50 border border-white/10 rounded text-[10px] text-white/50 font-mono">⌘</kbd>
                                    <kbd className="px-1.5 py-0.5 bg-black/50 border border-white/10 rounded text-[10px] text-white/50 font-mono">K</kbd>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-white/10 transition-colors flex items-center gap-2">
                                    <FileText className="w-4 h-4" /> Export Snapshot
                                </button>
                                <button className="px-4 py-2 bg-gradient-to-r from-[#7B61FF] to-[#38BDF8] hover:opacity-90 rounded-lg text-sm transition-opacity shadow-[0_0_20px_rgba(123,97,255,0.3)] flex items-center gap-2">
                                    <Target className="w-4 h-4" /> Schedule Strategic Review
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Top Row: Wallet, Health Score, Financial Impact */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        
                        {/* Service Credit Wallet */}
                        <div className="glass-card rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/10 to-transparent opacity-50" />
                            <div className="relative z-10 flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Wallet className="w-4 h-4 text-[#7B61FF]" />
                                    <span className="text-xs font-mono uppercase tracking-widest text-white/70">Service Wallet</span>
                                </div>
                                <button className="text-[10px] font-medium text-white bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors border border-white/10">
                                    Top Up
                                </button>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <div className="text-4xl font-light text-white mb-1">42,500 <span className="text-lg text-white/30">CRD</span></div>
                                <div className="text-lg text-white/80 font-mono mb-4">₦42,500,000</div>
                                <div className="text-[10px] text-white/40 flex items-center justify-between border-t border-white/10 pt-3">
                                    <span>Rate: 1 CRD = ₦1,000</span>
                                    <span className="text-[#FF6B35]">Burn: -2,500/mo</span>
                                </div>
                            </div>
                        </div>

                        {/* Overall Health Score */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono uppercase tracking-widest text-white/70">ESRE™ Score</span>
                                <ShieldCheck className="w-4 h-4 text-[#00B67A]" />
                            </div>
                            <div className="flex items-end justify-between mt-auto">
                                <div>
                                    <div className="text-5xl font-light text-white mb-1">78<span className="text-xl text-white/30">/100</span></div>
                                    <div className="text-xs text-[#00B67A] flex items-center gap-1">
                                        <ArrowUpRight className="w-3 h-3" /> +13 pts since Q1
                                    </div>
                                </div>
                                <div className="w-24 h-12">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={scoreTrendData}>
                                            <Line type="monotone" dataKey="score" stroke="#00B67A" strokeWidth={2} dot={false} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        {/* Financial Impact */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-[#00B67A]/10 to-transparent opacity-50" />
                            <div className="relative z-10 flex items-center justify-between mb-4">
                                <span className="text-xs font-mono uppercase tracking-widest text-white/70">Projected Value</span>
                                <TrendingUp className="w-4 h-4 text-[#00B67A]" />
                            </div>
                            <div className="relative z-10 mt-auto">
                                <div className="text-xs text-white/50 mb-1">Annual Operational Savings</div>
                                <div className="text-4xl font-light text-[#00B67A] mb-4">₦180M</div>
                                <div className="text-[10px] text-white/40 border-t border-white/10 pt-3">
                                    Modeled from Route Optimization Phase 1
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Middle Row 1: Diagnosis & Bottlenecks */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        {/* Radar Chart */}
                        <div className="glass-card rounded-2xl p-6 h-[400px] flex flex-col lg:col-span-2">
                            <h3 className="text-sm font-medium text-white mb-2">Diagnostic Capabilities Map</h3>
                            <p className="text-xs text-white/40 mb-4">9-Dimensional ESRE Capability Assessment</p>
                            <div className="flex-1 -mx-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                                        <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                        <Radar name="Apex Logistics" dataKey="A" stroke="#7B61FF" fill="#7B61FF" fillOpacity={0.3} />
                                        <RechartsTooltip 
                                            contentStyle={{ backgroundColor: '#141518', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                            itemStyle={{ color: '#fff', fontSize: '12px' }}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Critical Bottlenecks */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col">
                            <h3 className="text-sm font-medium text-white mb-6">Top Identified Bottlenecks</h3>
                            <div className="space-y-4 flex-1">
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/50" />
                                    <div className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2">Behavioural Constraint</div>
                                    <p className="text-sm text-white/80 leading-relaxed">Siloed data hoarding between procurement and last-mile teams prevents algorithmic routing.</p>
                                </div>
                                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500/50" />
                                    <div className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-2">Governance Failure</div>
                                    <p className="text-sm text-white/80 leading-relaxed">Over-engineered approval matrices delaying route adjustments by 48 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Row 2: Execution & Actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        
                        {/* Implementation Tracker */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[#38BDF8]" />
                                    <h3 className="text-sm font-medium text-white">Implementation Arm</h3>
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8]">Phase: Build</span>
                            </div>
                            
                            <div className="flex-1 flex flex-col justify-center space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/10">
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#00B67A]/20 border border-[#00B67A] flex items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-[#00B67A]" />
                                    </div>
                                    <h4 className="text-sm font-medium text-white mb-1">Diagnostic & Blueprint</h4>
                                    <p className="text-xs text-white/50">Completed & Approved.</p>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8] flex items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                                    </div>
                                    <h4 className="text-sm font-medium text-white mb-1">Routing Algorithm Build</h4>
                                    <p className="text-xs text-[#38BDF8] mb-2 font-mono">Current Focus • Wk 4 of 12</p>
                                    <div className="bg-white/5 border border-white/10 rounded p-2 flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#ec4899] flex-shrink-0" />
                                        <span className="text-[10px] text-white/80">Sarah J. (Embedded)</span>
                                    </div>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white/5 border border-white/20 flex items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-white/20" />
                                    </div>
                                    <h4 className="text-sm font-medium text-white/40 mb-1">Go-Live Handover</h4>
                                    <p className="text-xs text-[#FFB020] font-medium">September 15, 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Client Action Required */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#7B61FF]/5 to-transparent opacity-50" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2">
                                        <CheckSquare className="w-4 h-4 text-[#7B61FF]" />
                                        <h3 className="text-sm font-medium text-white">Client Action Required</h3>
                                    </div>
                                    <span className="text-[10px] font-mono text-white/40">3 Pending</span>
                                </div>
                                <div className="space-y-3">
                                    <label className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                        <input type="checkbox" className="mt-0.5 rounded border-white/20 bg-transparent text-[#7B61FF] focus:ring-[#7B61FF]" />
                                        <div>
                                            <div className="text-sm text-white font-medium mb-1">Approve Governance Matrix v2.1</div>
                                            <div className="text-xs text-white/40">Requires CEO sign-off before implementation proceeds.</div>
                                        </div>
                                    </label>
                                    <label className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                        <input type="checkbox" className="mt-0.5 rounded border-white/20 bg-transparent text-[#7B61FF] focus:ring-[#7B61FF]" />
                                        <div>
                                            <div className="text-sm text-white font-medium mb-1">Nominate Data Steward</div>
                                            <div className="text-xs text-white/40">Assign lead for System Integration telemetry feeds.</div>
                                        </div>
                                    </label>
                                    <label className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                        <input type="checkbox" className="mt-0.5 rounded border-white/20 bg-transparent text-[#7B61FF] focus:ring-[#7B61FF]" />
                                        <div>
                                            <div className="text-sm text-white font-medium mb-1">Confirm Go-Live Date</div>
                                            <div className="text-xs text-white/40">Acknowledge Sep 15 delivery target.</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Engineered Blueprints */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col">
                            <h3 className="text-sm font-medium text-white mb-6">System Blueprints</h3>
                            <div className="space-y-3 flex-1">
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl group hover:bg-white/10 cursor-pointer transition-colors">
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">Target Operating Model</div>
                                        <div className="text-xs text-white/50">v2.1 • Pending Review</div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-[#7B61FF] opacity-50 group-hover:opacity-100" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl group hover:bg-white/10 cursor-pointer transition-colors">
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">Data Architecture Topology</div>
                                        <div className="text-xs text-white/50">Technical Spec • System Integration</div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-[#7B61FF] opacity-50 group-hover:opacity-100" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl group hover:bg-white/10 cursor-pointer transition-colors">
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">Governance Matrix</div>
                                        <div className="text-xs text-white/50">Automated Approval Flows</div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-[#7B61FF] opacity-50 group-hover:opacity-100" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Row: Market Benchmarks & Telemetry */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="glass-card rounded-2xl p-6 h-[350px] flex flex-col lg:col-span-2">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <BarChart2 className="w-5 h-5 text-[#FFB020]" />
                                    <h3 className="text-sm font-medium text-white">Sector Benchmarking</h3>
                                </div>
                                <button className="text-xs text-[#7B61FF] hover:underline">Buy Deep-Dive Report (2,500 CRD)</button>
                            </div>
                            <div className="flex-1">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={benchmarkData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                        <XAxis dataKey="month" stroke="rgba(255,255,255,0.2)" fontSize={11} tickLine={false} axisLine={false} />
                                        <YAxis stroke="rgba(255,255,255,0.2)" fontSize={11} tickLine={false} axisLine={false} domain={[0, 100]} />
                                        <RechartsTooltip 
                                            contentStyle={{ backgroundColor: '#141518', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                            itemStyle={{ color: '#fff', fontSize: '12px' }}
                                        />
                                        <Line type="monotone" name="Your Score" dataKey="you" stroke="#7B61FF" strokeWidth={3} dot={{ r: 4, fill: '#7B61FF' }} />
                                        <Line type="monotone" name="Sector Avg" dataKey="sector" stroke="rgba(255,255,255,0.2)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <Server className="w-5 h-5 text-[#ec4899]" />
                                    <h3 className="text-sm font-medium text-white">Managed Telemetry</h3>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <div>
                                            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">System Uptime (30d)</div>
                                            <div className="text-3xl font-light text-white">99.99%</div>
                                        </div>
                                        <div className="text-xs text-[#00B67A] flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Nominal</div>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Active Data Feeds</div>
                                            <div className="text-3xl font-light text-white">4 <span className="text-sm text-white/30">Streams</span></div>
                                        </div>
                                        <button className="text-xs text-[#38BDF8] hover:underline transition-colors">Manage API Keys »</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

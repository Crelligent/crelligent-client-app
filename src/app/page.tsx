'use client'

import React from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Wallet, Plus, CreditCard, Activity, ArrowUpRight, ShieldCheck, Clock, MapPin, Server, BarChart2 } from 'lucide-react'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ReferenceLine
} from 'recharts'

export default function ClientPortalPage() {
    const radarData = [
        { subject: 'Business Design', A: 85, fullMark: 100 },
        { subject: 'Operating Model', A: 65, fullMark: 100 },
        { subject: 'Data Intelligence', A: 90, fullMark: 100 },
        { subject: 'Technology', A: 70, fullMark: 100 },
        { subject: 'Governance', A: 60, fullMark: 100 },
        { subject: 'Behaviour', A: 45, fullMark: 100 },
    ]

    const benchmarkData = [
        { month: 'Jan', you: 45, sector: 55 },
        { month: 'Feb', you: 52, sector: 56 },
        { month: 'Mar', you: 68, sector: 58 },
        { month: 'Apr', you: 78, sector: 59 },
    ]

    return (
        <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-6 lg:p-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-[#7B61FF] mb-2">Executive Command Center</div>
                            <h1 className="text-3xl font-light tracking-tight text-white mb-1">Apex Logistics</h1>
                            <p className="text-white/50 text-sm">ESRE™ Diagnostic & Implementation Portal</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-white/10 transition-colors">
                                Download Full Report
                            </button>
                            <button className="px-4 py-2 bg-gradient-to-r from-[#7B61FF] to-[#38BDF8] hover:opacity-90 rounded-lg text-sm transition-opacity shadow-[0_0_20px_rgba(123,97,255,0.3)]">
                                Request Consultation
                            </button>
                        </div>
                    </header>

                    {/* Top Row: Wallet & Quick Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        {/* Service Credit Wallet */}
                        <div className="glass-card rounded-2xl p-6 lg:col-span-2 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/10 to-transparent opacity-50" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <Wallet className="w-5 h-5 text-[#7B61FF]" />
                                        <span className="text-sm font-medium text-white">Service Credit Wallet</span>
                                    </div>
                                    <button className="flex items-center gap-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors border border-white/10">
                                        <Plus className="w-3 h-3" /> Top Up Credits
                                    </button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-xs text-white/50 font-mono uppercase tracking-widest mb-2">Available Balance</div>
                                        <div className="text-5xl font-light text-white mb-2">42,500 <span className="text-lg text-white/30">CRD</span></div>
                                        <div className="text-xs text-[#00B67A] flex items-center gap-1">
                                            Current burn rate: 2,500 CRD / month (Data Feeds)
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className="text-xs text-white/50 font-mono uppercase tracking-widest mb-3">Recent Transactions</div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                                <div className="flex items-center gap-2">
                                                    <Activity className="w-3 h-3 text-[#FF6B35]" />
                                                    <span className="text-white/80 text-xs">Deep-Dive Competitor Analysis</span>
                                                </div>
                                                <span className="text-white/50 font-mono">-1,500</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                                <div className="flex items-center gap-2">
                                                    <Activity className="w-3 h-3 text-[#FF6B35]" />
                                                    <span className="text-white/80 text-xs">Operator Extension (Wk 4)</span>
                                                </div>
                                                <span className="text-white/50 font-mono">-8,000</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <div className="flex items-center gap-2">
                                                    <CreditCard className="w-3 h-3 text-[#00B67A]" />
                                                    <span className="text-white/80 text-xs">Retainer Top-Up (Q2)</span>
                                                </div>
                                                <span className="text-[#00B67A] font-mono">+50,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Overall Health Score */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono uppercase tracking-widest text-white/50">ESRE™ Health Score</span>
                                <ShieldCheck className="w-5 h-5 text-[#00B67A]" />
                            </div>
                            <div className="text-center py-4">
                                <div className="text-6xl font-light text-white mb-2">78<span className="text-2xl text-white/30">/100</span></div>
                                <div className="inline-block px-3 py-1 bg-[#00B67A]/10 text-[#00B67A] rounded-full text-xs font-medium border border-[#00B67A]/20">
                                    Top Quartile
                                </div>
                            </div>
                            <div className="text-xs text-white/40 text-center">
                                Next automated reassessment in 14 days.
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Diagnosis & Bottlenecks */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        {/* Radar Chart */}
                        <div className="glass-card rounded-2xl p-6 h-[350px] flex flex-col lg:col-span-2">
                            <h3 className="text-sm font-medium text-white mb-4">Diagnostic Capabilities Map</h3>
                            <div className="flex-1 -mx-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
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
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                    <div className="text-xs font-medium text-red-400 mb-1">Behavioural Constraint</div>
                                    <p className="text-sm text-white/80">Siloed data hoarding between procurement and last-mile teams prevents algorithmic routing.</p>
                                </div>
                                <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                                    <div className="text-xs font-medium text-orange-400 mb-1">Governance Failure</div>
                                    <p className="text-sm text-white/80">Over-engineered approval matrices delaying route adjustments by 48 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Blueprints & Implementation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {/* Engineered Blueprints */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col">
                            <h3 className="text-sm font-medium text-white mb-6">Engineered System Blueprints</h3>
                            <div className="space-y-3 flex-1">
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl group hover:bg-white/10 cursor-pointer transition-colors">
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">Target Operating Model</div>
                                        <div className="text-xs text-white/50">v2.1 • Approved by Board</div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-[#7B61FF] opacity-50 group-hover:opacity-100" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl group hover:bg-white/10 cursor-pointer transition-colors">
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">Data Architecture Topology</div>
                                        <div className="text-xs text-white/50">Technical Spec • PRISM Integration</div>
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

                        {/* Implementation Tracker */}
                        <div className="glass-card rounded-2xl p-6 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-[#38BDF8]" />
                                    <h3 className="text-sm font-medium text-white">Active Implementation Arm</h3>
                                </div>
                                <span className="text-xs bg-[#38BDF8]/10 text-[#38BDF8] px-2 py-1 rounded border border-[#38BDF8]/20">Phase: Build</span>
                            </div>
                            
                            <div className="flex-1 flex flex-col justify-center space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/10">
                                
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#00B67A]/20 border border-[#00B67A] flex items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-[#00B67A]" />
                                    </div>
                                    <h4 className="text-sm font-medium text-white mb-1">Diagnostic & Handover</h4>
                                    <p className="text-xs text-white/50">Completed. Blueprint generated and approved by Board.</p>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8] flex items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                                    </div>
                                    <h4 className="text-sm font-medium text-white mb-1">Route Optimization Algorithm Build</h4>
                                    <p className="text-xs text-[#38BDF8] mb-2 font-mono">Current Focus • Wk 4 of 12</p>
                                    <div className="bg-white/5 border border-white/10 rounded p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#ec4899] flex-shrink-0" />
                                            <span className="text-xs text-white/80">Sarah J. (Embedded Lead)</span>
                                        </div>
                                        <p className="text-[10px] text-white/40">Integrating last-mile GPS telemetry with core algorithm. Testing environment stabilized.</p>
                                    </div>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white/5 border border-white/20 flex items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-white/20" />
                                    </div>
                                    <h4 className="text-sm font-medium text-white/40 mb-1">Go-Live & Operator Handover</h4>
                                    <p className="text-xs text-white/30">Scheduled for Q3.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Market Benchmarks & Telemetry */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="glass-card rounded-2xl p-6 h-[300px] flex flex-col">
                            <div className="flex justify-between items-center mb-4">
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
                                <div className="flex items-center gap-3 mb-6">
                                    <Server className="w-5 h-5 text-[#ec4899]" />
                                    <h3 className="text-sm font-medium text-white">Managed Services Telemetry</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <div>
                                            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">System Uptime (30d)</div>
                                            <div className="text-2xl font-light text-white">99.99%</div>
                                        </div>
                                        <div className="text-xs text-[#00B67A] flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> All Systems Nominal</div>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <div>
                                            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">Active Data Feeds</div>
                                            <div className="text-2xl font-light text-white">4 <span className="text-sm text-white/30">Streams</span></div>
                                        </div>
                                        <div className="text-xs text-[#38BDF8] hover:underline cursor-pointer">Manage API Keys »</div>
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

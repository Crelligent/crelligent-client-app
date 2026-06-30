'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { motion } from 'framer-motion'
import { 
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts'
import { Target, TrendingUp, AlertTriangle, ShieldAlert } from 'lucide-react'

const radarData = [
    { capability: 'Governance', Apex: 68, Industry: 85 },
    { capability: 'Strategy', Apex: 85, Industry: 70 },
    { capability: 'Capital', Apex: 62, Industry: 80 },
    { capability: 'People', Apex: 55, Industry: 75 },
    { capability: 'Process', Apex: 82, Industry: 65 },
    { capability: 'Technology', Apex: 45, Industry: 88 },
    { capability: 'Brand', Apex: 90, Industry: 72 },
    { capability: 'Sales', Apex: 85, Industry: 78 },
    { capability: 'Product', Apex: 70, Industry: 80 },
];

const barData = [
    { metric: 'Delivery Latency (hrs)', Apex: 4.2, Industry: 5.8 },
    { metric: 'Fuel Burn (₦K/unit)', Apex: 8.5, Industry: 7.2 },
    { metric: 'Operator Churn (%)', Apex: 18, Industry: 24 },
    { metric: 'Asset Downtime (%)', Apex: 4.5, Industry: 2.1 },
];

export default function BenchmarksPage() {
    return (
        <PortalLayout>
            <div className="p-8 lg:p-12 max-w-7xl mx-auto flex flex-col min-h-0 overflow-y-auto">
                <header className="mb-12 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4" /> Competitive Intelligence // Layer 7
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">Market Benchmarks</h1>
                        <p className="text-white/50 text-lg max-w-2xl">
                            Real-time ESRE scoring plotted against the anonymized performance data of 40+ leading African logistics enterprises.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 shrink-0">
                    
                    {/* The Radar Chart */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#0A0A10]/60 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden backdrop-blur-xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B61FF]/10 blur-[80px] pointer-events-none rounded-full" />
                        
                        <h3 className="text-xl font-light text-white mb-2">ESRE Capability Signature</h3>
                        <p className="text-white/40 text-sm mb-8">Systemic mapping across the 9 core capabilities.</p>
                        
                        <div className="w-full h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                    <PolarAngleAxis dataKey="capability" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11, fontFamily: 'monospace' }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fff', fontSize: '13px' }}
                                    />
                                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '20px', color: 'rgba(255,255,255,0.5)' }} />
                                    <Radar name="Apex Logistics" dataKey="Apex" stroke="#38BDF8" fill="#38BDF8" fillOpacity={0.3} strokeWidth={2} />
                                    <Radar name="Industry Top Quartile" dataKey="Industry" stroke="#7B61FF" fill="#7B61FF" fillOpacity={0.1} strokeDasharray="4 4" />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Gap Analysis & Bar Chart */}
                    <div className="flex flex-col gap-8">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#0A0A10]/60 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden backdrop-blur-xl flex-1"
                        >
                            <h3 className="text-xl font-light text-white mb-2">Operational Variance</h3>
                            <p className="text-white/40 text-sm mb-6">Direct comparison of critical unit economics.</p>
                            
                            <div className="w-full h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={true} vertical={false} />
                                        <XAxis type="number" stroke="rgba(255,255,255,0.2)" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} />
                                        <YAxis dataKey="metric" type="category" stroke="rgba(255,255,255,0.2)" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }} />
                                        <Tooltip 
                                            cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                                            contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                        />
                                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                                        <Bar dataKey="Apex" fill="#38BDF8" radius={[0, 4, 4, 0]} barSize={12} />
                                        <Bar dataKey="Industry" fill="#7B61FF" fillOpacity={0.5} radius={[0, 4, 4, 0]} barSize={12} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>

                        {/* Critical Insight Alert */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-red-500/5 border border-red-500/20 rounded-[2rem] p-6 flex items-start gap-4"
                        >
                            <div className="p-3 bg-red-500/10 rounded-full shrink-0">
                                <ShieldAlert className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <h4 className="text-red-400 font-medium mb-1">Critical Value Leakage Detected</h4>
                                <p className="text-red-200/60 text-sm leading-relaxed">
                                    Your Technology capability scores 43 points below the sector average. This constraint is directly causing your <strong className="text-white font-medium">Asset Downtime</strong> to be 2.4% higher than competitors, costing an estimated ₦14.2M per quarter.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </PortalLayout>
    )
}

'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Network, Database, CheckCircle2, AlertTriangle, RefreshCw, Plus, Server, HardDrive, Wifi, Activity } from 'lucide-react'
import { motion } from 'framer-motion'

const integrations = [
    { 
        id: 'SAP-ERP-01', 
        name: 'SAP S/4HANA', 
        type: 'ERP', 
        status: 'Healthy', 
        lastSync: '2 mins ago', 
        volume: '14.2 MB/hr',
        latency: '42ms',
        icon: Database
    },
    { 
        id: 'WD-HR-02', 
        name: 'Workday HCM', 
        type: 'HRIS', 
        status: 'Healthy', 
        lastSync: '15 mins ago', 
        volume: '2.1 MB/hr',
        latency: '85ms',
        icon: Server
    },
    { 
        id: 'SF-CRM-03', 
        name: 'Salesforce', 
        type: 'CRM', 
        status: 'Degraded', 
        lastSync: '4 hrs ago', 
        volume: '0.4 MB/hr',
        latency: '850ms',
        icon: HardDrive
    },
    { 
        id: 'EDGE-FLEET-99', 
        name: 'Crelligent Edge Nodes (x45)', 
        type: 'IoT Telemetry', 
        status: 'Healthy', 
        lastSync: 'Live Stream', 
        volume: '212.8 MB/hr',
        latency: '12ms',
        icon: Wifi
    }
]

export default function IntegrationsPage() {
    return (
        <PortalLayout>
            <div className="p-8 lg:p-12 max-w-7xl mx-auto flex flex-col min-h-0 h-[calc(100vh-64px)] overflow-y-auto">
                <header className="mb-12 shrink-0 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-3 flex items-center gap-2">
                            <Network className="w-4 h-4" /> Layer 2 Ingestion
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">System Integrations</h1>
                        <p className="text-white/50 text-lg max-w-2xl">
                            Manage the API connections and Edge hardware feeding raw operational data into the ESRE Intelligence Engine.
                        </p>
                    </motion.div>
                    
                    <motion.button 
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                        <Plus className="w-4 h-4" /> Connect New System
                    </motion.button>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    
                    {/* Active Connections List */}
                    <div className="xl:col-span-2 space-y-4">
                        <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-6">Active Data Streams</h3>
                        
                        {integrations.map((int, i) => (
                            <motion.div 
                                key={int.id}
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-[#0A0A10]/60 border border-white/5 hover:border-white/10 transition-colors rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                        <int.icon className="w-5 h-5 text-white/70" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="text-lg font-medium text-white">{int.name}</h4>
                                            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10">
                                                {int.type}
                                            </span>
                                        </div>
                                        <div className="text-sm text-white/40 font-mono">ID: {int.id}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8 md:gap-12">
                                    <div className="hidden md:block">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">Ingestion Volume</div>
                                        <div className="text-sm text-white/70">{int.volume}</div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">Avg Latency</div>
                                        <div className="text-sm text-white/70">{int.latency}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">Status</div>
                                        <div className={`flex items-center gap-1.5 text-sm font-medium ${int.status === 'Healthy' ? 'text-[#00B67A]' : 'text-orange-400'}`}>
                                            {int.status === 'Healthy' ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                                            {int.status}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Network Health Panel */}
                    <div className="space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gradient-to-b from-[#7B61FF]/10 to-transparent border border-[#7B61FF]/20 rounded-2xl p-6"
                        >
                            <h3 className="text-sm font-mono uppercase tracking-widest text-[#7B61FF] mb-6 flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Global Network Health
                            </h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-white/60">Overall Uptime (30d)</span>
                                        <span className="text-white font-medium">99.98%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#00B67A] w-[99.98%]" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-white/60">API Quota Usage</span>
                                        <span className="text-white font-medium">42%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#38BDF8] w-[42%]" />
                                    </div>
                                </div>
                            </div>
                            
                            <button className="w-full mt-8 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-colors">
                                <RefreshCw className="w-4 h-4" /> Force Global Sync
                            </button>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-[#050505] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[40px] pointer-events-none rounded-full" />
                            <h4 className="text-orange-400 font-medium mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> Degraded Connection
                            </h4>
                            <p className="text-sm text-white/50 leading-relaxed mb-4">
                                Salesforce CRM (SF-CRM-03) is experiencing a 850ms latency spike due to rate limiting on the client side. ESRE is caching outbound analytics until resolved.
                            </p>
                            <button className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors">
                                View Logs →
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </PortalLayout>
    )
}

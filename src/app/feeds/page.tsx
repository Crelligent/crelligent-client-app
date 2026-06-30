'use client'

import React, { useEffect, useState } from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Terminal, Activity } from 'lucide-react'
import { motion } from 'framer-motion'

const initialLogs = [
    "[SYS] Initializing data stream...",
    "[ERP] Connection established on port 8080.",
    "[WMS] Received batch payload (2.4MB) - Parsed.",
    "[DRV] 4 active nodes connected.",
    "[ENG] Recalibrating route topology matrix."
]

export default function DataFeedsPage() {
    const [logs, setLogs] = useState<string[]>(initialLogs)

    useEffect(() => {
        const interval = setInterval(() => {
            const possibleLogs = [
                "[API] Ping successful. Latency 42ms.",
                "[SYS] Background garbage collection triggered.",
                "[DRV] Node 7 disconnected. Re-routing...",
                "[ERP] Sync delta applied successfully.",
                "[ENG] Simulation compute cycle complete."
            ]
            const newLog = possibleLogs[Math.floor(Math.random() * possibleLogs.length)]
            setLogs(prev => [...prev, newLog].slice(-15)) // Keep last 15
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-5xl mx-auto flex flex-col min-h-0 h-[calc(100vh-64px)]">
                <header className="mb-8 shrink-0 flex justify-between items-end">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#7B61FF] mb-2 flex items-center gap-2">
                            <Terminal className="w-3.5 h-3.5" /> Engine Telemetry
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">Data Feeds</h1>
                        <p className="text-white/50 text-sm">Raw inbound system streams and API logs</p>
                    </motion.div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00B67A]/10 border border-[#00B67A]/20 text-[#00B67A] text-[10px] font-mono uppercase tracking-widest">
                        <Activity className="w-3 h-3 animate-pulse" /> Live
                    </div>
                </header>

                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 bg-[#020202] border border-white/10 rounded-2xl p-6 overflow-hidden font-mono text-xs flex flex-col"
                >
                    <div className="flex items-center gap-2 text-white/30 mb-6 pb-4 border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        <span className="ml-2 uppercase tracking-widest">engine_console_tty1</span>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-2 text-[#38BDF8] opacity-80 custom-scrollbar flex flex-col justify-end">
                        {logs.map((log, i) => (
                            <div key={i} className="animate-fade-in">
                                <span className="text-white/20 mr-4">{new Date().toISOString().split('T')[1].slice(0,-1)}</span>
                                {log}
                            </div>
                        ))}
                        <div className="animate-pulse">_</div>
                    </div>
                </motion.div>
            </div>
        </PortalLayout>
    )
}

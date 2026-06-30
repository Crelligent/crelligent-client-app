'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Bell, AlertTriangle, Info, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const notifications = [
    { id: 1, type: 'critical', title: 'Bottleneck Escalation: Driver Union', time: '10 mins ago', desc: 'RSK-088 has moved from High to Critical due to stalled negotiations.' },
    { id: 2, type: 'info', title: 'Blueprint Generated', time: '2 hours ago', desc: 'Governance Matrix v2.1 is now available for executive sign-off.' },
    { id: 3, type: 'success', title: 'Simulation Complete', time: '5 hours ago', desc: 'Fleet expansion simulation calculated successfully. Projected ROI +12%.' },
    { id: 4, type: 'warning', title: 'Budget Threshold Warning', time: '1 day ago', desc: 'Q3 R&D spend has exceeded 80% of allocation.' },
]

export default function NotificationsPage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-4xl mx-auto flex flex-col min-h-0">
                <header className="mb-8 shrink-0 flex justify-between items-end">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-2 flex items-center gap-2">
                            <Bell className="w-3.5 h-3.5" /> System Inbox
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">Notifications</h1>
                        <p className="text-white/50 text-sm">Automated alerts and engine status updates</p>
                    </motion.div>
                    <button className="text-xs text-white/50 hover:text-white transition-colors">Mark all as read</button>
                </header>

                <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                    {notifications.map((n, i) => (
                        <motion.div 
                            key={n.id}
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card rounded-xl p-4 flex gap-4 hover:bg-white/[0.03] transition-colors cursor-pointer"
                        >
                            <div className="mt-0.5">
                                {n.type === 'critical' && <AlertTriangle className="w-5 h-5 text-red-400" />}
                                {n.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-400" />}
                                {n.type === 'info' && <Info className="w-5 h-5 text-[#38BDF8]" />}
                                {n.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#00B67A]" />}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-sm font-medium text-white/90">{n.title}</h4>
                                    <span className="text-[10px] text-white/40">{n.time}</span>
                                </div>
                                <p className="text-xs text-white/60">{n.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PortalLayout>
    )
}

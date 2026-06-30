'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Flag, CheckCircle2, CircleDashed, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const milestones = [
    { id: 'M1', title: 'Initial ESRE Diagnostic', status: 'Completed', date: 'June 1, 2026', desc: 'Comprehensive 9-dimensional sweep of enterprise capabilities.' },
    { id: 'M2', title: 'Data Architecture Topology Mapping', status: 'Completed', date: 'June 15, 2026', desc: 'Blueprint generation for event-driven middleware.' },
    { id: 'M3', title: 'Operator Deployment (Alpha Phase)', status: 'Active', date: 'June 30, 2026', desc: 'Embedding 3 behavioural leads and launching the simulation engine.' },
    { id: 'M4', title: 'Mid-Quarter Performance Review', status: 'Pending', date: 'July 15, 2026', desc: 'Evaluating delta improvements across targeted friction points.' },
    { id: 'M5', title: 'Executive Handover', status: 'Pending', date: 'August 30, 2026', desc: 'Full transition of optimized protocols back to internal management.' },
]

export default function MilestonesPage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-4xl mx-auto flex flex-col min-h-0">
                <header className="mb-8 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#00B67A] mb-2 flex items-center gap-2">
                            <Flag className="w-3.5 h-3.5" /> Project Trajectory
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">Milestone Tracker</h1>
                        <p className="text-white/50 text-sm">Strategic objectives and completion statuses</p>
                    </motion.div>
                </header>

                <div className="flex-1 overflow-y-auto pr-2">
                    <div className="space-y-4">
                        {milestones.map((m, idx) => (
                            <motion.div 
                                key={m.id}
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`glass-card rounded-2xl p-6 flex items-start gap-4 ${m.status === 'Active' ? 'border-[#00B67A]/30 bg-[#00B67A]/5' : ''}`}
                            >
                                <div className={`mt-1 shrink-0 ${m.status === 'Completed' ? 'text-white/30' : m.status === 'Active' ? 'text-[#00B67A]' : 'text-white/20'}`}>
                                    {m.status === 'Completed' ? <CheckCircle2 className="w-6 h-6" /> : m.status === 'Active' ? <ArrowRight className="w-6 h-6 animate-pulse" /> : <CircleDashed className="w-6 h-6" />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className={`text-lg font-medium ${m.status === 'Pending' ? 'text-white/50' : 'text-white'}`}>{m.title}</h3>
                                        <span className="text-[10px] font-mono text-white/40">{m.date}</span>
                                    </div>
                                    <p className={`text-sm ${m.status === 'Pending' ? 'text-white/30' : 'text-white/60'}`}>{m.desc}</p>
                                    
                                    {m.status === 'Active' && (
                                        <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#00B67A] w-[65%] rounded-full" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PortalLayout>
    )
}

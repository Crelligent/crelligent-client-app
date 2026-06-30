'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { FileStack, Download, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const reports = [
    { title: 'Weekly AI Exec Summary', date: 'June 25, 2026', type: 'System Generated' },
    { title: 'Fleet Expansion Impact Analysis', date: 'June 20, 2026', type: 'Custom Report' },
    { title: 'Weekly AI Exec Summary', date: 'June 18, 2026', type: 'System Generated' },
    { title: 'Monthly Friction Delta Report', date: 'June 01, 2026', type: 'System Generated' },
]

export default function ReportsPage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-5xl mx-auto flex flex-col min-h-0">
                <header className="mb-8 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-2 flex items-center gap-2">
                            <FileStack className="w-3.5 h-3.5" /> Intelligence Logs
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">Reports Archive</h1>
                        <p className="text-white/50 text-sm">Automated and custom generated execution summaries</p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2">
                    {reports.map((report, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card rounded-2xl p-6 flex flex-col group hover:bg-white/[0.03] transition-colors cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 mb-4 group-hover:text-white transition-colors">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">{report.type}</div>
                            <h3 className="text-sm font-medium text-white mb-6 group-hover:text-[#7B61FF] transition-colors">{report.title}</h3>
                            <div className="mt-auto flex justify-between items-center border-t border-white/10 pt-4">
                                <span className="text-xs text-white/40">{report.date}</span>
                                <button className="text-white/40 hover:text-white transition-colors"><Download className="w-4 h-4" /></button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PortalLayout>
    )
}

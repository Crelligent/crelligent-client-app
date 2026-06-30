'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Package, Download, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

const deliverables = [
    { id: 'DEL-01', name: 'Q3 Embedded Ops Source Code', type: 'Codebase', date: '2026-06-20', status: 'Delivered' },
    { id: 'DEL-02', name: 'Fleet Telematics Hardware Kits', type: 'Hardware', date: '2026-06-25', status: 'Shipped' },
    { id: 'DEL-03', name: 'API Documentation (Dynamic Routing)', type: 'Document', date: '2026-07-01', status: 'In Progress' },
    { id: 'DEL-04', name: 'Driver App UI Assets', type: 'Design', date: '2026-07-10', status: 'Pending' },
]

export default function DeliverablesPage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-6xl mx-auto flex flex-col min-h-0">
                <header className="mb-8 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-2 flex items-center gap-2">
                            <Package className="w-3.5 h-3.5" /> Handover Ledger
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">Deliverables</h1>
                        <p className="text-white/50 text-sm">Physical and digital asset transfer tracking</p>
                    </motion.div>
                </header>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex-1 glass-card rounded-2xl overflow-hidden flex flex-col">
                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                    <th className="py-4 pl-6 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Deliverable</th>
                                    <th className="py-4 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Type</th>
                                    <th className="py-4 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Date</th>
                                    <th className="py-4 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Status</th>
                                    <th className="py-4 pr-6 text-right text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {deliverables.map((del) => (
                                    <tr key={del.id} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                                        <td className="py-4 pl-6 font-medium text-white/90">{del.name}</td>
                                        <td className="py-4 text-white/60">{del.type}</td>
                                        <td className="py-4 font-mono text-xs text-white/40">{del.date}</td>
                                        <td className="py-4">
                                            <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest border ${del.status === 'Delivered' || del.status === 'Shipped' ? 'bg-[#00B67A]/10 border-[#00B67A]/30 text-[#00B67A]' : 'bg-white/5 border-white/10 text-white/50'}`}>
                                                {del.status}
                                            </span>
                                        </td>
                                        <td className="py-4 pr-6 text-right flex justify-end gap-2">
                                            <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/60 transition-colors"><Eye className="w-4 h-4" /></button>
                                            <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/60 transition-colors"><Download className="w-4 h-4" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </PortalLayout>
    )
}

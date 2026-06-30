'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Key, Copy, Plus, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const keys = [
    { name: 'Production ERP Sync', prefix: 'crel_prod_8f92', created: 'June 10, 2026', lastUsed: '2 mins ago' },
    { name: 'WMS Webhook Staging', prefix: 'crel_stg_2x4b', created: 'June 01, 2026', lastUsed: '5 days ago' }
]

export default function ApiKeysPage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-5xl mx-auto flex flex-col min-h-0">
                <header className="mb-8 shrink-0 flex justify-between items-end">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#7B61FF] mb-2 flex items-center gap-2">
                            <Key className="w-3.5 h-3.5" /> Developer Settings
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">API Keys</h1>
                        <p className="text-white/50 text-sm">Manage integration tokens for the ESRE Intelligence Engine</p>
                    </motion.div>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-sm transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Create New Key
                    </button>
                </header>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="glass-card rounded-2xl overflow-hidden">
                    <div className="p-4 bg-orange-500/10 border-b border-orange-500/20 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        <div className="text-sm text-orange-200">
                            <strong>Security Notice:</strong> Never share your API keys or commit them to version control. If a key is compromised, revoke it immediately and generate a new one.
                        </div>
                    </div>
                    
                    <div className="p-0">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                    <th className="py-4 pl-6 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Key Name</th>
                                    <th className="py-4 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Token Prefix</th>
                                    <th className="py-4 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Created</th>
                                    <th className="py-4 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Last Used</th>
                                    <th className="py-4 pr-6 text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {keys.map((key, i) => (
                                    <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                                        <td className="py-4 pl-6 text-sm text-white/90 font-medium">{key.name}</td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-2">
                                                <code className="px-2 py-1 bg-black/50 border border-white/10 rounded text-xs text-[#38BDF8] font-mono blur-[2px] hover:blur-none transition-all">{key.prefix}******************</code>
                                                <button className="text-white/30 hover:text-white transition-colors"><Copy className="w-3.5 h-3.5" /></button>
                                            </div>
                                        </td>
                                        <td className="py-4 text-xs text-white/50">{key.created}</td>
                                        <td className="py-4 text-xs text-white/50">{key.lastUsed}</td>
                                        <td className="py-4 pr-6 text-right">
                                            <button className="text-xs text-red-400 hover:text-red-300 transition-colors">Revoke</button>
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

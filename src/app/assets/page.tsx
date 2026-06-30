'use client'

import React, { useState } from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { FileText, Lock, FileCode, Search, Filter, Download, PenTool, CheckCircle2, ShieldAlert } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Mock Data
const assets = [
    {
        id: 'AST-099',
        title: 'Governance Matrix v2.1',
        category: 'Governance Blueprint',
        dimension: 'Governance',
        date: '2026-06-25',
        status: 'Awaiting Sign-off',
        fileSize: '2.4 MB',
        desc: 'Automated L1/L2 approval structures designed to bypass procurement bottlenecks and reduce routing latency by 48hrs.',
        security: 'Level 4 (Executive)'
    },
    {
        id: 'AST-098',
        title: 'Dynamic Routing Topography',
        category: 'Data Topology',
        dimension: 'Technology',
        date: '2026-06-20',
        status: 'Deployed',
        fileSize: '14.1 MB',
        desc: 'Structural map for the event-driven middleware caching layer, bypassing legacy ERP API rate limits.',
        security: 'Level 3 (Managerial)'
    },
    {
        id: 'AST-095',
        title: 'Q3 Embedded Ops Protocol',
        category: 'Process Spec',
        dimension: 'Behaviour',
        date: '2026-06-15',
        status: 'Deployed',
        fileSize: '8.2 MB',
        desc: 'Standard Operating Procedures for embedded behavioural leads during the last-mile resistance mitigation phase.',
        security: 'Level 3 (Managerial)'
    },
    {
        id: 'AST-091',
        title: 'Simulation Lab Projection: Fleet Expansion',
        category: 'Financial Model',
        dimension: 'Strategy',
        date: '2026-06-10',
        status: 'Archived',
        fileSize: '1.1 MB',
        desc: 'Predictive financial modeling detailing the ₦15K/mo burn rate vs. +5% efficiency delta for acquiring 50 new vehicles.',
        security: 'Level 4 (Executive)'
    },
    {
        id: 'AST-088',
        title: 'Initial 9-Dim Diagnostic Report',
        category: 'Diagnostic',
        dimension: 'Enterprise',
        date: '2026-05-28',
        status: 'Acknowledged',
        fileSize: '45.0 MB',
        desc: 'The foundational ESRE capability sweep generating the initial 42/100 SAI score.',
        security: 'Level 5 (Board)'
    }
]

const categories = ['All Assets', 'Governance Blueprint', 'Data Topology', 'Process Spec', 'Financial Model', 'Diagnostic']

export default function AssetsPage() {
    const [activeTab, setActiveTab] = useState('All Assets')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredAssets = assets.filter(asset => 
        (activeTab === 'All Assets' || asset.category === activeTab) &&
        (asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || asset.id.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col min-h-0">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-2 flex items-center gap-2">
                            <Lock className="w-3.5 h-3.5" /> Secure Data Room
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">
                            Blueprints & Assets
                        </h1>
                        <p className="text-white/50 text-sm">Centralized repository for generated operational intelligence</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex gap-3">
                        <div className="relative">
                            <Search className="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input 
                                type="text" 
                                placeholder="Search vault..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#7B61FF]/50 transition-colors w-64"
                            />
                        </div>
                        <button className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/70 transition-colors">
                            <Filter className="w-4 h-4" />
                        </button>
                    </motion.div>
                </header>

                {/* Categories Tab Bar */}
                <div className="flex overflow-x-auto pb-4 mb-4 hide-scrollbar gap-2 shrink-0">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                                activeTab === cat 
                                    ? 'bg-white/10 text-white border border-white/20' 
                                    : 'bg-transparent text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Asset Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pb-8 pr-2">
                    <AnimatePresence>
                        {filteredAssets.map((asset, idx) => (
                            <motion.div 
                                key={asset.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="glass-card rounded-2xl p-6 flex flex-col group relative overflow-hidden"
                            >
                                {/* Vault Metallic Sheen */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] group-hover:text-white group-hover:border-white/20 transition-all">
                                        {asset.category.includes('Blueprint') || asset.category.includes('Topology') ? <FileCode className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                    </div>
                                    <div className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest border ${
                                        asset.status === 'Awaiting Sign-off' ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' :
                                        asset.status === 'Deployed' ? 'bg-[#00B67A]/10 border-[#00B67A]/30 text-[#00B67A]' :
                                        'bg-white/5 border-white/10 text-white/50'
                                    }`}>
                                        {asset.status}
                                    </div>
                                </div>

                                <div className="relative z-10 flex-1">
                                    <div className="text-[10px] font-mono text-white/30 mb-1">{asset.id} • {asset.category}</div>
                                    <h3 className="text-lg font-medium text-white mb-2 leading-tight group-hover:text-[#7B61FF] transition-colors">{asset.title}</h3>
                                    <p className="text-xs text-white/50 leading-relaxed mb-6 line-clamp-3">
                                        {asset.desc}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <div className="flex items-center justify-between text-[10px] text-white/40 mb-4 border-t border-white/10 pt-4">
                                        <span>{asset.date}</span>
                                        <span>{asset.fileSize}</span>
                                        <span className="flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> {asset.security.split(' ')[0]}</span>
                                    </div>

                                    <div className="flex gap-2">
                                        {asset.status === 'Awaiting Sign-off' ? (
                                            <button className="flex-1 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2">
                                                <PenTool className="w-3.5 h-3.5" /> Execute Sign-off
                                            </button>
                                        ) : (
                                            <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2">
                                                <Download className="w-3.5 h-3.5" /> Download Asset
                                            </button>
                                        )}
                                        <button className="px-3 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-colors flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-white/40" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    
                    {filteredAssets.length === 0 && (
                        <div className="col-span-full py-12 flex flex-col items-center justify-center text-center opacity-50">
                            <Lock className="w-12 h-12 text-white/20 mb-4" />
                            <div className="text-sm font-medium text-white mb-1">No Assets Found</div>
                            <div className="text-xs text-white/50">Adjust your filters or search query to locate secured documents.</div>
                        </div>
                    )}
                </div>

            </div>
        </PortalLayout>
    )
}

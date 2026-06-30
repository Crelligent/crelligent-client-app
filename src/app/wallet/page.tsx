'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Wallet, TrendingDown, Timer, ShieldCheck, ArrowUpRight, ArrowDownRight, MapPin, Download } from 'lucide-react'
import { motion } from 'framer-motion'

// Mock Data
const metrics = {
    balance: 42500,
    burnRate: 2500,
    runwayDays: 510, // 42500 / (2500/30)
    projectedValue: 180000000 // ₦180M
}

const activeDeployments = [
    {
        id: 1,
        title: 'Embedded Behavioural Lead',
        assignee: 'Sarah J.',
        focus: 'Last-Mile Routing Resistance',
        burn: 1200,
        status: 'Active',
        phase: 'Wk 4 of 12'
    },
    {
        id: 2,
        title: 'Simulation Lab Compute',
        assignee: 'System Allocation',
        focus: 'Logistics Algorithmic Testing',
        burn: 800,
        status: 'Active',
        phase: 'Continuous'
    },
    {
        id: 3,
        title: 'Data Architecture Topology',
        assignee: 'Blueprint Generation',
        focus: 'ERP Integration Spec',
        burn: 500,
        status: 'Pending Review',
        phase: 'V2.1'
    }
]

const ledgerTransactions = [
    { id: 'TRX-8821', date: '2026-06-25', desc: 'Simulation Lab: Scenario Beta-4 Compute', type: 'debit', amount: 150 },
    { id: 'TRX-8820', date: '2026-06-18', desc: 'Operator Deployment: Sarah J. (Wk 4)', type: 'debit', amount: 300 },
    { id: 'TRX-8819', date: '2026-06-11', desc: 'Operator Deployment: Sarah J. (Wk 3)', type: 'debit', amount: 300 },
    { id: 'TRX-8818', date: '2026-06-04', desc: 'Governance Matrix Blueprint Generation', type: 'debit', amount: 500 },
    { id: 'TRX-8817', date: '2026-06-01', desc: 'Q3 Retainer Deposit', type: 'credit', amount: 25000 },
    { id: 'TRX-8816', date: '2026-05-28', desc: 'Initial Diagnostic Engine Scan (9-Dim)', type: 'debit', amount: 1200 },
    { id: 'TRX-8815', date: '2026-05-25', desc: 'Account Initialization Deposit', type: 'credit', amount: 20000 },
]

export default function WalletPage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-7xl mx-auto">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-xs font-mono uppercase tracking-widest text-[#7B61FF] mb-2">Executive Portal</div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1 flex items-center gap-4">
                            Service Wallet
                        </h1>
                        <p className="text-white/50 text-sm">Financial Command Center & Resource Allocation</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex gap-3"
                    >
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-white/10 transition-colors flex items-center gap-2">
                            <Download className="w-4 h-4" /> Export Ledger
                        </button>
                        <button className="px-4 py-2 bg-[#7B61FF]/10 text-[#7B61FF] hover:bg-[#7B61FF]/20 border border-[#7B61FF]/30 rounded-lg text-sm transition-colors flex items-center gap-2 font-medium">
                            Request Top-Up Invoice
                        </button>
                    </motion.div>
                </header>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-card rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/10 to-transparent opacity-50" />
                        <div className="relative z-10 flex items-center justify-between mb-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Available Balance</span>
                            <Wallet className="w-4 h-4 text-[#7B61FF]" />
                        </div>
                        <div className="relative z-10 mt-auto">
                            <div className="text-4xl font-light text-white mb-1">
                                {metrics.balance.toLocaleString()} <span className="text-lg text-white/30">CRD</span>
                            </div>
                            <div className="text-[10px] text-white/40 border-t border-white/10 pt-3 flex justify-between">
                                <span>₦{(metrics.balance * 1000).toLocaleString()} NGN</span>
                                <span className="text-[#00B67A]">Healthy</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Current Burn Rate</span>
                            <TrendingDown className="w-4 h-4 text-[#FF6B35]" />
                        </div>
                        <div className="mt-auto">
                            <div className="text-4xl font-light text-white mb-1 flex items-baseline gap-2">
                                -{metrics.burnRate.toLocaleString()} <span className="text-lg text-white/30">CRD<span className="text-xs">/mo</span></span>
                            </div>
                            <div className="text-[10px] text-white/40 border-t border-white/10 pt-3">
                                Based on 3 active deployments
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Estimated Runway</span>
                            <Timer className="w-4 h-4 text-[#38BDF8]" />
                        </div>
                        <div className="mt-auto">
                            <div className="text-4xl font-light text-white mb-1 flex items-baseline gap-2">
                                {Math.floor(metrics.runwayDays / 30)} <span className="text-lg text-white/30">Months</span>
                            </div>
                            <div className="text-[10px] text-white/40 border-t border-white/10 pt-3">
                                Approx. {metrics.runwayDays} days remaining
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
                        className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-[#00B67A]/10 to-transparent opacity-50" />
                        <div className="relative z-10 flex items-center justify-between mb-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Value Delivered</span>
                            <ShieldCheck className="w-4 h-4 text-[#00B67A]" />
                        </div>
                        <div className="relative z-10 mt-auto">
                            <div className="text-4xl font-light text-[#00B67A] mb-1">
                                ₦180<span className="text-lg text-[#00B67A]/50">M</span>
                            </div>
                            <div className="text-[10px] text-white/40 border-t border-white/10 pt-3">
                                Projected Annual Ops Savings
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Main Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Left Col: Active Deployments */}
                    <div className="lg:col-span-1 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
                            className="glass-card rounded-2xl p-6 flex flex-col"
                        >
                            <h3 className="text-sm font-medium text-white mb-6">Active Resource Allocation</h3>
                            
                            <div className="space-y-4">
                                {activeDeployments.map((dep, i) => (
                                    <div key={dep.id} className="p-4 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <div className="text-sm font-medium text-white mb-1">{dep.title}</div>
                                                <div className="text-xs text-[#38BDF8] font-mono">{dep.phase}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-[#FF6B35]">-{dep.burn} <span className="text-[10px] text-white/50">CRD/mo</span></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 bg-black/20 rounded p-2 mt-4 border border-white/5">
                                            <div className={`w-1.5 h-1.5 rounded-full ${dep.status === 'Active' ? 'bg-[#00B67A] animate-pulse' : 'bg-[#FFB020]'}`} />
                                            <span className="text-[10px] text-white/60 uppercase tracking-wider">{dep.assignee} • {dep.focus}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Col: Ledger */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
                            className="glass-card rounded-2xl p-6 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-sm font-medium text-white">Transaction Ledger</h3>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Last 30 Days</div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="pb-3 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Date</th>
                                            <th className="pb-3 text-xs font-mono uppercase tracking-widest text-white/40 font-normal">Description</th>
                                            <th className="pb-3 text-xs font-mono uppercase tracking-widest text-white/40 font-normal text-right">Amount (CRD)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {ledgerTransactions.map((trx) => (
                                            <tr key={trx.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                                                <td className="py-4 text-white/60 font-mono text-xs">{trx.date}</td>
                                                <td className="py-4 text-white/90">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-opacity-10 ${trx.type === 'credit' ? 'bg-[#00B67A] text-[#00B67A]' : 'bg-white/10 text-white/40'}`}>
                                                            {trx.type === 'credit' ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                                                        </div>
                                                        <div>
                                                            <div>{trx.desc}</div>
                                                            <div className="text-[10px] text-white/30 font-mono">{trx.id}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={`py-4 text-right font-medium font-mono ${trx.type === 'credit' ? 'text-[#00B67A]' : 'text-white'}`}>
                                                    {trx.type === 'credit' ? '+' : '-'}{trx.amount.toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </PortalLayout>
    )
}

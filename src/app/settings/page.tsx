'use client'

import React from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Settings, User, Shield, CreditCard, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SettingsPage() {
    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-6xl mx-auto flex flex-col min-h-0 h-[calc(100vh-64px)]">
                <header className="mb-8 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-2 flex items-center gap-2">
                            <Settings className="w-3.5 h-3.5" /> Configuration
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">Settings</h1>
                        <p className="text-white/50 text-sm">Enterprise preferences and access control</p>
                    </motion.div>
                </header>

                <div className="flex flex-col md:flex-row gap-8 flex-1 min-h-0">
                    {/* Settings Sidebar */}
                    <div className="w-full md:w-64 shrink-0 space-y-1">
                        <button className="w-full text-left px-4 py-3 rounded-xl bg-white/10 text-white font-medium flex items-center gap-3">
                            <User className="w-4 h-4" /> Profile Details
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3">
                            <Users className="w-4 h-4" /> Team Access
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3">
                            <Shield className="w-4 h-4" /> Security & 2FA
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3">
                            <CreditCard className="w-4 h-4" /> Billing
                        </button>
                    </div>

                    {/* Settings Content */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 glass-card rounded-2xl p-6 overflow-y-auto"
                    >
                        <h2 className="text-xl font-medium text-white mb-6">Profile Details</h2>
                        
                        <div className="space-y-6 max-w-xl">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-2xl font-light text-white">
                                    EX
                                </div>
                                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors">
                                    Upload Avatar
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs text-white/50 uppercase tracking-widest font-mono">First Name</label>
                                    <input type="text" defaultValue="Executive" className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#7B61FF]/50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-white/50 uppercase tracking-widest font-mono">Last Name</label>
                                    <input type="text" defaultValue="User" className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#7B61FF]/50" />
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <label className="text-xs text-white/50 uppercase tracking-widest font-mono">Email Address</label>
                                    <input type="email" defaultValue="executive@client.com" className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#7B61FF]/50" />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <button className="px-6 py-2 bg-[#7B61FF] hover:bg-[#6A52DE] text-white rounded-lg text-sm font-medium transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PortalLayout>
    )
}

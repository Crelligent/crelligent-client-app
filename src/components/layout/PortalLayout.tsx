'use client'

import React from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Search, Bell, AlertTriangle } from 'lucide-react'

export function PortalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto relative">
                {/* Top Navigation Bar */}
                <div className="h-16 border-b border-white/5 px-6 lg:px-8 flex items-center justify-between sticky top-0 bg-[#050505]/80 backdrop-blur-md z-40">
                    <div className="flex-1 max-w-xl">
                        {/* Command Search Bar */}
                        <button 
                            onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
                            className="flex items-center justify-between w-full px-3 py-1.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-md transition-colors text-white/40 group"
                        >
                            <div className="flex items-center gap-2">
                                <Search className="w-3.5 h-3.5" />
                                <span className="text-[13px] font-light">Search or type a command...</span>
                            </div>
                            <div className="flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                                <span className="bg-white/10 px-1 rounded">⌘</span>
                                <span className="bg-white/10 px-1 rounded">K</span>
                            </div>
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button className="text-white/40 hover:text-white transition-colors">
                            <Bell className="w-4 h-4" />
                        </button>
                        <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="CEO Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Alert Banner */}
                <div className="bg-orange-500/10 border-b border-orange-500/20 px-6 py-2 flex items-center justify-center gap-3">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-orange-200">SLA Warning: External ERP integration latency exceeded 200ms at 04:00 AM. Crelligent engineers are investigating.</span>
                </div>

                {/* Page Content */}
                {children}
            </main>
        </div>
    )
}

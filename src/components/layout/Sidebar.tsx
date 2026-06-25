'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
    LayoutDashboard, 
    FileText,
    Settings,
    Activity,
    CreditCard
} from 'lucide-react'

export function Sidebar() {
    const pathname = usePathname()

    const navGroups = [
        {
            title: 'Executive Portal',
            items: [
                { name: 'Command Center', href: '/', icon: LayoutDashboard },
                { name: 'Blueprints & Assets', href: '/assets', icon: FileText },
                { name: 'Service Wallet', href: '/wallet', icon: CreditCard },
            ]
        },
        {
            title: 'System',
            items: [
                { name: 'Activity Log', href: '/activity', icon: Activity },
                { name: 'Settings', href: '/settings', icon: Settings },
            ]
        }
    ]

    return (
        <aside className="w-64 border-r border-white/10 bg-[#050505] h-screen flex flex-col fixed left-0 top-0 overflow-y-auto print:hidden z-50">
            <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0 sticky top-0 bg-[#050505]">
                <span className="text-lg font-semibold tracking-tight">Crelligent</span>
                <span className="text-xs font-light text-[#7B61FF] ml-2">Client Portal</span>
            </div>

            <div className="flex-1 py-6 px-4 space-y-8">
                {navGroups.map((group) => (
                    <div key={group.title}>
                        <h3 className="px-2 text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
                            {group.title}
                        </h3>
                        <div className="space-y-1">
                            {group.items.map((item) => {
                                const isActive = pathname === item.href
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors ${
                                            isActive 
                                                ? 'bg-white/10 text-white font-medium' 
                                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="p-4 border-t border-white/10 shrink-0 sticky bottom-0 bg-[#050505]">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#38BDF8]" />
                    <div>
                        <div className="text-sm font-medium">Apex Logistics</div>
                        <div className="text-xs text-white/40">CEO Account</div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

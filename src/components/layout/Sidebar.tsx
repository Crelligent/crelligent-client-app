'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
    LayoutDashboard, 
    FileText,
    Settings,
    Activity,
    CreditCard,
    ShieldCheck,
    AlertTriangle,
    FlaskConical,
    MapPin,
    Milestone,
    PackageCheck,
    BarChart2,
    Rss,
    Archive,
    Bell,
    KeyRound,
    Sparkles,
    Layers,
    Network
} from 'lucide-react'

export function Sidebar() {
    const pathname = usePathname()

    const navGroups = [
        {
            title: 'Executive Portal',
            items: [
                { name: 'Command Center', href: '/', icon: LayoutDashboard, color: 'text-blue-400' },
                { name: 'ESRE Scorecard', href: '/scorecard', icon: ShieldCheck, color: 'text-[#00B67A]' },
                { name: 'Blueprints & Assets', href: '/assets', icon: FileText, color: 'text-cyan-400' },
                { name: 'Service Wallet', href: '/wallet', icon: CreditCard, color: 'text-[#7B61FF]' },
            ]
        },
        {
            title: 'Diagnostics',
            items: [
                { name: 'ESRE Lens', href: '/diagnostics/esre-lens', icon: Network, color: 'text-blue-400' },
                { name: 'Document Intelligence', href: '/diagnostics/document-intelligence', icon: Sparkles, color: 'text-emerald-400' },
                { name: 'Risk Register', href: '/risk', icon: AlertTriangle, color: 'text-orange-400' },
                { name: 'Bottleneck Tracker', href: '/bottlenecks', icon: Activity, color: 'text-red-400' },
                { name: 'Simulation Lab', href: '/simulation', icon: FlaskConical, color: 'text-amber-400' },
            ]
        },
        {
            title: 'Implementation',
            items: [
                { name: 'Operator Timeline', href: '/timeline', icon: MapPin, color: 'text-[#38BDF8]' },
                { name: 'Milestone Tracker', href: '/milestones', icon: Milestone, color: 'text-emerald-400' },
                { name: 'Deliverables', href: '/deliverables', icon: PackageCheck, color: 'text-teal-400' },
            ]
        },
        {
            title: 'Intelligence',
            items: [
                { name: 'Market Benchmarks', href: '/benchmarks', icon: BarChart2, color: 'text-[#FFB020]' },
                { name: 'Data Feeds', href: '/feeds', icon: Rss, color: 'text-pink-400' },
                { name: 'Reports Archive', href: '/reports', icon: Archive, color: 'text-purple-400' },
                { name: 'Engine Architecture', href: '/engine', icon: Layers, color: 'text-indigo-400' },
            ]
        },
        {
            title: 'System',
            items: [
                { name: 'Integrations', href: '/integrations', icon: Network, color: 'text-rose-400' },
                { name: 'Notifications', href: '/notifications', icon: Bell, color: 'text-slate-400' },
                { name: 'API Keys', href: '/api-keys', icon: KeyRound, color: 'text-slate-400' },
                { name: 'Settings', href: '/settings', icon: Settings, color: 'text-slate-400' },
            ]
        }
    ]

    return (
        <aside className="w-64 border-r border-white/10 bg-[#050505] h-screen flex-shrink-0 flex flex-col overflow-y-auto print:hidden">
            <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0 sticky top-0 bg-[#050505] z-10">
                <img src="/logo.png" alt="Crelligent" className="w-6 h-6 object-contain mr-2" />
                <span className="text-lg font-semibold tracking-tight">Crelligent</span>
                <span className="text-xs font-light text-[#7B61FF] ml-2">Client Portal</span>
            </div>

            <div className="flex-1 py-6 px-4 space-y-8">
                {navGroups.map((group) => (
                    <div key={group.title}>
                        <h3 className="px-2 text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
                            {group.title}
                        </h3>
                        <div className="space-y-0.5">
                            {group.items.map((item) => {
                                const isActive = pathname === item.href
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-2 py-2 rounded-lg text-[13px] tracking-wide font-light transition-colors ${
                                            isActive 
                                                ? 'bg-white/5 text-white' 
                                                : 'text-[#606060] hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        <Icon className={`w-4 h-4 stroke-[1.5] transition ${item.color} ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* ESRE Co-Pilot Quick Access */}
            <div className="px-4 pb-3">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#7B61FF]/10 border border-[#7B61FF]/20 hover:bg-[#7B61FF]/20 transition-colors group">
                    <div className="w-6 h-6 rounded bg-white/5 border border-[#7B61FF]/30 flex items-center justify-center p-1">
                        <img src="/logo.png" alt="AI" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-left">
                        <div className="text-xs font-medium text-white">ESRE™ Co-Pilot</div>
                        <div className="text-[10px] text-white/40">Ask anything</div>
                    </div>
                    <Sparkles className="w-3 h-3 text-[#7B61FF] ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
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

'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Database, Server, HardDrive, Wifi, CheckCircle2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const integrationCategories = [
    {
        title: 'Enterprise Resource Planning (ERP)',
        icon: Database,
        options: ['SAP S/4HANA', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Infor M3']
    },
    {
        title: 'Customer Relationship Management (CRM)',
        icon: HardDrive,
        options: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Custom Internal CRM']
    },
    {
        title: 'Human Capital Management (HRIS)',
        icon: Server,
        options: ['Workday', 'BambooHR', 'Deel', 'Rippling']
    },
    {
        title: 'Edge Telemetry & IoT',
        icon: Wifi,
        options: ['Crelligent Edge Nodes', 'Samsara Fleet', 'Geotab', 'AWS IoT Core']
    }
]

export default function OnboardingPage() {
    const router = useRouter()
    const [selectedSystems, setSelectedSystems] = useState<string[]>([])

    const toggleSystem = (system: string) => {
        setSelectedSystems(prev => 
            prev.includes(system) ? prev.filter(s => s !== system) : [...prev, system]
        )
    }

    return (
        <div className="min-h-screen bg-[#020202] text-white flex flex-col pt-12 pb-24 px-6 md:px-12 relative overflow-hidden">
            
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#7B61FF]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full relative z-10">
                
                <header className="mb-12 text-center">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-3">Phase 1: Architecture Mapping</div>
                        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">System Configuration</h1>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Select the operational systems currently active in your enterprise. The ESRE Engine will generate ingestion protocols for these specific endpoints.
                        </p>
                    </motion.div>
                </header>

                <div className="space-y-12">
                    {integrationCategories.map((category, catIdx) => (
                        <motion.div 
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                        >
                            <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                                <category.icon className="w-4 h-4 text-[#7B61FF]" /> {category.title}
                            </h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {category.options.map(option => {
                                    const isSelected = selectedSystems.includes(option)
                                    return (
                                        <div 
                                            key={option}
                                            onClick={() => toggleSystem(option)}
                                            className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 relative overflow-hidden group ${
                                                isSelected 
                                                ? 'bg-[#38BDF8]/10 border-[#38BDF8]/50 text-white' 
                                                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                                            }`}
                                        >
                                            {isSelected && (
                                                <motion.div layoutId="active-pill" className="absolute top-3 right-3 text-[#38BDF8]">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </motion.div>
                                            )}
                                            <div className="font-medium text-sm pr-6">{option}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-col items-center border-t border-white/10 pt-12"
                >
                    <button 
                        onClick={() => router.push('/initialize')}
                        disabled={selectedSystems.length === 0}
                        className={`flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium transition-all ${
                            selectedSystems.length > 0 
                            ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                            : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10'
                        }`}
                    >
                        Commence Intelligence Ingestion
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    {selectedSystems.length === 0 && (
                        <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest mt-4">
                            Select at least one system to continue
                        </p>
                    )}
                </motion.div>

            </div>
        </div>
    )
}

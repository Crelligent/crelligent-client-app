'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building, CheckCircle2, LayoutDashboard } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function OnboardingWizard() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [companyName, setCompanyName] = useState('')
    
    const steps = [
        { num: 1, title: 'Company Profile' },
        { num: 2, title: 'L1 Business Design' },
        { num: 3, title: 'L2 Core Processes' },
        { num: 4, title: 'OS Initialization' }
    ]

    const handleNext = () => {
        if (step < 4) setStep(step + 1)
        else router.push('/dashboard')
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-center px-6 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[var(--color-teal)]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto w-full relative z-10">
                
                {/* Progress Bar */}
                <div className="mb-16">
                    <div className="flex justify-between mb-4 relative">
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -z-10 -translate-y-1/2" />
                        <div 
                            className="absolute top-1/2 left-0 h-[2px] bg-[var(--color-lime)] shadow-[0_0_10px_rgba(0,201,133,0.8)] -z-10 -translate-y-1/2 transition-all duration-500" 
                            style={{ width: `${((step - 1) / 3) * 100}%` }}
                        />
                        {steps.map(s => (
                            <div key={s.num} className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                                    step >= s.num ? 'bg-[var(--color-lime)] text-[#050505] shadow-[0_0_15px_rgba(0,201,133,0.5)]' : 'bg-[#050505] border-2 border-white/10 text-white/40'
                                }`}>
                                    {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
                                </div>
                                <span className={`absolute mt-14 text-xs font-mono uppercase tracking-widest whitespace-nowrap ${
                                    step >= s.num ? 'text-white/90' : 'text-white/30'
                                }`}>
                                    {s.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-2xl mt-20 min-h-[450px] flex flex-col relative overflow-hidden">
                    
                    {step === 1 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1">
                            <h2 className="text-3xl font-display font-medium mb-3 text-white">Welcome to ESRE OS</h2>
                            <p className="text-white/50 mb-10 font-light">Let's configure your enterprise operating system parameters.</p>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-mono tracking-widest text-white/50 uppercase mb-3">Enterprise Legal Name</label>
                                    <div className="relative">
                                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                        <input 
                                            type="text" 
                                            value={companyName}
                                            onChange={(e) => setCompanyName(e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] text-white placeholder:text-white/20 transition-all"
                                            placeholder="e.g. Apex Logistics"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1">
                            <h2 className="text-3xl font-display font-medium mb-3 text-white">L1: Business Design</h2>
                            <p className="text-white/50 mb-10 font-light">What is the core value proposition of your enterprise?</p>
                            <textarea 
                                className="w-full h-40 p-5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] text-white placeholder:text-white/20 transition-all font-light resize-none leading-relaxed"
                                placeholder="Describe what makes your business unique and structurally advantaged..."
                            />
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1">
                            <h2 className="text-3xl font-display font-medium mb-3 text-white">L2: Core Processes</h2>
                            <p className="text-white/50 mb-10 font-light">List 1-3 primary processes that drive your operations.</p>
                            <textarea 
                                className="w-full h-40 p-5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] text-white placeholder:text-white/20 transition-all font-light resize-none leading-relaxed"
                                placeholder="e.g. 1. Order Fulfillment\n2. Inventory Management\n3. Client Onboarding"
                            />
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center text-center">
                            <div className="w-24 h-24 bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 text-[var(--color-teal)] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(26,107,138,0.3)]">
                                <LayoutDashboard className="w-12 h-12" />
                            </div>
                            <h2 className="text-3xl font-display font-medium mb-4 text-white">Initializing OS Data</h2>
                            <p className="text-white/50 max-w-sm font-light leading-relaxed">
                                The ESRE AI Engine is calculating your baseline OS Performance Score based on your structural inputs.
                            </p>
                        </motion.div>
                    )}

                    <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center">
                        {step > 1 ? (
                            <button 
                                onClick={() => setStep(step - 1)}
                                className="px-6 py-3 text-white/40 hover:text-white font-medium transition-colors"
                            >
                                Back
                            </button>
                        ) : <div />}
                        
                        <button 
                            onClick={handleNext}
                            className={`px-8 py-3.5 rounded-xl font-medium transition-all flex items-center gap-3 ${
                                step === 4 
                                ? 'bg-[var(--color-lime)] text-[#050505] hover:bg-opacity-90 shadow-[0_0_20px_rgba(0,201,133,0.4)]' 
                                : 'bg-white text-[#050505] hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                            }`}
                        >
                            {step === 4 ? 'Enter OS Dashboard' : 'Continue'} 
                            {step < 4 && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

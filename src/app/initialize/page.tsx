'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, ShieldCheck, Database, Zap, CheckCircle2 } from 'lucide-react'

const bootSteps = [
    { id: 1, text: 'Verifying Cryptographic Engagement Key...', icon: ShieldCheck, delay: 500 },
    { id: 2, text: 'Establishing Layer 2 API Handshakes...', icon: Database, delay: 1500 },
    { id: 3, text: 'Ingesting Historic Baseline Data...', icon: Terminal, delay: 2800 },
    { id: 4, text: 'Calibrating ESRE Intelligence Engine...', icon: Zap, delay: 4200 },
    { id: 5, text: 'Access Granted. Initializing Workspace.', icon: CheckCircle2, delay: 5500 }
]

export default function InitializePage() {
    const router = useRouter()
    const [activeSteps, setActiveSteps] = useState<number[]>([])
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Trigger steps based on their delays
        bootSteps.forEach(step => {
            setTimeout(() => {
                setActiveSteps(prev => [...prev, step.id])
            }, step.delay)
        })

        // Smooth progress bar animation
        const duration = 6500
        const interval = 50
        let currentProgress = 0
        
        const progressTimer = setInterval(() => {
            currentProgress += (interval / duration) * 100
            if (currentProgress > 100) currentProgress = 100
            setProgress(currentProgress)
        }, interval)

        // Redirect after full sequence
        const redirectTimer = setTimeout(() => {
            router.push('/')
        }, 7000)

        return () => {
            clearInterval(progressTimer)
            clearTimeout(redirectTimer)
        }
    }, [router])

    return (
        <div className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#7B61FF]/10 to-[#38BDF8]/10 blur-[150px] rounded-full pointer-events-none opacity-50" />

            <div className="w-full max-w-xl relative z-10 px-8">
                
                <div className="flex flex-col items-center mb-12">
                    <motion.img 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        src="/logo.png" 
                        alt="Crelligent" 
                        className="w-16 h-16 object-contain mb-6 drop-shadow-[0_0_15px_rgba(123,97,255,0.5)]" 
                    />
                    <h1 className="text-2xl font-light tracking-widest uppercase text-white/80">
                        Crelligent <span className="font-semibold text-white">OS</span>
                    </h1>
                </div>

                <div className="space-y-4 mb-12 font-mono text-sm">
                    <AnimatePresence>
                        {bootSteps.map((step) => (
                            activeSteps.includes(step.id) && (
                                <motion.div 
                                    key={step.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex items-center gap-4 ${step.id === 5 ? 'text-[#00B67A]' : 'text-white/60'}`}
                                >
                                    <step.icon className={`w-4 h-4 ${step.id === 5 ? 'text-[#00B67A]' : 'text-[#38BDF8]'}`} />
                                    <span>{step.text}</span>
                                    {step.id !== 5 && <span className="text-white/30 ml-auto animate-pulse">[OK]</span>}
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div 
                        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#7B61FF] to-[#38BDF8]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="mt-4 text-center text-[10px] font-mono text-white/30 uppercase tracking-widest">
                    Sequence {Math.round(progress)}%
                </div>

            </div>
        </div>
    )
}

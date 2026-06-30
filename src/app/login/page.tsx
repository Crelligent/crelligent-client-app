'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Mail, Key, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function LoginPage() {
    const router = useRouter()
    const supabase = createClient()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) throw error

            router.push('/')
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#020202] text-white flex overflow-hidden">
            {/* Left Side: Brand & Visuals */}
            <div className="hidden lg:flex w-[45%] relative items-center justify-center border-r border-white/5">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/80 via-transparent to-[#020202]" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 p-16 max-w-xl"
                >
                    <div className="flex items-center gap-3 mb-12">
                        <img src="/logo.png" alt="Crelligent" className="w-8 h-8 object-contain" />
                        <span className="text-xl font-medium tracking-wide">Crelligent</span>
                    </div>
                    
                    <h1 className="text-5xl font-extralight tracking-tight mb-6 leading-[1.15]">
                        Intelligence, <br />
                        <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Quantified.</span>
                    </h1>
                    <p className="text-white/50 text-lg leading-relaxed font-light">
                        Access your Executive Command Center. Real-time telemetry, ESRE™ diagnostic benchmarking, and operational physics, synthesized.
                    </p>
                </motion.div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="w-full lg:w-[55%] flex items-center justify-center p-8 relative">
                
                {/* Ambient Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7B61FF]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md relative z-10"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-light mb-3 tracking-tight">Access Node</h2>
                        <p className="text-white/40 text-sm font-mono uppercase tracking-widest">Identify to continue</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleLogin}>
                        
                        {error && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Corporate Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                <input 
                                    type="email" 
                                    placeholder="ceo@apexlogistics.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#7B61FF]/50 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-xs font-mono uppercase tracking-widest text-white/50">Cryptographic Key</label>
                                <a href="#" className="text-xs text-[#7B61FF] hover:text-[#9b86ff] transition-colors">Forgot?</a>
                            </div>
                            <div className="relative">
                                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                <input 
                                    type="password" 
                                    placeholder="••••••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#7B61FF]/50 transition-colors tracking-widest"
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 disabled:bg-white/50 disabled:cursor-not-allowed transition-opacity py-4 rounded-xl text-sm font-medium mt-4 group"
                        >
                            {isLoading ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Authenticating...</>
                            ) : (
                                <>Initialize Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center gap-2 text-xs text-white/30">
                            <ShieldCheck className="w-4 h-4" /> End-to-end encrypted session
                        </div>
                        <Link href="/signup" className="text-sm text-white/60 hover:text-white transition-colors">
                            New to Crelligent? <span className="text-[#7B61FF]">Apply for Access</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

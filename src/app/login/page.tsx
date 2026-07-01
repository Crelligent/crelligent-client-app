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
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
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
                        The intelligence backbone of the African enterprise.
                    </h1>
                    <p className="text-white/50 text-lg leading-relaxed font-light">
                        Access the ESRE Intelligence Engine, manage edge telemetry, and track your ongoing systemic transformation from the Executive Command Center.
                    </p>
                </motion.div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="w-full lg:w-[55%] flex items-center justify-center p-8 relative">
                
                {/* Ambient Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7B61FF]/10 to-[#38BDF8]/10 blur-[120px] rounded-full pointer-events-none" />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md relative z-10"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-light mb-3 tracking-tight">Executive Access</h2>
                        <p className="text-white/40 text-sm font-mono uppercase tracking-widest">Client Portal & Engine</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors py-3.5 rounded-xl text-sm font-medium" onClick={(e) => e.preventDefault()}>
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google Workspace
                        </button>
                        
                        <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors py-3.5 rounded-xl text-sm font-medium" onClick={(e) => e.preventDefault()}>
                            <svg className="w-5 h-5" viewBox="0 0 21 21">
                                <path fill="#F25022" d="M0 0h10v10H0z"/>
                                <path fill="#7FBA00" d="M11 0h10v10H11z"/>
                                <path fill="#00A4EF" d="M0 11h10v10H0z"/>
                                <path fill="#FFB900" d="M11 11h10v10H11z"/>
                            </svg>
                            Continue with Microsoft Entra ID
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-white/10" />
                        <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Or</span>
                        <div className="h-[1px] flex-1 bg-white/10" />
                    </div>

                    <form className="space-y-5" onSubmit={handleLogin}>
                        
                        {error && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Enterprise Email</label>
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
                                <label className="block text-xs font-mono uppercase tracking-widest text-white/50">Password / Access Key</label>
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
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7B61FF] to-[#38BDF8] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity py-4 rounded-xl text-sm font-medium mt-4 group"
                        >
                            {isLoading ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Authenticating...</>
                            ) : (
                                <>Access Command Center <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
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

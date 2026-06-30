'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Mail, User, Fingerprint, Lock, Key, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function SignupPage() {
    const router = useRouter()
    const supabase = createClient()

    const [code, setCode] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            // 1. Verify Engagement Code
            const { data: codeData, error: codeError } = await supabase
                .from('engagement_codes')
                .select('tenant_id, is_used')
                .eq('code', code.toUpperCase())
                .single()

            if (codeError || !codeData) {
                throw new Error('Invalid Engagement Access Code. Please contact your Lead Architect.')
            }
            if (codeData.is_used) {
                throw new Error('This Engagement Access Code has already been provisioned.')
            }

            // 2. Sign Up User
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                        tenant_id: codeData.tenant_id
                    }
                }
            })

            if (authError) throw authError

            // 3. Mark code as used (in a real app this would be a secure RPC function)
            await supabase
                .from('engagement_codes')
                .update({ is_used: true })
                .eq('code', code.toUpperCase())

            // 4. Create profile record (usually handled by a DB trigger, but we'll do it manually here for simplicity if needed. Actually, auth.users data often suffices, but we have a profiles table)
            if (authData.user) {
                await supabase.from('profiles').insert([
                    { id: authData.user.id, tenant_id: codeData.tenant_id, full_name: fullName, role: 'executive' }
                ])
            }

            router.push('/onboarding')
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
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
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
                        Secure Onboarding.
                    </h1>
                    <p className="text-white/50 text-lg leading-relaxed font-light">
                        Access to the Crelligent ecosystem is strictly provisioned for active enterprise engagements. Please activate your account using the cryptographic token provided by your lead architect.
                    </p>
                </motion.div>
            </div>

            {/* Right Side: Signup Form */}
            <div className="w-full lg:w-[55%] flex items-center justify-center p-8 relative overflow-y-auto">
                
                {/* Ambient Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/10 to-[#00B67A]/10 blur-[120px] rounded-full pointer-events-none" />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md relative z-10 py-12"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-light mb-3 tracking-tight">Activate Account</h2>
                        <p className="text-white/40 text-sm font-mono uppercase tracking-widest">Provisioned Enterprise Access</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSignup}>
                        
                        {error && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Engagement Access Code</label>
                            <div className="relative">
                                <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38BDF8]" />
                                <input 
                                    type="text" 
                                    placeholder="e.g. CR-8X92-V2"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#38BDF8]/50 transition-colors uppercase"
                                    required
                                />
                            </div>
                            <p className="text-[10px] text-white/30 mt-2 flex items-center gap-1">
                                <Lock className="w-3 h-3" /> Provided by your Crelligent Lead Architect.
                            </p>
                        </div>

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
                            <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                <input 
                                    type="text" 
                                    placeholder="Jane Doe"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#7B61FF]/50 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Set Master Password</label>
                            <div className="relative">
                                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                <input 
                                    type="password" 
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#7B61FF]/50 transition-colors"
                                    required
                                    minLength={8}
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 disabled:bg-white/50 disabled:cursor-not-allowed transition-opacity py-4 rounded-xl text-sm font-medium mt-4 group"
                        >
                            {isLoading ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Provisioning Sandbox...</>
                            ) : (
                                <>Activate Command Center <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center gap-2 text-xs text-white/30">
                            <ShieldCheck className="w-4 h-4" /> Identity verification required
                        </div>
                        <Link href="/login" className="text-sm text-white/60 hover:text-white transition-colors">
                            Already provisioned? <span className="text-[#38BDF8]">Proceed to Login</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

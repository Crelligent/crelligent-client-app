'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Mail, Building, CheckCircle2, ShieldAlert } from 'lucide-react'

export default function AdminProvisionPage() {
  const [email, setEmail] = useState('')
  const [tenantName, setTenantName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleProvision = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/admin/provision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tenantName }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to provision client')
      }

      setStatus('success')
      setMessage(`Successfully provisioned! Engagement Code generated: ${data.engagementCode}`)
      setEmail('')
      setTenantName('')
    } catch (error: any) {
      setStatus('error')
      setMessage(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8"
        >
          <div className="mb-8">
            <h1 className="text-2xl font-light tracking-tight mb-2">Provision New Client</h1>
            <p className="text-white/50 text-sm">
              Generate an engagement code and securely email it to a new client to begin their ESRE OS onboarding.
            </p>
          </div>

          <form onSubmit={handleProvision} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Company Name</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input 
                  type="text" 
                  placeholder="e.g. Acme Corp"
                  value={tenantName}
                  onChange={(e) => setTenantName(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#38BDF8]/50 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Client Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input 
                  type="email" 
                  placeholder="ceo@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#38BDF8]/50 transition-colors"
                  required
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-400 text-sm">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <p>{message}</p>
              </div>
            )}

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-[#00B67A]/10 border border-[#00B67A]/20 flex items-start gap-3 text-[#00B67A] text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <p>{message}</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-white text-black font-medium py-3.5 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Provisioning...
                </>
              ) : (
                'Generate Code & Send Email'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

import React from 'react'
import { Sparkles, ArrowLeft, Clock } from 'lucide-react'
import Link from 'next/link'

interface Props {
    title: string;
    description: string;
}

export function ComingSoonPlaceholder({ title, description }: Props) {
    return (
        <div className="p-8 md:p-12 lg:p-24 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center animate-in fade-in zoom-in duration-700">
            
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B61FF]/20 to-[#38BDF8]/20 border border-white/10 flex items-center justify-center mb-8 relative group">
                <div className="absolute inset-0 bg-[#7B61FF]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <Clock className="w-8 h-8 text-[#38BDF8]" strokeWidth={1.5} />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono tracking-widest text-[#7B61FF] border border-[#7B61FF]/20 rounded-full bg-[#7B61FF]/5 uppercase">
                Module Initialization
            </div>

            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
                {title}
            </h1>
            
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed mb-12">
                {description} This module is currently undergoing system initialization and algorithmic structuring. Check back shortly.
            </p>

            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Return to Command Center
            </Link>

        </div>
    )
}

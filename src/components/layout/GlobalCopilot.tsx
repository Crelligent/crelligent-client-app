'use client'

import { usePathname } from 'next/navigation'
import { EsreCopilot } from '@/components/ai/EsreCopilot'

export function GlobalCopilot() {
    const pathname = usePathname()

    // Hide the Copilot ONLY on the login and signup pages
    if (pathname === '/login' || pathname === '/signup') {
        return null
    }

    return <EsreCopilot />
}

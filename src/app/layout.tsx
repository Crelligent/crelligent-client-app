import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

import { GlobalCopilot } from '@/components/layout/GlobalCopilot'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Client Portal | Crelligent',
  description: 'Executive Command Center for ESRE™ Diagnostics and Implementation',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen bg-[#050505] text-white">
        {children}
        <GlobalCopilot />
      </body>
    </html>
  )
}

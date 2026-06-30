'use client'

import React, { useState } from 'react'
import { PortalLayout } from '@/components/layout/PortalLayout'
import { Cpu, Zap, TrendingUp, TrendingDown, Play, Save, History, Activity } from 'lucide-react'
import { motion } from 'framer-motion'

// Define configuration types
type ConfigVariable = {
    id: string;
    label: string;
    type: 'toggle' | 'slider';
    value: number | boolean;
    min?: number;
    max?: number;
    unit?: string;
    impact: { financial: number, efficiency: number, friction: number }; // Baseline impact
}

export default function SimulationLabPage() {
    // State for interactive sandbox variables
    const [variables, setVariables] = useState<ConfigVariable[]>([
        { id: 'v1', label: 'Automate Level-1 Approvals', type: 'toggle', value: false, impact: { financial: 120000, efficiency: 48, friction: -15 } },
        { id: 'v2', label: 'Deprecate Legacy ERP DB', type: 'toggle', value: false, impact: { financial: -250000, efficiency: 120, friction: -30 } },
        { id: 'v3', label: 'Fleet Expansion (Units)', type: 'slider', value: 0, min: 0, max: 50, unit: 'vehicles', impact: { financial: -15000, efficiency: 5, friction: 2 } },
        { id: 'v4', label: 'Implement Dynamic Routing AI', type: 'toggle', value: false, impact: { financial: 300000, efficiency: 72, friction: -40 } },
    ])

    const [isSimulating, setIsSimulating] = useState(false)
    const [results, setResults] = useState<{ financial: number, efficiency: number, friction: number } | null>(null)

    const handleToggle = (id: string) => {
        setVariables(variables.map(v => v.id === id ? { ...v, value: !v.value } : v))
        setResults(null) // Reset results when config changes
    }

    const handleSlider = (id: string, newVal: number) => {
        setVariables(variables.map(v => v.id === id ? { ...v, value: newVal } : v))
        setResults(null)
    }

    const runSimulation = () => {
        setIsSimulating(true)
        setResults(null)
        
        // Mock algorithmic calculation delay
        setTimeout(() => {
            let totalFin = 0;
            let totalEff = 0;
            let totalFric = 0;

            variables.forEach(v => {
                if (v.type === 'toggle' && v.value === true) {
                    totalFin += v.impact.financial;
                    totalEff += v.impact.efficiency;
                    totalFric += v.impact.friction;
                } else if (v.type === 'slider') {
                    const multiplier = v.value as number;
                    totalFin += (v.impact.financial * multiplier);
                    totalEff += (v.impact.efficiency * multiplier);
                    totalFric += (v.impact.friction * multiplier);
                }
            })

            setResults({ financial: totalFin, efficiency: totalEff, friction: totalFric })
            setIsSimulating(false)
        }, 1500)
    }

    return (
        <PortalLayout>
            <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col min-h-0">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-2 flex items-center gap-2">
                            <Cpu className="w-3.5 h-3.5" /> Algorithmic Sandbox
                        </div>
                        <h1 className="text-3xl font-light tracking-tight text-white mb-1">
                            Simulation Lab
                        </h1>
                        <p className="text-white/50 text-sm">Predictive modeling for strategic enterprise permutations</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex gap-3">
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors flex items-center gap-2 text-white/70">
                            <History className="w-4 h-4" /> Load Preset
                        </button>
                        <button 
                            onClick={runSimulation}
                            disabled={isSimulating}
                            className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 font-medium ${isSimulating ? 'bg-[#38BDF8]/20 text-[#38BDF8]/50 border border-[#38BDF8]/20 cursor-wait' : 'bg-[#38BDF8]/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30'}`}
                        >
                            {isSimulating ? <Activity className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                            {isSimulating ? 'Computing Delta...' : 'Run Simulation'}
                        </button>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Left: Configuration Panel */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-1 glass-card rounded-2xl p-6 flex flex-col"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Zap className="w-4 h-4 text-[#38BDF8]" />
                            <h3 className="text-sm font-medium text-white">Scenario Variables</h3>
                        </div>

                        <div className="space-y-6">
                            {variables.map(v => (
                                <div key={v.id} className="pb-6 border-b border-white/5 last:border-0">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-sm text-white/90">{v.label}</label>
                                        
                                        {v.type === 'toggle' ? (
                                            <button 
                                                onClick={() => handleToggle(v.id)}
                                                className={`w-10 h-5 rounded-full relative transition-colors ${v.value ? 'bg-[#38BDF8]' : 'bg-white/10'}`}
                                            >
                                                <div className={`w-3.5 h-3.5 rounded-full bg-white absolute top-[3px] transition-all ${v.value ? 'left-[22px]' : 'left-[3px]'}`} />
                                            </button>
                                        ) : (
                                            <span className="text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded">
                                                {v.value} {v.unit}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {v.type === 'slider' && (
                                        <input 
                                            type="range" 
                                            min={v.min} 
                                            max={v.max} 
                                            value={v.value as number}
                                            onChange={(e) => handleSlider(v.id, parseInt(e.target.value))}
                                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#38BDF8]"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Projection Matrix */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        {/* Projection Results */}
                        <div className="glass-card rounded-2xl p-6 relative overflow-hidden h-[300px] flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 to-[#7B61FF]/5" />
                            
                            <div className="relative z-10 flex items-center justify-between mb-6">
                                <h3 className="text-sm font-medium text-white font-mono uppercase tracking-widest">Projection Matrix</h3>
                                {results && (
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00B67A] bg-[#00B67A]/10 px-2 py-1 rounded border border-[#00B67A]/20 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00B67A] animate-pulse" /> Computation Complete
                                    </span>
                                )}
                            </div>

                            <div className="relative z-10 flex-1 flex items-center justify-center">
                                {isSimulating ? (
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full border-2 border-[#38BDF8]/20 border-t-[#38BDF8] animate-spin mx-auto mb-4" />
                                        <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest animate-pulse">Running Neural Simulation...</div>
                                    </div>
                                ) : results ? (
                                    <div className="grid grid-cols-3 gap-8 w-full">
                                        <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">Financial Delta</div>
                                            <div className={`text-3xl font-light mb-1 ${results.financial >= 0 ? 'text-[#00B67A]' : 'text-red-400'}`}>
                                                {results.financial >= 0 ? '+' : '-'}₦{Math.abs(results.financial).toLocaleString()}
                                            </div>
                                            <div className="text-[10px] text-white/30">Monthly Projected Impact</div>
                                        </div>
                                        <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">Efficiency Delta</div>
                                            <div className={`text-3xl font-light mb-1 ${results.efficiency >= 0 ? 'text-[#00B67A]' : 'text-red-400'}`}>
                                                {results.efficiency >= 0 ? '+' : '-'}{Math.abs(results.efficiency)} hrs
                                            </div>
                                            <div className="text-[10px] text-white/30">Systemic Latency Recovery</div>
                                        </div>
                                        <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">Friction Delta</div>
                                            <div className={`text-3xl font-light mb-1 ${results.friction <= 0 ? 'text-[#00B67A]' : 'text-red-400'}`}>
                                                {results.friction <= 0 ? '' : '+'}{results.friction}%
                                            </div>
                                            <div className="text-[10px] text-white/30">System-Wide Resistance</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center opacity-50">
                                        <Cpu className="w-12 h-12 text-white/20 mx-auto mb-4" />
                                        <div className="text-sm font-medium text-white mb-1">Awaiting Parameters</div>
                                        <div className="text-xs text-white/50">Adjust variables and run simulation to view projected deltas.</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Historical Saves */}
                        <div className="glass-card rounded-2xl p-6 flex-1">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-sm font-medium text-white">Saved Scenarios</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: 'Aggressive Tech Scaling', date: '2026-06-25', fin: '+₦1.2M', tag: 'Alpha' },
                                    { name: 'Conservative Fleet Automation', date: '2026-06-20', fin: '+₦450K', tag: 'Beta' }
                                ].map((scen, i) => (
                                    <div key={i} className="p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-xl flex items-center justify-between transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-[#7B61FF]/10 text-[#7B61FF] flex items-center justify-center">
                                                <Save className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{scen.name}</div>
                                                <div className="text-[10px] text-white/40">{scen.date} • {scen.tag}</div>
                                            </div>
                                        </div>
                                        <div className="text-sm font-mono text-[#00B67A]">{scen.fin}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </PortalLayout>
    )
}

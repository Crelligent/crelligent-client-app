'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, RefreshCw, Activity, Target, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { esreEngineData } from '@/data/esre-engine';

const layerIcons = [
    <Database key="1" className="w-10 h-10" />,
    <RefreshCw key="2" className="w-10 h-10" />,
    <Activity key="3" className="w-10 h-10" />,
    <Target key="4" className="w-10 h-10" />,
    <ShieldCheck key="5" className="w-10 h-10" />,
    <Layers key="6" className="w-10 h-10" />,
    <Cpu key="7" className="w-10 h-10" />
];

export default function EsreEngineDiagram() {
    const [activeLayerId, setActiveLayerId] = useState<number>(1);

    const activeLayer = esreEngineData.find(l => l.id === activeLayerId);

    return (
        <div className="w-full max-w-7xl mx-auto py-12 px-4 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
                
                {/* 3D Isometric Visualizer (Left) */}
                <div className="w-full lg:w-1/2 h-[650px] flex items-center justify-center relative mt-32 lg:mt-44">
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7B61FF]/10 to-[#38BDF8]/10 blur-[150px] pointer-events-none rounded-full" />
                    
                    <div 
                        className="relative w-[300px] h-[300px] cursor-pointer"
                        style={{ 
                            transformStyle: 'preserve-3d', 
                            transform: 'perspective(2000px) rotateX(60deg) rotateZ(-45deg)' 
                        }}
                    >
                        {/* Central Data Stream Line (Vertical Core) */}
                        <div 
                            className="absolute left-1/2 top-1/2 w-[2px] bg-gradient-to-t from-transparent via-[#38BDF8] to-[#7B61FF] opacity-80"
                            style={{ 
                                height: '550px', 
                                transformOrigin: 'top center',
                                transform: 'translate(-50%, -50%) rotateX(-90deg) translateZ(80px)' 
                            }}
                        />

                        {[...esreEngineData].reverse().map((layer) => {
                            const isActive = activeLayerId === layer.id;
                            const Icon = layerIcons[layer.id - 1];
                            const zOffset = (layer.id - 1) * 75; // Spread layers by 75px vertically
                            
                            return (
                                <motion.div
                                    key={layer.id}
                                    onClick={() => setActiveLayerId(layer.id)}
                                    animate={{
                                        z: isActive ? zOffset + 20 : zOffset, 
                                    }}
                                    transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
                                    className={`absolute inset-0 flex items-center justify-center transition-colors duration-500 rounded-[30px] border ${isActive ? 'bg-[#7B61FF]/20 border-[#38BDF8]/80' : 'bg-[#050508]/60 border-white/20 hover:border-[#38BDF8]/50 hover:bg-[#7B61FF]/10'}`}
                                    style={{ 
                                        boxShadow: isActive ? '0 0 50px rgba(56, 189, 248, 0.3), inset 0 0 30px rgba(123, 97, 255, 0.3)' : 'inset 0 0 10px rgba(255,255,255,0.05)',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)'
                                    }}
                                >
                                    {/* Icon container - counter-rotated so the icon faces the user directly instead of lying flat */}
                                    <div 
                                        className={`transition-colors duration-500 ${isActive ? 'text-[#38BDF8] drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]' : 'text-white/20'}`}
                                        style={{ transform: 'rotateZ(45deg) rotateX(-60deg)' }}
                                    >
                                        {Icon}
                                    </div>

                                    {/* Layer Number Tag (Lies flat on the plane) */}
                                    <div 
                                        className={`absolute bottom-6 right-6 text-xl font-mono font-bold transition-colors duration-500 ${isActive ? 'text-[#38BDF8] drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]' : 'text-white/10'}`}
                                    >
                                        0{layer.id}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* The Oracle Output (Right) */}
                <div className="w-full lg:w-1/2 min-h-[600px] relative pt-16">
                    <AnimatePresence mode="wait">
                        {activeLayer && (
                            <motion.div
                                key={activeLayer.id}
                                initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0"
                            >
                                <div className="text-[11px] font-mono tracking-[0.2em] text-[#38BDF8] uppercase mb-6 flex items-center gap-4">
                                    <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#38BDF8]" />
                                    Layer 0{activeLayer.id} // {activeLayer.subtitle}
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-8 leading-[1.15]">
                                    {activeLayer.title}
                                </h2>
                                
                                <p className="text-white/60 text-lg font-light leading-relaxed mb-12 max-w-xl">
                                    {activeLayer.description}
                                </p>

                                {activeLayer.items && (
                                    <div className="space-y-8 max-w-xl">
                                        {activeLayer.items.map((item, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                                                className="relative pl-8 border-l border-white/10"
                                            >
                                                {/* Glowing pinpoint indicator on the border line */}
                                                <div className="absolute -left-[2px] top-2 w-[3px] h-6 bg-gradient-to-b from-[#38BDF8] to-[#7B61FF] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                                                
                                                <h4 className="text-xs font-mono font-bold text-white mb-2 tracking-wider uppercase">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-white/50 font-light leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}

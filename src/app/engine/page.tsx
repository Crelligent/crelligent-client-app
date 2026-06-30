import EsreEngineDiagram from "@/components/dashboard/EsreEngineDiagram";
import { PortalLayout } from '@/components/layout/PortalLayout';

export default function EngineArchitecturePage() {
    return (
        <PortalLayout>
            <div className="p-8 md:p-12 max-w-5xl mx-auto mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono tracking-widest text-[#7B61FF] border border-[#7B61FF]/20 rounded-full bg-[#7B61FF]/10 uppercase">
                    Core Methodology
                </div>
                <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                    The <span className="font-semibold bg-gradient-to-r from-[#7B61FF] to-[#38BDF8] bg-clip-text text-transparent">ESRE™</span> Intelligence Engine
                </h1>
                <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
                    The engine is not a single product. It is seven interconnected layers that together constitute something that has never existed in the African enterprise market. Explore the architecture powering Crelligent's systemic diagnostics below.
                </p>
            </div>

            <EsreEngineDiagram />
        </PortalLayout>
    );
}

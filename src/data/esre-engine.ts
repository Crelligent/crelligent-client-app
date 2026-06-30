export interface EsreSubItem {
    title: string;
    description: string;
}

export interface EsreLayer {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    items?: EsreSubItem[];
}

export const esreEngineData: EsreLayer[] = [
    {
        id: 1,
        title: "The Diagnostic Schema",
        subtitle: "The Foundation",
        description: "The structured data model that defines how an organisation is read. It maps every dimension of enterprise performance across the three domains and nine capabilities into a set of quantifiable variables, each with defined measurement criteria, scoring logic, and benchmark references. By the end of the diagnostic, the organisation has been reduced to a rich, structured data object — not a document.",
    },
    {
        id: 2,
        title: "The Data Ingestion Layer",
        subtitle: "How Measurement Happens",
        description: "The schema defines what to measure. The ingestion layer defines how the measurement happens through three simultaneous channels:",
        items: [
            {
                title: "Human-mediated ingestion",
                description: "Structured diagnostic interviews, workshops, and system audits entered via a guided input system that captures scoreable responses against each capability dimension."
            },
            {
                title: "System integration ingestion",
                description: "Secure API connections to existing enterprise systems (ERP, HR, CRM) to read raw operational signals directly from the source, eliminating the human filter."
            },
            {
                title: "Field telemetry ingestion",
                description: "Physical assets connected via the Edge Module stream performance data continuously into the engine, providing ground-truth operational data from the physical layer."
            }
        ]
    },
    {
        id: 3,
        title: "The Scoring and Intelligence Layer",
        subtitle: "The Engine's Brain",
        description: "Raw inputs from all three ingestion channels are processed by the scoring layer to produce actionable intelligence:",
        items: [
            {
                title: "Capability scoring",
                description: "Each of the nine capabilities is scored across its sub-dimensions using a weighted composite that accounts for the relative importance of each variable given the client's sector and context."
            },
            {
                title: "Bottleneck identification",
                description: "Identifies specific intersections between capabilities where constraint is occurring, using machine reasoning over structured data."
            },
            {
                title: "Health Score synthesis",
                description: "Aggregates the nine capability scores into the overall ESRE Health Score using a sector-calibrated model to measure systemic health."
            },
            {
                title: "Benchmark positioning",
                description: "Instantly positions every score against the engine's accumulated benchmark dataset to provide precise, sector-specific quartile rankings."
            },
            {
                title: "Causal chain mapping",
                description: "Maps how problems are connected across capabilities so the architecture phase addresses root causes rather than symptoms."
            }
        ]
    },
    {
        id: 4,
        title: "The Blueprint Generation Layer",
        subtitle: "Architecting the Solution",
        description: "Once the scoring layer has produced a health score, bottleneck map, and causal chain analysis, the blueprint layer generates the architecture for the redesigned system.",
        items: [
            {
                title: "Constraint-to-prescription mapping",
                description: "Surfaces proven interventions drawn from the accumulated dataset of past engagements for each identified bottleneck."
            },
            {
                title: "Architecture templating",
                description: "Generates intelligent structural skeletons for Target Operating Models, Data Architecture Topologies, and Governance Matrices, pre-populated with diagnostic data."
            },
            {
                title: "Dependency mapping",
                description: "Identifies the sequencing logic for the Build phase, mapping the dependency tree so implementation is intelligently sequenced."
            }
        ]
    },
    {
        id: 5,
        title: "The Implementation Intelligence Layer",
        subtitle: "Tracking System Performance",
        description: "Tracks the Build phase not just at the project management level, but at the system performance level of what is actually changing.",
        items: [
            {
                title: "Embedded operator tracking",
                description: "Embedded Leads log what system variables moved as a result of their work, linking implementation directly back to the diagnostic schema."
            },
            {
                title: "Score delta tracking",
                description: "Sub-dimension scores are updated in near-real-time as Build phase work completes, allowing leaders to watch their score move as systems are redesigned."
            },
            {
                title: "Milestone intelligence",
                description: "Tracks progress against a defined set of system changes that must occur to achieve the target schema state."
            }
        ]
    },
    {
        id: 6,
        title: "The Continuous Intelligence Layer",
        subtitle: "Making Transformation Permanent",
        description: "Operates continuously after the Build phase without requiring active engagement effort, powering the Evolution retainer.",
        items: [
            {
                title: "Automated reassessment",
                description: "Continues to read integrated systems and field telemetry to periodically recalculate sub-dimension scores and formally reassess the Health Score quarterly."
            },
            {
                title: "Drift detection",
                description: "Monitors redesigned systems for regression and flags deterioration before it becomes a crisis, preventing the organisation from reverting to old patterns."
            },
            {
                title: "Market signal integration",
                description: "Cross-references individual client scores against sector movements to identify macro trends and regulatory shifts."
            }
        ]
    },
    {
        id: 7,
        title: "The Data Intelligence Layer",
        subtitle: "The Compounding Asset",
        description: "Aggregates structured data across every engagement, client, and sector to produce powerful predictive capabilities.",
        items: [
            {
                title: "Sector intelligence products",
                description: "Provides aggregated, anonymised intelligence allowing organisations to benchmark against precise sector datasets."
            },
            {
                title: "Predictive diagnostics",
                description: "Identifies leading indicators of system failure early, shifting the model from reactive consulting to predictive intelligence."
            },
            {
                title: "AI-augmented diagnostics",
                description: "Machine learning models trained on the accumulated dataset to produce preliminary Health Scores and bottleneck hypotheses from system data alone."
            }
        ]
    }
];

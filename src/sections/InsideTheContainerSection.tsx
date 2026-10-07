import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { skillsData } from '../data/skills';
import { languagesData } from '../data/languages';
import { PipelineBridge } from '../components/PipelineBridge';
import {
  Box,
  Layers,
  Cpu,
  Database,
  Server,
  Shield,
  Zap,
  GitBranch,
  Search,
  Code2,
  Terminal,
  CheckCircle2,
  Globe,
  Radio,
  HardDrive,
  Network,
  FunctionSquare,
  ShieldAlert,
  Gauge,
  CircleDot,
  FolderGit2,
  Coins,
  GitFork,
  Github,
  FileCode2,
  Send,
  Workflow,
  Code,
  Palette,
  LucideIcon,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Box,
  Filter: Layers,
  Layers,
  Webhook: Radio,
  Database,
  Zap,
  Radio,
  HardDrive,
  Network,
  Terminal,
  FunctionSquare,
  ShieldAlert,
  Gauge,
  Cpu,
  CircleDot,
  FolderGit2,
  Coins,
  GitFork,
  GitBranch,
  Github,
  FileCode2,
  Send,
  Workflow,
  Server,
  Code,
  Palette,
};

interface ContainerLayerDef {
  id: string;
  tag: string;
  layerNumber: string;
  name: string;
  category: string;
  digest: string;
  description: string;
  icon: LucideIcon;
  skills: Array<{
    id: string;
    label: string;
    icon: string;
    description?: string;
    isFeatured?: boolean;
  }>;
  responsibilities: string[];
}

export const InsideTheContainerSection: React.FC = () => {
  // Collect all skills from skillsData
  const coreCategory = skillsData.find((c) => c.id === 'core-backend');
  const dbCategory = skillsData.find((c) => c.id === 'database');
  const archCategory = skillsData.find((c) => c.id === 'architecture');
  const toolsCategory = skillsData.find((c) => c.id === 'tools');

  // Construct the 6 Architectural Container Image Layers
  const CONTAINER_LAYERS: ContainerLayerDef[] = [
    {
      id: 'layer-06',
      layerNumber: 'LAYER_06',
      tag: 'infra://production-toolchain:v1',
      name: 'DEVOPS, TOOLCHAIN & SERVER HOSTING',
      category: 'Deployment & Tooling',
      digest: 'sha256:8f4c2e91',
      description: 'Containerized developer tooling, interactive OpenAPI contracts, version control, and web standards.',
      icon: GitBranch,
      skills: toolsCategory ? toolsCategory.skills : [],
      responsibilities: [
        'Version control management, pull request audits, and GitHub repository hygiene.',
        'Interactive Swagger / OpenAPI contract documentation and Postman automation suites.',
        'IIS application pool reverse proxy configuration and server-rendered HTML5 markup.',
      ],
    },
    {
      id: 'layer-05',
      layerNumber: 'LAYER_05',
      tag: 'domain://onion-architecture:latest',
      name: 'ENTERPRISE ARCHITECTURE & ISOLATION',
      category: 'Domain Patterns',
      digest: 'sha256:7b1a0d8e',
      description: 'Domain-driven structural patterns, dependency inversion, and strict layer boundary isolation.',
      icon: Shield,
      skills: archCategory ? archCategory.skills : [],
      responsibilities: [
        'Concentric Onion Architecture with pure business aggregates isolated at the core.',
        'Repository Pattern abstracting persistent data behind strongly-typed collection APIs.',
        'Atomic Unit of Work boundaries ensuring rollback safety across multi-table operations.',
      ],
    },
    {
      id: 'layer-04',
      layerNumber: 'LAYER_04',
      tag: 'storage://sql-server-redis:2022',
      name: 'RELATIONAL STORAGE & DISTRIBUTED CACHING',
      category: 'Data Storage',
      digest: 'sha256:6e9f4a3c',
      description: 'Microsoft SQL Server ACID relational schemas, stored procedures, audit triggers, and Redis cache.',
      icon: Database,
      skills: dbCategory ? dbCategory.skills : [],
      responsibilities: [
        'Relational database design normalized to 3NF across 15+ audited tables.',
        'High-performance stored procedures and triggers tracking immutable financial ledgers.',
        'Redis distributed in-memory caching offloading product catalog and session queries.',
      ],
    },
    {
      id: 'layer-03',
      layerNumber: 'LAYER_03',
      tag: 'dal://efcore-dapper-hybrid:fast',
      name: 'DATA ACCESS & HYBRID ORM ENGINE',
      category: 'Data Access Layer',
      digest: 'sha256:5d8b3c2a',
      description: 'Hybrid ORM architecture combining Entity Framework Core transactional tracking with Dapper microsecond speed.',
      icon: Zap,
      skills: [
        ...(coreCategory ? coreCategory.skills.filter((s) => s.id === 'efcore' || s.id === 'dapper') : []),
        ...(coreCategory ? coreCategory.skills.filter((s) => s.id === 'linq') : []),
      ],
      responsibilities: [
        'Entity Framework Core automated migrations, navigation mapping, and entity state tracking.',
        'Dapper micro-ORM raw SQL queries executing analytical reports in sub-5ms latency.',
        'Strongly-typed LINQ specification queries across relational datasets.',
      ],
    },
    {
      id: 'layer-02',
      layerNumber: 'LAYER_02',
      tag: 'mcr.microsoft.com/dotnet/aspnet:8.0',
      name: 'FRAMEWORK & WEB API CONTROLLER TIER',
      category: 'Web Framework',
      digest: 'sha256:4c7a2b1f',
      description: 'High-throughput ASP.NET Core Web API and MVC controllers with middleware pipelines and SignalR.',
      icon: Server,
      skills: coreCategory
        ? coreCategory.skills.filter((s) => s.id === 'aspnet-api' || s.id === 'aspnet-mvc' || s.id === 'signalr')
        : [],
      responsibilities: [
        'RESTful Web API endpoint design returning standard HTTP status codes and ProblemDetails.',
        'ASP.NET Core MVC server-side application orchestration with clean DTO mappings.',
        'Bidirectional real-time notification dispatching via SignalR WebSockets.',
      ],
    },
    {
      id: 'layer-01',
      layerNumber: 'LAYER_01',
      tag: 'mcr.microsoft.com/dotnet/runtime:8.0',
      name: 'BASE LANGUAGE & MANAGED CLR RUNTIME',
      category: 'Base Runtime',
      digest: 'sha256:3b6a1e0d',
      description: 'Core modern C# language features, object-oriented design, async task parallelism, and CLR execution.',
      icon: Cpu,
      skills: coreCategory
        ? coreCategory.skills.filter((s) => s.id === 'csharp' || s.id === 'oop')
        : [],
      responsibilities: [
        'Idiomatic C# language features, generic collections, pattern matching, and memory safety.',
        'SOLID object-oriented programming ensuring extensible, decoupled codebases.',
        'Non-blocking asynchronous task pipelines leveraging async/await over thread pools.',
      ],
    },
  ];

  const [activeLayerId, setActiveLayerId] = useState<string>('layer-05');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<{
    id: string;
    label: string;
    description?: string;
  } | null>(CONTAINER_LAYERS[1].skills[0] || null);

  const activeLayer =
    CONTAINER_LAYERS.find((l) => l.id === activeLayerId) || CONTAINER_LAYERS[0];

  // Search filtering
  const matchingSkills = CONTAINER_LAYERS.flatMap((layer) =>
    layer.skills.map((s) => ({ ...s, layerNumber: layer.layerNumber, layerName: layer.name }))
  ).filter((s) => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase();
    return s.label.toLowerCase().includes(q) || (s.description && s.description.toLowerCase().includes(q));
  });

  return (
    <section
      id="container"
      className="relative py-20 md:py-32 border-t border-docker-border bg-docker-bg overflow-hidden"
    >
      {/* Invisible anchor target for backwards-compatibility */}
      <span id="about" className="absolute -top-24" />
      <span id="stack" className="absolute -top-24" />
      <span id="skills" className="absolute -top-24" />

      {/* Background Subtle Container Grid */}
      <div className="absolute inset-0 bg-container-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-docker-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-docker-bright/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="01"
          label="INSIDE THE CONTAINER"
          title="The Containerized Backend Environment"
          description="Enter Adham Alaa's production container environment: real-world architectural foundations, runtime image layers, and the complete verified technical skill set."
          badge="Container Spec // Active (PID 1)"
        />

        {/* Master Container Chassis Frame */}
        <div className="bg-docker-surface border border-docker-border rounded-2xl overflow-hidden shadow-container-elevated">
          {/* Top Docker Daemon Telemetry Bar */}
          <div className="px-5 py-3.5 bg-docker-charcoal border-b border-docker-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              <Box className="w-4 h-4 text-docker-blue" />
              <span className="text-docker-white font-semibold tracking-wide">
                CONTAINER // adham-backend:latest
              </span>
              <span className="text-docker-muted text-[11px] hidden md:inline">
                DIGEST: sha256:c44_prod &bull; NETWORK: bridge_prod
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-docker-bright bg-docker-blue/15 border border-docker-blue/30 px-2 py-0.5 rounded">
                PORTS: 8080:tcp &bull; 1433:tcp &bull; 6379:tcp
              </span>
              <span className="text-status-running flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
                STATUS: RUNNING (PID 1)
              </span>
            </div>
          </div>

          {/* Section Body: Developer Discipline + The Architectural Docker Whale */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Developer Positioning Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-docker-bright">
                  <Shield className="w-4 h-4 text-docker-blue" />
                  <span>CORE DISCIPLINE &bull; PRODUCTION RUNTIME SPEC</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-docker-white font-sans leading-tight">
                  {personalData.positioningStatement}
                </h3>
                <p className="text-sm sm:text-base text-docker-white/90 leading-relaxed font-sans">
                  {personalData.summary}
                </p>
                <p className="text-xs sm:text-sm text-docker-muted leading-relaxed font-sans">
                  In enterprise environments, money is collected, clinic appointments regulate medical care, and database transactions represent legally binding records. Every entity constraint, concurrency control token, and repository contract inside this container is designed to guarantee 100% data integrity and deterministic system behavior.
                </p>

                {/* Developer Foundation Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 font-mono text-xs">
                  {personalData.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-docker-charcoal/80 border border-docker-border rounded-lg p-2.5"
                    >
                      <span className="text-[10px] text-docker-muted block truncate">{m.label}</span>
                      <span className="text-xs font-bold text-docker-white block mt-0.5">
                        {m.value}
                      </span>
                      <span className="text-[9px] text-docker-bright block mt-0.5">{m.unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Docker Whale Carrying Container Layers */}
              <div className="lg:col-span-5 bg-docker-charcoal/80 border border-docker-border rounded-xl p-4 sm:p-5 flex flex-col items-center justify-between">
                <div className="w-full flex items-center justify-between pb-3 border-b border-docker-border font-mono text-[11px] text-docker-muted">
                  <span className="flex items-center gap-1.5 text-docker-white font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-docker-blue" />
                    DOCKER_CARRIER_MOTIF
                  </span>
                  <span className="text-docker-bright">6 LAYERS MOUNTED</span>
                </div>

                {/* SVG Geometric Docker Whale Profile */}
                <div className="my-3 w-full">
                  <svg
                    viewBox="0 0 540 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto drop-shadow-md"
                    aria-label="Architectural Docker Whale Carrier Carrying Technical Layers"
                  >
                    <defs>
                      <linearGradient id="whaleBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2496ED" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#111A22" stopOpacity="0.95" />
                      </linearGradient>
                      <linearGradient id="blockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4DB3FF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#2496ED" stopOpacity="0.7" />
                      </linearGradient>
                      <linearGradient id="waterGrid" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2496ED" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#4DB3FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#2496ED" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Container Stack Blocks (Top tier) */}
                    <rect x="235" y="10" width="38" height="20" rx="2" fill="url(#blockGrad1)" stroke="#4DB3FF" strokeWidth="1" />
                    <text x="254" y="24" fill="#F5F7FA" fontSize="8" fontFamily="monospace" textAnchor="middle">API</text>

                    <rect x="277" y="10" width="38" height="20" rx="2" fill="url(#blockGrad1)" stroke="#4DB3FF" strokeWidth="1" />
                    <text x="296" y="24" fill="#F5F7FA" fontSize="8" fontFamily="monospace" textAnchor="middle">NET</text>

                    {/* Middle tier */}
                    <rect x="193" y="34" width="38" height="20" rx="2" fill="#16212B" stroke="#24313D" strokeWidth="1" />
                    <text x="212" y="48" fill="#9AA7B2" fontSize="8" fontFamily="monospace" textAnchor="middle">AUTH</text>

                    <rect x="235" y="34" width="38" height="20" rx="2" fill="#16212B" stroke="#2496ED" strokeWidth="1" />
                    <text x="254" y="48" fill="#4DB3FF" fontSize="8" fontFamily="monospace" textAnchor="middle">CORE</text>

                    <rect x="277" y="34" width="38" height="20" rx="2" fill="#16212B" stroke="#24313D" strokeWidth="1" />
                    <text x="296" y="48" fill="#9AA7B2" fontSize="8" fontFamily="monospace" textAnchor="middle">SQL</text>

                    <rect x="319" y="34" width="38" height="20" rx="2" fill="#16212B" stroke="#24313D" strokeWidth="1" />
                    <text x="338" y="48" fill="#9AA7B2" fontSize="8" fontFamily="monospace" textAnchor="middle">CACHE</text>

                    {/* Base tier of containers */}
                    <rect x="151" y="58" width="38" height="20" rx="2" fill="#111A22" stroke="#24313D" strokeWidth="1" />
                    <text x="170" y="72" fill="#9AA7B2" fontSize="7" fontFamily="monospace" textAnchor="middle">SVC_1</text>

                    <rect x="193" y="58" width="38" height="20" rx="2" fill="#111A22" stroke="#24313D" strokeWidth="1" />
                    <text x="212" y="72" fill="#9AA7B2" fontSize="7" fontFamily="monospace" textAnchor="middle">SVC_2</text>

                    <rect x="235" y="58" width="38" height="20" rx="2" fill="#111A22" stroke="#2496ED" strokeWidth="1" />
                    <text x="254" y="72" fill="#4DB3FF" fontSize="7" fontFamily="monospace" textAnchor="middle">EF_DAL</text>

                    <rect x="277" y="58" width="38" height="20" rx="2" fill="#111A22" stroke="#24313D" strokeWidth="1" />
                    <text x="296" y="72" fill="#9AA7B2" fontSize="7" fontFamily="monospace" textAnchor="middle">DAPPER</text>

                    <rect x="319" y="58" width="38" height="20" rx="2" fill="#111A22" stroke="#24313D" strokeWidth="1" />
                    <text x="338" y="72" fill="#9AA7B2" fontSize="7" fontFamily="monospace" textAnchor="middle">REDIS</text>

                    <rect x="361" y="58" width="38" height="20" rx="2" fill="#111A22" stroke="#24313D" strokeWidth="1" />
                    <text x="380" y="72" fill="#9AA7B2" fontSize="7" fontFamily="monospace" textAnchor="middle">MQ</text>

                    {/* Geometric Whale Body */}
                    <path
                      d="M 140 82
                         L 405 82
                         C 425 82, 445 92, 455 108
                         C 460 116, 455 125, 442 128
                         C 420 132, 400 130, 370 126
                         C 320 120, 260 124, 200 132
                         C 150 138, 110 132, 75 118
                         C 60 112, 50 102, 55 94
                         C 62 84, 75 88, 90 98
                         C 98 102, 105 102, 110 98
                         L 115 84
                         C 120 82, 130 82, 140 82 Z"
                      fill="url(#whaleBodyGrad)"
                      stroke="#2496ED"
                      strokeWidth="1.5"
                    />

                    {/* Tail Fluke */}
                    <path
                      d="M 75 118 C 60 125, 40 140, 20 148 C 15 150, 15 142, 22 136 C 35 125, 48 116, 55 94"
                      fill="#16212B"
                      stroke="#2496ED"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 55 94 C 40 82, 25 74, 16 72 C 12 70, 14 78, 22 84 C 35 94, 50 105, 65 110"
                      fill="#111A22"
                      stroke="#4DB3FF"
                      strokeWidth="1.2"
                    />

                    {/* Whale Eye & Telemetry Steam */}
                    <circle cx="430" cy="104" r="3" fill="#4DB3FF" />
                    <line x1="430" y1="80" x2="430" y2="60" stroke="#4DB3FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
                    <circle cx="430" cy="56" r="2" fill="#4DB3FF" opacity="0.8" />
                    <circle cx="436" cy="48" r="1.5" fill="#8DD3FF" opacity="0.6" />

                    {/* Waterline Infrastructure Grid */}
                    <line x1="20" y1="145" x2="520" y2="145" stroke="url(#waterGrid)" strokeWidth="1.5" />
                    <line x1="40" y1="152" x2="500" y2="152" stroke="url(#waterGrid)" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
                  </svg>
                </div>

                <div className="w-full pt-2 border-t border-docker-border flex items-center justify-between font-mono text-[10px] text-docker-muted">
                  <span>INFRASTRUCTURE ARCHITECTURE</span>
                  <span className="text-status-running">● ALL SERVICES COMPILED</span>
                </div>
              </div>
            </div>

            {/* Live Container Search Bar */}
            <div className="pt-4 border-t border-docker-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span className="text-docker-white font-bold block">
                  CONTAINER IMAGE LAYERS // TECHNICAL STACK
                </span>
                <span className="text-docker-muted text-[11px]">
                  Every verified skill below is built as an isolated image layer in this container.
                </span>
              </div>

              {/* Search Technology Input */}
              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-docker-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="docker search skill (e.g. C#, SQL, EF Core)..."
                  className="w-full bg-docker-charcoal border border-docker-border rounded-lg pl-9 pr-4 py-2 text-xs text-docker-white placeholder-docker-muted/60 focus:outline-none focus:border-docker-blue"
                />
              </div>
            </div>

            {/* Instant Search Results Dropdown if user searched */}
            {searchQuery.trim() && (
              <div className="bg-docker-charcoal border border-docker-blue/40 rounded-xl p-4 space-y-2 font-mono text-xs shadow-docker-glow">
                <div className="flex items-center justify-between text-docker-bright font-bold pb-2 border-b border-docker-border">
                  <span>SEARCH RESULTS ({matchingSkills.length} matches):</span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-docker-muted hover:text-docker-white"
                  >
                    Clear Search
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {matchingSkills.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelectedSkill(s);
                        setSearchQuery('');
                      }}
                      className="p-2.5 rounded-lg bg-docker-surface border border-docker-border hover:border-docker-blue text-left flex items-start gap-2.5 transition-colors"
                    >
                      <div className="p-1 rounded bg-docker-charcoal text-docker-bright mt-0.5">
                        <Code2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-docker-white">{s.label}</div>
                        <div className="text-[10px] text-docker-muted line-clamp-1">{s.description}</div>
                        <div className="text-[9px] text-docker-soft mt-1">{s.layerNumber}</div>
                      </div>
                    </button>
                  ))}
                  {matchingSkills.length === 0 && (
                    <div className="col-span-full py-4 text-center text-docker-muted">
                      No technology found matching "{searchQuery}"
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Main Layered Container Architecture (Layers Stack + Live Inspector) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: The 6 Container Image Layers */}
              <div className="lg:col-span-7 space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-docker-muted flex items-center justify-between px-1">
                  <span>Image Build Hierarchy (Base &rarr; Top)</span>
                  <span className="text-docker-bright">Click to Inspect Layer</span>
                </div>

                {CONTAINER_LAYERS.map((layer) => {
                  const isSelected = layer.id === activeLayerId;
                  const LayerIcon = layer.icon;

                  return (
                    <div
                      key={layer.id}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        isSelected
                          ? 'bg-docker-surface2 border-docker-blue shadow-docker-glow'
                          : 'bg-docker-charcoal/70 border-docker-border hover:border-docker-borderBright'
                      }`}
                    >
                      {/* Layer Header Button */}
                      <button
                        type="button"
                        onClick={() => setActiveLayerId(layer.id)}
                        className="w-full p-3.5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              isSelected
                                ? 'bg-docker-surface border border-docker-blue/40 text-docker-bright'
                                : 'bg-docker-charcoal text-docker-muted'
                            }`}
                          >
                            <LayerIcon className="w-4 h-4" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] text-docker-muted font-bold">
                                {layer.layerNumber}
                              </span>
                              <h4 className="text-xs sm:text-sm font-bold text-docker-white font-sans">
                                {layer.name}
                              </h4>
                            </div>
                            <div className="font-mono text-[10px] text-docker-soft mt-0.5 truncate">
                              {layer.tag}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-docker-muted hidden sm:inline">
                            {layer.skills.length} Techs
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-docker-muted transition-transform duration-200 ${
                              isSelected ? 'rotate-180 text-docker-bright' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {/* Expanded Layer Skills Inside Container */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-4 pb-4 pt-1 border-t border-docker-border/60 space-y-3"
                          >
                            <p className="text-xs text-docker-muted font-sans leading-relaxed">
                              {layer.description}
                            </p>

                            {/* Verified Skills Grid in this Layer */}
                            <div>
                              <div className="text-[10px] font-mono text-docker-muted uppercase mb-1.5 flex items-center justify-between">
                                <span>Layer Technologies &bull; Hover to Inspect</span>
                                <span className="text-status-running">● Verified in Production</span>
                              </div>

                              <div className="flex flex-wrap gap-1.5">
                                {layer.skills.map((skill) => {
                                  const SkillIcon = ICON_MAP[skill.icon] || Code2;
                                  const isSkillSelected = selectedSkill?.id === skill.id;

                                  return (
                                    <button
                                      key={skill.id}
                                      type="button"
                                      onClick={() => setSelectedSkill(skill)}
                                      onMouseEnter={() => setSelectedSkill(skill)}
                                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                                        isSkillSelected
                                          ? 'bg-docker-blue text-white shadow-sm ring-1 ring-docker-bright font-semibold'
                                          : 'bg-docker-surface border border-docker-border text-docker-white hover:border-docker-borderBright hover:bg-docker-surface2'
                                      }`}
                                    >
                                      <SkillIcon className="w-3.5 h-3.5" />
                                      <span>{skill.label}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Active Layer & Selected Skill Live Inspector HUD */}
              <div className="lg:col-span-5 bg-docker-charcoal border border-docker-border rounded-xl p-5 md:p-6 space-y-5 sticky top-24">
                {/* Inspector Header */}
                <div className="flex items-center justify-between pb-3 border-b border-docker-border font-mono text-xs">
                  <span className="font-bold text-docker-bright flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-docker-blue" />
                    <span>CONTAINER_INSPECTOR // HUD</span>
                  </span>
                  <span className="text-status-running font-semibold">● ACTIVE TIER</span>
                </div>

                {/* Layer Summary */}
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-docker-muted">
                    {activeLayer.layerNumber} &bull; {activeLayer.category}
                  </div>
                  <h4 className="text-base font-bold text-docker-white font-sans">
                    {activeLayer.name}
                  </h4>
                  <div className="font-mono text-xs text-docker-soft">{activeLayer.tag}</div>
                </div>

                {/* Selected Skill Details Box */}
                <div className="bg-docker-surface border border-docker-border rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-docker-bright uppercase font-bold">
                      INSPECTED MODULE
                    </span>
                    <span className="text-status-running bg-emerald-950/40 border border-emerald-800/30 px-1.5 py-0.2 rounded">
                      HEALTH: 100%
                    </span>
                  </div>

                  {selectedSkill ? (
                    <div>
                      <div className="text-sm font-bold text-docker-white font-sans flex items-center gap-2">
                        <span>{selectedSkill.label}</span>
                      </div>
                      <p className="text-xs text-docker-muted mt-1 leading-relaxed font-sans">
                        {selectedSkill.description ||
                          'Verified backend skill integrated into Adham Alaa’s active production container toolchain.'}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-docker-muted">
                      Select or hover any skill chip on the left to inspect architectural details.
                    </p>
                  )}
                </div>

                {/* Container Execution Responsibilities */}
                <div className="space-y-2 pt-1 border-t border-docker-border">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-docker-muted">
                    Container Execution Invariants
                  </div>
                  <ul className="space-y-2">
                    {activeLayer.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-docker-muted font-sans">
                        <span className="text-docker-blue font-bold mt-0.5">&bull;</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Layer Digest Status */}
                <div className="p-3 bg-docker-surface rounded-lg border border-docker-border flex items-center justify-between font-mono text-[11px]">
                  <span className="text-docker-muted">LAYER_DIGEST:</span>
                  <span className="text-docker-bright font-semibold">{activeLayer.digest}</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Linguistic Capabilities & Core Invariants */}
            <div className="pt-6 border-t border-docker-border flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3 flex-wrap">
                <Globe className="w-4 h-4 text-docker-blue" />
                <span className="text-docker-white font-semibold">SPOKEN LANGUAGES:</span>
                {languagesData.map((l) => (
                  <span
                    key={l.id}
                    className="bg-docker-charcoal px-2.5 py-1 rounded border border-docker-border text-docker-muted"
                  >
                    {l.language}: <strong className="text-docker-white">{l.proficiency}</strong>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-docker-muted text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-status-running" />
                <span>Zero Memory Leaks &bull; Garbage Collected CLR &bull; ACID Guarantees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Bridge to Projects Section */}
        <PipelineBridge
          currentStage="CONTAINER_STACK_COMPILED"
          nextStage="DEPLOYED_SYSTEMS"
          description="Transitioning from containerized technical stack to verified production projects"
        />
      </div>
    </section>
  );
};

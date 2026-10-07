import React, { useState } from 'react';
import { Layers, ShieldCheck, Database, Server, Cpu, GitBranch, ArrowRight } from 'lucide-react';

interface StackLayer {
  id: string;
  level: string;
  name: string;
  subtitle: string;
  color: string;
  borderColor: string;
  bgLight: string;
  icon: React.ReactNode;
  technologies: string[];
  responsibilities: string[];
  containerMetaphor: string;
}

const STACK_LAYERS: StackLayer[] = [
  {
    id: 'app-layer',
    level: 'LAYER_05',
    name: 'APPLICATION & BUSINESS DOMAIN',
    subtitle: 'Core Enterprise Logic & Domain Invariants',
    color: 'text-docker-bright',
    borderColor: 'border-docker-blue/50',
    bgLight: 'bg-docker-surface2',
    icon: <Layers className="w-4 h-4 text-docker-bright" />,
    technologies: [
      'Al-Alamia Cars Financial Engine',
      'Multi-Partner Equity Settlement',
      'Clinic Operations & Session Care Rail',
      'Onion Core Aggregates',
    ],
    responsibilities: [
      'Encapsulates pure business invariants and multi-partner payout rules.',
      'Enforces session quota consumption against active clinic packages.',
      'Zero coupling to external databases, UI, or frameworks.',
    ],
    containerMetaphor: 'container://domain-core-worker:latest',
  },
  {
    id: 'framework-layer',
    level: 'LAYER_04',
    name: 'FRAMEWORK & API CONTRACTS',
    subtitle: 'ASP.NET Core Controllers, Routing & Validation',
    color: 'text-docker-soft',
    borderColor: 'border-docker-blue/40',
    bgLight: 'bg-docker-surface2',
    icon: <Server className="w-4 h-4 text-docker-soft" />,
    technologies: [
      'ASP.NET Core Web API',
      'ASP.NET Core MVC',
      'AutoMapper DTOs',
      'Swagger / OpenAPI',
      'LINQ Specifications',
    ],
    responsibilities: [
      'Deserializes HTTP requests and coordinates business use-cases.',
      'Enforces model validation and returns standard ProblemDetails.',
      'Exposes interactive OpenAPI contracts for client consumption.',
    ],
    containerMetaphor: 'container://aspnet-web-api:8.0',
  },
  {
    id: 'runtime-layer',
    level: 'LAYER_03',
    name: 'RUNTIME & PROCESS ISOLATION',
    subtitle: '.NET 8 / 9 CLR & Kestrel Engine',
    color: 'text-status-ready',
    borderColor: 'border-status-ready/40',
    bgLight: 'bg-docker-surface2',
    icon: <Cpu className="w-4 h-4 text-status-ready" />,
    technologies: [
      '.NET 8 / 9 Runtime',
      'Kestrel Web Server',
      'Dependency Injection Container',
      'SignalR WebSockets',
    ],
    responsibilities: [
      'High-throughput asynchronous task processing with thread-pool optimization.',
      'Registers service lifetimes (Transient, Scoped, Singleton) via IoC.',
      'Bi-directional real-time communication for operational alerts.',
    ],
    containerMetaphor: 'mcr.microsoft.com/dotnet/aspnet:8.0-alpine',
  },
  {
    id: 'data-layer',
    level: 'LAYER_02',
    name: 'DATA ACCESS & HYBRID ORM',
    subtitle: 'Unit of Work, EF Core & Dapper Micro-ORM',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    bgLight: 'bg-docker-surface2',
    icon: <ShieldCheck className="w-4 h-4 text-purple-400" />,
    technologies: [
      'Entity Framework Core',
      'Dapper Micro-ORM',
      'Repository Pattern',
      'Unit of Work Transactions',
    ],
    responsibilities: [
      'Coordinates ACID mutations across multi-table transactional boundaries.',
      'Bypasses change tracking with raw Dapper queries for sub-5ms reports.',
      'Encapsulates database access behind strongly-typed collection interfaces.',
    ],
    containerMetaphor: 'container://dal-repository-layer:v2',
  },
  {
    id: 'database-layer',
    level: 'LAYER_01',
    name: 'DATABASE & DISTRIBUTED CACHE',
    subtitle: 'Microsoft SQL Server & Redis In-Memory',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgLight: 'bg-docker-surface2',
    icon: <Database className="w-4 h-4 text-amber-400" />,
    technologies: [
      'SQL Server 2022',
      'Stored Procedures & Triggers',
      'Clustered Indexing & Execution Plans',
      'Redis Distributed Cache',
    ],
    responsibilities: [
      'Relational persistence across 15+ normalized tables with referential integrity.',
      'In-memory Redis caching for product catalog and session offloading.',
      'Automated audit triggers recording financial ledger mutations.',
    ],
    containerMetaphor: 'mcr.microsoft.com/mssql/server:2022',
  },
  {
    id: 'infra-layer',
    level: 'LAYER_00',
    name: 'INFRASTRUCTURE & DEVOPS TOOLING',
    subtitle: 'Version Control, Testing & IIS Hosting',
    color: 'text-status-running',
    borderColor: 'border-status-running/40',
    bgLight: 'bg-docker-surface2',
    icon: <GitBranch className="w-4 h-4 text-status-running" />,
    technologies: [
      'Git & GitHub',
      'Postman API Testing Suites',
      'IIS Windows Server Hosting',
      'Kestrel Reverse Proxy',
    ],
    responsibilities: [
      'Versioned branch workflows and pull-request auditing.',
      'Automated HTTP integration testing suites across all endpoints.',
      'Application pool lifecycle management and SSL certificate binding.',
    ],
    containerMetaphor: 'infra://host-orchestration:production',
  },
];

export const ContainerStackVisualizer: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('app-layer');
  const activeLayer = STACK_LAYERS.find((l) => l.id === selectedLayerId) || STACK_LAYERS[0];

  return (
    <div className="w-full bg-docker-surface border border-docker-border rounded-2xl p-5 md:p-8 shadow-container">
      {/* Top Console Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-docker-border gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-docker-bright mb-1">
            <span className="w-2 h-2 rounded-full bg-docker-blue animate-pulse" />
            <span>INFRASTRUCTURE ARCHITECTURE // CONTAINER STACK</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-docker-white font-sans">
            Layered Container Software Architecture
          </h3>
          <p className="text-xs sm:text-sm text-docker-muted mt-1 max-w-xl">
            Representing Adham Alaa's verified technology stack as layered, production-ready container infrastructure.
          </p>
        </div>

        <div className="bg-docker-charcoal border border-docker-border px-3.5 py-2 rounded-lg font-mono text-xs">
          <span className="text-docker-muted block text-[10px]">STACK TOPOLOGY:</span>
          <span className="text-status-running font-semibold">6-TIER ISOLATED PIPELINE</span>
        </div>
      </div>

      {/* Main Stack Composition Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-start">
        {/* Left: The Visual Layered Container Stack */}
        <div className="lg:col-span-6 space-y-2">
          {STACK_LAYERS.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between focus:outline-none ${
                  isSelected
                    ? `${layer.bgLight} ${layer.borderColor} shadow-docker-glow text-docker-white`
                    : 'bg-docker-charcoal/60 border-docker-border text-docker-muted hover:border-docker-borderBright hover:text-docker-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected
                        ? 'bg-docker-surface border border-docker-border'
                        : 'bg-docker-charcoal'
                    }`}
                  >
                    {layer.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-docker-muted font-bold">
                        {layer.level}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-docker-white font-sans">
                        {layer.name}
                      </span>
                    </div>
                    <div className="text-[11px] text-docker-muted truncate max-w-[260px] sm:max-w-none mt-0.5">
                      {layer.subtitle}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-docker-bright">
                  <span>INSPECT</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Layer Inspector Detail Container */}
        <div className="lg:col-span-6 bg-docker-charcoal border border-docker-border rounded-xl p-5 md:p-6 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-docker-border font-mono text-xs">
            <span className={`font-semibold ${activeLayer.color}`}>
              {activeLayer.level} // SPECIFICATION
            </span>
            <span className="text-docker-muted text-[11px]">
              {activeLayer.containerMetaphor}
            </span>
          </div>

          <div>
            <h4 className="text-lg font-bold text-docker-white font-sans mb-1">
              {activeLayer.name}
            </h4>
            <p className="text-xs text-docker-muted font-sans leading-relaxed">
              {activeLayer.subtitle}
            </p>
          </div>

          {/* Core Technologies in this Layer */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-docker-muted mb-2">
              Layered Technologies &amp; Modules
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeLayer.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-docker-surface border border-docker-border text-docker-white px-2.5 py-1 rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Responsibilities */}
          <div className="pt-2 border-t border-docker-border">
            <div className="text-[10px] font-mono uppercase tracking-wider text-docker-muted mb-2">
              Container Execution Responsibilities
            </div>
            <ul className="space-y-2">
              {activeLayer.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-docker-muted">
                  <span className="text-docker-blue font-bold mt-0.5">&bull;</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Docker Status Tag */}
          <div className="p-3 bg-docker-surface rounded-lg border border-docker-border flex items-center justify-between font-mono text-[11px]">
            <span className="text-docker-muted">CONTAINER_STATUS:</span>
            <span className="text-status-running flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
              IMAGE_READY // RUNNING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

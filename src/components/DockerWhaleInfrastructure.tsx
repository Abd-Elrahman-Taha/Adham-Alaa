import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Database,
  Zap,
  Shield,
  Activity,
  Layers,
  User,
  Container,
  CheckCircle2,
  MapPin,
  Cpu,
} from 'lucide-react';
import { personalData } from '../data/personal';

interface ContainerNode {
  id: string;
  name: string;
  port: string;
  image: string;
  service: string;
  status: 'RUNNING' | 'HEALTHY';
  icon: React.ReactNode;
}

const CONTAINERS: ContainerNode[] = [
  {
    id: 'c-api',
    name: 'CORE_API',
    port: '8080',
    image: 'mcr.microsoft.com/dotnet/aspnet:8.0',
    service: 'ASP.NET Core Web API',
    status: 'HEALTHY',
    icon: <Server className="w-3.5 h-3.5 text-docker-bright" />,
  },
  {
    id: 'c-sql',
    name: 'SQL_SERVER',
    port: '1433',
    image: 'mcr.microsoft.com/mssql/server:2022',
    service: 'MS SQL Server (ACID)',
    status: 'RUNNING',
    icon: <Database className="w-3.5 h-3.5 text-docker-soft" />,
  },
  {
    id: 'c-redis',
    name: 'REDIS_CACHE',
    port: '6379',
    image: 'redis:7.2-alpine',
    service: 'Distributed Memory Tier',
    status: 'HEALTHY',
    icon: <Zap className="w-3.5 h-3.5 text-amber-400" />,
  },
  {
    id: 'c-auth',
    name: 'IDENTITY_SVC',
    port: '5001',
    image: 'custom/identity-auth:v1',
    service: 'JWT & Claims Provider',
    status: 'RUNNING',
    icon: <Shield className="w-3.5 h-3.5 text-purple-400" />,
  },
  {
    id: 'c-settle',
    name: 'SETTLEMENT_WORKER',
    port: '9000',
    image: 'custom/installment-engine:v2',
    service: 'Installment Clearing Job',
    status: 'RUNNING',
    icon: <Activity className="w-3.5 h-3.5 text-emerald-400" />,
  },
  {
    id: 'c-mvc',
    name: 'OPERATIONAL_MVC',
    port: '5000',
    image: 'mcr.microsoft.com/dotnet/aspnet:8.0',
    service: 'Clinic & Car Management UI',
    status: 'RUNNING',
    icon: <Layers className="w-3.5 h-3.5 text-docker-blue" />,
  },
];

export const DockerWhaleInfrastructure: React.FC = () => {
  const [viewMode, setViewMode] = useState<'infrastructure' | 'portrait'>('infrastructure');
  const [activeContainer, setActiveContainer] = useState<ContainerNode>(CONTAINERS[0]);

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-docker-blue/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Floating Container Composition */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative bg-docker-surface/95 border border-docker-border rounded-2xl p-5 md:p-6 shadow-container-elevated backdrop-blur-md transition-colors"
      >
        {/* Top Header with Interactive View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-docker-border font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-status-running animate-pulse" />
            <span className="text-docker-white font-semibold tracking-wide">
              {viewMode === 'infrastructure'
                ? 'DOCKER_COMPOSE // PRODUCTION'
                : 'DEVELOPER_NODE // PORTRAIT_VIEW'}
            </span>
          </div>

          {/* Toggle Button Segmented Control */}
          <div className="flex items-center bg-docker-charcoal/90 p-1 rounded-lg border border-docker-border text-[11px]">
            <button
              type="button"
              onClick={() => setViewMode('infrastructure')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-mono ${
                viewMode === 'infrastructure'
                  ? 'bg-docker-blue text-white shadow-sm font-semibold'
                  : 'text-docker-muted hover:text-docker-white'
              }`}
              aria-label="Switch to Docker Infrastructure Deck"
              title="View Docker Whale & Containers"
            >
              <Container className="w-3.5 h-3.5" />
              <span>🐳 Docker Deck</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('portrait')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-mono ${
                viewMode === 'portrait'
                  ? 'bg-docker-blue text-white shadow-sm font-semibold'
                  : 'text-docker-muted hover:text-docker-white'
              }`}
              aria-label="Switch to Developer Portrait Image"
              title="View Personal Image"
            >
              <User className="w-3.5 h-3.5" />
              <span>👤 Personal Image</span>
            </button>
          </div>
        </div>

        {/* Dynamic Animated Content Body */}
        <AnimatePresence mode="wait">
          {viewMode === 'infrastructure' ? (
            /* VIEW A: DOCKER WHALE & SERVICES DECK */
            <motion.div
              key="infrastructure-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Cargo Containers Deck Grid */}
              <div className="my-5">
                <div className="text-[10px] font-mono text-docker-muted uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Containerized Services Deck</span>
                  <span className="text-docker-bright">{CONTAINERS.length} Active Services</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CONTAINERS.map((c) => {
                    const isSelected = activeContainer.id === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setActiveContainer(c)}
                        className={`p-2.5 rounded-lg border text-left transition-all font-mono text-xs focus:outline-none ${
                          isSelected
                            ? 'bg-docker-surface2 border-docker-blue shadow-docker-glow text-docker-white'
                            : 'bg-docker-charcoal/70 border-docker-border text-docker-muted hover:border-docker-borderBright hover:text-docker-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          {c.icon}
                          <span className="text-[9px] text-status-running bg-emerald-950/40 px-1 rounded">
                            :{c.port}
                          </span>
                        </div>
                        <div className="font-semibold truncate text-[11px] text-docker-white">
                          {c.name}
                        </div>
                        <div className="text-[9px] text-docker-muted truncate">{c.status}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Container Live Telemetry Inspector */}
              <div className="bg-docker-charcoal border border-docker-border rounded-xl p-3.5 font-mono text-xs mb-5">
                <div className="flex items-center justify-between mb-1 text-[11px]">
                  <span className="text-docker-muted">SELECTED_CONTAINER:</span>
                  <span className="text-status-running flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-running" />
                    STATUS: {activeContainer.status}
                  </span>
                </div>
                <div className="text-docker-white font-semibold text-sm">
                  {activeContainer.name}{' '}
                  <span className="text-docker-bright font-normal">
                    ({activeContainer.service})
                  </span>
                </div>
                <div className="text-[10px] text-docker-muted mt-1 truncate">
                  IMAGE: <span className="text-docker-soft">{activeContainer.image}</span>
                </div>
              </div>

              {/* Architectural Docker Whale SVG Profile */}
              <div className="relative pt-2">
                <svg
                  viewBox="0 0 540 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-md"
                  aria-label="Architectural Docker Whale Carrier Silhouette"
                >
                  <defs>
                    <linearGradient id="whaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2496ED" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#111A22" stopOpacity="0.95" />
                    </linearGradient>
                    <linearGradient id="containerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4DB3FF" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#2496ED" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2496ED" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#4DB3FF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#2496ED" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Top row */}
                  <rect
                    x="235"
                    y="10"
                    width="38"
                    height="20"
                    rx="2"
                    fill="url(#containerGrad)"
                    stroke="#4DB3FF"
                    strokeWidth="1"
                  />
                  <text
                    x="254"
                    y="24"
                    fill="#F5F7FA"
                    fontSize="8"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    API
                  </text>

                  <rect
                    x="277"
                    y="10"
                    width="38"
                    height="20"
                    rx="2"
                    fill="url(#containerGrad)"
                    stroke="#4DB3FF"
                    strokeWidth="1"
                  />
                  <text
                    x="296"
                    y="24"
                    fill="#F5F7FA"
                    fontSize="8"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    NET
                  </text>

                  {/* Middle row */}
                  <rect
                    x="193"
                    y="34"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#16212B"
                    stroke="#24313D"
                    strokeWidth="1"
                  />
                  <text
                    x="212"
                    y="48"
                    fill="#9AA7B2"
                    fontSize="8"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    AUTH
                  </text>

                  <rect
                    x="235"
                    y="34"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#16212B"
                    stroke="#2496ED"
                    strokeWidth="1"
                  />
                  <text
                    x="254"
                    y="48"
                    fill="#4DB3FF"
                    fontSize="8"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    CORE
                  </text>

                  <rect
                    x="277"
                    y="34"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#16212B"
                    stroke="#24313D"
                    strokeWidth="1"
                  />
                  <text
                    x="296"
                    y="48"
                    fill="#9AA7B2"
                    fontSize="8"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    SQL
                  </text>

                  <rect
                    x="319"
                    y="34"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#16212B"
                    stroke="#24313D"
                    strokeWidth="1"
                  />
                  <text
                    x="338"
                    y="48"
                    fill="#9AA7B2"
                    fontSize="8"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    CACHE
                  </text>

                  {/* Base row of containers */}
                  <rect
                    x="151"
                    y="58"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#111A22"
                    stroke="#24313D"
                    strokeWidth="1"
                  />
                  <text
                    x="170"
                    y="72"
                    fill="#9AA7B2"
                    fontSize="7"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    SVC_1
                  </text>

                  <rect
                    x="193"
                    y="58"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#111A22"
                    stroke="#24313D"
                    strokeWidth="1"
                  />
                  <text
                    x="212"
                    y="72"
                    fill="#9AA7B2"
                    fontSize="7"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    SVC_2
                  </text>

                  <rect
                    x="235"
                    y="58"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#111A22"
                    stroke="#2496ED"
                    strokeWidth="1"
                  />
                  <text
                    x="254"
                    y="72"
                    fill="#4DB3FF"
                    fontSize="7"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    EF_DAL
                  </text>

                  <rect
                    x="277"
                    y="58"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#111A22"
                    stroke="#24313D"
                    strokeWidth="1"
                  />
                  <text
                    x="296"
                    y="72"
                    fill="#9AA7B2"
                    fontSize="7"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    DAPPER
                  </text>

                  <rect
                    x="319"
                    y="58"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#111A22"
                    stroke="#24313D"
                    strokeWidth="1"
                  />
                  <text
                    x="338"
                    y="72"
                    fill="#9AA7B2"
                    fontSize="7"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    REDIS
                  </text>

                  <rect
                    x="361"
                    y="58"
                    width="38"
                    height="20"
                    rx="2"
                    fill="#111A22"
                    stroke="#24313D"
                    strokeWidth="1"
                  />
                  <text
                    x="380"
                    y="72"
                    fill="#9AA7B2"
                    fontSize="7"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    MQ
                  </text>

                  {/* Architectural Geometric Whale Body */}
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
                    fill="url(#whaleGrad)"
                    stroke="#2496ED"
                    strokeWidth="1.5"
                  />

                  {/* Tail Fluke */}
                  <path
                    d="M 75 118
                       C 60 125, 40 140, 20 148
                       C 15 150, 15 142, 22 136
                       C 35 125, 48 116, 55 94"
                    fill="#16212B"
                    stroke="#2496ED"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 55 94
                       C 40 82, 25 74, 16 72
                       C 12 70, 14 78, 22 84
                       C 35 94, 50 105, 65 110"
                    fill="#111A22"
                    stroke="#4DB3FF"
                    strokeWidth="1.2"
                  />

                  {/* Whale Eye */}
                  <circle cx="430" cy="104" r="3.5" fill="#4DB3FF" />
                  <circle cx="430" cy="104" r="1.5" fill="#F5F7FA" />

                  {/* Telemetry Steam */}
                  <line
                    x1="430"
                    y1="80"
                    x2="430"
                    y2="60"
                    stroke="#4DB3FF"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.7"
                  />
                  <circle cx="430" cy="56" r="2" fill="#4DB3FF" opacity="0.8" />
                  <circle cx="436" cy="48" r="1.5" fill="#8DD3FF" opacity="0.6" />
                  <circle cx="424" cy="42" r="1" fill="#4DB3FF" opacity="0.5" />

                  {/* Infrastructure Grid Waves */}
                  <line x1="20" y1="145" x2="520" y2="145" stroke="url(#wireGrad)" strokeWidth="1.5" />
                  <line
                    x1="40"
                    y1="152"
                    x2="500"
                    y2="152"
                    stroke="url(#wireGrad)"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                    opacity="0.5"
                  />
                  <line
                    x1="80"
                    y1="158"
                    x2="460"
                    y2="158"
                    stroke="url(#wireGrad)"
                    strokeWidth="0.8"
                    strokeDasharray="4 8"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* View Switch Button Action */}
              <button
                type="button"
                onClick={() => setViewMode('portrait')}
                className="w-full mt-4 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-docker-charcoal/80 hover:bg-docker-surface2 border border-docker-border hover:border-docker-blue/50 text-docker-bright text-xs font-mono transition-all group"
              >
                <User className="w-3.5 h-3.5 text-docker-blue group-hover:scale-110 transition-transform" />
                <span>Switch to Personal Image &bull; Developer Portrait</span>
              </button>
            </motion.div>
          ) : (
            /* VIEW B: DEVELOPER PORTRAIT & IDENTITY NODE (ENTIRE IMAGE DISPLAYED) */
            <motion.div
              key="portrait-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="my-4 space-y-4"
            >
              {/* Full Developer Portrait Frame (Shows entire body/image with zero head-only crop) */}
              <div className="relative rounded-xl border border-docker-border bg-docker-charcoal/90 p-3 sm:p-4 shadow-inner">
                {/* Blueprint Coordinates & Status Tag */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-docker-border/60 font-mono text-[10px]">
                  <span className="text-docker-bright flex items-center gap-1">
                    + [NODE: ADHAM_ALAA:latest]
                  </span>
                  <span className="text-status-running flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
                    HOST: 200 OK // READY
                  </span>
                </div>

                {/* Full Image Showcase Container (object-contain ensures 100% of the image appears) */}
                <div className="relative w-full flex items-center justify-center rounded-lg overflow-hidden bg-docker-bg/60 border border-docker-border/50 py-2 sm:py-3 min-h-[340px] sm:min-h-[400px]">
                  <img
                    src={personalData.portrait.src}
                    srcSet={personalData.portrait.srcset}
                    sizes={personalData.portrait.sizes}
                    alt={personalData.portrait.alt}
                    className="max-h-[360px] sm:max-h-[420px] w-auto h-auto max-w-full object-contain rounded-md shadow-2xl filter contrast-[1.03] transition-transform duration-300 hover:scale-[1.01]"
                    loading="eager"
                  />
                </div>

                {/* Identity Specs Banner (Below image, not obscuring the photo) */}
                <div className="mt-3 pt-3 border-t border-docker-border/70 flex items-center justify-between font-mono text-xs">
                  <div>
                    <div className="text-docker-white font-bold text-sm font-sans flex items-center gap-2">
                      <span>{personalData.name}</span>
                      <span className="text-[10px] font-mono text-docker-bright bg-docker-blue/15 border border-docker-blue/30 px-1.5 py-0.5 rounded">
                        BACK-END DEVELOPER
                      </span>
                    </div>
                    <div className="text-docker-muted text-[11px] font-mono mt-0.5">
                      Beni Suef / Cairo, Egypt &bull; Ready for deployment
                    </div>
                  </div>
                  <div className="text-right hidden sm:block font-mono text-[11px]">
                    <span className="text-docker-bright block font-semibold">C# / .NET 8 / SQL</span>
                    <span className="text-docker-muted text-[10px]">Clean Architecture</span>
                  </div>
                </div>
              </div>

              {/* Identity Node Telemetry Specs */}
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="bg-docker-charcoal/80 border border-docker-border rounded-xl p-3">
                  <div className="text-[10px] text-docker-muted uppercase flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-docker-blue" />
                    <span>Location & Base</span>
                  </div>
                  <div className="text-docker-white font-semibold text-xs">
                    {personalData.location}
                  </div>
                  <div className="text-[10px] text-status-running flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>{personalData.availability}</span>
                  </div>
                </div>

                <div className="bg-docker-charcoal/80 border border-docker-border rounded-xl p-3">
                  <div className="text-[10px] text-docker-muted uppercase flex items-center gap-1 mb-1">
                    <Cpu className="w-3 h-3 text-docker-bright" />
                    <span>Core Runtime</span>
                  </div>
                  <div className="text-docker-white font-semibold text-xs">
                    ASP.NET Core &bull; EF Core
                  </div>
                  <div className="text-[10px] text-docker-soft mt-1">
                    Dapper &bull; SQL Server &bull; Onion Arch
                  </div>
                </div>
              </div>

              {/* View Switch Button Action */}
              <button
                type="button"
                onClick={() => setViewMode('infrastructure')}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-docker-charcoal/80 hover:bg-docker-surface2 border border-docker-border hover:border-docker-blue/50 text-docker-bright text-xs font-mono transition-all group"
              >
                <Container className="w-3.5 h-3.5 text-docker-blue group-hover:scale-110 transition-transform" />
                <span>Switch to 🐳 Docker Whale & Container Deck</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Hardware Tagline */}
        <div className="pt-3 mt-1 border-t border-docker-border flex items-center justify-between font-mono text-[11px] text-docker-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docker-blue" />
            {viewMode === 'infrastructure'
              ? 'RUNTIME: .NET 8 / LINUX CONTAINERS'
              : 'IDENTITY: ADHAM ALAA // BACK-END .NET'}
          </span>
          <span className="text-docker-bright">
            {viewMode === 'infrastructure' ? 'ISOLATION: PROCESS_CONTAINED' : 'STATE: 100% ONLINE'}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

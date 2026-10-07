import React from 'react';
import { personalData } from '../data/personal';
import { ArrowRight, FileDown, Server, Database, ShieldCheck, Terminal, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:py-24 overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-azure-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Technical Narrative & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-carbon-900 border border-carbon-700/80 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-slate-300 font-medium">
                // 01 — IDENTITY &amp; CORE ARCHITECTURE
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white font-sans leading-[1.08]">
                {personalData.name}
              </h1>
              <p className="font-mono text-lg sm:text-2xl text-azure-400 mt-2 font-semibold tracking-tight">
                {personalData.role}
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              {personalData.positioningStatement}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              Specialized in ASP.NET Core, Entity Framework Core, Dapper, SQL Server, and Onion Architecture. Delivering audit-safe financial platforms, multi-partner settlement workflows, and operational enterprise backends.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-azure-600 hover:bg-azure-500 text-white font-sans font-medium text-sm transition-all duration-150 shadow-sm hover:shadow-glow-sm"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.cvUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-carbon-850 hover:bg-carbon-800 text-slate-200 hover:text-white border border-carbon-700 text-sm font-sans font-medium transition-colors"
              >
                <FileDown className="w-4 h-4 text-azure-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-slate-400 hover:text-white text-sm font-sans transition-colors"
              >
                <span>Direct Contact &rarr;</span>
              </a>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-carbon-800">
              {personalData.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-carbon-900/80 border border-carbon-800 rounded-lg p-3 hover:border-carbon-700 transition-colors"
                >
                  <div className="font-mono text-lg font-bold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-azure-400 font-mono mt-0.5">
                    {metric.label}
                  </div>
                  {metric.unit && (
                    <div className="text-[10px] text-slate-500 font-mono">{metric.unit}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Technical Frame */}
              <div className="relative rounded-2xl bg-carbon-900/90 border border-carbon-700 p-3 sm:p-4 shadow-2xl">
                {/* Frame Corner Crosshairs */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-azure-400/80" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-azure-400/80" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-azure-400/80" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-azure-400/80" />

                {/* Top Blueprint Bar */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-carbon-800 px-1 font-mono text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-azure-400">
                    <Terminal className="w-3 h-3" />
                    <span>ENGINEER_ID: AA_NET8_PROD</span>
                  </div>
                  <span className="text-emerald-400">ACTIVE: 200 OK</span>
                </div>

                {/* Portrait Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-carbon-950 aspect-[3/4] border border-carbon-800 group">
                  <img
                    src={personalData.portrait.src}
                    srcSet={personalData.portrait.srcset}
                    sizes={personalData.portrait.sizes}
                    alt={personalData.portrait.alt}
                    width={800}
                    height={1066}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:contrast-125 transition-all duration-300"
                  />

                  {/* Blueprint Vignette and Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent opacity-90" />

                  {/* Floating Architectural Annotation */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-carbon-900/90 border border-carbon-700/80 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-white font-semibold">Adham Alaa</span>
                      <span className="text-azure-400">.NET Developer</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        Beni Suef / Cairo, EG
                      </span>
                      <span>29.0661° N, 31.0994° E</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Frame Diagnostic Tags */}
                <div className="mt-3 pt-2 border-t border-carbon-800 flex items-center justify-between font-mono text-[10px] text-slate-400 px-1">
                  <span className="flex items-center gap-1">
                    <Server className="w-3 h-3 text-azure-400" />
                    ASP.NET Core
                  </span>
                  <span className="flex items-center gap-1">
                    <Database className="w-3 h-3 text-purple-400" />
                    SQL Server
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3 h-3" />
                    ACID
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

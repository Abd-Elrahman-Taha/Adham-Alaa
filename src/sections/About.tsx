import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { languagesData } from '../data/languages';
import { PipelineBridge } from '../components/PipelineBridge';
import { Box, Shield, Layers, Database, Cpu, Globe, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-docker-border bg-docker-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          label="RUNTIME PROFILE"
          title="Inside the Container"
          description="A look inside the developer environment: core identity, architectural discipline, and containerized backend specializations."
          badge="Container Spec // Active"
        />

        {/* The Master Container Frame */}
        <div className="bg-docker-surface border border-docker-border rounded-2xl overflow-hidden shadow-container-elevated">
          {/* Container Header Bar */}
          <div className="px-5 py-3.5 bg-docker-charcoal border-b border-docker-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Box className="w-4 h-4 text-docker-blue" />
              <span className="text-docker-white font-semibold">
                CONTAINER // adham-alaa-backend:latest
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-docker-muted">PORT: 8080/tcp</span>
              <span className="text-status-running flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
                STATUS: RUNNING (PID 1)
              </span>
            </div>
          </div>

          {/* 4 Internal Compartments Grid */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Top Narrative: Real Professional Summary */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-docker-white font-sans flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-docker-bright" />
                <span>The Backend Engineering Discipline</span>
              </h3>

              <p className="text-sm md:text-base text-docker-white/90 leading-relaxed font-sans">
                {personalData.summary}
              </p>

              <p className="text-xs sm:text-sm text-docker-muted leading-relaxed font-sans">
                I engineer backend systems with deliberate structure — clean layers, maintainable contracts, and production-grade reliability. In production systems, money is transferred, clinical appointments govern patient care, and contracts represent legal obligations. Every data schema, concurrency check, and business rule is engineered with strict invariants and explicit separation of concerns.
              </p>
            </div>

            {/* The 4 Architectural Quadrants */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              {/* Compartment 1: Identity */}
              <div className="bg-docker-charcoal/80 border border-docker-border rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-docker-border">
                  <span className="text-docker-bright font-bold text-[11px]">// 01: IDENTITY</span>
                  <Box className="w-3.5 h-3.5 text-docker-blue" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-docker-white font-semibold">{personalData.name}</div>
                  <div className="text-docker-muted">{personalData.role}</div>
                  <div className="text-[11px] text-docker-muted">Beni Suef Univ &bull; CS 3rd Year</div>
                  <div className="text-[10px] text-status-running">Cairo / Beni Suef, Egypt</div>
                </div>
              </div>

              {/* Compartment 2: Experience */}
              <div className="bg-docker-charcoal/80 border border-docker-border rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-docker-border">
                  <span className="text-docker-soft font-bold text-[11px]">// 02: EXPERIENCE</span>
                  <Cpu className="w-3.5 h-3.5 text-docker-soft" />
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="text-docker-white font-semibold">Al-Alamia Cars (2026)</div>
                  <div className="text-docker-muted">Fintech &amp; Installments Clearing</div>
                  <div className="text-docker-white font-semibold mt-1">Clinic System (2025–26)</div>
                  <div className="text-docker-muted">Multi-Role Healthcare Platform</div>
                </div>
              </div>

              {/* Compartment 3: Specialization */}
              <div className="bg-docker-charcoal/80 border border-docker-border rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-docker-border">
                  <span className="text-purple-400 font-bold text-[11px]">// 03: ARCHITECTURE</span>
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="text-docker-white font-semibold">Onion Architecture</div>
                  <div className="text-docker-muted">Repository &amp; Unit of Work</div>
                  <div className="text-docker-muted">ACID Financial Operations</div>
                  <div className="text-purple-300">Hybrid EF Core + Dapper</div>
                </div>
              </div>

              {/* Compartment 4: Tech Stack */}
              <div className="bg-docker-charcoal/80 border border-docker-border rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-docker-border">
                  <span className="text-amber-400 font-bold text-[11px]">// 04: STORAGE &amp; API</span>
                  <Database className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="text-docker-white font-semibold">C# &bull; ASP.NET Core</div>
                  <div className="text-docker-muted">SQL Server 2022 (15+ Tables)</div>
                  <div className="text-docker-muted">Redis Distributed Cache</div>
                  <div className="text-amber-300">Swagger &bull; IIS &bull; Postman</div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Linguistic Capabilities & Core Invariants */}
            <div className="pt-6 border-t border-docker-border flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-docker-blue" />
                <span className="text-docker-white font-semibold">LANGUAGES:</span>
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
                <span>Zero Memory Leaks &bull; Garbage Collected CLR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Transition Bridge to Projects */}
        <PipelineBridge
          currentStage="IMAGE_COMPILED"
          nextStage="CONTAINER_REGISTRY"
          description="Deploying business solutions into the container registry"
        />
      </div>
    </section>
  );
};

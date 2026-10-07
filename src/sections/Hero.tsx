import React from 'react';
import { personalData } from '../data/personal';
import { DockerWhaleInfrastructure } from '../components/DockerWhaleInfrastructure';
import { ArrowRight, FileDown, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:py-20 overflow-hidden bg-docker-bg"
    >
      {/* Background Container Grid & Subtle Infrastructure Glow */}
      <div className="absolute inset-0 bg-container-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-docker-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-docker-bright/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Containerized Identity & Positioning */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small Infrastructure Status Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-docker-charcoal border border-docker-border shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-running opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-status-running"></span>
              </span>
              <span className="font-mono text-xs text-docker-white font-medium tracking-wide">
                CONTAINERIZED &bull; DEPLOYED &bull; PRODUCTION READY
              </span>
            </div>

            {/* Main Heading & Role */}
            <div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-docker-white font-sans leading-[1.06]">
                {personalData.name}
              </h1>
              <p className="font-mono text-lg sm:text-2xl text-docker-bright mt-2 font-semibold tracking-tight">
                {personalData.role}
              </p>
            </div>

            {/* Infrastructure Headline & Supporting Narrative */}
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl text-docker-white font-semibold font-sans tracking-tight">
                Building backend software that runs anywhere.
              </p>
              <p className="text-sm sm:text-base text-docker-muted leading-relaxed font-sans max-w-xl">
                {personalData.positioningStatement}
              </p>
              <p className="text-xs sm:text-sm text-docker-muted/80 leading-relaxed max-w-lg font-sans">
                Hands-on engineering across ASP.NET Core, Entity Framework Core, Dapper, SQL Server, and Onion Architecture. Specializing in high-concurrency installment engines, multi-partner clearing, and reliable operational backends.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-docker-blue hover:bg-docker-bright text-white font-sans font-medium text-sm transition-all duration-150 shadow-sm hover:shadow-docker-glow"
              >
                <span>Inspect Registry (Projects)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.cvUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-docker-charcoal hover:bg-docker-surface text-docker-white border border-docker-border text-sm font-sans font-medium transition-colors"
              >
                <FileDown className="w-4 h-4 text-docker-blue" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-docker-muted hover:text-docker-white text-sm font-sans transition-colors font-mono"
              >
                <span>Deploy &rarr;</span>
              </a>
            </div>

            {/* Container Telemetry Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-docker-border font-mono">
              <div className="bg-docker-surface/80 border border-docker-border rounded-lg p-2.5">
                <span className="text-[10px] text-docker-muted block">IMAGE_TAG</span>
                <span className="text-xs font-bold text-docker-white">net8:latest</span>
                <span className="text-[9px] text-status-running block mt-0.5">● COMPILED</span>
              </div>

              <div className="bg-docker-surface/80 border border-docker-border rounded-lg p-2.5">
                <span className="text-[10px] text-docker-muted block">ARCHITECTURE</span>
                <span className="text-xs font-bold text-docker-bright">Onion Core</span>
                <span className="text-[9px] text-docker-muted block mt-0.5">ISOLATED</span>
              </div>

              <div className="bg-docker-surface/80 border border-docker-border rounded-lg p-2.5">
                <span className="text-[10px] text-docker-muted block">STORAGE</span>
                <span className="text-xs font-bold text-docker-white">SQL + Redis</span>
                <span className="text-[9px] text-docker-soft block mt-0.5">ACID COMPLIANT</span>
              </div>

              <div className="bg-docker-surface/80 border border-docker-border rounded-lg p-2.5">
                <span className="text-[10px] text-docker-muted block">CREDENTIAL</span>
                <span className="text-xs font-bold text-status-running">150 hrs C44</span>
                <span className="text-[9px] text-docker-muted block mt-0.5">ROUTE ACADEMY</span>
              </div>
            </div>

            {/* Developer Identity Chip */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-docker-border bg-docker-charcoal flex-shrink-0">
                <img
                  src={personalData.portrait.src}
                  alt={personalData.portrait.alt}
                  className="w-full h-full object-cover grayscale"
                  loading="eager"
                />
              </div>
              <div className="font-mono text-xs">
                <span className="text-docker-white font-semibold block">{personalData.name}</span>
                <span className="text-docker-muted text-[11px] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-docker-blue" />
                  Beni Suef / Cairo, Egypt &bull; Ready for deployment
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Docker Whale Flagship Visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <DockerWhaleInfrastructure />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { personalData } from '../data/personal';
import { ArrowUp, Terminal, ShieldCheck, Box, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-docker-charcoal border-t border-docker-border text-docker-muted font-sans mt-20">
      {/* Top Deployment Status Strip */}
      <div className="w-full bg-docker-surface border-b border-docker-border py-2.5 px-4 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-status-running font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>BUILD COMPLETE // STATUS: SUCCESS (0 ERRORS)</span>
          </div>
          <span className="hidden sm:inline text-docker-muted text-[11px]">
            DEPLOYMENT: PROD_RELEASE_2026 &bull; DOCKER_ENGINE // HEALTHY
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-docker-border">
          {/* Identity Column with Architectural Whale Signature Motif */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-docker-surface border border-docker-border flex items-center justify-center font-mono font-bold text-docker-white text-xs shadow-inner">
                <Box className="w-4 h-4 text-docker-blue" />
              </div>
              <div>
                <span className="text-docker-white font-semibold text-base block font-sans">
                  {personalData.name}
                </span>
                <span className="font-mono text-xs text-docker-bright">
                  {personalData.role}
                </span>
              </div>
            </div>

            <p className="text-xs text-docker-muted max-w-sm leading-relaxed font-sans">
              Architecting production-grade, container-ready backend software with clean Onion Architecture, high-concurrency SQL Server data layers, and domain-driven design.
            </p>

            {/* Small Architectural Whale Signature */}
            <div className="flex items-center gap-3 pt-1">
              <svg
                width="64"
                height="28"
                viewBox="0 0 120 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70"
                aria-label="Docker Whale Signature Motif"
              >
                {/* Containers */}
                <rect x="45" y="4" width="12" height="7" rx="1" fill="#4DB3FF" />
                <rect x="60" y="4" width="12" height="7" rx="1" fill="#2496ED" />
                <rect x="35" y="14" width="12" height="7" rx="1" fill="#16212B" stroke="#2496ED" strokeWidth="0.8" />
                <rect x="50" y="14" width="12" height="7" rx="1" fill="#2496ED" />
                <rect x="65" y="14" width="12" height="7" rx="1" fill="#4DB3FF" />
                <rect x="80" y="14" width="12" height="7" rx="1" fill="#16212B" stroke="#2496ED" strokeWidth="0.8" />
                {/* Whale hull */}
                <path
                  d="M 25 24 L 98 24 C 104 24, 110 28, 112 33 C 114 36, 112 39, 107 40 C 95 42, 85 41, 65 39 C 45 37, 30 40, 18 35 C 14 33, 12 30, 14 27 C 16 25, 20 25, 25 24 Z"
                  fill="#16212B"
                  stroke="#2496ED"
                  strokeWidth="1"
                />
                <circle cx="104" cy="31" r="1.5" fill="#4DB3FF" />
              </svg>
              <span className="font-mono text-[10px] text-docker-muted">
                CONTAINERIZED_SYSTEMS &bull; DEVOPS INFRASTRUCTURE
              </span>
            </div>
          </div>

          {/* Infrastructure Specifications */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-docker-white font-semibold uppercase tracking-wider text-[11px]">
              System Specifications
            </div>
            <ul className="space-y-2 text-docker-muted">
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-docker-blue" />
                <span>Runtime: ASP.NET Core &bull; .NET 8 (Linux Containers)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Architecture: Onion Model &bull; Repository Pattern</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-status-running" />
                <span>Storage: SQL Server 2022 (ACID) &bull; Redis 7.2</span>
              </li>
            </ul>
          </div>

          {/* Quick jump & back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-docker-surface hover:bg-docker-surface2 text-docker-white border border-docker-border text-xs font-mono transition-colors focus:outline-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-docker-blue" />
            </button>

            <div className="text-left md:text-right font-mono text-[11px] text-docker-muted">
              <span>Cairo &bull; Beni Suef, Egypt</span>
              <br />
              <span className="text-docker-bright">HOST: Kestrel Engine</span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-docker-muted gap-4">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-docker-bright">
            <span>Production Container Architecture &bull; React + TypeScript + Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ArchitectureExplorer } from '../components/ArchitectureExplorer';
import { Shield, GitCommit, Zap } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-20 md:py-32 border-t border-carbon-800/80 bg-carbon-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="04"
          label="ARCHITECTURAL FOUNDATION"
          title="Deliberate Structure &amp; Clean Contracts"
          description="A deep look into how I organize backend codebases to ensure decoupling, long-term testability, and resilient data access."
          badge="Design Principles"
        />

        {/* Interactive Architecture Explorer Component */}
        <ArchitectureExplorer />

        {/* Architectural Principles Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 shadow-panel">
            <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-700 text-azure-400 w-fit mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2 font-sans">
              Strict Domain Invariants
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Domain models guard their own state. Aggregate roots prevent invalid state mutations, guaranteeing that business rules are enforced before any persistence call occurs.
            </p>
          </div>

          <div className="bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 shadow-panel">
            <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-700 text-purple-400 w-fit mb-4">
              <GitCommit className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2 font-sans">
              Unit of Work &amp; ACID Safety
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              All multi-entity database operations (like installment contract payouts or multi-partner equity splits) run inside atomic transactions that rollback automatically upon any fault.
            </p>
          </div>

          <div className="bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 shadow-panel">
            <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-700 text-emerald-400 w-fit mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2 font-sans">
              CQRS-Inspired Hybrid Queries
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Write workflows leverage Entity Framework Core change-tracking, while read-heavy reports and financial aggregations bypass tracking with raw Dapper micro-ORM queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

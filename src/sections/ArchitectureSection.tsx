import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ArchitectureExplorer } from '../components/ArchitectureExplorer';
import { PipelineBridge } from '../components/PipelineBridge';
import { Shield, GitCommit, Zap } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-20 md:py-32 border-t border-docker-border bg-docker-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="03"
          label="SERVICE ARCHITECTURE"
          title="Service Topology &amp; Clean Contracts"
          description="A deep look into how I organize backend codebases to ensure decoupling, long-term testability, and resilient containerized data access."
          badge="Design Principles"
        />

        {/* Interactive Architecture & Topology Explorer */}
        <ArchitectureExplorer />

        {/* Architectural Principles Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-docker-surface border border-docker-border rounded-2xl p-6 shadow-container">
            <div className="p-2.5 rounded-xl bg-docker-charcoal border border-docker-border text-docker-bright w-fit mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-docker-white mb-2 font-sans">
              Strict Domain Invariants
            </h4>
            <p className="text-xs sm:text-sm text-docker-muted leading-relaxed font-sans">
              Domain models guard their own state. Aggregate roots prevent invalid state mutations, guaranteeing that business rules are enforced before any persistence call occurs.
            </p>
          </div>

          <div className="bg-docker-surface border border-docker-border rounded-2xl p-6 shadow-container">
            <div className="p-2.5 rounded-xl bg-docker-charcoal border border-docker-border text-purple-400 w-fit mb-4">
              <GitCommit className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-docker-white mb-2 font-sans">
              Unit of Work &amp; ACID Safety
            </h4>
            <p className="text-xs sm:text-sm text-docker-muted leading-relaxed font-sans">
              All multi-entity database operations (like installment contract payouts or multi-partner equity splits) run inside atomic transactions that rollback automatically upon any fault.
            </p>
          </div>

          <div className="bg-docker-surface border border-docker-border rounded-2xl p-6 shadow-container">
            <div className="p-2.5 rounded-xl bg-docker-charcoal border border-docker-border text-status-running w-fit mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-docker-white mb-2 font-sans">
              CQRS-Inspired Hybrid Queries
            </h4>
            <p className="text-xs sm:text-sm text-docker-muted leading-relaxed font-sans">
              Write workflows leverage Entity Framework Core change-tracking, while read-heavy reports and financial aggregations bypass tracking with raw Dapper micro-ORM queries.
            </p>
          </div>
        </div>

        <PipelineBridge
          currentStage="TOPOLOGY_MAPPED"
          nextStage="CONTAINER_STACK"
          description="Exploring the 6-layer container software stack"
        />
      </div>
    </section>
  );
};

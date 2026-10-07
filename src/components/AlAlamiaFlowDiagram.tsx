import React, { useState } from 'react';
import { Car, Users, Receipt, Banknote, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WorkflowStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  dbEntities: string[];
  businessRule: string;
}

const STAGES: WorkflowStage[] = [
  {
    id: 'ingestion',
    step: 'STAGE_01',
    title: 'Vehicle Acquisition & Ingestion',
    subtitle: 'Inventory Cataloging',
    icon: <Car className="w-4 h-4 text-docker-bright" />,
    dbEntities: ['Cars', 'VehicleAppraisals', 'CostItems'],
    businessRule:
      'Generates unique vehicle record, assigns cost basis, and links maintenance/inspection expenditures.',
  },
  {
    id: 'partners',
    step: 'STAGE_02',
    title: 'Partner Equity Allocation',
    subtitle: 'Multi-Partner Capital Shares',
    icon: <Users className="w-4 h-4 text-purple-400" />,
    dbEntities: ['Partners', 'CarPartnerShares', 'CapitalLedger'],
    businessRule:
      'Dynamically binds multiple investor shares ensuring 100% equity total, recorded with immutable audit lines.',
  },
  {
    id: 'contract',
    step: 'STAGE_03',
    title: 'Sales Contract Structuring',
    subtitle: 'Cash / Deferred / Installment',
    icon: <Receipt className="w-4 h-4 text-amber-400" />,
    dbEntities: ['SalesContracts', 'Customers', 'InstallmentTerms'],
    businessRule:
      'Selects payment pathway. If installment, calculates principal, interest rates, down payments, and term limits.',
  },
  {
    id: 'amortization',
    step: 'STAGE_04',
    title: 'Installment Settlement Engine',
    subtitle: 'Automated Schedule Generation',
    icon: <Banknote className="w-4 h-4 text-status-running" />,
    dbEntities: ['InstallmentSchedules', 'Payments', 'Penalties'],
    businessRule:
      'Generates monthly payment milestones, calculates late penalty fees, and enforces atomic settlement receipts.',
  },
  {
    id: 'treasury',
    step: 'STAGE_05',
    title: 'Treasury & Partner Clearing',
    subtitle: 'Dynamic Dividend Payout',
    icon: <ShieldCheck className="w-4 h-4 text-docker-blue" />,
    dbEntities: ['TreasuryTransactions', 'BankAccounts', 'PartnerPayouts'],
    businessRule:
      'ACID transaction settles treasury balance, deducts costs, and resolves dividend payouts to each partner.',
  },
];

export const AlAlamiaFlowDiagram: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('contract');
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[2];

  return (
    <div className="w-full bg-docker-charcoal border border-docker-border rounded-xl p-4 md:p-6 shadow-container">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-docker-border gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-docker-blue animate-pulse" />
          <h4 className="font-mono text-xs text-docker-white font-semibold uppercase tracking-wider">
            AUTOMOTIVE CLEARING PIPELINE &bull; ACID TRANSACTIONS
          </h4>
        </div>
        <span className="font-mono text-[11px] text-docker-muted bg-docker-surface px-2.5 py-0.5 rounded border border-docker-border">
          ORCHESTRATION: UnitOfWork.CompleteAsync()
        </span>
      </div>

      {/* Pipeline Steps Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 my-4">
        {STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-docker-surface border-docker-blue shadow-docker-glow text-docker-white'
                  : 'bg-docker-surface/40 border-docker-border text-docker-muted hover:text-docker-white hover:bg-docker-surface'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-docker-muted uppercase">
                  {stage.step}
                </span>
                {stage.icon}
              </div>
              <div className="text-xs font-semibold text-docker-white truncate">{stage.title}</div>
              <div className="text-[10px] text-docker-muted truncate mt-0.5">{stage.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="bg-docker-surface border border-docker-border rounded-xl p-4 md:p-5 flex flex-col md:flex-row gap-5 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs text-docker-bright font-semibold">
              {activeStage.step}:
            </span>
            <h5 className="text-base font-bold text-docker-white font-sans">{activeStage.title}</h5>
          </div>
          <p className="text-xs sm:text-sm text-docker-white/90 leading-relaxed font-sans">
            {activeStage.businessRule}
          </p>
        </div>

        {/* Database Entities Badge Group */}
        <div className="bg-docker-charcoal border border-docker-border rounded-lg p-3 min-w-[220px]">
          <div className="text-[10px] font-mono text-docker-muted mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-status-running" />
            <span>RELATIONAL SQL SCHEMAS</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {activeStage.dbEntities.map((tbl) => (
              <span
                key={tbl}
                className="font-mono text-[11px] text-docker-bright bg-docker-surface px-2 py-0.5 rounded border border-docker-border"
              >
                dbo.{tbl}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary Rail */}
      <div className="mt-3 pt-3 border-t border-docker-border flex items-center justify-between text-[11px] font-mono text-docker-muted">
        <div className="flex items-center gap-1.5">
          <ArrowRight className="w-3.5 h-3.5 text-status-running" />
          <span>Execution: Repository Pattern &amp; Unit of Work CompleteAsync()</span>
        </div>
        <span className="hidden sm:inline text-docker-bright">Engine: EF Core + Dapper Hybrid</span>
      </div>
    </div>
  );
};

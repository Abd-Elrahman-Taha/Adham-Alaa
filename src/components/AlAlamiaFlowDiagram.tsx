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
    step: 'Stage 01',
    title: 'Vehicle Acquisition & Ingestion',
    subtitle: 'Inventory Cataloging',
    icon: <Car className="w-5 h-5 text-azure-400" />,
    dbEntities: ['Cars', 'VehicleAppraisals', 'CostItems'],
    businessRule:
      'Generates unique vehicle record, assigns cost basis, and links maintenance/inspection expenditures.',
  },
  {
    id: 'partners',
    step: 'Stage 02',
    title: 'Partner Equity Allocation',
    subtitle: 'Multi-Partner Capital Shares',
    icon: <Users className="w-5 h-5 text-purple-400" />,
    dbEntities: ['Partners', 'CarPartnerShares', 'CapitalLedger'],
    businessRule:
      'Dynamically binds multiple investor shares ensuring 100% equity total, recorded with immutable audit lines.',
  },
  {
    id: 'contract',
    step: 'Stage 03',
    title: 'Sales Contract Structuring',
    subtitle: 'Cash / Deferred / Installment',
    icon: <Receipt className="w-5 h-5 text-amber-400" />,
    dbEntities: ['SalesContracts', 'Customers', 'InstallmentTerms'],
    businessRule:
      'Selects payment pathway. If installment, calculates principal, interest rates, down payments, and term limits.',
  },
  {
    id: 'amortization',
    step: 'Stage 04',
    title: 'Installment Settlement Engine',
    subtitle: 'Automated Schedule Generation',
    icon: <Banknote className="w-5 h-5 text-emerald-400" />,
    dbEntities: ['InstallmentSchedules', 'Payments', 'Penalties'],
    businessRule:
      'Generates monthly payment milestones, calculates late penalty fees, and enforces atomic settlement receipts.',
  },
  {
    id: 'treasury',
    step: 'Stage 05',
    title: 'Treasury & Partner Clearing',
    subtitle: 'Dynamic Dividend Payout',
    icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
    dbEntities: ['TreasuryTransactions', 'BankAccounts', 'PartnerPayouts'],
    businessRule:
      'ACID transaction settles treasury balance, deducts costs, and resolves dividend payouts to each partner.',
  },
];

export const AlAlamiaFlowDiagram: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('contract');
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[2];

  return (
    <div className="w-full bg-carbon-900 border border-carbon-700/80 rounded-2xl p-5 md:p-6 shadow-panel">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-carbon-800 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-azure-400 animate-pulse" />
          <h4 className="font-mono text-xs text-white font-semibold uppercase tracking-wider">
            Automotive Dealership &amp; Multi-Partner Clearing Pipeline
          </h4>
        </div>
        <span className="font-mono text-[11px] text-slate-400 bg-carbon-850 px-2.5 py-1 rounded border border-carbon-800">
          ACID Database Transactions Guaranteed
        </span>
      </div>

      {/* Pipeline Steps Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 my-5">
        {STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-carbon-800 border-azure-400 shadow-glow-sm text-white'
                  : 'bg-carbon-950/60 border-carbon-800 text-slate-400 hover:text-white hover:bg-carbon-850'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-slate-500 uppercase">
                  {stage.step}
                </span>
                {stage.icon}
              </div>
              <div className="text-xs font-semibold text-white truncate">{stage.title}</div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">{stage.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="bg-carbon-950 border border-carbon-800 rounded-xl p-4 md:p-5 flex flex-col md:flex-row gap-5 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs text-azure-400 font-semibold">
              {activeStage.step}:
            </span>
            <h5 className="text-base font-bold text-white font-sans">{activeStage.title}</h5>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeStage.businessRule}
          </p>
        </div>

        {/* Database Entities Badge Group */}
        <div className="bg-carbon-900 border border-carbon-800 rounded-lg p-3.5 min-w-[240px]">
          <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>RELATIONAL SQL ENTITIES</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {activeStage.dbEntities.map((tbl) => (
              <span
                key={tbl}
                className="font-mono text-[11px] text-azure-300 bg-carbon-850 px-2 py-0.5 rounded border border-carbon-700"
              >
                dbo.{tbl}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary Rail */}
      <div className="mt-4 pt-3 border-t border-carbon-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          <span>Execution: Repository Pattern &amp; Unit of Work CompleteAsync()</span>
        </div>
        <span className="hidden sm:inline">Engine: EF Core + Dapper Hybrid</span>
      </div>
    </div>
  );
};

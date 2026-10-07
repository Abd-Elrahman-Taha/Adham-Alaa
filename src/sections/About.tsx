import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { languagesData } from '../data/languages';
import { Shield, Layers, Database, Cpu, Globe, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-carbon-800/80 bg-carbon-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          label="ENGINEERING IDENTITY"
          title="Engineered for Reliability, Scalability & Precision"
          description="A behind-the-scenes look at my development philosophy, technical foundations, and domain specializations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 md:p-8 shadow-panel">
              <h3 className="text-xl font-bold text-white mb-4 font-sans flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-azure-400" />
                <span>The Backend Engineering Discipline</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm md:text-base font-sans mb-4">
                {personalData.summary}
              </p>

              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm font-sans">
                I do not treat backend development as simple CRUD operations. In production systems, money is transferred, clinical appointments govern real people's healthcare, and contracts represent legal obligations. Every data schema, concurrency check, and business rule is engineered with strict invariants and explicit separation of concerns.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-carbon-800">
                <div className="p-4 rounded-xl bg-carbon-950 border border-carbon-800">
                  <div className="flex items-center gap-2 text-azure-400 font-mono text-xs font-semibold mb-1">
                    <Layers className="w-4 h-4" />
                    <span>ONION ARCHITECTURE</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Decoupling domain business rules entirely from data storage, UI, or external providers for long-term maintainability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-carbon-950 border border-carbon-800">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold mb-1">
                    <Database className="w-4 h-4" />
                    <span>HYBRID EF CORE + DAPPER</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pairing Entity Framework Core for complex transactional writes with Dapper for raw, sub-5ms analytical reporting.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-carbon-900 border border-carbon-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-carbon-850 border border-carbon-700 text-azure-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Linguistic Proficiency</h4>
                  <p className="text-xs text-slate-400">Multilingual communication &amp; collaboration</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {languagesData.map((lang) => (
                  <div
                    key={lang.id}
                    className="bg-carbon-950 px-3 py-1.5 rounded-lg border border-carbon-800 font-mono text-xs"
                  >
                    <span className="text-white font-semibold">{lang.language}: </span>
                    <span className="text-azure-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Technical Profile & Telemetry Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 shadow-panel space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-carbon-800">
                <span className="font-mono text-xs text-azure-400 uppercase font-semibold">
                  // QUICK FACTS &bull; PROFILE
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-carbon-950 border border-carbon-800">
                  <span className="text-slate-400">Specialization:</span>
                  <span className="text-white font-semibold">Back-End .NET Development</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-carbon-950 border border-carbon-800">
                  <span className="text-slate-400">Primary Language:</span>
                  <span className="text-azure-400 font-semibold">C# (.NET 8 &amp; .NET 9)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-carbon-950 border border-carbon-800">
                  <span className="text-slate-400">Database Engine:</span>
                  <span className="text-white font-semibold">Microsoft SQL Server</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-carbon-950 border border-carbon-800">
                  <span className="text-slate-400">Academic Standing:</span>
                  <span className="text-purple-300 font-semibold">CS Undergraduate (Beni Suef Univ)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-carbon-950 border border-carbon-800">
                  <span className="text-slate-400">Track Credential:</span>
                  <span className="text-emerald-400 font-semibold">Route Academy C44 (150 hrs)</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Key Engineering Strengths
                </div>
                <div className="space-y-2">
                  {[
                    'Onion Architecture & Domain Separation',
                    'High-concurrency ACID Financial Transactions',
                    'Stored Procedures, Triggers & Database Tuning',
                    'JWT Auth & Role-Based Access Control',
                    'Redis Distributed In-Memory Caching',
                  ].map((strength, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-azure-400 flex-shrink-0" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Operational Commitment Box */}
            <div className="p-5 rounded-xl bg-carbon-900/60 border border-carbon-800 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-azure-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-slate-300 leading-relaxed font-sans">
                <span className="text-white font-semibold block mb-0.5">Reliability Contract:</span>
                I write maintainable code adhering to SOLID principles, dependency inversion, and strict compiler warnings. Ready to plug into existing development teams or deliver greenfield backends.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { projectsData } from '../data/projects';
import { AlAlamiaFlowDiagram } from '../components/AlAlamiaFlowDiagram';
import { ClinicDrumPreview } from '../components/ClinicDrumPreview';
import { ClinicGalleryModal } from '../components/ClinicGalleryModal';
import { ApiEndpointSimulator } from '../components/ApiEndpointSimulator';
import {
  Car,
  Receipt,
  Landmark,
  Users,
  Activity,
  Calendar,
  Clock,
  Lock,
  Database,
  Filter,
  ShoppingCart,
  Server,
  Layers,
  ArrowRight,
  ShieldCheck,
  BarChart3,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  car: <Car className="w-4 h-4 text-azure-400" />,
  receipt: <Receipt className="w-4 h-4 text-emerald-400" />,
  bank: <Landmark className="w-4 h-4 text-purple-400" />,
  users: <Users className="w-4 h-4 text-amber-400" />,
  activity: <Activity className="w-4 h-4 text-rose-400" />,
  calendar: <Calendar className="w-4 h-4 text-teal-400" />,
  clock: <Clock className="w-4 h-4 text-indigo-400" />,
  lock: <Lock className="w-4 h-4 text-purple-400" />,
  database: <Database className="w-4 h-4 text-azure-400" />,
  filter: <Filter className="w-4 h-4 text-amber-400" />,
  'shopping-cart': <ShoppingCart className="w-4 h-4 text-emerald-400" />,
  server: <Server className="w-4 h-4 text-teal-400" />,
  'bar-chart': <BarChart3 className="w-4 h-4 text-azure-400" />,
};

export const ProjectsSection: React.FC = () => {
  const [clinicModalOpen, setClinicModalOpen] = useState<boolean>(false);
  const [clinicActiveIndex, setClinicActiveIndex] = useState<number>(0);

  const alalamia = projectsData.find((p) => p.id === 'al-alamia-cars') || projectsData[0];
  const clinic = projectsData.find((p) => p.id === 'clinic-management') || projectsData[1];
  const ecommerce = projectsData.find((p) => p.id === 'ecommerce-api') || projectsData[2];

  const handleOpenClinicModal = (idx: number) => {
    setClinicActiveIndex(idx);
    setClinicModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-carbon-800/80 bg-carbon-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Section Top Header */}
        <SectionHeading
          number="03"
          label="ENGINEERED SYSTEMS"
          title="Production Systems & Architectural Showcases"
          description="Detailed inspection of real-world backend architectures: multi-partner automotive finance, operational clinic logistics, and scalable REST API design."
          badge="Production Ready"
        />

        {/* ========================================================
            PROJECT 01: AL-ALAMIA CARS
           ======================================================== */}
        <div id="al-alamia-cars" className="space-y-8 scroll-mt-24">
          {/* Project Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-carbon-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-semibold text-azure-400 bg-azure-950/60 border border-azure-500/30 px-2.5 py-1 rounded">
                  PROJECT {alalamia.number} &bull; {alalamia.category}
                </span>
                <span className="font-mono text-xs text-slate-400">Freelance Contract &bull; 2026</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
                {alalamia.title}
              </h3>
              <p className="text-base text-azure-300 font-sans mt-1">
                {alalamia.subtitle}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-2 flex-wrap">
              {alalamia.metrics?.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-carbon-900 border border-carbon-800 px-3 py-1.5 rounded-lg text-xs font-mono"
                >
                  <span className="text-slate-400 block text-[10px]">{m.label}</span>
                  <span className="text-white font-semibold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Flow Diagram Component */}
          <AlAlamiaFlowDiagram />

          {/* Project Narrative & Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5 bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 shadow-panel">
              <h4 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-azure-400" />
                <span>Architecture &amp; Financial Solvency</span>
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {alalamia.description}
              </p>

              <div className="p-4 bg-carbon-950 rounded-xl border border-carbon-800 space-y-2">
                <div className="text-xs font-mono text-azure-400 font-semibold uppercase">
                  ARCHITECTURAL RATIONALE:
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {alalamia.architectureNotes}
                </p>
              </div>

              {alalamia.operationalValue && (
                <div className="p-4 bg-carbon-950 rounded-xl border border-emerald-500/20">
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase mb-1">
                    OPERATIONAL VALUE IMPACT:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {alalamia.operationalValue}
                  </p>
                </div>
              )}
            </div>

            {/* Right Feature Modules */}
            <div className="lg:col-span-7 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                Key Technical Modules
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {alalamia.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-carbon-900 border border-carbon-800 rounded-xl p-4 hover:border-carbon-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-carbon-850 border border-carbon-700">
                        {ICON_MAP[feat.iconName || 'receipt'] || (
                          <Receipt className="w-4 h-4 text-azure-400" />
                        )}
                      </div>
                      <h5 className="text-sm font-semibold text-white leading-tight font-sans">
                        {feat.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs text-slate-500 mr-2">Core Stack:</span>
                {alalamia.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs bg-carbon-900 text-slate-300 px-3 py-1 rounded-md border border-carbon-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROJECT 02: CLINIC MANAGEMENT SYSTEM
           ======================================================== */}
        <div id="clinic-management" className="space-y-8 pt-12 border-t border-carbon-800/80 scroll-mt-24">
          {/* Project Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-carbon-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded">
                  PROJECT {clinic.number} &bull; {clinic.category}
                </span>
                <span className="font-mono text-xs text-slate-400">Freelance Contract &bull; 2025–2026</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
                {clinic.title}
              </h3>
              <p className="text-base text-emerald-300 font-sans mt-1">
                {clinic.subtitle}
              </p>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-2 flex-wrap">
              {clinic.metrics?.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-carbon-900 border border-carbon-800 px-3 py-1.5 rounded-lg text-xs font-mono"
                >
                  <span className="text-slate-400 block text-[10px]">{m.label}</span>
                  <span className="text-white font-semibold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Care Workflow Rail */}
          <div className="bg-carbon-900 border border-carbon-800 rounded-xl p-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>SYNCHRONIZED CARE &amp; STAFF TIMELINE</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono whitespace-nowrap text-slate-300">
              {clinic.flowSteps?.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="bg-carbon-950 px-3 py-1.5 rounded-md border border-carbon-800">
                    {idx + 1}. {step}
                  </span>
                  {idx < (clinic.flowSteps?.length || 0) - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mirrored Composition: Visual Preview Left, Details Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Screenshot Stack Preview (Left Column) */}
            <div className="lg:col-span-6 space-y-4">
              <ClinicDrumPreview
                images={clinic.images || []}
                onOpenModal={handleOpenClinicModal}
              />

              {/* Administrative Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-carbon-900 border border-carbon-800 rounded-xl p-4">
                  <h5 className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-1">
                    How The Day Runs
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Front-desk, treatment staff, and administration share one timeline, giving a clear day-level view of what is booked, attended, missed, consumed, or still pending.
                  </p>
                </div>
                <div className="bg-carbon-900 border border-carbon-800 rounded-xl p-4">
                  <h5 className="text-xs font-mono uppercase text-azure-400 font-semibold mb-1">
                    Administrative Value
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    By replacing fragmented manual follow-up with one backend source of truth, the clinic runs with cleaner scheduling, faster status checks, and stronger daily control.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative & Feature Breakdown (Right Column) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 shadow-panel space-y-4">
                <h4 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span>Operations-First Clinical Architecture</span>
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {clinic.description}
                </p>

                <div className="p-4 bg-carbon-950 rounded-xl border border-carbon-800">
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase mb-1">
                    DATABASE &amp; ACCESS CONTROL:
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {clinic.architectureNotes}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {clinic.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-carbon-900/80 border border-carbon-800/80 rounded-xl p-3.5 hover:border-carbon-700 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-carbon-850 border border-carbon-700 mt-0.5 flex-shrink-0">
                      {ICON_MAP[feat.iconName || 'activity'] || (
                        <Activity className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white font-sans">
                        {feat.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5 font-sans">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies Badges */}
              <div className="pt-2 flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs text-slate-500 mr-2">Stack:</span>
                {clinic.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs bg-carbon-900 text-slate-300 px-3 py-1 rounded-md border border-carbon-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROJECT 03: E-COMMERCE REST API
           ======================================================== */}
        <div id="ecommerce-api" className="space-y-8 pt-12 border-t border-carbon-800/80 scroll-mt-24">
          {/* Project Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-carbon-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-semibold text-purple-400 bg-purple-950/60 border border-purple-500/30 px-2.5 py-1 rounded">
                  PROJECT {ecommerce.number} &bull; {ecommerce.category}
                </span>
                <span className="font-mono text-xs text-slate-400">Route Academy Track C44 &bull; 2025</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
                {ecommerce.title}
              </h3>
              <p className="text-base text-purple-300 font-sans mt-1">
                {ecommerce.subtitle}
              </p>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-2 flex-wrap">
              {ecommerce.metrics?.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-carbon-900 border border-carbon-800 px-3 py-1.5 rounded-lg text-xs font-mono"
                >
                  <span className="text-slate-400 block text-[10px]">{m.label}</span>
                  <span className="text-white font-semibold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive API Simulator */}
          <ApiEndpointSimulator />

          {/* Details & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 shadow-panel space-y-4">
              <h4 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                <span>RESTful Architecture &amp; Caching</span>
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {ecommerce.description}
              </p>

              <div className="p-4 bg-carbon-950 rounded-xl border border-carbon-800">
                <div className="text-xs font-mono text-purple-400 font-semibold uppercase mb-1">
                  SPECIFICATION &amp; REPOSITORY LAYER:
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ecommerce.architectureNotes}
                </p>
              </div>

              {ecommerce.operationalValue && (
                <div className="p-4 bg-carbon-950 rounded-xl border border-carbon-800 text-xs text-slate-400">
                  <span className="text-slate-300 font-semibold block mb-1">Value Delivered:</span>
                  {ecommerce.operationalValue}
                </div>
              )}
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                Core Architectural Highlights
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ecommerce.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-carbon-900 border border-carbon-800 rounded-xl p-4 hover:border-carbon-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-carbon-850 border border-carbon-700">
                        {ICON_MAP[feat.iconName || 'server'] || (
                          <Server className="w-4 h-4 text-purple-400" />
                        )}
                      </div>
                      <h5 className="text-sm font-semibold text-white font-sans">
                        {feat.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs text-slate-500 mr-2">Technologies:</span>
                {ecommerce.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs bg-carbon-900 text-slate-300 px-3 py-1 rounded-md border border-carbon-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for 10 Real Clinic Screenshots */}
      <ClinicGalleryModal
        isOpen={clinicModalOpen}
        currentIndex={clinicActiveIndex}
        onIndexChange={setClinicActiveIndex}
        onClose={() => setClinicModalOpen(false)}
        images={clinic.images || []}
      />
    </section>
  );
};

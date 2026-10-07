import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { projectsData } from '../data/projects';
import { AlAlamiaFlowDiagram } from '../components/AlAlamiaFlowDiagram';
import { ClinicScreenshotDeck } from '../components/ClinicScreenshotDeck';
import { ClinicGalleryModal } from '../components/ClinicGalleryModal';
import { ApiEndpointSimulator } from '../components/ApiEndpointSimulator';
import { PipelineBridge } from '../components/PipelineBridge';
import {
  Box,
  Receipt,
  Car,
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
  car: <Car className="w-4 h-4 text-docker-bright" />,
  receipt: <Receipt className="w-4 h-4 text-emerald-400" />,
  bank: <Landmark className="w-4 h-4 text-purple-400" />,
  users: <Users className="w-4 h-4 text-amber-400" />,
  activity: <Activity className="w-4 h-4 text-rose-400" />,
  calendar: <Calendar className="w-4 h-4 text-teal-400" />,
  clock: <Clock className="w-4 h-4 text-indigo-400" />,
  lock: <Lock className="w-4 h-4 text-purple-400" />,
  database: <Database className="w-4 h-4 text-docker-soft" />,
  filter: <Filter className="w-4 h-4 text-amber-400" />,
  'shopping-cart': <ShoppingCart className="w-4 h-4 text-emerald-400" />,
  server: <Server className="w-4 h-4 text-teal-400" />,
  'bar-chart': <BarChart3 className="w-4 h-4 text-docker-bright" />,
};

export const ProjectsSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [clinicModalOpen, setClinicModalOpen] = useState<boolean>(false);
  const [clinicActiveIndex, setClinicActiveIndex] = useState<number>(0);

  const alalamia = projectsData.find((p) => p.id === 'al-alamia-cars') || projectsData[0];
  const clinic = projectsData.find((p) => p.id === 'clinic-management') || projectsData[1];
  const ecommerce = projectsData.find((p) => p.id === 'ecommerce-api') || projectsData[2];

  const handleOpenClinicModal = (idx: number) => {
    setClinicActiveIndex(idx);
    setClinicModalOpen(true);
  };

  const showAlalamia = filterCategory === 'all' || filterCategory === 'enterprise';
  const showClinic = filterCategory === 'all' || filterCategory === 'operational';
  const showEcommerce = filterCategory === 'all' || filterCategory === 'api';

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-docker-border bg-docker-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-docker-border">
          <SectionHeading
            number="02"
            label="DEPLOYED IMAGES"
            title="Container Registry"
            description="Verified production backend systems and architectures packaged into isolated, maintainable container solutions."
            badge="Registry Active"
          />

          {/* Registry Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 font-mono text-xs">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg border transition-colors whitespace-nowrap focus:outline-none ${
                filterCategory === 'all'
                  ? 'bg-docker-blue text-white border-docker-blue shadow-docker-glow'
                  : 'bg-docker-surface text-docker-muted border-docker-border hover:text-docker-white'
              }`}
            >
              ALL_IMAGES (3)
            </button>
            <button
              onClick={() => setFilterCategory('enterprise')}
              className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap focus:outline-none ${
                filterCategory === 'enterprise'
                  ? 'bg-docker-blue text-white border-docker-blue shadow-docker-glow'
                  : 'bg-docker-surface text-docker-muted border-docker-border hover:text-docker-white'
              }`}
            >
              FINTECH &bull; CARS
            </button>
            <button
              onClick={() => setFilterCategory('operational')}
              className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap focus:outline-none ${
                filterCategory === 'operational'
                  ? 'bg-docker-blue text-white border-docker-blue shadow-docker-glow'
                  : 'bg-docker-surface text-docker-muted border-docker-border hover:text-docker-white'
              }`}
            >
              OPERATIONAL &bull; CLINIC
            </button>
            <button
              onClick={() => setFilterCategory('api')}
              className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap focus:outline-none ${
                filterCategory === 'api'
                  ? 'bg-docker-blue text-white border-docker-blue shadow-docker-glow'
                  : 'bg-docker-surface text-docker-muted border-docker-border hover:text-docker-white'
              }`}
            >
              MICROSERVICES &bull; API
            </button>
          </div>
        </div>

        {/* ========================================================
            IMAGE 01: AL-ALAMIA CARS (Large Featured Container)
           ======================================================== */}
        {showAlalamia && (
          <div id="al-alamia-cars" className="space-y-6 scroll-mt-24">
            {/* Registry Card Header */}
            <div className="bg-docker-surface border border-docker-border rounded-2xl overflow-hidden shadow-container">
              <div className="px-5 py-3.5 bg-docker-charcoal border-b border-docker-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <Box className="w-4 h-4 text-docker-blue" />
                  <span className="text-docker-white font-semibold">
                    IMAGE: al-alamia-cars:latest
                  </span>
                  <span className="text-docker-muted text-[11px] hidden sm:inline">
                    TAG: sha256:7f4a0c8b &bull; DIGEST: OK
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-status-running flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
                    ● BUILD SUCCESS
                  </span>
                  <span className="text-docker-bright bg-docker-blue/15 px-2 py-0.5 rounded border border-docker-blue/30">
                    PORT: 5000:80/tcp
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs text-docker-bright uppercase font-bold">
                    // REGISTRY_IMAGE_01 &bull; {alalamia.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-docker-white font-sans mt-1">
                    {alalamia.title}
                  </h3>
                  <p className="text-sm sm:text-base text-docker-soft font-sans mt-0.5">
                    {alalamia.subtitle}
                  </p>
                </div>

                {/* Interactive Automotive & Clearing Flow */}
                <AlAlamiaFlowDiagram />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                  <div className="lg:col-span-5 bg-docker-charcoal/80 border border-docker-border rounded-xl p-5 space-y-3 font-sans">
                    <h4 className="text-sm font-mono uppercase text-docker-bright font-bold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Architecture &amp; Solvency Specs</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-docker-white/90 leading-relaxed">
                      {alalamia.description}
                    </p>
                    <p className="text-xs text-docker-muted leading-relaxed">
                      {alalamia.architectureNotes}
                    </p>
                    {alalamia.operationalValue && (
                      <div className="p-3 bg-docker-surface rounded-lg border border-emerald-500/20 text-xs text-docker-muted mt-2">
                        <strong className="text-status-running block font-mono text-[11px] mb-0.5">
                          OPERATIONAL IMPACT:
                        </strong>
                        {alalamia.operationalValue}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-7 space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-docker-muted">
                      Container Submodules &bull; Service Endpoints
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {alalamia.keyFeatures.map((feat, idx) => (
                        <div
                          key={idx}
                          className="bg-docker-charcoal/60 border border-docker-border rounded-lg p-3 hover:border-docker-borderBright transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            {ICON_MAP[feat.iconName || 'receipt'] || (
                              <Receipt className="w-3.5 h-3.5 text-docker-blue" />
                            )}
                            <h5 className="text-xs font-semibold text-docker-white font-sans">
                              {feat.title}
                            </h5>
                          </div>
                          <p className="text-[11px] text-docker-muted leading-relaxed font-sans">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-1.5 flex-wrap font-mono text-xs">
                      <span className="text-docker-muted text-[11px] mr-1">STACK:</span>
                      {alalamia.technologies.map((t) => (
                        <span
                          key={t}
                          className="bg-docker-surface text-docker-white px-2.5 py-0.5 rounded border border-docker-border text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            IMAGE 02: CLINIC MANAGEMENT SYSTEM (Horizontal Stack)
           ======================================================== */}
        {showClinic && (
          <div id="clinic-management" className="space-y-6 scroll-mt-24">
            <div className="bg-docker-surface border border-docker-border rounded-2xl overflow-hidden shadow-container">
              <div className="px-5 py-3.5 bg-docker-charcoal border-b border-docker-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <Box className="w-4 h-4 text-docker-soft" />
                  <span className="text-docker-white font-semibold">
                    IMAGE: clinic-platform:production
                  </span>
                  <span className="text-docker-muted text-[11px] hidden sm:inline">
                    TAG: sha256:4b91d29e &bull; 10 Production Views
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-status-running flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
                    ● BUILD SUCCESS
                  </span>
                  <span className="text-docker-bright bg-docker-blue/15 px-2 py-0.5 rounded border border-docker-blue/30">
                    PORT: 8080:80/tcp
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs text-status-ready uppercase font-bold">
                    // REGISTRY_IMAGE_02 &bull; {clinic.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-docker-white font-sans mt-1">
                    {clinic.title}
                  </h3>
                  <p className="text-sm sm:text-base text-status-ready font-sans mt-0.5">
                    {clinic.subtitle}
                  </p>
                </div>

                {/* Primary Care Workflow Rail */}
                <div className="bg-docker-charcoal border border-docker-border rounded-xl p-3.5 overflow-x-auto">
                  <div className="flex items-center gap-2 text-xs font-mono text-status-ready mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-ready" />
                    <span>CARE WORKFLOW &bull; SERVICE PIPELINE</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-mono whitespace-nowrap text-docker-white/90">
                    {clinic.flowSteps?.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="bg-docker-surface px-2.5 py-1 rounded border border-docker-border text-[11px]">
                          {idx + 1}. {step}
                        </span>
                        {idx < (clinic.flowSteps?.length || 0) - 1 && (
                          <ArrowRight className="w-3 h-3 text-docker-muted flex-shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Two-Part Layout: Left = Project Information, Right = Screenshot Deck */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Project Information & Architectural Specs */}
                  <div className="lg:col-span-6 space-y-4 font-sans">
                    <div className="bg-docker-charcoal/80 border border-docker-border rounded-xl p-5 space-y-3">
                      <h4 className="text-sm font-mono uppercase text-status-ready font-bold flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        <span>Operations Backend Architecture</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-docker-white/90 leading-relaxed">
                        {clinic.description}
                      </p>
                      <p className="text-xs text-docker-muted leading-relaxed">
                        {clinic.architectureNotes}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-docker-muted px-1">
                        Clinical Platform Submodules
                      </div>
                      {clinic.keyFeatures.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 bg-docker-charcoal/60 border border-docker-border rounded-lg p-2.5"
                        >
                          <div className="p-1.5 rounded bg-docker-surface border border-docker-border mt-0.5 flex-shrink-0">
                            {ICON_MAP[feat.iconName || 'activity'] || (
                              <Activity className="w-3.5 h-3.5 text-status-ready" />
                            )}
                          </div>
                          <div>
                            <h5 className="text-xs font-semibold text-docker-white">{feat.title}</h5>
                            <p className="text-[11px] text-docker-muted leading-relaxed mt-0.5">
                              {feat.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-1.5 flex-wrap font-mono text-xs">
                      <span className="text-docker-muted text-[11px] mr-1">STACK:</span>
                      {clinic.technologies.map((t) => (
                        <span
                          key={t}
                          className="bg-docker-surface text-docker-white px-2.5 py-0.5 rounded border border-docker-border text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans pt-1">
                      <div className="bg-docker-charcoal/80 border border-docker-border rounded-lg p-3">
                        <strong className="text-status-ready font-mono text-[11px] block mb-1">
                          OPERATIONAL TIMELINE:
                        </strong>
                        <p className="text-docker-muted text-[11px] leading-relaxed">
                          Front-desk, treatment staff, and admins share one synchronized timeline with live status tracking.
                        </p>
                      </div>
                      <div className="bg-docker-charcoal/80 border border-docker-border rounded-lg p-3">
                        <strong className="text-docker-bright font-mono text-[11px] block mb-1">
                          LEDGER ACCURACY:
                        </strong>
                        <p className="text-docker-muted text-[11px] leading-relaxed">
                          Zero session over-redemption through strict referential integrity and quota deductions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive UI Screenshot Deck */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="bg-docker-charcoal/70 border border-docker-border rounded-2xl p-4 sm:p-5 shadow-container">
                      <ClinicScreenshotDeck
                        images={clinic.images || []}
                        onOpenModal={handleOpenClinicModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            IMAGE 03: E-COMMERCE REST API (API Simulator)
           ======================================================== */}
        {showEcommerce && (
          <div id="ecommerce-api" className="space-y-6 scroll-mt-24">
            <div className="bg-docker-surface border border-docker-border rounded-2xl overflow-hidden shadow-container">
              <div className="px-5 py-3.5 bg-docker-charcoal border-b border-docker-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <Box className="w-4 h-4 text-purple-400" />
                  <span className="text-docker-white font-semibold">
                    IMAGE: ecommerce-api:v1.0
                  </span>
                  <span className="text-docker-muted text-[11px] hidden sm:inline">
                    TAG: sha256:1a8b3e5c &bull; Route Academy C44 Track
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-status-running flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
                    ● BUILD SUCCESS
                  </span>
                  <span className="text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/30">
                    PORT: 443:443/tcp
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs text-purple-400 uppercase font-bold">
                    // REGISTRY_IMAGE_03 &bull; {ecommerce.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-docker-white font-sans mt-1">
                    {ecommerce.title}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-300 font-sans mt-0.5">
                    {ecommerce.subtitle}
                  </p>
                </div>

                {/* Interactive API Telemetry Simulator */}
                <ApiEndpointSimulator />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start font-sans">
                  <div className="lg:col-span-5 bg-docker-charcoal/80 border border-docker-border rounded-xl p-5 space-y-3">
                    <h4 className="text-sm font-mono uppercase text-purple-400 font-bold flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      <span>RESTful Architecture &amp; Caching</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-docker-white/90 leading-relaxed">
                      {ecommerce.description}
                    </p>
                    <p className="text-xs text-docker-muted leading-relaxed">
                      {ecommerce.architectureNotes}
                    </p>
                  </div>

                  <div className="lg:col-span-7 space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-docker-muted">
                      Microservice Modules &bull; Endpoints
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ecommerce.keyFeatures.map((feat, idx) => (
                        <div
                          key={idx}
                          className="bg-docker-charcoal/60 border border-docker-border rounded-lg p-3"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {ICON_MAP[feat.iconName || 'server'] || (
                              <Server className="w-3.5 h-3.5 text-purple-400" />
                            )}
                            <h5 className="text-xs font-semibold text-docker-white">{feat.title}</h5>
                          </div>
                          <p className="text-[11px] text-docker-muted leading-relaxed font-sans">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-1.5 flex-wrap font-mono text-xs">
                      <span className="text-docker-muted text-[11px] mr-1">STACK:</span>
                      {ecommerce.technologies.map((t) => (
                        <span
                          key={t}
                          className="bg-docker-surface text-docker-white px-2 py-0.5 rounded border border-docker-border text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lightbox Modal for 10 Real Clinic Screenshots */}
        <ClinicGalleryModal
          isOpen={clinicModalOpen}
          currentIndex={clinicActiveIndex}
          onIndexChange={setClinicActiveIndex}
          onClose={() => setClinicModalOpen(false)}
          images={clinic.images || []}
        />

        {/* Transition Bridge to Experience Deployments */}
        <PipelineBridge
          currentStage="REGISTRY_VERIFIED"
          nextStage="DEPLOYMENT_PIPELINE"
          description="Transitioning to production freelance deployment stages"
        />
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
  Activity,
} from 'lucide-react';

interface ClinicScreenshotDeckProps {
  images: string[];
  onOpenModal: (index: number) => void;
}

const MODULE_VIEWS = [
  {
    number: '01',
    title: 'Operational Reception Dashboard',
    role: 'Receptionist & Admin View',
    description: 'Real-time patient check-in queue, active session tracker, and clinic capacity.',
  },
  {
    number: '02',
    title: 'Clinical Assessment & Diagnostics',
    role: 'Doctor & Practitioner View',
    description: 'Structured patient medical intake, clinical examination findings, and diagnosis notes.',
  },
  {
    number: '03',
    title: 'Package Ledger & Quota Tracker',
    role: 'Financial & Treatment Ledger',
    description: 'Automated session deductions verifying active treatment package balances.',
  },
  {
    number: '04',
    title: 'Scheduling Integrity & Calendar',
    role: 'Operational Booking Rail',
    description: 'Collision-free time slot reservation and appointment status state machine.',
  },
  {
    number: '05',
    title: 'Doctor Shift Attendance Engine',
    role: 'Intern & Staff Log',
    description: 'Per-session clinical hours auditing and intern doctor shift verifications.',
  },
  {
    number: '06',
    title: 'Receptionist Shift Handover Audit',
    role: 'Administration Control',
    description: 'Front-desk shift punch records and daily cash settlement reconciliation.',
  },
  {
    number: '07',
    title: 'Patient Longitudinal Profile',
    role: 'Medical History Record',
    description: 'Multi-visit timeline showing clinical progressions, assigned packages, and past treatments.',
  },
  {
    number: '08',
    title: 'Treatment Session Billing & Invoicing',
    role: 'Financial Audit Rail',
    description: 'Itemized procedure invoicing linked directly to verified patient visit IDs.',
  },
  {
    number: '09',
    title: 'Executive Operational Summary',
    role: 'Management Analytics',
    description: 'Daily KPIs measuring completed visits, cancellations, and doctor utilization.',
  },
  {
    number: '10',
    title: 'System RBAC Privileges & Config',
    role: 'Superadmin Security',
    description: 'Role-based access matrix isolating receptionist, doctor, and admin privileges.',
  },
];

export const ClinicScreenshotDeck: React.FC<ClinicScreenshotDeckProps> = ({
  images,
  onOpenModal,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const total = images.length;
  const currentModule = MODULE_VIEWS[activeIndex] || MODULE_VIEWS[0];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Stack of 4 cards to show behind the active one
  const stackOffsets = [0, 1, 2, 3];

  return (
    <div className="w-full space-y-4 select-none">
      {/* Top Deck Telemetry Bar */}
      <div className="flex items-center justify-between px-1 font-mono text-xs text-docker-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-status-ready animate-pulse" />
          <span className="text-docker-white font-semibold">
            APPLICATION_DECK // {currentModule.number}_OF_{total}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-status-ready bg-status-ready/10 border border-status-ready/30 px-2 py-0.5 rounded text-[11px]">
            {currentModule.role}
          </span>
          <button
            onClick={() => onOpenModal(activeIndex)}
            className="hidden sm:flex items-center gap-1 text-[11px] text-docker-bright bg-docker-charcoal hover:bg-docker-surface border border-docker-border px-2 py-0.5 rounded transition-colors"
            title="Open Fullscreen Lightbox"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Layered Card Stack Viewport */}
      <div
        className="relative h-64 sm:h-72 md:h-80 w-full flex items-center justify-center cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onOpenModal(activeIndex)}
      >
        {/* Layered Screenshots Stack */}
        <div className="relative w-full max-w-lg h-full flex items-center justify-center">
          {stackOffsets.map((offset) => {
            const index = (activeIndex + offset) % total;
            const imgSrc = images[index];

            // Controlled depth transformations
            const zIndex = 30 - offset * 8;
            const spreadX = isHovered ? offset * 26 : offset * 14;
            const spreadY = isHovered ? offset * -10 : offset * -6;
            const spreadRotate = isHovered ? (offset === 0 ? -1.5 : offset * 3) : offset * 1.5;
            const scale = 1 - offset * 0.055;
            const opacity = offset === 0 ? 1 : 0.88 - offset * 0.22;

            return (
              <motion.div
                key={`${index}-${offset}`}
                animate={{
                  x: spreadX,
                  y: spreadY,
                  rotate: spreadRotate,
                  scale,
                  opacity,
                }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                style={{ zIndex }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (offset === 0) {
                    onOpenModal(activeIndex);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                className={`absolute w-[86%] sm:w-[84%] h-[82%] sm:h-[86%] rounded-xl overflow-hidden border transition-shadow duration-300 ${
                  offset === 0
                    ? 'border-docker-blue/60 shadow-2xl shadow-docker-blue/20 ring-1 ring-docker-blue/30'
                    : 'border-docker-border/70 shadow-lg bg-docker-charcoal'
                }`}
              >
                {/* Real MVC Application Screenshot */}
                <img
                  src={imgSrc}
                  alt={`Clinic management view ${index + 1}`}
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="lazy"
                />

                {/* Subtle Glassmorphic Overlay for Non-Active Cards */}
                {offset > 0 && (
                  <div className="absolute inset-0 bg-docker-bg/40 backdrop-blur-[1px] hover:bg-transparent transition-colors" />
                )}

                {/* Corner Badge on Main Card */}
                {offset === 0 && (
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 font-mono text-[10px] bg-docker-charcoal/90 text-docker-white px-2 py-0.5 rounded border border-docker-border/60 backdrop-blur-sm">
                    <Activity className="w-3 h-3 text-status-ready" />
                    <span>VIEW {MODULE_VIEWS[index]?.number}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Floating Quick Action Overlay */}
        <div className="absolute bottom-2 inset-x-0 flex items-center justify-center pointer-events-none z-40">
          <div className="bg-docker-surface/90 border border-docker-border/90 px-3 py-1 rounded-full backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] font-mono text-docker-bright pointer-events-auto group-hover:border-docker-blue transition-colors">
            <Layers className="w-3.5 h-3.5 text-docker-blue" />
            <span>Click cards to cycle &bull; Space to expand</span>
          </div>
        </div>

        {/* Navigation Arrow Controls */}
        <button
          onClick={handlePrev}
          type="button"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-docker-charcoal/90 hover:bg-docker-surface text-docker-white border border-docker-border shadow-xl backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none"
          aria-label="Previous application view"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-docker-bright" />
        </button>

        <button
          onClick={handleNext}
          type="button"
          className="absolute right-1 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-docker-charcoal/90 hover:bg-docker-surface text-docker-white border border-docker-border shadow-xl backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none"
          aria-label="Next application view"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-docker-bright" />
        </button>
      </div>

      {/* Active Module Details Strip */}
      <div className="bg-docker-charcoal border border-docker-border rounded-xl p-3.5 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-status-ready">
                MODULE_{currentModule.number}:
              </span>
              <h5 className="text-sm font-bold text-docker-white font-sans">
                {currentModule.title}
              </h5>
            </div>
            <p className="text-xs text-docker-muted mt-1 font-sans leading-relaxed">
              {currentModule.description}
            </p>
          </div>

          <span className="text-xs font-mono font-bold text-docker-bright px-2 py-1 bg-docker-surface rounded border border-docker-border flex-shrink-0">
            {currentModule.number} / {total}
          </span>
        </div>

        {/* 10 Thumbnail Navigation Indicators */}
        <div className="pt-2 border-t border-docker-border/60 flex items-center gap-1.5 overflow-x-auto">
          {images.map((_, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  isCurrent
                    ? 'w-7 bg-status-ready shadow-sm'
                    : 'w-2 bg-docker-border hover:bg-docker-muted'
                }`}
                aria-label={`Jump to view ${idx + 1}`}
                title={MODULE_VIEWS[idx]?.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface ClinicGalleryModalProps {
  isOpen: boolean;
  initialIndex?: number;
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  images: string[];
}

const CAPTIONS: string[] = [
  'Operational Reception Dashboard — Real-time clinic occupancy, daily patient queue, and appointment status.',
  'Clinical Assessment View — Structured doctor evaluations, diagnostic records, and treatment prescriptions.',
  'Package Ledger & Quota Tracker — Active treatment packages, consumed sessions, and remaining balance entitlement.',
  'Scheduling & Calendar Rules — Operating slot availability, appointment validation, and attendance logging.',
  'Intern Doctor Attendance — Working session timestamps, verified shift attendance, and practitioner payroll logs.',
  'Receptionist Shift Audit — Controlled punch-in/out workflows and shift handoff tracking for clinic admins.',
  'Patient Longitudinal Profile — Comprehensive care history, assigned treatment programs, and audit trail.',
  'Treatment Session Billing & Invoicing — Integrated financial records linked to individual patient visits.',
  'Administrative Operational Summary — Executive KPI overview of daily treatments, cancellations, and staff hours.',
  'Comprehensive System Settings — Role privileges, clinic operating hours, and package configuration.',
];

export const ClinicGalleryModal: React.FC<ClinicGalleryModalProps> = ({
  isOpen,
  currentIndex,
  onIndexChange,
  onClose,
  images,
}) => {
  const handlePrev = useCallback(() => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl bg-carbon-900 border border-carbon-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-carbon-950 border-b border-carbon-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-azure-400 font-semibold bg-azure-950/40 border border-azure-500/20 px-2.5 py-1 rounded">
              SCREENSHOT {currentIndex + 1} OF {images.length}
            </span>
            <span className="text-sm font-semibold text-white hidden sm:inline">
              Clinic Management System — Operational UI
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-carbon-800 transition-colors focus:outline-none focus:ring-2 focus:ring-azure-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] sm:min-h-[460px] overflow-hidden p-2 sm:p-4">
          <img
            src={images[currentIndex]}
            alt={`Clinic System interface view ${currentIndex + 1}`}
            className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl border border-carbon-800"
          />

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-carbon-900/80 hover:bg-carbon-800 text-white border border-carbon-700/80 backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-carbon-900/80 hover:bg-carbon-800 text-white border border-carbon-700/80 backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Metadata */}
        <div className="px-5 py-3.5 bg-carbon-950 border-t border-carbon-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-white">Module: </span>
            {CAPTIONS[currentIndex] || 'Clinic Management Operations'}
          </p>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 self-end sm:self-auto">
            <Eye className="w-3.5 h-3.5 text-azure-400" />
            <span>Actual ASP.NET Core MVC Production Interface</span>
          </div>
        </div>

        {/* Thumbnails strip */}
        <div className="p-3 bg-carbon-900 border-t border-carbon-800 flex items-center gap-2 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onIndexChange(idx)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-azure-400 ring-2 ring-azure-400/30 scale-105'
                  : 'border-carbon-700 opacity-60 hover:opacity-100 hover:border-slate-500'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

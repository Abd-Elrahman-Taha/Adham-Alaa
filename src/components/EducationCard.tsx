import React from 'react';
import type { EducationItem } from '../types/portfolio';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface EducationCardProps {
  item: EducationItem;
}

export const EducationCard: React.FC<EducationCardProps> = ({ item }) => {
  return (
    <div className="bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 md:p-8 shadow-panel">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-carbon-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-semibold text-azure-400 bg-azure-950/60 border border-azure-500/30 px-2.5 py-0.5 rounded">
              Academic Foundation
            </span>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
              {item.status}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">
            {item.institution}
          </h3>

          <div className="text-sm font-semibold text-slate-300 mt-1 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-azure-400" />
            <span>{item.degree} — {item.field}</span>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-1.5 bg-carbon-850 px-2.5 py-1 rounded border border-carbon-800">
            <Calendar className="w-3.5 h-3.5 text-azure-400" />
            <span>{item.period}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
          Academic Specialization &amp; Foundational Study
        </h4>
        <div className="space-y-2.5">
          {item.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-carbon-800 flex items-center justify-between font-mono text-xs text-slate-500">
        <span>Expected Graduation: {item.expectedGraduation}</span>
        <span className="text-azure-400">Computer Science Major</span>
      </div>
    </div>
  );
};

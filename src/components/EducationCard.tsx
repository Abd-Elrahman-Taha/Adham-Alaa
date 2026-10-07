import React from 'react';
import type { EducationItem } from '../types/portfolio';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Box } from 'lucide-react';

interface EducationCardProps {
  item: EducationItem;
}

export const EducationCard: React.FC<EducationCardProps> = ({ item }) => {
  return (
    <div className="bg-docker-surface border border-docker-border rounded-2xl p-6 md:p-8 shadow-container">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-docker-border">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="font-semibold text-docker-bright bg-docker-blue/15 border border-docker-blue/30 px-2.5 py-0.5 rounded flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5 text-docker-blue" />
              ACADEMIC_FOUNDATION
            </span>
            <span className="text-status-running bg-emerald-950/40 border border-status-running/30 px-2 py-0.5 rounded text-[11px]">
              {item.status}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-docker-white tracking-tight font-sans">
            {item.institution}
          </h3>

          <div className="text-sm font-semibold text-docker-soft mt-1 flex items-center gap-2 font-sans">
            <GraduationCap className="w-4 h-4 text-docker-blue" />
            <span>{item.degree} — {item.field}</span>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 font-mono text-xs text-docker-muted">
          <div className="flex items-center gap-1.5 bg-docker-charcoal px-2.5 py-1 rounded border border-docker-border">
            <Calendar className="w-3.5 h-3.5 text-docker-blue" />
            <span>{item.period}</span>
          </div>
          <div className="flex items-center gap-1.5 text-docker-muted/80">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3 font-sans">
        <h4 className="font-mono text-xs uppercase tracking-wider text-docker-muted">
          Academic Specialization &amp; Foundational Study
        </h4>
        <div className="space-y-2">
          {item.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-docker-white/90">
              <CheckCircle2 className="w-4 h-4 text-status-running mt-0.5 flex-shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-docker-border flex items-center justify-between font-mono text-xs text-docker-muted">
        <span>EXPECTED_GRADUATION: {item.expectedGraduation}</span>
        <span className="text-docker-bright">MAJOR: Computer Science</span>
      </div>
    </div>
  );
};

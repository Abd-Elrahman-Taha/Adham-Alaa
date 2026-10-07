import React from 'react';
import type { ExperienceItem } from '../types/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => {
  return (
    <div className="relative group bg-carbon-900 border border-carbon-700/80 hover:border-azure-500/50 rounded-2xl p-6 md:p-8 shadow-panel hover:shadow-glow-sm transition-all duration-300">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-carbon-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-semibold text-azure-400 bg-azure-950/60 border border-azure-500/30 px-2.5 py-0.5 rounded">
              Contract 0{index + 1}
            </span>
            <span className="font-mono text-xs text-slate-400">{item.type}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">
            {item.role}
          </h3>

          <div className="text-base font-semibold text-azure-300 mt-0.5 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-azure-400" />
            <span>{item.company}</span>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end gap-2 font-mono text-xs text-slate-400">
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

      {/* Summary */}
      <p className="text-sm md:text-base text-slate-300 leading-relaxed my-5 font-sans">
        {item.summary}
      </p>

      {/* Responsibilities list */}
      <div className="space-y-4 mb-6">
        <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-azure-400" />
          <span>Core Engineering Responsibilities</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {item.responsibilities.map((resp, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 bg-carbon-950/60 p-3 rounded-lg border border-carbon-800/80 text-xs text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-azure-400 mt-1.5 flex-shrink-0" />
              <span>{resp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Points if available */}
      {item.impactPoints && item.impactPoints.length > 0 && (
        <div className="bg-carbon-950 border border-emerald-500/20 rounded-xl p-4 mb-6">
          <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Measurable Engineering Impact</span>
          </h4>
          <ul className="space-y-2">
            {item.impactPoints.map((imp, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-emerald-400 font-bold mr-1">&bull;</span>
                <span>{imp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Architecture Patterns & Technologies */}
      <div className="pt-4 border-t border-carbon-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Architecture Badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[11px] mr-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Patterns:</span>
          </div>
          {item.architecturePatterns.map((pat) => (
            <span
              key={pat}
              className="font-mono text-[11px] text-purple-300 bg-purple-950/30 border border-purple-500/20 px-2 py-0.5 rounded"
            >
              {pat}
            </span>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-slate-300 bg-carbon-850 border border-carbon-700 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

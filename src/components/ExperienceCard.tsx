import React from 'react';
import type { ExperienceItem } from '../types/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers, ArrowRight, Box } from 'lucide-react';

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => {
  return (
    <div className="relative group bg-docker-surface border border-docker-border hover:border-docker-blue/60 rounded-2xl p-6 md:p-8 shadow-container hover:shadow-docker-glow transition-all duration-300">
      {/* Top Deployment Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-docker-border">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="font-semibold text-docker-bright bg-docker-blue/15 border border-docker-blue/30 px-2.5 py-0.5 rounded flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5 text-docker-blue" />
              DEPLOYMENT_0{index + 1}
            </span>
            <span className="text-docker-muted">{item.type}</span>
            <span className="text-status-running text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-status-running" />
              ● PRODUCTION DEPLOYED
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-docker-white tracking-tight font-sans">
            {item.role}
          </h3>

          <div className="text-base font-semibold text-docker-soft mt-0.5 flex items-center gap-2 font-sans">
            <Briefcase className="w-4 h-4 text-docker-blue" />
            <span>{item.company}</span>
          </div>
        </div>

        {/* Date and Location */}
        <div className="flex flex-row md:flex-col items-center md:items-end gap-2 font-mono text-xs text-docker-muted">
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

      {/* Deployment Pipeline Stepper */}
      <div className="py-3 px-4 my-5 bg-docker-charcoal border border-docker-border rounded-xl flex items-center justify-between font-mono text-[11px] overflow-x-auto">
        <div className="flex items-center gap-2 text-docker-muted">
          <span>1. IMAGE</span>
          <ArrowRight className="w-3 h-3 text-docker-muted/50" />
          <span>2. BUILD</span>
          <ArrowRight className="w-3 h-3 text-docker-muted/50" />
          <span>3. DEPLOY</span>
          <ArrowRight className="w-3 h-3 text-docker-blue" />
          <span className="text-status-running font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
            4. RUN (LIVE)
          </span>
        </div>
        <span className="hidden sm:inline text-docker-muted text-[10px]">HOST: REMOTE LINUX</span>
      </div>

      {/* Summary */}
      <p className="text-sm md:text-base text-docker-white/90 leading-relaxed my-4 font-sans">
        {item.summary}
      </p>

      {/* Core Engineering Responsibilities */}
      <div className="space-y-3 mb-6 font-sans">
        <h4 className="font-mono text-xs uppercase tracking-wider text-docker-bright flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-docker-blue" />
          <span>Containerized Engineering Workflows</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {item.responsibilities.map((resp, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 bg-docker-charcoal/70 p-3 rounded-lg border border-docker-border text-xs text-docker-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-docker-blue mt-1.5 flex-shrink-0" />
              <span>{resp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Measurable Impact */}
      {item.impactPoints && item.impactPoints.length > 0 && (
        <div className="bg-docker-charcoal border border-status-running/30 rounded-xl p-4 mb-6 font-sans">
          <h4 className="font-mono text-xs text-status-running uppercase tracking-wider mb-2 flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Verified Production Impact</span>
          </h4>
          <ul className="space-y-1.5">
            {item.impactPoints.map((imp, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-docker-muted">
                <span className="text-status-running font-bold mr-0.5">&bull;</span>
                <span>{imp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack & Patterns */}
      <div className="pt-4 border-t border-docker-border flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1 text-purple-400 mr-1">
            <Layers className="w-3.5 h-3.5" />
            <span>PATTERNS:</span>
          </div>
          {item.architecturePatterns.map((pat) => (
            <span
              key={pat}
              className="bg-purple-950/30 border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded text-[11px]"
            >
              {pat}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-docker-charcoal text-docker-white px-2 py-0.5 rounded border border-docker-border text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

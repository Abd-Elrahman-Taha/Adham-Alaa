import React from 'react';
import type { CertificationItem } from '../types/portfolio';
import { Award, Calendar, Clock, CheckCircle2, ShieldCheck, Box } from 'lucide-react';

interface CertificationCardProps {
  item: CertificationItem;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ item }) => {
  return (
    <div className="bg-docker-surface border border-docker-border hover:border-purple-500/50 rounded-2xl p-6 md:p-8 shadow-container hover:shadow-docker-glow transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-docker-border">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="font-semibold text-purple-400 bg-purple-950/40 border border-purple-500/30 px-2.5 py-0.5 rounded flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5 text-purple-400" />
              VERIFIED_CREDENTIAL
            </span>
            <span className="text-docker-muted">{item.trackCode}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-docker-white tracking-tight font-sans">
            {item.name}
          </h3>

          <div className="text-sm font-semibold text-purple-300 mt-1 flex items-center gap-2 font-sans">
            <Award className="w-4 h-4 text-purple-400" />
            <span>{item.issuer}</span>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 font-mono text-xs text-docker-muted">
          <div className="flex items-center gap-1.5 bg-docker-charcoal px-2.5 py-1 rounded border border-docker-border">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            <span>Issued: {item.issueDate}</span>
          </div>
          <div className="flex items-center gap-1.5 text-docker-muted/80">
            <Clock className="w-3.5 h-3.5" />
            <span>{item.duration}</span>
          </div>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-docker-white/90 my-4 leading-relaxed font-sans">
        {item.description}
      </p>

      {/* Curriculum Mastery Grid */}
      <div className="space-y-3 font-sans">
        <h4 className="font-mono text-xs uppercase tracking-wider text-docker-muted flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-status-running" />
          <span>Curriculum Mastery &amp; Applied Topics</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {item.skillsAcquired.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-docker-charcoal/80 px-3 py-2 rounded-lg border border-docker-border text-xs text-docker-muted font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-docker-border flex items-center justify-between font-mono text-xs text-docker-muted">
        <div className="flex items-center gap-1.5 text-status-running">
          <ShieldCheck className="w-4 h-4" />
          <span>{item.credentialNote || 'Verified Route Academy Track'}</span>
        </div>
        <span className="text-purple-300">150 TRACK HOURS</span>
      </div>
    </div>
  );
};

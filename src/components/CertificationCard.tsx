import React from 'react';
import type { CertificationItem } from '../types/portfolio';
import { Award, Calendar, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CertificationCardProps {
  item: CertificationItem;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ item }) => {
  return (
    <div className="bg-carbon-900 border border-carbon-700/80 hover:border-purple-500/50 rounded-2xl p-6 md:p-8 shadow-panel hover:shadow-glow-sm transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-carbon-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-semibold text-purple-400 bg-purple-950/60 border border-purple-500/30 px-2.5 py-0.5 rounded">
              Verified Technical Credential
            </span>
            <span className="font-mono text-xs text-slate-400">{item.trackCode}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">
            {item.name}
          </h3>

          <div className="text-sm font-semibold text-purple-300 mt-1 flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400" />
            <span>{item.issuer}</span>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-1.5 bg-carbon-850 px-2.5 py-1 rounded border border-carbon-800">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            <span>Issued: {item.issueDate}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{item.duration}</span>
          </div>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 my-4 leading-relaxed font-sans">
        {item.description}
      </p>

      {/* Curriculum Topics Grid */}
      <div className="space-y-3">
        <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Curriculum Mastery &amp; Applied Topics</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {item.skillsAcquired.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-carbon-950/80 px-3 py-2 rounded-lg border border-carbon-800 text-xs text-slate-300 font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-carbon-800 flex items-center justify-between font-mono text-xs text-slate-500">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>{item.credentialNote || 'Verified Track Credential'}</span>
        </div>
        <span>150 Track Hours</span>
      </div>
    </div>
  );
};

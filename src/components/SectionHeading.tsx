import React from 'react';

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  label,
  title,
  description,
  align = 'left',
  badge,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs tracking-wider text-azure-400 font-semibold bg-azure-950/40 border border-azure-500/20 px-2.5 py-1 rounded">
          // {number} — {label}
        </span>
        {badge && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
        {title}
      </h2>

      {description && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
};

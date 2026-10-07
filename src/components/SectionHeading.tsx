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
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs tracking-wider text-docker-bright font-semibold bg-docker-blue/15 border border-docker-blue/30 px-2.5 py-1 rounded">
          // {number} — {label}
        </span>
        {badge && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-status-running bg-emerald-950/40 border border-status-running/30 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-docker-white mb-3.5 font-sans">
        {title}
      </h2>

      {description && (
        <p className="text-docker-muted text-sm md:text-base leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
};

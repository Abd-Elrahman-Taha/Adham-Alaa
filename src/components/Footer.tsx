import React from 'react';
import { personalData } from '../data/personal';
import { ArrowUp, Terminal, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-carbon-950 border-t border-carbon-800 text-slate-400 font-sans mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-carbon-850">
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-carbon-900 border border-carbon-700 flex items-center justify-center font-mono font-bold text-white text-xs">
                {personalData.initials}
              </div>
              <div>
                <span className="text-white font-semibold text-sm block">
                  {personalData.name}
                </span>
                <span className="font-mono text-xs text-azure-400">
                  {personalData.role}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Architecting production-grade backend software with clean Onion Architecture, high-concurrency SQL Server data layers, and domain-driven design.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for engineering contracts &amp; full-time positions</span>
            </div>
          </div>

          {/* Architecture principles */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
              System Specifications
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-azure-400" />
                <span>Runtime: ASP.NET Core &bull; C# 12 &bull; .NET 8</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Architecture: Onion Model &bull; Repository Pattern</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Database: Microsoft SQL Server &bull; Dapper &bull; Redis</span>
              </li>
            </ul>
          </div>

          {/* Quick jump & back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-carbon-900 hover:bg-carbon-850 text-slate-300 hover:text-white border border-carbon-800 text-xs font-mono transition-colors focus:outline-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-azure-400" />
            </button>

            <div className="text-left md:text-right font-mono text-[11px] text-slate-500">
              <span>Cairo &bull; Beni Suef, Egypt</span>
              <br />
              <span>UTC+02:00</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with React, TypeScript &amp; Tailwind</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

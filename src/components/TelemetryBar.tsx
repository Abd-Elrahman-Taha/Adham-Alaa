import React, { useState, useEffect } from 'react';
import { Activity, Server, Database, ShieldCheck } from 'lucide-react';

export const TelemetryBar: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Cairo',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' CAI'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-carbon-900/90 border-b border-carbon-800 text-[11px] font-mono text-slate-400 py-1.5 px-4 backdrop-blur-md hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wide">SYSTEM: HEALTHY (200 OK)</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-azure-400" />
            <span>CLR: .NET 8 / 9</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-azure-400" />
            <span>DB: SQL Server (ACID)</span>
          </div>

          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>ARCH: Onion / Unit of Work</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span>LATENCY: &lt;5ms</span>
          </div>
          <div className="text-slate-400 border-l border-carbon-700 pl-3">
            <span>{time || '00:00:00 CAI'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

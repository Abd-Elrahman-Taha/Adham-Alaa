import React, { useState, useEffect } from 'react';
import { Activity, Server, Database, Box, Cpu } from 'lucide-react';

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
    <div className="w-full bg-docker-charcoal/95 border-b border-docker-border text-[11px] font-mono text-docker-muted py-1.5 px-4 backdrop-blur-md hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-status-running">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-running opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-running"></span>
            </span>
            <span className="font-semibold tracking-wide">DOCKER_DAEMON: ACTIVE</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5 text-docker-blue" />
            <span>CONTAINERS: 6 RUNNING</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-docker-bright" />
            <span>CLR: .NET 8 / 9 (LINUX)</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-docker-soft" />
            <span>DB: SQL SERVER 2022</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-purple-400" />
            <span>ISOLATION: ONION ARCH</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-docker-muted">
            <Activity className="w-3.5 h-3.5 text-status-running" />
            <span>PING: &lt;4ms</span>
          </div>
          <div className="text-docker-white border-l border-docker-border pl-3">
            <span>{time || '00:00:00 CAI'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

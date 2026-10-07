import React, { useState } from 'react';
import { Play, Check, Zap, Database, ShieldCheck, Box } from 'lucide-react';

interface EndpointConfig {
  method: 'GET' | 'POST';
  path: string;
  auth: string;
  cacheStrategy: 'Redis Hit' | 'Redis Miss -> SQL Server' | 'No Cache (Transactional)';
  status: number;
  duration: string;
  responsePreview: string;
}

const ENDPOINTS: EndpointConfig[] = [
  {
    method: 'GET',
    path: '/api/v1/products?categoryId=2&sort=priceAsc',
    auth: 'Anonymous / Public',
    cacheStrategy: 'Redis Miss -> SQL Server',
    status: 200,
    duration: '4.8ms',
    responsePreview: `{
  "pageIndex": 1,
  "pageSize": 10,
  "count": 48,
  "data": [
    { "id": 14, "name": "Brake Rotor Set", "price": 149.99, "category": "Mechanical" },
    { "id": 22, "name": "Synthetic Engine Oil", "price": 54.50, "category": "Fluids" }
  ]
}`,
  },
  {
    method: 'POST',
    path: '/api/v1/account/login',
    auth: 'ASP.NET Core Identity',
    cacheStrategy: 'No Cache (Transactional)',
    status: 200,
    duration: '18.2ms',
    responsePreview: `{
  "email": "engineer@route.com",
  "displayName": "Staff Auditor",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.sD8f... [JWT-Verified]",
  "expiresInSeconds": 86400
}`,
  },
  {
    method: 'GET',
    path: '/api/v1/basket?id=client-cart-992',
    auth: 'Bearer JWT Required',
    cacheStrategy: 'Redis Hit',
    status: 200,
    duration: '1.1ms',
    responsePreview: `{
  "id": "client-cart-992",
  "items": [
    { "productId": 14, "quantity": 2, "unitPrice": 149.99 }
  ],
  "cacheSource": "Redis-Distributed-Cache-v7"
}`,
  },
];

export const ApiEndpointSimulator: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [hasExecuted, setHasExecuted] = useState<boolean>(true);

  const current = ENDPOINTS[selectedIdx];

  const handleExecute = () => {
    setIsExecuting(true);
    setHasExecuted(false);
    setTimeout(() => {
      setIsExecuting(false);
      setHasExecuted(true);
    }, 450);
  };

  return (
    <div className="w-full bg-docker-charcoal border border-docker-border rounded-xl overflow-hidden shadow-container">
      {/* Top Console Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-docker-surface border-b border-docker-border gap-2">
        <div className="flex items-center gap-2">
          <Box className="w-4 h-4 text-docker-blue" />
          <span className="font-mono text-xs text-docker-white font-semibold">
            CONTAINER_INGRESS // API SIMULATOR
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-docker-muted">
          <span className="w-2 h-2 rounded-full bg-status-running animate-pulse" />
          <span>Kestrel HTTP/2 &bull; Swagger v3.0 OpenAPI</span>
        </div>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="p-3 bg-docker-charcoal/80 border-b border-docker-border flex flex-wrap gap-2">
        {ENDPOINTS.map((ep, idx) => (
          <button
            key={ep.path}
            onClick={() => {
              setSelectedIdx(idx);
              setHasExecuted(true);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              selectedIdx === idx
                ? 'bg-docker-surface text-docker-white border border-docker-blue shadow-docker-glow'
                : 'text-docker-muted hover:text-docker-white hover:bg-docker-surface/50 border border-transparent'
            }`}
          >
            <span
              className={`font-bold ${
                ep.method === 'GET' ? 'text-status-running' : 'text-docker-bright'
              }`}
            >
              {ep.method}
            </span>
            <span className="truncate max-w-[180px] sm:max-w-none">{ep.path.split('?')[0]}</span>
          </button>
        ))}
      </div>

      {/* Request Execution Bar */}
      <div className="p-3 bg-docker-surface flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 bg-docker-charcoal px-3 py-2 rounded-lg border border-docker-border flex-1 overflow-x-auto font-mono text-xs">
          <span
            className={`font-bold px-1.5 py-0.5 rounded text-[11px] ${
              current.method === 'GET'
                ? 'bg-emerald-950 text-status-running border border-status-running/30'
                : 'bg-docker-blue/20 text-docker-bright border border-docker-blue/30'
            }`}
          >
            {current.method}
          </span>
          <span className="text-docker-white whitespace-nowrap">{current.path}</span>
        </div>

        <button
          onClick={handleExecute}
          disabled={isExecuting}
          className="flex items-center justify-center gap-2 bg-docker-blue hover:bg-docker-bright disabled:opacity-50 text-white font-mono text-xs px-4 py-2 rounded-lg transition-colors shadow-sm focus:outline-none"
        >
          {isExecuting ? (
            <span className="animate-spin w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <Play className="w-3.5 h-3.5" />
          )}
          <span>{isExecuting ? 'Dispatching...' : 'Dispatch HTTP'}</span>
        </button>
      </div>

      {/* Execution Pipeline Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-3 bg-docker-charcoal border-t border-b border-docker-border">
        <div className="p-2.5 bg-docker-surface rounded-lg border border-docker-border">
          <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[10px] mb-1">
            <ShieldCheck className="w-3 h-3" />
            <span>1. AUTH CONTAINER</span>
          </div>
          <div className="text-xs text-docker-white font-medium truncate">{current.auth}</div>
        </div>

        <div className="p-2.5 bg-docker-surface rounded-lg border border-docker-border">
          <div className="flex items-center gap-1.5 text-docker-bright font-mono text-[10px] mb-1">
            <Zap className="w-3 h-3" />
            <span>2. REDIS CACHE</span>
          </div>
          <div className="text-xs text-docker-white font-medium truncate">{current.cacheStrategy}</div>
        </div>

        <div className="p-2.5 bg-docker-surface rounded-lg border border-docker-border">
          <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px] mb-1">
            <Database className="w-3 h-3" />
            <span>3. SQL PERSISTENCE</span>
          </div>
          <div className="text-xs text-docker-white font-medium truncate">SQL Server 2022</div>
        </div>

        <div className="p-2.5 bg-docker-surface rounded-lg border border-docker-border">
          <div className="flex items-center gap-1.5 text-status-running font-mono text-[10px] mb-1">
            <Check className="w-3 h-3" />
            <span>4. LATENCY</span>
          </div>
          <div className="text-xs text-docker-white font-medium truncate">{current.duration}</div>
        </div>
      </div>

      {/* Response Display */}
      <div className="p-3.5 bg-docker-surface font-mono text-xs">
        <div className="flex items-center justify-between text-docker-muted mb-2 pb-1.5 border-b border-docker-border">
          <span className="text-[11px]">HTTP/1.1 {current.status} OK</span>
          <span className="text-[11px] text-status-running">Content-Type: application/json</span>
        </div>

        <div className="overflow-x-auto text-docker-white">
          {hasExecuted ? (
            <pre>
              <code>{current.responsePreview}</code>
            </pre>
          ) : (
            <div className="py-6 text-center text-docker-muted animate-pulse">
              Dispatching container pipeline request through Kestrel...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Layers, Shield, Database, Globe, CheckCircle2, ArrowRight, Box } from 'lucide-react';

interface LayerInfo {
  id: string;
  name: string;
  title: string;
  badge: string;
  color: string;
  borderColor: string;
  bgColor: string;
  icon: React.ReactNode;
  description: string;
  dependencies: string;
  responsibilities: string[];
  codeSample: string;
}

const ARCH_LAYERS: LayerInfo[] = [
  {
    id: 'domain',
    name: 'Domain Core',
    title: 'Core Entities & Domain Invariants',
    badge: 'LAYER_00 // INMOST',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgColor: 'bg-amber-950/20',
    icon: <Shield className="w-4 h-4 text-amber-400" />,
    description:
      'The heart of the containerized application containing pure enterprise domain models, enums, and business invariants. Completely decoupled from frameworks, databases, or UI concerns.',
    dependencies: 'Zero external dependencies — pure C# CLR.',
    responsibilities: [
      'Encapsulates business entity aggregate roots (Car, InstallmentContract, Patient, TreatmentPackage).',
      'Enforces core business invariants and state transitions.',
      'Defines strongly typed entity IDs and value objects.',
      'Maintains zero coupling to ORMs, Web frameworks, or external APIs.',
    ],
    codeSample: `// Domain Core: Pure Entity & Invariants
public class InstallmentContract : BaseEntity
{
    public decimal TotalAmount { get; private set; }
    public decimal PaidAmount { get; private set; }
    public ContractStatus Status { get; private set; }
    public IReadOnlyCollection<InstallmentSchedule> Schedules => _schedules;

    public void SettleInstallment(decimal amount, DateTime settlementDate)
    {
        if (Status != ContractStatus.Active)
            throw new DomainRuleException("Only active contracts can receive settlements.");
        PaidAmount += amount;
        if (PaidAmount >= TotalAmount) Status = ContractStatus.FullySettled;
    }
}`,
  },
  {
    id: 'application',
    name: 'Application Layer',
    title: 'Business Logic, DTOs & Contracts',
    badge: 'LAYER_01 // SERVICES',
    color: 'text-docker-bright',
    borderColor: 'border-docker-blue/40',
    bgColor: 'bg-docker-surface2',
    icon: <Layers className="w-4 h-4 text-docker-bright" />,
    description:
      'Coordinates application workflows, encapsulates business use-cases, and defines interfaces for data access (Repository Pattern and Unit of Work).',
    dependencies: 'Depends only on Domain Core.',
    responsibilities: [
      'Orchestrates multi-partner equity resolution and dividend distribution.',
      'Defines IUnitOfWork and IRepository<T> abstractions.',
      'Handles Data Transfer Objects (DTOs) and AutoMapper configurations.',
      'Validates clinical workflows and session quota constraints.',
    ],
    codeSample: `// Application Layer: Service & Abstractions
public interface IInstallmentService
{
    Task<Result<SettlementResponseDto>> ProcessSettlementAsync(
        SettlementRequestDto request, 
        CancellationToken ct);
}

public class InstallmentService : IInstallmentService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public InstallmentService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
}`,
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure Layer',
    title: 'EF Core, Dapper & SQL Server',
    badge: 'LAYER_02 // DATA ACCESS',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    bgColor: 'bg-purple-950/20',
    icon: <Database className="w-4 h-4 text-purple-400" />,
    description:
      'Implements repository contracts using Entity Framework Core for transactional mutations and Dapper for ultra-fast reporting queries over Microsoft SQL Server.',
    dependencies: 'Implements Application interfaces, depends on Domain.',
    responsibilities: [
      'Entity Framework Core DbContext configuration with Fluent API.',
      'Dapper queries for analytical reporting and sub-5ms aggregations.',
      'Redis distributed caching for product catalogs and user sessions.',
      'ACID database transaction management and rollback guarantees.',
    ],
    codeSample: `// Infrastructure: Unit of Work & Data Persistence
public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _context;
    private readonly IDbConnection _dbConnection; // For high-speed Dapper

    public async Task<int> CompleteAsync(CancellationToken ct = default)
    {
        using var transaction = await _context.Database.BeginTransactionAsync(ct);
        try {
            var affected = await _context.SaveChangesAsync(ct);
            await transaction.CommitAsync(ct);
            return affected;
        } catch {
            await transaction.RollbackAsync(ct);
            throw;
        }
    }
}`,
  },
  {
    id: 'presentation',
    name: 'Presentation & API Edge',
    title: 'ASP.NET Core Controllers & Middleware',
    badge: 'LAYER_03 // EDGE INGRESS',
    color: 'text-status-running',
    borderColor: 'border-status-running/40',
    bgColor: 'bg-emerald-950/20',
    icon: <Globe className="w-4 h-4 text-status-running" />,
    description:
      'The entry point of HTTP traffic. Handles request deserialization, JWT authentication, model validation, Swagger OpenAPI specs, and status code serialization.',
    dependencies: 'Depends on Application & Infrastructure via DI Container.',
    responsibilities: [
      'ASP.NET Core MVC & RESTful API Controllers.',
      'Global exception handling middleware and RFC 7807 ProblemDetails.',
      'JWT Bearer token verification and Role-Based Access Control (RBAC).',
      'Dependency injection composition root in Program.cs.',
    ],
    codeSample: `// Presentation: ASP.NET Core API Controller
[ApiController]
[Route("api/v1/[controller]")]
[Authorize(Roles = "Admin,FinancialOfficer")]
public class SettlementsController : ControllerBase
{
    private readonly IInstallmentService _installmentService;

    [HttpPost]
    [ProducesResponseType(typeof(SettlementResponseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Settle([FromBody] SettlementRequestDto dto)
    {
        var result = await _installmentService.ProcessSettlementAsync(dto);
        return result.IsSuccess ? Ok(result.Value) : BadRequest(result.Error);
    }
}`,
  },
];

export const ArchitectureExplorer: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('domain');
  const activeLayer = ARCH_LAYERS.find((l) => l.id === activeLayerId) || ARCH_LAYERS[0];

  return (
    <div className="w-full space-y-8">
      {/* SERVICE ARCHITECTURE TOPOLOGY (Section 21 Requirement) */}
      <div className="bg-docker-surface border border-docker-border rounded-2xl p-5 md:p-6 shadow-container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-docker-border gap-2 font-mono text-xs">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-docker-blue" />
            <span className="text-docker-white font-semibold uppercase">
              SERVICE ARCHITECTURE // CONTAINER TOPOLOGY
            </span>
          </div>
          <span className="text-status-running text-[11px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-status-running" />
            INTERNAL_BRIDGE: 172.20.0.0/16
          </span>
        </div>

        {/* Tree Topology Diagram */}
        <div className="my-5 p-4 bg-docker-charcoal rounded-xl border border-docker-border font-mono text-xs">
          <div className="flex items-center gap-3 text-docker-muted mb-3 pb-2 border-b border-docker-border">
            <span className="text-docker-bright font-bold">CLIENT (Web / Mobile / Clinic Reception)</span>
            <span className="text-[10px] text-docker-muted">&rarr; HTTPS / PORT 443</span>
          </div>

          <div className="pl-4 border-l-2 border-docker-blue/40 space-y-3">
            {/* Edge Gateway */}
            <div className="flex items-center gap-2 text-docker-white">
              <span className="text-docker-blue font-bold">&darr;</span>
              <span className="bg-docker-surface px-2.5 py-1 rounded border border-docker-blue text-docker-bright font-semibold">
                [CONTAINER: ASP.NET CORE API &amp; MVC : 8080]
              </span>
            </div>

            {/* Microservice Branches */}
            <div className="pl-6 border-l border-docker-border space-y-2.5 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-docker-muted">&boxvr;&horizontal;</span>
                <span className="bg-docker-surface px-2 py-0.5 rounded border border-docker-border text-purple-300">
                  AUTH CONTAINER: ASP.NET Identity &amp; JWT (:5001)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-docker-muted">&boxvr;&horizontal;</span>
                <span className="bg-docker-surface px-2 py-0.5 rounded border border-docker-border text-amber-300">
                  DATABASE CONTAINER: Microsoft SQL Server 2022 (:1433)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-docker-muted">&boxvr;&horizontal;</span>
                <span className="bg-docker-surface px-2 py-0.5 rounded border border-docker-border text-docker-soft">
                  CACHE CONTAINER: Redis Distributed In-Memory (:6379)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-docker-muted">&boxur;&horizontal;</span>
                <span className="bg-docker-surface px-2 py-0.5 rounded border border-docker-border text-status-running">
                  WORKER CONTAINER: Installment Payout &amp; Settlement Job (:9000)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Domain Layers Inspector */}
      <div className="w-full bg-docker-surface border border-docker-border rounded-2xl p-5 md:p-8 shadow-container">
        {/* Header bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-docker-border gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-docker-bright mb-1">
              <span className="w-2 h-2 rounded-full bg-docker-blue animate-pulse" />
              <span>ISOLATION PATTERN // ONION ARCHITECTURE</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-docker-white tracking-tight font-sans">
              Domain-Driven Architecture Explorer
            </h3>
            <p className="text-sm text-docker-muted mt-1 max-w-xl font-sans">
              Interactive breakdown of the architectural boundaries used across Adham's enterprise
              systems. Click layers to inspect domain boundaries and code contracts.
            </p>
          </div>

          {/* Quick Rule Tag */}
          <div className="bg-docker-charcoal border border-docker-border px-4 py-2.5 rounded-lg flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-status-running" />
            <div className="text-xs font-mono">
              <span className="text-docker-muted block text-[10px]">THE DEPENDENCY INVERSION RULE:</span>
              <span className="text-status-running font-medium">Dependencies only point INWARD</span>
            </div>
          </div>
        </div>

        {/* Layer selector tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 my-6">
          {ARCH_LAYERS.map((layer) => {
            const isActive = layer.id === activeLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-150 focus:outline-none ${
                  isActive
                    ? 'bg-docker-surface2 border-docker-blue shadow-docker-glow text-docker-white'
                    : 'bg-docker-charcoal/60 border-docker-border text-docker-muted hover:text-docker-white hover:bg-docker-charcoal'
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isActive ? 'bg-docker-surface border border-docker-border' : 'bg-docker-charcoal'
                  }`}
                >
                  {layer.icon}
                </div>
                <div className="overflow-hidden">
                  <span className="font-mono text-[10px] text-docker-muted block uppercase">
                    {layer.badge}
                  </span>
                  <span className="text-sm font-semibold truncate block font-sans">{layer.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Inspection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Layer Specs */}
          <div className="lg:col-span-5 bg-docker-charcoal border border-docker-border rounded-xl p-5 md:p-6 space-y-5">
            <div className="flex items-center justify-between font-mono text-xs">
              <span
                className={`font-semibold px-2.5 py-1 rounded border ${activeLayer.borderColor} ${activeLayer.bgColor} ${activeLayer.color}`}
              >
                {activeLayer.badge}
              </span>
              <span className="text-docker-muted text-[11px]">
                Strict Isolation
              </span>
            </div>

            <div>
              <h4 className="text-lg font-bold text-docker-white mb-2 font-sans">{activeLayer.title}</h4>
              <p className="text-xs sm:text-sm text-docker-white/90 leading-relaxed font-sans">{activeLayer.description}</p>
            </div>

            <div className="p-3 bg-docker-surface rounded-lg border border-docker-border">
              <div className="text-[11px] font-mono text-docker-muted mb-1">DEPENDENCY CONTRACT</div>
              <div className="text-xs text-docker-white flex items-center gap-2 font-mono">
                <ArrowRight className="w-3.5 h-3.5 text-docker-blue flex-shrink-0" />
                <span>{activeLayer.dependencies}</span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-docker-muted uppercase tracking-wider mb-2.5">
                Core Responsibilities
              </div>
              <ul className="space-y-2">
                {activeLayer.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-docker-muted font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-status-running mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Real C# Code Contract */}
          <div className="lg:col-span-7 bg-black border border-docker-border rounded-xl overflow-hidden shadow-inner">
            <div className="flex items-center justify-between px-4 py-3 bg-docker-charcoal border-b border-docker-border">
              <div className="flex items-center gap-2 font-mono text-xs text-docker-muted">
                <Box className="w-3.5 h-3.5 text-docker-blue" />
                <span>Architecture/{activeLayer.id}.cs</span>
              </div>
              <span className="font-mono text-[11px] text-docker-bright">C# / .NET 8</span>
            </div>

            <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-docker-white/90 bg-black">
              <pre>
                <code>{activeLayer.codeSample}</code>
              </pre>
            </div>

            <div className="px-4 py-2.5 bg-docker-charcoal border-t border-docker-border text-[11px] font-mono text-docker-muted flex items-center justify-between">
              <span>Pattern: Layered Onion Architecture</span>
              <span className="text-status-running">Zero Circular References</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

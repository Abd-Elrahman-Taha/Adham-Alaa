import React, { useState } from 'react';
import { Layers, Shield, Database, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

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
    badge: 'Layer 0 // Innermost',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgColor: 'bg-amber-950/20',
    icon: <Shield className="w-5 h-5 text-amber-400" />,
    description:
      'The heart of the application containing pure enterprise domain models, enums, and business invariants. Completely decoupled from frameworks, databases, or UI concerns.',
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
    badge: 'Layer 1 // Core Services',
    color: 'text-azure-400',
    borderColor: 'border-azure-500/40',
    bgColor: 'bg-azure-950/20',
    icon: <Layers className="w-5 h-5 text-azure-400" />,
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
    badge: 'Layer 2 // Data Access',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    bgColor: 'bg-purple-950/20',
    icon: <Database className="w-5 h-5 text-purple-400" />,
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
    badge: 'Layer 3 // Edge Interface',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-950/20',
    icon: <Globe className="w-5 h-5 text-emerald-400" />,
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
    <div className="w-full bg-carbon-900 border border-carbon-800 rounded-2xl p-5 md:p-8 shadow-deep">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-carbon-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-azure-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-azure-400 animate-pulse" />
            <span>ARCHITECTURE SPECIFICATION // ONION MODEL</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">
            Domain-Driven Architecture Explorer
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Interactive breakdown of the architectural boundaries used across Adham's enterprise
            systems. Click layers to inspect domain boundaries and code contracts.
          </p>
        </div>

        {/* Quick Rule Tag */}
        <div className="bg-carbon-850 border border-carbon-700/80 px-4 py-2.5 rounded-lg flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div className="text-xs font-mono">
            <span className="text-slate-400 block">THE DEPENDENCY INVERSION RULE:</span>
            <span className="text-emerald-300 font-medium">Dependencies only point INWARD</span>
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
              className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-azure-400 ${
                isActive
                  ? `${layer.bgColor} ${layer.borderColor} shadow-glow-sm text-white`
                  : 'bg-carbon-850/60 border-carbon-800/80 text-slate-400 hover:text-white hover:bg-carbon-800'
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  isActive ? 'bg-carbon-900 border border-carbon-700' : 'bg-carbon-900/50'
                }`}
              >
                {layer.icon}
              </div>
              <div className="overflow-hidden">
                <span className="font-mono text-[10px] text-slate-500 block uppercase">
                  {layer.badge}
                </span>
                <span className="text-sm font-semibold truncate block">{layer.name}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Inspection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Layer Specs */}
        <div className="lg:col-span-5 bg-carbon-850/70 border border-carbon-800 rounded-xl p-5 md:p-6 space-y-5">
          <div className="flex items-center justify-between">
            <span
              className={`font-mono text-xs font-semibold px-2.5 py-1 rounded border ${activeLayer.borderColor} ${activeLayer.bgColor} ${activeLayer.color}`}
            >
              {activeLayer.badge}
            </span>
            <span className="font-mono text-[11px] text-slate-500">
              Isolation: Strict Boundary
            </span>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2 font-sans">{activeLayer.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{activeLayer.description}</p>
          </div>

          <div className="p-3 bg-carbon-900 rounded-lg border border-carbon-800">
            <div className="text-[11px] font-mono text-slate-400 mb-1">DEPENDENCY CONTRACT</div>
            <div className="text-xs text-slate-200 flex items-center gap-2 font-mono">
              <ArrowRight className="w-3.5 h-3.5 text-azure-400 flex-shrink-0" />
              <span>{activeLayer.dependencies}</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
              Core Responsibilities
            </div>
            <ul className="space-y-2">
              {activeLayer.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Real C# Code Contract */}
        <div className="lg:col-span-7 bg-carbon-950 border border-carbon-800 rounded-xl overflow-hidden shadow-inner">
          <div className="flex items-center justify-between px-4 py-3 bg-carbon-900 border-b border-carbon-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-xs text-slate-400 ml-2">
                Architecture/{activeLayer.id}.cs
              </span>
            </div>
            <span className="font-mono text-[11px] text-azure-400">C# / .NET 8</span>
          </div>

          <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-300 bg-carbon-950">
            <pre className="text-slate-300">
              <code>{activeLayer.codeSample}</code>
            </pre>
          </div>

          <div className="px-4 py-2.5 bg-carbon-900/60 border-t border-carbon-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
            <span>Pattern: Layered Onion Architecture</span>
            <span className="text-emerald-400">Zero Circular References</span>
          </div>
        </div>
      </div>
    </div>
  );
};

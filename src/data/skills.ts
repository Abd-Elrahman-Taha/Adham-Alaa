import type { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    id: 'core-backend',
    label: 'Core Backend',
    description: 'High-throughput .NET runtime development, language features, and server frameworks.',
    codeName: 'System.Core',
    skills: [
      { id: 'csharp', label: 'C#', icon: 'Code2', description: 'Advanced language features, generics, async/await, reflection', isFeatured: true },
      { id: 'oop', label: 'Object-Oriented Programming', icon: 'Box', description: 'Solid principles, inheritance, polymorphism, encapsulation' },
      { id: 'linq', label: 'LINQ', icon: 'Filter', description: 'Type-safe querying across collections, databases, and XML streams' },
      { id: 'aspnet-mvc', label: 'ASP.NET Core MVC', icon: 'Layers', description: 'Server-rendered enterprise web applications & view models', isFeatured: true },
      { id: 'aspnet-api', label: 'ASP.NET Core Web API', icon: 'Webhook', description: 'RESTful API controllers, middleware pipelines, filters', isFeatured: true },
      { id: 'efcore', label: 'Entity Framework Core', icon: 'Database', description: 'ORM modeling, migrations, change tracking, navigation properties', isFeatured: true },
      { id: 'dapper', label: 'Dapper', icon: 'Zap', description: 'Micro-ORM for ultra-low latency SQL execution & mapped DTOs', isFeatured: true },
      { id: 'signalr', label: 'SignalR', icon: 'Radio', description: 'Real-time bidirectional WebSocket communication' },
    ],
  },
  {
    id: 'database',
    label: 'Database & Data Storage',
    description: 'Relational database architecture, query optimization, and distributed caching.',
    codeName: 'Microsoft.Data.SqlClient',
    skills: [
      { id: 'sqlserver', label: 'Microsoft SQL Server', icon: 'HardDrive', description: 'Primary relational database engine, schema administration', isFeatured: true },
      { id: 'db-design', label: 'Relational Database Design', icon: 'Network', description: '3NF normalization, foreign key constraints, ER diagrams', isFeatured: true },
      { id: 'stored-procedures', label: 'Stored Procedures', icon: 'Terminal', description: 'Compiled procedural database logic & execution plans' },
      { id: 'functions', label: 'Functions & Views', icon: 'FunctionSquare', description: 'Deterministic scalar and table-valued SQL functions' },
      { id: 'triggers', label: 'Triggers & Auditing', icon: 'ShieldAlert', description: 'Data-mutation lifecycle events and automated audit logs' },
      { id: 'indexing', label: 'Query Indexing & Tuning', icon: 'Gauge', description: 'Clustered, non-clustered indexes, and query execution plan optimization' },
      { id: 'redis', label: 'Redis Cache', icon: 'Cpu', description: 'In-memory distributed key-value store for session & payload caching', isFeatured: true },
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture & Patterns',
    description: 'Maintainable software design, enterprise paradigms, and structural isolation.',
    codeName: 'Domain.Architecture',
    skills: [
      { id: 'onion-arch', label: 'Onion Architecture', icon: 'CircleDot', description: 'Strict domain core isolation, concentric dependency flow', isFeatured: true },
      { id: 'three-tier', label: '3-Tier Architecture', icon: 'Layers', description: 'Presentation, Business Logic (BLL), and Data Access (DAL) layers' },
      { id: 'repository-pattern', label: 'Repository Pattern', icon: 'FolderGit2', description: 'Encapsulating data access logic behind strongly-typed collections', isFeatured: true },
      { id: 'unit-of-work', label: 'Unit of Work Pattern', icon: 'Coins', description: 'Atomic transaction boundaries across multiple repository calls', isFeatured: true },
      { id: 'dependency-injection', label: 'Dependency Injection (DI)', icon: 'GitFork', description: 'Inversion of Control (IoC) container registration, service lifetimes', isFeatured: true },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    description: 'Developer tooling, API contract testing, and deployment servers.',
    codeName: 'Toolchain.Runtime',
    skills: [
      { id: 'git', label: 'Git Version Control', icon: 'GitBranch', description: 'Distributed branch management, rebasing, and merge resolution' },
      { id: 'github', label: 'GitHub', icon: 'Github', description: 'Remote repository collaboration and code review workflows' },
      { id: 'swagger', label: 'Swagger / OpenAPI', icon: 'FileCode2', description: 'Interactive REST API documentation and client generation', isFeatured: true },
      { id: 'postman', label: 'Postman', icon: 'Send', description: 'API endpoint contract testing and automation suites' },
      { id: 'automapper', label: 'AutoMapper', icon: 'Workflow', description: 'Convention-based object-to-object mapping for clean DTO separation' },
      { id: 'iis', label: 'Internet Information Services (IIS)', icon: 'Server', description: 'Windows Server application pooling, site bindings, and reverse proxying' },
      { id: 'html', label: 'Semantic HTML5', icon: 'Code', description: 'Structured, accessible markup for server-rendered MVC views' },
      { id: 'css', label: 'Modern CSS3', icon: 'Palette', description: 'Responsive layouts, Flexbox, Grid, and UI styling' },
    ],
  },
];

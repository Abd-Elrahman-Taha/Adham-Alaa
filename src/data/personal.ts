import type { PersonalInfo } from '../types/portfolio';

export const personalData: PersonalInfo = {
  name: 'Adham Alaa',
  initials: 'A.A',
  role: 'Back-End .NET Developer',
  tagline: 'Architecting high-concurrency, transaction-safe backend systems with ASP.NET Core & SQL Server.',
  positioningStatement:
    'I architect backend systems with deliberate structure — clean layers, maintainable contracts, and production-grade reliability.',
  summary:
    'Back-End .NET Developer and third-year Computer Science student at Beni Suef University with hands-on experience building real-world enterprise applications using ASP.NET Core MVC, Web API, Entity Framework Core, Dapper, and SQL Server. I design systems with clean architecture principles, including Onion Architecture, Repository Pattern, and Unit of Work, ensuring scalability, maintainability, and audit-grade financial precision.',
  location: 'Beni Suef / Cairo, Egypt',
  availability: 'Open for Remote & On-Site Backend Roles',
  email: 'alaam2845@gmail.com',
  phone: '+20 100 194 8765',
  cvUrl: '/cv.pdf',
  portrait: {
    src: '/portrait.webp',
    srcset: '/portrait-400.webp 400w, /portrait-800.webp 800w',
    alt: 'Adham Alaa — Back-End .NET Developer',
    sizes: '(max-width: 768px) 18rem, 26rem',
  },
  metrics: [
    {
      label: 'Core Runtime',
      value: '.NET 8 / 9',
      unit: 'LTS',
      description: 'ASP.NET Core MVC & Web API endpoints',
    },
    {
      label: 'Database Design',
      value: '15+ Tables',
      unit: 'Relational',
      description: 'Constrained schemas, stored procedures & triggers',
    },
    {
      label: 'Data Access',
      value: 'EF Core & Dapper',
      unit: 'Hybrid',
      description: 'ORM productivity paired with raw SQL performance',
    },
    {
      label: 'Formal Track',
      value: '150+ Hours',
      unit: 'Certified',
      description: 'Route Academy C44 intensive backend curriculum',
    },
  ],
  status: {
    indicator: 'active',
    label: 'Backend Engine: Online',
    sublabel: 'Available for new engineering challenges',
  },
};

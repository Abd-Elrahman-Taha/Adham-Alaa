import type { CertificationItem } from '../types/portfolio';

export const certificationsData: CertificationItem[] = [
  {
    id: 'route-c44-aspnet',
    name: 'ASP.NET Core Track',
    issuer: 'Route Academy',
    trackCode: 'Round C44',
    issueDate: '19 December 2025',
    duration: '5-Month Intensive Track (150 Hours)',
    description:
      'Completed a rigorous 150-hour industry-aligned curriculum specializing in enterprise .NET backend engineering, modern software architecture, and production delivery standards.',
    skillsAcquired: [
      'C# & Advanced Language Features',
      'Object-Oriented Programming (OOP) & SOLID Principles',
      'LINQ to Objects & LINQ to Entities',
      'Microsoft SQL Server & Complex Schema Design',
      'Entity Framework Core & Dapper',
      'ASP.NET Core MVC & ASP.NET Core Web API',
      'Onion Architecture & Unit of Work Pattern',
      'SignalR Real-Time Communication',
      'Agile Development Methodologies',
    ],
    credentialNote: 'Verified Credential Issued by Route Academy',
  },
];

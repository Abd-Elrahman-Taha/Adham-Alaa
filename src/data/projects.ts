import type { ProjectItem } from '../types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: 'al-alamia-cars',
    number: '01',
    title: 'Al-Alamia Cars',
    subtitle: 'Multi-Partner Financial Clearing & Automotive Inventory Engine',
    category: 'Enterprise Backend',
    description:
      'A mission-critical enterprise back-end platform designed for car dealerships to orchestrate high-value automotive sales, recurring installment debt structures, treasury management, and multi-partner investment resolution.',
    architectureNotes:
      'Built with Onion Architecture to decouple core business logic from data storage. Leveraged Entity Framework Core for transactional mutations and Dapper for microsecond analytical reporting queries over SQL Server with strict ACID transaction guarantees.',
    keyFeatures: [
      {
        title: 'Multi-Method Vehicle Sales Workflow',
        description:
          'Handles direct cash transactions, deferred payouts, and installment contracts with automated penalty calculations and status state machines.',
        iconName: 'car',
      },
      {
        title: 'Dynamic Installments & Repayment Engine',
        description:
          'Automated amortization schedule generation, payment tracking, grace-period auditing, and early settlement calculations.',
        iconName: 'receipt',
      },
      {
        title: 'Treasury & Bank Account Ledger',
        description:
          'Comprehensive financial journal with double-entry style verification, banking reconciliation, and immutable audit logs.',
        iconName: 'bank',
      },
      {
        title: 'Multi-Partner Ownership Resolution',
        description:
          'Complex dynamic capital allocation resolving individual partner ownership percentages, profits, and automatic dividend settlements upon vehicle payout.',
        iconName: 'users',
      },
      {
        title: 'High-Performance Reporting Modules',
        description:
          'Low-latency reporting engine providing inventory turnover, vehicle profit & loss, installment aging schedules, and partner capital accounts using Dapper.',
        iconName: 'bar-chart',
      },
    ],
    technologies: [
      'C#',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'Dapper',
      'SQL Server',
      'LINQ',
      'Onion Architecture',
      'Git',
    ],
    architecturePatterns: [
      'Onion Architecture',
      'Repository Pattern',
      'Unit of Work',
      'Dependency Injection',
      'ACID Financial Transactions',
      'Hybrid EF Core + Dapper',
    ],
    flowSteps: [
      'Vehicle Acquisition & Appraisal',
      'Partner Capital Allocation',
      'Contract Structuring (Cash / Installment)',
      'Automated Amortization Schedule',
      'Treasury Inflow & Partner Equity Payout',
    ],
    metrics: [
      { label: 'Transaction Safety', value: '100% ACID' },
      { label: 'Architecture Model', value: 'Onion Layers' },
      { label: 'Query Performance', value: 'Dapper Optimized' },
      { label: 'System Domain', value: 'Automotive & Finance' },
    ],
    operationalValue:
      'Replaced fragmented paper tracking with an unified, mathematically sound back-end system that eliminates investor accounting disputes and streamlines dealership liquidity.',
  },
  {
    id: 'clinic-management',
    number: '02',
    title: 'Clinic Management System',
    subtitle: 'Multi-Role Clinical Operations, Treatment Ledger & Attendance Backbone',
    category: 'Operational Platform',
    description:
      'A production-grade, multi-role backend operations platform unifying patient intake, clinical diagnostic checks, treatment package session accounting, appointment scheduling compliance, and medical staff shift tracking into a synchronized workflow.',
    architectureNotes:
      'Designed around 15+ normalized relational SQL Server tables with strict referential integrity. Implemented 3-Tier layered architecture using ASP.NET Core MVC, EF Core, AutoMapper, and LINQ with Role-Based Access Control (RBAC) ensuring isolated privileges for receptionists, intern doctors, and clinic admins.',
    keyFeatures: [
      {
        title: 'Patient Intake & Clinical Assessment',
        description:
          'Enforces structured workflow starting with registration and medical examination, tying all treatment packages directly to audited clinical records.',
        iconName: 'users',
      },
      {
        title: 'Package Ledger & Session Accounting',
        description:
          'Session quota consumption system verifying that treatments are only deducted from active packages with real-time balance calculations.',
        iconName: 'receipt',
      },
      {
        title: 'Scheduling Integrity & Visit Outcomes',
        description:
          'Validates bookings against operating capacity rules and records real-time visit outcomes (attended, completed, cancelled, missed).',
        iconName: 'calendar',
      },
      {
        title: 'Staff Shift & Intern Doctor Tracking',
        description:
          'Per-session attendance tracking for intern doctors and shift punch-in/out workflows for receptionists for administrative visibility.',
        iconName: 'clock',
      },
      {
        title: 'Unified Operational Timeline',
        description:
          'One synchronized timeline shared across front-desk, medical practitioners, and administration to track patient statuses throughout the day.',
        iconName: 'activity',
      },
    ],
    technologies: [
      'C#',
      'ASP.NET Core MVC',
      'EF Core',
      'SQL Server',
      'AutoMapper',
      'LINQ',
      'Role-Based Security',
      'HTML/CSS',
    ],
    architecturePatterns: [
      '3-Tier Architecture',
      'Repository Pattern',
      'Service Layer Pattern',
      'Data Transfer Objects (DTOs)',
      'Concurrency Handling',
    ],
    flowSteps: [
      'Patient Registration',
      'Clinical Assessment',
      'Package Assignment',
      'Appointment Validation',
      'Session Consumption',
      'Doctor & Staff Attendance',
    ],
    images: [
      '/img/clinc/1.jpeg',
      '/img/clinc/2.jpeg',
      '/img/clinc/3.jpeg',
      '/img/clinc/4.jpeg',
      '/img/clinc/5.jpeg',
      '/img/clinc/6.jpeg',
      '/img/clinc/7.jpg',
      '/img/clinc/8.jpeg',
      '/img/clinc/9.jpeg',
      '/img/clinc/10.jpeg',
    ],
    metrics: [
      { label: 'Database Entities', value: '15+ Tables' },
      { label: 'Access Control', value: '3 Role Tiers' },
      { label: 'Booking Rules', value: 'Collision Free' },
      { label: 'Clinical Flow', value: '6-Stage Care Rail' },
    ],
    operationalValue:
      'Transforms disconnected paper workflows into a single backend source of truth, delivering instantaneous clinic status transparency and bulletproof package quota auditing.',
  },
  {
    id: 'ecommerce-api',
    number: '03',
    title: 'E-Commerce REST API',
    subtitle: 'Scalable RESTful Architecture with JWT, Redis Distributed Caching & Onion Pattern',
    category: 'API & Microservices',
    description:
      'A scalable e-commerce RESTful API developed during the Route Academy ASP.NET Core Web API track (C44). Features layered Onion Architecture, Repository & Unit of Work patterns, JWT & Identity authentication, Redis cache layer, and automated Swagger/Postman contracts.',
    architectureNotes:
      'Separation of concerns using Onion Architecture with distinct Core Domain, Application, and Infrastructure layers. High-throughput product catalog reads boosted with Redis distributed caching, secured by ASP.NET Identity and JSON Web Tokens.',
    keyFeatures: [
      {
        title: 'JWT & Identity Security',
        description:
          'Token-based authentication with refresh tokens, claims-based authorization, and secure user credential hashing.',
        iconName: 'lock',
      },
      {
        title: 'Redis Distributed Cache',
        description:
          'High-speed caching for catalog lookups, product categories, and shopping cart persistence, drastically decreasing database load.',
        iconName: 'database',
      },
      {
        title: 'Catalog Filtering, Paging & Sorting',
        description:
          'Dynamic LINQ specification pattern enabling fluid server-side filtering, price-range sorting, and pagination metadata.',
        iconName: 'filter',
      },
      {
        title: 'Order Processing & Cart Operations',
        description:
          'Transactional checkout workflow with cart validation, inventory verification, and structured order response DTOs.',
        iconName: 'shopping-cart',
      },
      {
        title: 'Self-Documenting API & IIS Hosting',
        description:
          'Comprehensive OpenAPI / Swagger specification with interactive test harnesses and production-ready IIS configuration.',
        iconName: 'server',
      },
    ],
    technologies: [
      'C#',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'Redis',
      'JWT Bearer',
      'ASP.NET Identity',
      'Swagger',
      'Postman',
      'IIS',
    ],
    architecturePatterns: [
      'Onion Architecture',
      'Repository Pattern',
      'Unit of Work',
      'Specification Pattern',
      'Distributed Caching',
    ],
    flowSteps: [
      'Identity Auth & Token Issue',
      'Redis Cache Verification',
      'Specification Query Execution',
      'Cart Validation & Order Commit',
      'Response DTO Serialization',
    ],
    metrics: [
      { label: 'Caching Engine', value: 'Redis Distributed' },
      { label: 'Security Model', value: 'JWT + Identity' },
      { label: 'API Standard', value: 'RESTful OpenAPI' },
      { label: 'Core Pattern', value: 'Unit of Work' },
    ],
    operationalValue:
      'Demonstrates modern microservice-ready enterprise API design with fast caching, robust authentication, and decoupled contract specifications.',
  },
];

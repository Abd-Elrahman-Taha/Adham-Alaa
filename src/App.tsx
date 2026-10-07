import React, { useState } from 'react';
import { TelemetryBar } from './components/TelemetryBar';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { ProjectsSection } from './sections/ProjectsSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { ContainerStackSection } from './sections/ContainerStackSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-docker-bg text-docker-muted font-sans selection:bg-docker-blue selection:text-white flex flex-col relative antialiased">
      {/* Top Docker Daemon Telemetry Status Bar */}
      <TelemetryBar />

      {/* Modern Infrastructure Header & Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Containerized Content Pipeline */}
      <main id="main-content" className="flex-1">
        {/* Section 00: Hero & Architectural Docker Whale */}
        <Hero />

        {/* Section 01: Inside the Container (About) */}
        <About />

        {/* Section 02: Container Registry (Projects Showcase) */}
        <ProjectsSection />

        {/* Section 03: Service Architecture & Topology */}
        <ArchitectureSection />

        {/* Section 04: Container Stack Hierarchy */}
        <ContainerStackSection />

        {/* Section 05: Tech Stack & Available Images */}
        <SkillsSection />

        {/* Section 06: Production Deployments & Experience */}
        <ExperienceSection />

        {/* Section 07: Academic Foundations & Route Academy Certification */}
        <EducationSection />

        {/* Section 08: Deploy to Production (Contact) */}
        <ContactSection />
      </main>

      {/* Deployment Footer with Signature Architectural Whale */}
      <Footer />

      {/* Interactive Command Palette Modal (Ctrl+K / ⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
};

export default App;

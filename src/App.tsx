import React, { useState } from 'react';
import { TelemetryBar } from './components/TelemetryBar';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './sections/Hero';
import { InsideTheContainerSection } from './sections/InsideTheContainerSection';
import { ProjectsSection } from './sections/ProjectsSection';
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
        {/* Section 00: Hero (Who is this developer?) */}
        <Hero />

        {/* Section 01: Inside the Container & Technical Stack (What technologies build him?) */}
        <InsideTheContainerSection />

        {/* Section 02: Deployed Systems & Projects Registry (What has he built?) */}
        <ProjectsSection />

        {/* Section 03: Production Deployments & Experience */}
        <ExperienceSection />

        {/* Section 04: Academic Foundations & Route Academy Certification */}
        <EducationSection />

        {/* Section 05: Deploy to Production (Contact) */}
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

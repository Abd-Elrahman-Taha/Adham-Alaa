import React, { useState } from 'react';
import { TelemetryBar } from './components/TelemetryBar';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { ProjectsSection } from './sections/ProjectsSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-carbon-950 text-slate-300 font-sans selection:bg-azure-500 selection:text-white flex flex-col relative antialiased">
      {/* Top Technical Telemetry Status */}
      <TelemetryBar />

      {/* Floating Sticky Header & Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* Section 01: Hero & Portrait Blueprint */}
        <Hero />

        {/* Section 02: About & Engineering Discipline */}
        <About />

        {/* Section 03: Projects Showcase */}
        <ProjectsSection />

        {/* Section 04: Architecture Foundation & Explorer */}
        <ArchitectureSection />

        {/* Section 05: Technical Skills Matrix */}
        <SkillsSection />

        {/* Section 06: Professional Experience Contracts */}
        <ExperienceSection />

        {/* Section 07: Education & Route Academy Certification */}
        <EducationSection />

        {/* Section 08: Direct Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Terminal-Inspired Engineering Footer */}
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

import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillGroup } from '../components/SkillGroup';
import { skillsData } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-carbon-800/80 bg-carbon-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="05"
          label="TECHNICAL MATRIX"
          title="Skills, Patterns &amp; Technologies"
          description={`Comprehensive catalogue of ${totalSkillsCount} verified technologies, architectural patterns, and database tools in my active production toolchain.`}
          badge="Verified Competencies"
        />

        <SkillGroup />
      </div>
    </section>
  );
};

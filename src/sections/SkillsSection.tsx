import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillGroup } from '../components/SkillGroup';
import { skillsData } from '../data/skills';
import { PipelineBridge } from '../components/PipelineBridge';

export const SkillsSection: React.FC = () => {
  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-docker-border bg-docker-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="04"
          label="AVAILABLE IMAGES"
          title="Tech Stack &amp; Container Images"
          description={`Catalogue of ${totalSkillsCount} verified runtime images, patterns, and database technologies in Adham Alaa's active production toolchain.`}
          badge="Images Ready"
        />

        <SkillGroup />

        <PipelineBridge
          currentStage="IMAGES_PULLED"
          nextStage="DEPLOYMENT_PIPELINE"
          description="Transitioning to production freelance deployment stages"
        />
      </div>
    </section>
  );
};

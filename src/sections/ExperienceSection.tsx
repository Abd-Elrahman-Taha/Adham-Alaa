import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { ExperienceCard } from '../components/ExperienceCard';
import { PipelineBridge } from '../components/PipelineBridge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 border-t border-docker-border bg-docker-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="05"
          label="DEPLOYMENT PIPELINE"
          title="Production Deployments"
          description="Tracing real-world freelance client deliveries as production deployment stages — from container build to live transactional execution."
          badge="Live in Production"
        />

        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <PipelineBridge
          currentStage="DEPLOYMENTS_ONLINE"
          nextStage="CREDENTIALS_AND_DEGREE"
          description="Verifying foundational credentials and academic degree"
        />
      </div>
    </section>
  );
};

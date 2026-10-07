import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContainerStackVisualizer } from '../components/ContainerStackVisualizer';
import { PipelineBridge } from '../components/PipelineBridge';

export const ContainerStackSection: React.FC = () => {
  return (
    <section id="stack" className="py-20 md:py-32 border-t border-docker-border bg-docker-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="03"
          label="INFRASTRUCTURE HIERARCHY"
          title="Container Stack"
          description="Representing Adham Alaa's verified technology stack as layered, isolated container tiers — from pure domain models down to database storage and runtime hosting."
          badge="6-Layer Stack"
        />

        <ContainerStackVisualizer />

        <PipelineBridge
          currentStage="STACK_COMPOSED"
          nextStage="AVAILABLE_IMAGES"
          description="Inspecting individual technology container images"
        />
      </div>
    </section>
  );
};

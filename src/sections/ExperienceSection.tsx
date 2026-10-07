import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { ExperienceCard } from '../components/ExperienceCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 border-t border-carbon-800/80 bg-carbon-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="06"
          label="PROFESSIONAL EXPERIENCE"
          title="Engineering Contracts &amp; Deliveries"
          description="Real-world freelance client engagements delivering production backend systems, financial workflows, and healthcare operations."
          badge="Commercial Delivery"
        />

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

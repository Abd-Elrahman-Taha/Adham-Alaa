import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';
import { EducationCard } from '../components/EducationCard';
import { CertificationCard } from '../components/CertificationCard';
import { PipelineBridge } from '../components/PipelineBridge';

export const EducationSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 border-t border-docker-border bg-docker-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="06"
          label="ACADEMIC &amp; CREDENTIALS"
          title="Education &amp; Verified Certifications"
          description="Formal computer science university foundation paired with intensive, certified industry backend engineering training."
          badge="Verified Foundation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-docker-muted">
              Degree Program // Higher Education
            </div>
            {educationData.map((edu) => (
              <EducationCard key={edu.id} item={edu} />
            ))}
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-docker-muted">
              Certified Technical Track // Route Academy
            </div>
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.id} item={cert} />
            ))}
          </div>
        </div>

        <PipelineBridge
          currentStage="FOUNDATIONS_VERIFIED"
          nextStage="DEPLOY_TO_PRODUCTION"
          description="Ready to build and deploy with your team"
        />
      </div>
    </section>
  );
};

import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';
import { EducationCard } from '../components/EducationCard';
import { CertificationCard } from '../components/CertificationCard';

export const EducationSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 border-t border-carbon-800/80 bg-carbon-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="07"
          label="ACADEMIC &amp; CREDENTIALS"
          title="Education &amp; Professional Certifications"
          description="Formal computer science education and intensive verified industry training in .NET backend engineering."
          badge="Verified Foundation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Education Card */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
              University Degree Program
            </div>
            {educationData.map((edu) => (
              <EducationCard key={edu.id} item={edu} />
            ))}
          </div>

          {/* Certification Card */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
              Professional Engineering Track
            </div>
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.id} item={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { socialLinksData } from '../data/socialLinks';
import { ContactCard } from '../components/ContactCard';
import { Mail, MessageSquare, Terminal, FileDown, CheckCircle2, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const githubLink = socialLinksData.find((s) => s.icon === 'github');
  const linkedinLink = socialLinksData.find((s) => s.icon === 'linkedin');

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-docker-border bg-docker-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="07"
          label="DEPLOY TO PRODUCTION"
          title="Ready to Build?"
          description="Let's connect and create something meaningful. Open for backend engineering opportunities, production contracts, and architectural consultations."
          badge="Ready to Ship"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Consultation Prompt & Fast Action Deck */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-docker-surface border border-docker-border rounded-2xl p-6 md:p-8 shadow-container space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-status-running">
                <span className="w-2 h-2 rounded-full bg-status-running animate-pulse" />
                <span>CONTAINER_STATUS: READY FOR PRODUCTION DEPLOYMENT</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-docker-white font-sans">
                Ready to contribute to your engineering team.
              </h3>

              <p className="text-sm text-docker-white/90 leading-relaxed font-sans">
                Whether you need to architect an ASP.NET Core backend from scratch, optimize SQL Server queries, structure Onion Architecture boundaries, or build an audit-grade financial module, I am ready to ship.
              </p>

              {/* Fast Direct Action Buttons Requested in Prompt */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href={`mailto:${personalData.email}?subject=Opportunity:%20Back-End%20.NET%20Developer%20Role&body=Hi%20Adham,%0D%0A%0D%0AWe%20would%20like%20to%20discuss%20a%20backend%20engineering%20opportunity%20with%20our%20team.%0D%0A%0D%0ABest%20regards,`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-docker-blue hover:bg-docker-bright text-white font-sans font-medium text-xs transition-all shadow-sm hover:shadow-docker-glow"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>GET IN TOUCH</span>
                </a>

                {githubLink && (
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-docker-charcoal hover:bg-docker-surface text-docker-white border border-docker-border text-xs font-mono transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3 text-docker-muted" />
                  </a>
                )}

                {linkedinLink && (
                  <a
                    href={linkedinLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-docker-charcoal hover:bg-docker-surface text-docker-bright border border-docker-border text-xs font-mono transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3 h-3 text-docker-muted" />
                  </a>
                )}
              </div>

              <div className="space-y-2 pt-4 border-t border-docker-border font-sans">
                {[
                  'Rapid response time on direct email & phone',
                  'Clear communication in Arabic (Native) & English (Proficient)',
                  'Comfortable with Agile sprints and asynchronous Git workflows',
                  'Defensive programming & rigorous database constraints',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-docker-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-docker-blue flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Mail Templates */}
              <div className="pt-4 border-t border-docker-border space-y-2">
                <div className="text-[11px] font-mono text-docker-muted uppercase tracking-wider mb-2">
                  Launch Quick Email Template:
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:alaam2845@gmail.com?subject=Opportunity:%20Back-End%20.NET%20Developer%20Role&body=Hi%20Adham,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20backend%20role%20with%20our%20team.%0D%0A%0D%0ABest%20regards,"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-docker-charcoal hover:bg-docker-surface border border-docker-border text-xs text-docker-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-docker-blue" />
                      <span>Discuss a Full-Time / Contract Role</span>
                    </span>
                    <span className="font-mono text-docker-bright">&rarr;</span>
                  </a>

                  <a
                    href="mailto:alaam2845@gmail.com?subject=Consultation:%20.NET%20Backend%20Architecture&body=Hi%20Adham,%0D%0A%0D%0AI%20would%20like%20to%20consult%20with%20you%20regarding%20a%20backend%20system%20architecture.%0D%0A%0D%0ABest%20regards,"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-docker-charcoal hover:bg-docker-surface border border-docker-border text-xs text-docker-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                      <span>Architecture / Database Consultation</span>
                    </span>
                    <span className="font-mono text-purple-400">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Callout */}
            <div className="p-4 rounded-xl bg-docker-surface border border-docker-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-docker-blue" />
                <span className="text-xs text-docker-white font-mono">
                  Curriculum Vitae (PDF Document)
                </span>
              </div>
              <a
                href={personalData.cvUrl}
                download
                className="inline-flex items-center gap-1.5 text-xs font-mono text-docker-bright hover:text-white bg-docker-charcoal px-3 py-1.5 rounded-lg border border-docker-border"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right: The 4 Direct Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {socialLinksData.map((link) => (
              <ContactCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

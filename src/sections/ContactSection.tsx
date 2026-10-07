import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { socialLinksData } from '../data/socialLinks';
import { ContactCard } from '../components/ContactCard';
import { Mail, MessageSquare, Terminal, FileDown, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-carbon-800/80 bg-carbon-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          number="08"
          label="COMMUNICATION CHANNELS"
          title="Direct Engineering Contact"
          description="Open to backend engineering roles, contract engagements, and architectural discussions. Connect directly through any of the channels below."
          badge="Inquiries Welcome"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Quick Inquiries & Positioning Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-carbon-900 border border-carbon-700/80 rounded-2xl p-6 md:p-8 shadow-panel space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>STATUS: AVAILABLE FOR NEW ENGAGEMENTS</span>
              </div>

              <h3 className="text-xl font-bold text-white font-sans">
                Looking for a Reliable .NET Backend Developer?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Whether you need to architect a new ASP.NET Core Web API from scratch, optimize SQL Server query performance, enforce Onion Architecture boundaries, or build an audit-grade financial module, I am ready to contribute.
              </p>

              <div className="space-y-2 pt-2 border-t border-carbon-800">
                {[
                  'Rapid response time on direct email & phone',
                  'Clear communication in Arabic (Native) & English (Proficient)',
                  'Comfortable with Agile sprints and asynchronous Git workflows',
                  'Rigorous database design & defensive backend programming',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-azure-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Mail Prompt Buttons */}
              <div className="pt-4 border-t border-carbon-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Launch Quick Email Template:
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:alaam2845@gmail.com?subject=Opportunity:%20Back-End%20.NET%20Developer%20Role&body=Hi%20Adham,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20backend%20engineering%20opportunity%20with%20our%20team.%0D%0A%0D%0ABest%20regards,"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-carbon-950 hover:bg-carbon-850 border border-carbon-800 text-xs text-slate-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-azure-400" />
                      <span>Discuss a Full-Time / Contract Role</span>
                    </span>
                    <span className="font-mono text-azure-400">&rarr;</span>
                  </a>

                  <a
                    href="mailto:alaam2845@gmail.com?subject=Consultation:%20.NET%20Backend%20Architecture&body=Hi%20Adham,%0D%0A%0D%0AI%20would%20like%20to%20consult%20with%20you%20regarding%20a%20backend%20system%20architecture.%0D%0A%0D%0ABest%20regards,"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-carbon-950 hover:bg-carbon-850 border border-carbon-800 text-xs text-slate-200 transition-colors"
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
            <div className="p-4 rounded-xl bg-carbon-900 border border-carbon-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-azure-400" />
                <span className="text-xs text-slate-300 font-mono">
                  Full CV Document (PDF Format)
                </span>
              </div>
              <a
                href={personalData.cvUrl}
                download
                className="inline-flex items-center gap-1.5 text-xs font-mono text-azure-400 hover:text-azure-300 bg-carbon-850 px-3 py-1.5 rounded border border-carbon-700"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right: The 4 Direct Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinksData.map((link) => (
              <ContactCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

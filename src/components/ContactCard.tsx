import React, { useState } from 'react';
import type { SocialLink } from '../types/portfolio';
import { Mail, Phone, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';

interface ContactCardProps {
  link: SocialLink;
}

export const ContactCard: React.FC<ContactCardProps> = ({ link }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const isCopyable = link.icon === 'mail' || link.icon === 'phone';

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const valueToCopy = link.icon === 'mail' ? link.displayValue : '+201001948765';
    navigator.clipboard.writeText(valueToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = () => {
    switch (link.icon) {
      case 'mail':
        return <Mail className="w-5 h-5 text-azure-400" />;
      case 'phone':
        return <Phone className="w-5 h-5 text-emerald-400" />;
      case 'github':
        return <Github className="w-5 h-5 text-slate-200" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-blue-400" />;
      default:
        return <Mail className="w-5 h-5 text-azure-400" />;
    }
  };

  return (
    <div className="group relative bg-carbon-900 border border-carbon-700/80 hover:border-azure-500/50 rounded-2xl p-5 md:p-6 transition-all duration-200 shadow-panel hover:shadow-glow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-800 group-hover:border-carbon-700 transition-colors">
            {getIcon()}
          </div>

          <div className="flex items-center gap-2">
            {isCopyable && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white bg-carbon-850 hover:bg-carbon-800 px-2.5 py-1 rounded-md border border-carbon-800 transition-colors"
                title={`Copy ${link.platform}`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}

            <a
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-1.5 rounded-md text-slate-500 hover:text-white hover:bg-carbon-800 transition-colors"
              aria-label={`Open ${link.platform}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <span className="font-mono text-xs text-slate-500 block uppercase tracking-wider">
            {link.platform}
          </span>
          <a
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-base font-semibold text-white group-hover:text-azure-300 transition-colors break-all mt-0.5 block"
          >
            {link.displayValue}
          </a>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-carbon-850 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>{link.actionPrompt}</span>
        <span className="text-azure-400 group-hover:translate-x-0.5 transition-transform">Direct</span>
      </div>
    </div>
  );
};

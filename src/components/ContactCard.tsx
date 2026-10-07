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
        return <Mail className="w-5 h-5 text-docker-bright" />;
      case 'phone':
        return <Phone className="w-5 h-5 text-status-running" />;
      case 'github':
        return <Github className="w-5 h-5 text-docker-white" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-docker-blue" />;
      default:
        return <Mail className="w-5 h-5 text-docker-bright" />;
    }
  };

  return (
    <div className="group relative bg-docker-surface border border-docker-border hover:border-docker-blue/60 rounded-2xl p-5 md:p-6 transition-all duration-200 shadow-container hover:shadow-docker-glow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-docker-charcoal border border-docker-border group-hover:border-docker-borderBright transition-colors">
            {getIcon()}
          </div>

          <div className="flex items-center gap-2">
            {isCopyable && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-mono text-docker-muted hover:text-docker-white bg-docker-charcoal hover:bg-docker-surface px-2.5 py-1 rounded-md border border-docker-border transition-colors"
                title={`Copy ${link.platform}`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-status-running" />
                    <span className="text-status-running">Copied</span>
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
              className="p-1.5 rounded-md text-docker-muted hover:text-docker-white hover:bg-docker-charcoal transition-colors"
              aria-label={`Open ${link.platform}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <span className="font-mono text-xs text-docker-muted block uppercase tracking-wider">
            {link.platform}
          </span>
          <a
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-base font-semibold text-docker-white group-hover:text-docker-bright transition-colors break-all mt-0.5 block font-sans"
          >
            {link.displayValue}
          </a>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-docker-border flex items-center justify-between text-[11px] font-mono text-docker-muted">
        <span>{link.actionPrompt}</span>
        <span className="text-docker-bright group-hover:translate-x-0.5 transition-transform">
          Connect &rarr;
        </span>
      </div>
    </div>
  );
};

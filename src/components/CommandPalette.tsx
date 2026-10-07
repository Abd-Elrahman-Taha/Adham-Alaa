import React, { useState, useEffect, useRef } from 'react';
import { navigationItems } from '../data/navigation';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import {
  Search,
  X,
  FileDown,
  Copy,
  Check,
  ExternalLink,
  Layers,
  Box,
  Mail,
  Phone,
  Code2,
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // handled by parent or window
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleNavigate = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredNavigation = navigationItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    item.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl bg-docker-charcoal border border-docker-border rounded-xl shadow-container-elevated overflow-hidden z-10 font-sans">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-docker-border bg-docker-surface/70">
          <Search className="w-5 h-5 text-docker-blue mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a docker command, project image, or section..."
            className="w-full bg-transparent py-4 text-sm text-docker-white placeholder-docker-muted/60 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-docker-muted hover:text-docker-white mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline bg-docker-surface border border-docker-border text-docker-muted text-[10px] font-mono px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        {/* Command list */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Quick Actions */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-docker-muted px-3 mb-1">
              Quick Actions
            </div>
            <div className="space-y-1">
              <button
                onClick={() => handleCopy(personalData.email, 'email')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-docker-muted hover:text-docker-white hover:bg-docker-surface transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-docker-bright" />
                  <span>Copy Direct Email ({personalData.email})</span>
                </div>
                {copiedKey === 'email' ? (
                  <span className="flex items-center text-xs text-status-running gap-1 font-mono">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-4 h-4 text-docker-muted/60" />
                )}
              </button>

              <button
                onClick={() => handleCopy(personalData.phone, 'phone')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-docker-muted hover:text-docker-white hover:bg-docker-surface transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-status-running" />
                  <span>Copy Phone / WhatsApp ({personalData.phone})</span>
                </div>
                {copiedKey === 'phone' ? (
                  <span className="flex items-center text-xs text-status-running gap-1 font-mono">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-4 h-4 text-docker-muted/60" />
                )}
              </button>

              <a
                href={personalData.cvUrl}
                download
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-docker-muted hover:text-docker-white hover:bg-docker-surface transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileDown className="w-4 h-4 text-purple-400" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </div>
                <ExternalLink className="w-4 h-4 text-docker-muted/60" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          {filteredNavigation.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-docker-muted px-3 mb-1">
                Container Infrastructure Sections
              </div>
              <div className="space-y-1">
                {filteredNavigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.href)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-docker-muted hover:text-docker-white hover:bg-docker-surface transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Layers className="w-4 h-4 text-docker-muted" />
                      <span>{item.label}</span>
                    </div>
                    <span className="font-mono text-xs text-docker-bright">/{item.number}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects Registry Section */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-docker-muted px-3 mb-1">
                Container Registry Images
              </div>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleNavigate(`#${proj.id}`)}
                    className="w-full flex items-start justify-between p-2.5 rounded-lg text-sm text-docker-muted hover:text-docker-white hover:bg-docker-surface transition-colors text-left"
                  >
                    <div className="flex items-start gap-3">
                      <Box className="w-4 h-4 text-docker-blue mt-0.5" />
                      <div>
                        <div className="font-medium text-docker-white flex items-center gap-2">
                          <span>{proj.title}</span>
                          <span className="font-mono text-[10px] bg-docker-surface text-docker-bright px-1.5 py-0.2 rounded border border-docker-border">
                            {proj.category}
                          </span>
                        </div>
                        <p className="text-xs text-docker-muted line-clamp-1 mt-0.5">
                          {proj.subtitle}
                        </p>
                      </div>
                    </div>
                    <Code2 className="w-4 h-4 text-docker-muted/60" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-docker-surface/90 border-t border-docker-border flex items-center justify-between text-[11px] font-mono text-docker-muted">
          <span>Adham Alaa &bull; Containerized .NET Systems</span>
          <span className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="bg-docker-charcoal px-1.5 py-0.5 rounded border border-docker-border text-docker-white">
              Enter
            </kbd>
          </span>
        </div>
      </div>
    </div>
  );
};

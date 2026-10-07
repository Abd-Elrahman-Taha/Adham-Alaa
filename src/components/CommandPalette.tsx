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
  FolderGit2,
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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl bg-carbon-900 border border-carbon-700/80 rounded-xl shadow-deep overflow-hidden z-10 font-sans">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-carbon-800 bg-carbon-950/60">
          <Search className="w-5 h-5 text-azure-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            className="w-full bg-transparent py-4 text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-500 hover:text-slate-300 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline bg-carbon-800 border border-carbon-700 text-slate-400 text-[10px] font-mono px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        {/* Command list */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Quick Actions */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 mb-1">
              Quick Actions
            </div>
            <div className="space-y-1">
              <button
                onClick={() => handleCopy(personalData.email, 'email')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-carbon-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-azure-400" />
                  <span>Copy Direct Email ({personalData.email})</span>
                </div>
                {copiedKey === 'email' ? (
                  <span className="flex items-center text-xs text-emerald-400 gap-1 font-mono">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-4 h-4 text-slate-500" />
                )}
              </button>

              <button
                onClick={() => handleCopy(personalData.phone, 'phone')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-carbon-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Copy Phone / WhatsApp ({personalData.phone})</span>
                </div>
                {copiedKey === 'phone' ? (
                  <span className="flex items-center text-xs text-emerald-400 gap-1 font-mono">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-4 h-4 text-slate-500" />
                )}
              </button>

              <a
                href={personalData.cvUrl}
                download
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-carbon-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileDown className="w-4 h-4 text-purple-400" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          {filteredNavigation.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 mb-1">
                Sections
              </div>
              <div className="space-y-1">
                {filteredNavigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.href)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-carbon-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Layers className="w-4 h-4 text-slate-400" />
                      <span>{item.label}</span>
                    </div>
                    <span className="font-mono text-xs text-azure-400">/{item.number}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 mb-1">
                Featured Backend Projects
              </div>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleNavigate(`#${proj.id}`)}
                    className="w-full flex items-start justify-between p-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-carbon-800 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3">
                      <FolderGit2 className="w-4 h-4 text-azure-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white flex items-center gap-2">
                          <span>{proj.title}</span>
                          <span className="font-mono text-[10px] bg-carbon-800 text-azure-400 px-1.5 py-0.2 rounded border border-carbon-700">
                            {proj.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {proj.subtitle}
                        </p>
                      </div>
                    </div>
                    <Code2 className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-carbon-950/80 border-t border-carbon-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Adham Alaa &bull; .NET Core Backend Systems</span>
          <span className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="bg-carbon-850 px-1.5 py-0.5 rounded border border-carbon-700">
              Enter
            </kbd>
          </span>
        </div>
      </div>
    </div>
  );
};

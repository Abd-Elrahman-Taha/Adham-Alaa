import React, { useState, useEffect } from 'react';
import { personalData } from '../data/personal';
import { navigationItems } from '../data/navigation';
import { FileDown, Menu, X, Terminal, Search } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navigationItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((item) => item.element !== null);

      const scrollPosition = window.scrollY + 120;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element && item.element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-carbon-950/85 backdrop-blur-md border-b border-carbon-800 shadow-panel'
            : 'bg-transparent border-b border-carbon-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo / Brand */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-azure-400 rounded-lg p-1"
              aria-label="Adham Alaa Home"
            >
              <div className="w-9 h-9 rounded bg-carbon-850 border border-carbon-700 flex items-center justify-center font-mono font-bold text-white group-hover:border-azure-500 group-hover:text-azure-400 transition-colors">
                <span className="text-sm">{personalData.initials}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white tracking-tight group-hover:text-azure-300 transition-colors">
                  {personalData.name}
                </span>
                <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  .NET Backend Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-carbon-900/60 border border-carbon-800/80 px-3 py-1.5 rounded-full shadow-inner">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium font-sans transition-all duration-150 ${
                      isActive
                        ? 'text-white bg-carbon-800 border border-carbon-700 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-carbon-850/50'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-azure-400 mr-1.5 opacity-80">
                      {item.number}
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions: Command Palette, Resume Download & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Command Palette Trigger */}
              <button
                onClick={onOpenCommandPalette}
                type="button"
                className="hidden sm:flex items-center gap-2 bg-carbon-900 hover:bg-carbon-850 text-slate-400 hover:text-white border border-carbon-700/80 px-2.5 py-1.5 rounded-md text-xs font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-azure-400"
                aria-label="Open Command Menu"
                title="Search commands (Ctrl+K or ⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-azure-400" />
                <span className="hidden md:inline">Command</span>
                <kbd className="bg-carbon-800 border border-carbon-700 px-1.5 py-0.5 rounded text-[10px] text-slate-300">
                  ⌘K
                </kbd>
              </button>

              {/* CV Download CTA */}
              <a
                href={personalData.cvUrl}
                download
                className="inline-flex items-center gap-1.5 bg-azure-600 hover:bg-azure-500 text-white text-xs font-medium font-sans px-3.5 py-2 rounded-md transition-all duration-150 shadow-sm hover:shadow-glow-sm focus:outline-none focus:ring-2 focus:ring-azure-400"
                aria-label="Download Adham Alaa CV PDF"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume (CV)</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="lg:hidden p-2 rounded-md bg-carbon-900 text-slate-300 hover:text-white border border-carbon-800 focus:outline-none focus:ring-2 focus:ring-azure-400"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 w-full max-w-xs h-full bg-carbon-900 border-l border-carbon-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-carbon-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-azure-400" />
                  <span className="font-mono text-xs text-white font-semibold">NAVIGATION</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-carbon-800 focus:outline-none"
                  aria-label="Close Navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1.5">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-carbon-800/80 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-azure-400">/{item.number}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-carbon-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-carbon-850 hover:bg-carbon-800 text-slate-300 text-xs font-mono border border-carbon-700"
              >
                <Search className="w-4 h-4 text-azure-400" />
                <span>Command Menu (Ctrl+K)</span>
              </button>

              <a
                href={personalData.cvUrl}
                download
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-azure-600 hover:bg-azure-500 text-white text-xs font-medium"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <p className="font-mono text-[11px] text-center text-slate-500 mt-2">
                Adham Alaa &bull; .NET Engineer
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

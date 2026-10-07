import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/personal';
import { navigationItems } from '../data/navigation';
import { socialLinksData } from '../data/socialLinks';
import {
  FileDown,
  Menu,
  X,
  Search,
  Box,
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  Terminal,
} from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const githubLink = socialLinksData.find((s) => s.icon === 'github');
  const linkedinLink = socialLinksData.find((s) => s.icon === 'linkedin');
  const emailLink = socialLinksData.find((s) => s.icon === 'mail');
  const phoneLink = socialLinksData.find((s) => s.icon === 'phone');

  // Active section tracking and sticky glassmorphism threshold
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navigationItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((item) => item.element !== null);

      const scrollPosition = window.scrollY + 140;

      if (window.scrollY < 200) {
        setActiveSection('hero');
      } else {
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const item = sectionElements[i];
          if (item.element && item.element.offsetTop <= scrollPosition) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scrolling on mobile when drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth scroll handler for mobile navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-docker-bg/85 backdrop-blur-xl border-b border-docker-border/80 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-docker-border/30'
        }`}
      >
        {/* Subtle luminous accent hairline when locked/scrolled */}
        <div
          className={`absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-docker-blue/40 to-transparent transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-15 sm:h-16">
            {/* Left Brand Mark: Clean, Single-Line & High-Tech */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-docker-blue rounded-lg p-1 transition-all"
              aria-label="Adham Alaa Home"
            >
              <div className="w-8 h-8 rounded-lg bg-docker-charcoal/90 border border-docker-border flex items-center justify-center text-docker-blue group-hover:border-docker-blue group-hover:text-docker-bright group-hover:shadow-docker-glow transition-all duration-200">
                <Box className="w-4 h-4" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-docker-white tracking-tight group-hover:text-docker-bright transition-colors font-sans">
                  {personalData.name}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-docker-bright bg-docker-blue/15 border border-docker-blue/30 px-1.5 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
                  .NET 8
                </span>
              </div>
            </a>

            {/* Desktop / Laptop Navigation: Elegant, Airy & Modern (No Bulky Pill) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative text-xs xl:text-sm font-medium font-sans transition-colors py-1 ${
                      isActive
                        ? 'text-docker-white font-semibold'
                        : 'text-docker-muted hover:text-docker-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="desktop-active-nav-indicator"
                        className="absolute -bottom-1 inset-x-0 h-[2px] bg-docker-blue shadow-docker-glow rounded-full"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions: Socials, Quick Search & Resume CTA */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* GitHub */}
              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex p-2 rounded-lg text-docker-muted hover:text-docker-white hover:bg-docker-surface/80 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {/* LinkedIn */}
              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex p-2 rounded-lg text-docker-muted hover:text-docker-bright hover:bg-docker-surface/80 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              {/* Command Palette Trigger */}
              <button
                onClick={onOpenCommandPalette}
                type="button"
                className="hidden sm:flex items-center gap-2 bg-docker-charcoal/70 hover:bg-docker-surface text-docker-muted hover:text-docker-white border border-docker-border/80 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors focus:outline-none"
                aria-label="Search"
                title="Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-docker-blue" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="bg-docker-surface/90 border border-docker-border px-1.5 py-0.2 rounded text-[10px] text-docker-muted">
                  ⌘K
                </kbd>
              </button>

              {/* Subtle Divider */}
              <div className="h-4 w-px bg-docker-border/80 mx-1 hidden sm:block" />

              {/* Resume (CV) CTA */}
              <a
                href={personalData.cvUrl}
                download
                className="inline-flex items-center gap-1.5 bg-docker-blue hover:bg-docker-bright text-white text-xs font-semibold font-sans px-3.5 py-1.5 rounded-lg transition-all shadow-sm hover:shadow-docker-glow group"
                aria-label="Download CV"
              >
                <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>

              {/* Mobile Smooth Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                type="button"
                className={`lg:hidden p-2 rounded-lg border transition-all duration-200 focus:outline-none ${
                  mobileMenuOpen
                    ? 'bg-docker-blue text-white border-docker-bright shadow-docker-glow'
                    : 'bg-docker-charcoal text-docker-muted hover:text-white border-docker-border'
                }`}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Ultra-Smooth Mobile Navigation Drawer with Spring Physics */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
            {/* Animated Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Animated Slide-in Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.7 }}
              className="fixed top-0 right-0 w-[88vw] max-w-sm h-full bg-docker-charcoal/95 border-l border-docker-border p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-y-auto backdrop-blur-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Drawer"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-docker-border">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-docker-surface border border-docker-border flex items-center justify-center">
                      <Box className="w-3.5 h-3.5 text-docker-bright" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-docker-white font-bold block">
                        CONTAINER_NAV
                      </span>
                      <span className="font-mono text-[9px] text-docker-muted">
                        DEPLOYMENT // ROUTE
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-docker-muted hover:text-white hover:bg-docker-surface border border-docker-border/50 focus:outline-none transition-colors"
                    aria-label="Close navigation"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Staggered Navigation Items */}
                <div className="mt-5 flex flex-col gap-1.5">
                  <div className="text-[10px] font-mono text-docker-muted uppercase tracking-wider px-2 mb-1 flex items-center justify-between">
                    <span>Navigation Services</span>
                    <span className="text-docker-bright">{navigationItems.length} Routes</span>
                  </div>

                  {navigationItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 + index * 0.03, duration: 0.2 }}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`flex items-center justify-between p-3 rounded-xl text-sm font-sans transition-all duration-150 ${
                          isActive
                            ? 'bg-docker-surface2 border border-docker-blue/60 text-white font-semibold shadow-docker-glow'
                            : 'text-docker-muted hover:text-white hover:bg-docker-surface/70 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`font-mono text-xs ${
                              isActive ? 'text-docker-bright font-bold' : 'text-docker-muted'
                            }`}
                          >
                            {item.number}
                          </span>
                          <span>{item.label}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {isActive ? (
                            <span className="flex items-center gap-1 font-mono text-[9px] text-docker-bright bg-docker-blue/20 border border-docker-blue/40 px-2 py-0.5 rounded-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-status-running animate-pulse" />
                              ACTIVE
                            </span>
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-docker-muted/40" />
                          )}
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Actions & Developer Telemetry */}
              <div className="pt-5 border-t border-docker-border flex flex-col gap-3 mt-4">
                {/* Command Menu Action */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-docker-surface hover:bg-docker-surface2 text-docker-white text-xs font-mono border border-docker-border transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-docker-blue group-hover:scale-110 transition-transform" />
                    <span>Command Menu</span>
                  </div>
                  <kbd className="bg-docker-charcoal border border-docker-border px-1.5 py-0.5 rounded text-[10px] text-docker-bright">
                    Ctrl+K
                  </kbd>
                </button>

                {/* CV Download CTA */}
                <a
                  href={personalData.cvUrl}
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-docker-blue hover:bg-docker-bright text-white text-xs font-semibold shadow-docker-glow transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV (Resume)</span>
                </a>

                {/* Quick Social & Contact Grid */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {githubLink && (
                    <a
                      href={githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg bg-docker-surface hover:bg-docker-surface2 text-docker-muted hover:text-white border border-docker-border transition-colors"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {linkedinLink && (
                    <a
                      href={linkedinLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg bg-docker-surface hover:bg-docker-surface2 text-docker-muted hover:text-docker-bright border border-docker-border transition-colors"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}

                  {emailLink && (
                    <a
                      href={emailLink.url}
                      className="flex items-center justify-center p-2 rounded-lg bg-docker-surface hover:bg-docker-surface2 text-docker-muted hover:text-docker-soft border border-docker-border transition-colors"
                      aria-label="Email"
                      title="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}

                  {phoneLink && (
                    <a
                      href={phoneLink.url}
                      className="flex items-center justify-center p-2 rounded-lg bg-docker-surface hover:bg-docker-surface2 text-docker-muted hover:text-emerald-400 border border-docker-border transition-colors"
                      aria-label="Call / WhatsApp"
                      title="Call / WhatsApp"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Developer Footer Telemetry Chip */}
                <div className="bg-docker-charcoal/80 border border-docker-border rounded-lg p-2 font-mono text-[10px] text-docker-muted flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-docker-blue" />
                    <span>STATUS: 200 OK</span>
                  </div>
                  <span className="text-docker-bright">.NET 8 LTS</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

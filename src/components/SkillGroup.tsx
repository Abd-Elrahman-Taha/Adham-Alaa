import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import {
  Code2,
  Box,
  Filter,
  Layers,
  Webhook,
  Database,
  Zap,
  Radio,
  HardDrive,
  Network,
  Terminal,
  FunctionSquare,
  ShieldAlert,
  Gauge,
  Cpu,
  CircleDot,
  FolderGit2,
  Coins,
  GitFork,
  GitBranch,
  Github,
  FileCode2,
  Send,
  Workflow,
  Server,
  Code,
  Palette,
  Search,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Box,
  Filter,
  Layers,
  Webhook,
  Database,
  Zap,
  Radio,
  HardDrive,
  Network,
  Terminal,
  FunctionSquare,
  ShieldAlert,
  Gauge,
  Cpu,
  CircleDot,
  FolderGit2,
  Coins,
  GitFork,
  GitBranch,
  Github,
  FileCode2,
  Send,
  Workflow,
  Server,
  Code,
  Palette,
};

export const SkillGroup: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = skillsData;

  const allSkills = categories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, categoryId: cat.id, categoryLabel: cat.label }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory =
      selectedCategoryId === 'all' || skill.categoryId === selectedCategoryId;
    const matchesQuery =
      searchQuery === '' ||
      skill.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full space-y-6">
      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-docker-border font-mono text-xs">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap focus:outline-none ${
              selectedCategoryId === 'all'
                ? 'bg-docker-blue text-white border-docker-blue shadow-docker-glow'
                : 'bg-docker-surface text-docker-muted border-docker-border hover:text-docker-white'
            }`}
          >
            ALL_IMAGES ({allSkills.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap focus:outline-none ${
                selectedCategoryId === cat.id
                  ? 'bg-docker-blue text-white border-docker-blue shadow-docker-glow'
                  : 'bg-docker-surface text-docker-muted border-docker-border hover:text-docker-white'
              }`}
            >
              {cat.label.toUpperCase()} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-docker-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="docker search image..."
            className="w-full bg-docker-charcoal border border-docker-border rounded-lg pl-9 pr-4 py-2 text-xs text-docker-white placeholder-docker-muted/60 focus:outline-none focus:border-docker-blue"
          />
        </div>
      </div>

      {/* Available Images Grid (Container Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {filteredSkills.map((skill) => {
          const IconComponent = ICON_MAP[skill.icon] || Code2;

          return (
            <div
              key={skill.id}
              className={`group relative rounded-xl p-4 transition-all duration-200 border flex flex-col justify-between ${
                skill.isFeatured
                  ? 'bg-docker-surface border-docker-blue/40 hover:border-docker-blue shadow-sm hover:shadow-docker-glow'
                  : 'bg-docker-surface/70 border-docker-border hover:border-docker-borderBright hover:bg-docker-surface'
              }`}
            >
              <div>
                {/* Image Top Bar */}
                <div className="flex items-start justify-between mb-2.5">
                  <div
                    className={`p-2 rounded-lg ${
                      skill.isFeatured
                        ? 'bg-docker-charcoal border border-docker-blue/40 text-docker-bright'
                        : 'bg-docker-charcoal border border-docker-border text-docker-muted group-hover:text-docker-bright'
                    } transition-colors`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <span className="font-mono text-[9px] px-2 py-0.5 rounded font-semibold text-status-running bg-emerald-950/40 border border-status-running/30 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-status-running" />
                    IMAGE READY
                  </span>
                </div>

                {/* Technology Name */}
                <h4 className="text-sm font-semibold text-docker-white group-hover:text-docker-bright transition-colors font-sans">
                  {skill.label}
                </h4>

                {/* Description */}
                {skill.description && (
                  <p className="text-xs text-docker-muted mt-1 leading-relaxed line-clamp-2 font-sans">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Bottom Image Metadata */}
              <div className="mt-3 pt-2.5 border-t border-docker-border flex items-center justify-between text-[10px] font-mono text-docker-muted">
                <span>{skill.categoryLabel}</span>
                <span className="text-docker-bright group-hover:underline">sha256:ready</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSkills.length === 0 && (
        <div className="py-12 text-center bg-docker-charcoal rounded-xl border border-docker-border font-mono text-xs">
          <p className="text-docker-muted">No images found matching "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategoryId('all');
            }}
            className="mt-2 text-docker-bright hover:underline"
          >
            Reset Search Filters
          </button>
        </div>
      )}
    </div>
  );
};

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
  Sparkles,
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
    <div className="w-full space-y-8">
      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-carbon-800">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors whitespace-nowrap focus:outline-none ${
              selectedCategoryId === 'all'
                ? 'bg-azure-600 text-white shadow-sm'
                : 'bg-carbon-900 text-slate-400 hover:text-white hover:bg-carbon-850 border border-carbon-800'
            }`}
          >
            All Disciplines ({allSkills.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors whitespace-nowrap focus:outline-none ${
                selectedCategoryId === cat.id
                  ? 'bg-azure-600 text-white shadow-sm'
                  : 'bg-carbon-900 text-slate-400 hover:text-white hover:bg-carbon-850 border border-carbon-800'
              }`}
            >
              {cat.label} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills or patterns..."
            className="w-full bg-carbon-900 border border-carbon-700/80 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-azure-500"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => {
          const IconComponent = ICON_MAP[skill.icon] || Code2;

          return (
            <div
              key={skill.id}
              className={`group relative rounded-xl p-4 transition-all duration-200 border ${
                skill.isFeatured
                  ? 'bg-carbon-900/90 border-carbon-700 hover:border-azure-500/60 shadow-sm hover:shadow-glow-sm'
                  : 'bg-carbon-900/60 border-carbon-800/80 hover:border-carbon-700 hover:bg-carbon-850/60'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`p-2.5 rounded-lg ${
                    skill.isFeatured
                      ? 'bg-azure-950/70 border border-azure-500/30 text-azure-400 group-hover:bg-azure-900/70'
                      : 'bg-carbon-850 border border-carbon-800 text-slate-400 group-hover:text-azure-400 group-hover:border-carbon-700'
                  } transition-colors`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                {skill.isFeatured && (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-amber-400/90 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded">
                    <Sparkles className="w-2.5 h-2.5" /> Core
                  </span>
                )}
              </div>

              <h4 className="text-sm font-semibold text-white group-hover:text-azure-300 transition-colors">
                {skill.label}
              </h4>

              {skill.description && (
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                  {skill.description}
                </p>
              )}

              <div className="mt-3 pt-2.5 border-t border-carbon-850 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>{skill.categoryLabel}</span>
                <span className="group-hover:text-azure-400 transition-colors">.NET 8 Ecosystem</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSkills.length === 0 && (
        <div className="py-12 text-center bg-carbon-900/40 rounded-xl border border-carbon-800">
          <p className="text-slate-400 text-sm">No technologies match "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategoryId('all');
            }}
            className="mt-3 text-xs font-mono text-azure-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

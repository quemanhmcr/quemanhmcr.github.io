import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Cpu, Database, Code2, BrainCircuit } from 'lucide-react';

const iconMap = [BrainCircuit, Cpu, Code2, Database];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills-section" className="relative py-24 bg-black overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">Technical Proficiency</span>
            <h2 className="text-4xl font-serif text-white mt-2 mb-4">Technical Skills</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                A comprehensive overview of my technical skillset.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => {
                const Icon = iconMap[idx % iconMap.length];
                return (
                    <div key={idx} className="glass-panel p-6 hover:bg-white/5 transition-all duration-300 group border-t-2 border-t-transparent hover:border-t-blue-500">
                        <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-500/20 transition-colors">
                            <Icon size={24} />
                        </div>
                        <h3 className="text-lg font-serif text-white mb-4 border-b border-white/10 pb-2">
                            {category.name}
                        </h3>
                        <ul className="space-y-2">
                            {category.skills.map((skill, sIdx) => (
                                <li key={sIdx} className="text-sm text-gray-400 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blue-500/50 rounded-full"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};
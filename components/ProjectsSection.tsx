import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code, X, Calendar, User, Github } from 'lucide-react';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects-section" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 border-l-2 border-white/20 pl-6">
            <h2 className="text-4xl font-serif text-white mb-2">Featured Projects</h2>
            <p className="text-gray-500">Research & Implementation Highlights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
                <div key={project.id} className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden flex flex-col">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Code size={48} />
                    </div>

                    <div className="flex justify-between items-start mb-6">
                        <span className="px-3 py-1 text-[10px] tracking-widest border border-blue-500/30 text-blue-400 rounded-full">
                            {project.category.toUpperCase()}
                        </span>
                    </div>

                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {project.fullDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">+{project.technologies.length - 4}</span>
                        )}
                    </div>

                    <button 
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 text-sm text-white border-b border-transparent hover:border-white pb-1 transition-all w-max cursor-pointer"
                    >
                        VIEW DETAILS <ExternalLink size={14} />
                    </button>
                </div>
            ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <div 
                className="bg-[#0a0a0a] border border-white/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-12">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 text-[10px] tracking-widest bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                {selectedProject.category}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">{selectedProject.title}</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">{selectedProject.fullDesc}</p>
                        
                        {selectedProject.githubUrl && (
                            <a 
                                href={selectedProject.githubUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white transition-all"
                            >
                                <Github size={16} /> View Source Code
                            </a>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 border-y border-white/10 py-6">
                        <div className="flex items-start gap-3">
                            <User size={18} className="text-blue-400 mt-1" />
                            <div>
                                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Role</h4>
                                <p className="text-white text-sm">{selectedProject.role}</p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech, i) => (
                                    <span key={i} className="text-xs text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-xl font-serif text-white mb-4">Project Insights</h3>
                        {selectedProject.blogContent ? (
                            <div dangerouslySetInnerHTML={{ __html: selectedProject.blogContent }} />
                        ) : (
                            <p className="text-gray-500 italic">Detailed blog post coming soon...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};
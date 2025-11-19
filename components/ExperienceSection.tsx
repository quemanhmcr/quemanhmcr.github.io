import React from 'react';
import { TIMELINE } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience-section" className="relative py-24 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 flex items-end gap-4 border-b border-white/10 pb-6">
            <div>
                <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">Experience</span>
                <h2 className="text-4xl font-serif text-white mt-2">Timeline</h2>
            </div>
        </div>

        <div className="space-y-12">
            {TIMELINE.map((item, index) => (
                <div key={item.id} className="relative pl-8 md:pl-0 group">
                    
                    {/* Desktop Layout: Grid */}
                    <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
                        
                        {/* Left Side (Date for odd, Content for even) */}
                        <div className={`hidden md:block text-right ${index % 2 === 0 ? 'pr-4' : 'order-3 pl-4 text-left'}`}>
                            {index % 2 === 0 ? (
                                <>
                                    <h3 className="text-xl font-serif text-white group-hover:text-blue-300 transition-colors">{item.role}</h3>
                                    <p className="text-blue-400 text-sm font-semibold mb-2">{item.company}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </>
                            ) : (
                                <span className="font-mono text-gray-500 text-sm tracking-widest flex items-center gap-2">
                                    <Calendar size={14} /> {item.period}
                                </span>
                            )}
                        </div>

                        {/* Center Line & Icon */}
                        <div className="absolute left-0 md:static flex flex-col items-center h-full">
                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 bg-black transition-all duration-300 ${
                                item.type === 'work' ? 'border-blue-500 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-purple-500 text-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                            }`}>
                                {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                            </div>
                            {index !== TIMELINE.length - 1 && (
                                <div className="w-px h-full bg-gradient-to-b from-white/20 to-transparent absolute top-10 md:static"></div>
                            )}
                        </div>

                        {/* Right Side (Content for odd, Date for even) */}
                        <div className={`pl-6 md:pl-0 ${index % 2 === 0 ? 'md:pl-4' : 'md:order-1 md:pr-4 md:text-right'}`}>
                             {/* Mobile View: Always Content on Right */}
                             <div className="md:hidden">
                                <span className="font-mono text-gray-500 text-xs tracking-widest mb-1 block">{item.period}</span>
                                <h3 className="text-xl font-serif text-white mb-1">{item.role}</h3>
                                <p className="text-blue-400 text-sm font-semibold mb-2">{item.company}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                             </div>

                             {/* Desktop View Logic */}
                             <div className="hidden md:block">
                                {index % 2 !== 0 ? (
                                    <>
                                        <h3 className="text-xl font-serif text-white group-hover:text-purple-300 transition-colors">{item.role}</h3>
                                        <p className="text-purple-400 text-sm font-semibold mb-2">{item.company}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                    </>
                                ) : (
                                    <span className="font-mono text-gray-500 text-sm tracking-widest flex items-center gap-2">
                                        <Calendar size={14} /> {item.period}
                                    </span>
                                )}
                             </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
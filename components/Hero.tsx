import React from 'react';
import { PROJECTS, SKILLS, MY_PROFILE } from '../constants';
import { ArrowRight, Github, Mail, Cpu, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,30,50,0.4)_0%,rgba(0,0,0,1)_70%)]"></div>
        <ParticleBackground />
      </div>

      {/* The Globe / Planet Representation */}
      <div className="absolute z-10 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full animate-spin-slow opacity-80 pointer-events-none">
         <div className="w-full h-full rounded-full bg-[conic-gradient(from_225deg_at_50%_50%,#000000_0%,#1a2b4b_25%,#4a6fa5_50%,#1a2b4b_75%,#000000_100%)] blur-[2px] shadow-[inset_-20px_-20px_100px_rgba(0,0,0,0.9),0_0_50px_rgba(74,111,165,0.3)]"></div>
         <div className="absolute inset-0 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Blue_Marble_Eastern_Hemisphere.jpg/1024px-Blue_Marble_Eastern_Hemisphere.jpg')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
      </div>

      {/* Center Interaction - AI Trigger */}
      <div className="absolute z-30 flex flex-col items-center justify-center text-center pointer-events-none">
        <div className="pointer-events-auto">
          <button 
            onClick={onOpenChat}
            className="group relative px-8 py-4 bg-black/50 backdrop-blur-md border border-blue-500/30 rounded-full overflow-hidden hover:border-blue-400 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] transition-all duration-500 animate-pulse-slow hover:animate-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative flex items-center gap-3 text-blue-100">
              <Sparkles size={20} className="text-blue-400 group-hover:text-white transition-colors group-hover:rotate-12" />
              <span className="tracking-widest font-semibold text-sm group-hover:text-white transition-colors">START INTERACTIVE CHAT</span>
            </div>
          </button>
        </div>
        <p className="mt-4 text-blue-200/40 text-[10px] font-mono tracking-[0.3em] animate-pulse">AI ASSISTANT READY</p>

        {/* CV Download Button */}
        <div className="mt-6 pointer-events-auto">
          <a
            href="/cv.pdf"
            download="Que_Xuan_Manh_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/10 border border-blue-500/30 rounded-full hover:bg-blue-600/20 hover:border-blue-400 transition-all duration-300 text-blue-300 hover:text-white text-xs font-mono group"
          >
            <svg
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>DOWNLOAD CV</span>
          </a>
        </div>
      </div>

      {/* Content Layer - The 3 Columns */}
      <div className="relative z-20 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-none">
        
        {/* Column 1: About/Intro */}
        <div className="glass-panel p-8 md:min-h-[400px] flex flex-col justify-center pointer-events-auto hover:bg-white/5 transition-all duration-500 group backdrop-blur-md bg-black/40 border-l-2 border-transparent hover:border-l-blue-500">
            <div className="text-xs tracking-[0.3em] text-gray-400 mb-4 font-sans flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              01 ABOUT
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight group-hover:text-blue-100 transition-colors">
                ENGINEERING MINDSET
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                Based in Hanoi. I define myself by the bridge I build between academic research and real-world utility. Turning theoretical depth into pragmatic execution.
            </p>
            <div className="flex gap-4 mt-auto opacity-60 group-hover:opacity-100 transition-opacity">
                <a href={`mailto:${MY_PROFILE.email}`} className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                    <Mail size={18} />
                </a>
                <a href={`https://${MY_PROFILE.github}`} target="_blank" rel="noreferrer" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                    <Github size={18} />
                </a>
            </div>
        </div>

        {/* Spacer for Center */}
        <div className="hidden md:block"></div>

        {/* Column 3: Skills/Vision */}
        <div className="glass-panel p-8 md:min-h-[400px] flex flex-col justify-center pointer-events-auto hover:bg-white/5 transition-all duration-500 backdrop-blur-md bg-black/40 border-r-2 border-transparent hover:border-r-blue-500 group">
            <div className="text-xs tracking-[0.3em] text-gray-400 mb-4 font-sans text-right">02 EXPERTISE</div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight text-right group-hover:text-blue-100 transition-colors">
                TECHNICAL SPECTRUM
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 text-right">
               Not limited by a single domain. Orchestrating the synergy between LLMs, Computer Vision, and Classical ML to deliver scalable, holistic intelligence.
            </p>
            <div className="mt-auto flex flex-col items-end gap-2">
                <button 
                  onClick={() => document.getElementById('skills-section')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 text-xs text-blue-400 hover:text-white transition-colors"
                >
                    VIEW TECHNICAL SKILLS <Cpu size={14} />
                </button>
            </div>
        </div>

      </div>

      {/* Decorative footer info */}
      <div className="absolute bottom-8 right-8 text-right font-mono text-[10px] text-gray-600 hidden md:block">
        <p>STATUS: OPEN FOR WORK</p>
      </div>
    </div>
  );
};
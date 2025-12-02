import React from 'react';
import { MY_PROFILE } from '../constants';
import { ScanFace, Download, Fingerprint, ShieldCheck, Code } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="relative py-24 bg-[#080808] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-900/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Digital ID Card Image */}
          <div className="w-full lg:w-1/3 relative group">
            {/* ID Card Frame */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              {/* The Image */}
              <img 
                src={MY_PROFILE.avatar} 
                alt={MY_PROFILE.name} 
                className="w-full h-full object-cover transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>

              {/* Scanning Effect Line */}
              <div className="absolute left-0 right-0 h-[2px] bg-blue-400 shadow-[0_0_10px_#60a5fa] animate-scan opacity-50"></div>

              {/* HUD Elements Overlay */}
              <div className="absolute top-4 left-4 border-l-2 border-t-2 border-blue-500 w-6 h-6"></div>
              <div className="absolute top-4 right-4 border-r-2 border-t-2 border-blue-500 w-6 h-6"></div>
              <div className="absolute bottom-4 left-4 border-l-2 border-b-2 border-blue-500 w-6 h-6"></div>
              <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-blue-500 w-6 h-6"></div>

              {/* ID Data */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <ScanFace size={16} className="animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest">IDENTITY VERIFIED</span>
                </div>
                <div className="font-mono text-white text-lg tracking-wider font-bold uppercase">{MY_PROFILE.name}</div>
                <div className="font-mono text-gray-400 text-xs mt-1">ROLE: AI INTERN // STATUS: ACTIVE</div>
              </div>
            </div>
            
            {/* Decoration Behind */}
            <div className="absolute -inset-4 border border-dashed border-white/10 rounded-2xl -z-10"></div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-3 mb-6">
                <Fingerprint className="text-blue-500" size={24} />
                <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">Professional Profile</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{MY_PROFILE.name}</span>.
            </h2>

            <div className="prose prose-invert prose-lg text-gray-400 mb-8">
              <p className="leading-relaxed">
                {MY_PROFILE.about}
              </p>
            </div>

            {/* Stats / Tech Specs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                <div className="text-2xl font-mono text-white font-bold">06</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Months of Research</div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                <div className="text-2xl font-mono text-white font-bold">04</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Core Projects</div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                <div className="text-2xl font-mono text-white font-bold">∞</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Continuous Learning</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download="Que_Xuan_Manh_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <Download size={18} />
                Download CV
              </a>
              <button 
                 onClick={() => document.getElementById('projects-section')?.scrollIntoView({behavior: 'smooth'})}
                 className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all"
              >
                <Code size={18} />
                View Projects
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
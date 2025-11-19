import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ChatBot } from './components/ChatBot';
import { MY_PROFILE } from './constants';

const App: React.FC = () => {
  // Lift state up to manage Chatbot visibility from Hero or other buttons
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(prev => !prev);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Navigation (Simple) */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="text-xl font-serif font-bold tracking-wider pointer-events-auto">
          {MY_PROFILE.name.split(' ').pop()}
          <span className="text-blue-500">.AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] font-semibold pointer-events-auto bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            <a href="#" className="hover:text-blue-400 transition-colors">HOME</a>
            <a href="#skills-section" className="hover:text-blue-400 transition-colors">CAPABILITIES</a>
            <a href="#projects-section" className="hover:text-blue-400 transition-colors">OPERATIONS</a>
            <a href="#experience-section" className="hover:text-blue-400 transition-colors">LOGS</a>
        </div>
      </nav>

      <main className="relative z-0">
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        
        {/* Footer */}
        <footer className="py-12 border-t border-white/10 text-center relative z-10 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="font-serif text-2xl mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-400 mb-6">Initiate contact sequence via standard channels.</p>
            <div className="flex justify-center gap-6 text-sm font-mono text-blue-400">
              <a href={`mailto:${MY_PROFILE.email}`} className="hover:text-white transition-colors">EMAIL_LINK</a>
              <a href={`https://${MY_PROFILE.github}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GITHUB_UPLINK</a>
              <a href={`https://${MY_PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LINKEDIN_NODE</a>
            </div>
            <p className="text-gray-600 text-xs font-mono mt-12">
              © {new Date().getFullYear()} {MY_PROFILE.name}. Systems Nominal.
            </p>
          </div>
        </footer>
      </main>

      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

export default App;
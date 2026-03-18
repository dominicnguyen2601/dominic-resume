import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Layers, Rocket, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  // Extracting projects from experience data for display
  return (
    <div className="space-y-8 animate-fade-in group/projects">
      <div className="mb-8 px-1">
        <h2 className="text-2xl font-bold theme-text uppercase tracking-tight">Featured Projects</h2>
        <p className="theme-text-muted mt-1">Selected works from my professional experience</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {EXPERIENCE_DATA.map((item) => (
          <div 
            key={item.id} 
            className="group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:shadow-primary-shadow flex flex-col theme-bg-card theme-border-subtle hover:theme-border"
          >
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg transition-colors theme-bg-secondary group-hover:theme-bg-hover">
                  <Layers size={24} className="theme-text-muted group-hover:theme-text" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border theme-bg-secondary theme-text-dimmed theme-border">
                  {item.company.split('(')[1]?.replace(')', '') || 'Project'}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:theme-primary transition-colors theme-text">
                {item.role}
              </h3>
              
              <p className="text-sm line-clamp-3 mb-6 theme-text-muted leading-relaxed uppercase tracking-wide font-medium opacity-80">
                {item.description}
              </p>

              <div className="space-y-3 mb-6">
                {item.responsibilities.slice(0, 2).map((resp, idx) => (
                  <div key={idx} className="flex items-start text-xs theme-text-secondary leading-relaxed font-medium">
                     <div className="min-w-[4px] h-[4px] rounded-full mt-1.5 mr-2 theme-primary-bg theme-glow-primary"></div>
                     <span className="line-clamp-2">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 border-t flex items-center justify-between theme-bg-badge theme-border-subtle">
              <div className="flex -space-x-2 overflow-hidden">
                 {/* Visual flair: showing tech stack as circles */}
                 {item.technologies.slice(0, 4).map((tech, i) => (
                   <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold z-10 hover:z-20 hover:scale-110 transition-transform cursor-help theme-bg-secondary theme-text-muted theme-border" 
                    title={tech}
                  >
                      {tech.substring(0, 2)}
                   </div>
                 ))}
                 {item.technologies.length > 4 && (
                   <div className="w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold pl-1 theme-bg-secondary theme-text-dimmed theme-border">
                      +{item.technologies.length - 4}
                   </div>
                 )}
              </div>
              <button className="text-xs font-bold uppercase tracking-wider transition-colors theme-primary hover:theme-text flex items-center">
                View Details <ArrowUpRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
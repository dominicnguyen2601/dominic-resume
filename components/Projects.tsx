import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Layers, Rocket, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  // Extracting projects from experience data for display
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
        <p className="text-slate-400 mt-1">Selected works from my professional experience</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {EXPERIENCE_DATA.map((item) => (
          <div 
            key={item.id} 
            className="group bg-dark-card rounded-xl overflow-hidden border border-slate-700/50 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
          >
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  <Layers size={24} className="text-slate-400 group-hover:text-white" />
                </div>
                <div className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  {item.company.split('(')[1]?.replace(')', '') || 'Project'}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              
              <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                {item.description}
              </p>

              <div className="space-y-3 mb-6">
                {item.responsibilities.slice(0, 2).map((resp, idx) => (
                  <div key={idx} className="flex items-start text-slate-300 text-xs">
                     <div className="min-w-[4px] h-[4px] rounded-full bg-slate-500 mt-1.5 mr-2"></div>
                     <span className="line-clamp-2">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between">
              <div className="flex -space-x-2 overflow-hidden">
                 {/* Visual flair: showing tech stack as circles */}
                 {item.technologies.slice(0, 4).map((tech, i) => (
                   <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-300 font-bold z-10 hover:z-20 hover:scale-110 transition-transform" title={tech}>
                      {tech.substring(0, 2)}
                   </div>
                 ))}
                 {item.technologies.length > 4 && (
                   <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-500 font-bold pl-1">
                      +{item.technologies.length - 4}
                   </div>
                 )}
              </div>
              <button className="text-xs font-semibold text-primary hover:text-emerald-300 flex items-center transition-colors">
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
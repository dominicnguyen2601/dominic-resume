import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar, Building2, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Professional Journey</h2>
          <p className="text-slate-400 mt-1">My career timeline and key achievements</p>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE_DATA.map((job, index) => (
          <div key={job.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className={`
              absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-slate-900 
              transition-colors duration-300
              ${index === 0 ? 'bg-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-600 group-hover:bg-slate-400'}
            `} />

            <div className="bg-dark-card rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex items-center text-slate-400 mt-1 text-sm font-medium">
                    <Building2 size={16} className="mr-2" />
                    {job.company}
                  </div>
                </div>
                <div className="flex items-center text-xs font-semibold uppercase tracking-wide text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} className="mr-2" />
                  {job.period}
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {job.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-slate-300 text-sm leading-relaxed">
                      <ChevronRight size={16} className="text-primary mt-0.5 mr-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-700/50">
                {job.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded border border-slate-700/50 hover:text-white hover:border-slate-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
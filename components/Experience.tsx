import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar, Building2, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="flex items-center justify-between mb-6 px-1">
        <div>
          <h2 className="text-2xl font-bold theme-text uppercase tracking-tight">Professional Journey</h2>
          <p className="theme-text-muted mt-1">My career timeline and key achievements</p>
        </div>
      </div>

      <div className="relative border-l-2 ml-3 md:ml-6 space-y-12 theme-border">
        {EXPERIENCE_DATA.map((job, index) => (
          <div key={job.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div 
              className={`
                absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 
                transition-all duration-300
                ${index === 0 ? 'theme-primary-bg theme-glow-primary' : 'bg-slate-400 group-hover:bg-slate-200'}
              `}
              style={{ 
                borderColor: 'var(--bg-primary)',
              } as React.CSSProperties}
            />

            <div className="rounded-xl p-6 border transition-all duration-300 hover:shadow-xl hover:theme-border theme-bg-card theme-border-subtle">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:theme-primary transition-colors theme-text">
                    {job.role}
                  </h3>
                  <div className="flex items-center mt-1 text-sm font-medium theme-text-muted">
                    <Building2 size={16} className="mr-2" />
                    {job.company}
                  </div>
                </div>
                <div className="flex items-center text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full w-fit theme-primary theme-primary-bg-subtle">
                  <Calendar size={14} className="mr-2" />
                  {job.period}
                </div>
              </div>

              <p className="mb-4 leading-relaxed theme-text-secondary text-sm md:text-base">
                {job.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-bold mb-3 uppercase tracking-widest theme-text-dimmed">Key Responsibilities</h4>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-sm leading-relaxed theme-text-secondary">
                      <ChevronRight size={16} className="mt-0.5 mr-2 shrink-0 theme-primary" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t theme-border-subtle">
                {job.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border transition-colors theme-bg-secondary theme-text-muted theme-border group-hover:theme-text group-hover:theme-border"
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
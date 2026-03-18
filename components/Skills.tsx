import React from 'react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../constants';
import { CheckCircle2, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in group/main">
      <div className="mb-8 px-1">
        <h2 className="text-2xl font-bold theme-text uppercase tracking-tight">Technical Proficiency</h2>
        <p className="theme-text-muted mt-1">A comprehensive overview of my technical stack</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.name} className="rounded-xl p-6 border transition-all duration-300 hover:theme-border theme-bg-card theme-border-subtle">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b flex items-center theme-text theme-border-subtle">
              <span className="w-2 h-2 rounded-full mr-3 theme-primary-bg theme-glow-primary"></span>
              {category.name}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="flex items-center px-4 py-2 rounded-lg border transition-all duration-200 cursor-default group theme-bg-secondary theme-text-secondary theme-border hover:theme-text hover:theme-border group-hover/main:border-opacity-100"
                >
                  <CheckCircle2 size={16} className="mr-2 theme-text-dimmed group-hover:theme-primary transition-colors" />
                  <span className="font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education Section embedded in Skills tab for context */}
      <div className="rounded-xl p-8 border mt-8 theme-gradient theme-border">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 text-center md:text-left">
          <div className="p-4 rounded-xl mb-4 md:mb-0 theme-secondary theme-secondary-bg-subtle">
             <Award size={48} />
          </div>
          <div>
             <h3 className="text-xl font-bold mb-2 theme-text uppercase tracking-widest">Education & Certifications</h3>
             <p className="text-lg font-medium leading-relaxed theme-text-secondary">{PERSONAL_INFO.education}</p>
             <p className="mt-2 text-sm theme-text-muted uppercase tracking-wider font-semibold opacity-70">Strong foundation in Software Engineering principles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
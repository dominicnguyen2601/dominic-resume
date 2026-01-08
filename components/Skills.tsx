import React from 'react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../constants';
import { CheckCircle2, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Technical Proficiency</h2>
        <p className="text-slate-400 mt-1">A comprehensive overview of my technical stack</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.name} className="bg-dark-card rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors">
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-slate-800 flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
              {category.name}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="flex items-center bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white px-4 py-2 rounded-lg border border-slate-700 transition-all duration-200 cursor-default group"
                >
                  <CheckCircle2 size={16} className="mr-2 text-slate-500 group-hover:text-primary transition-colors" />
                  <span className="font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education Section embedded in Skills tab for context */}
      <div className="bg-gradient-to-r from-slate-900 to-dark-lighter rounded-xl p-8 border border-slate-700 mt-8">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
             <Award size={32} />
          </div>
          <div>
             <h3 className="text-xl font-bold text-white mb-2">Education & Certifications</h3>
             <p className="text-slate-300 text-lg">{PERSONAL_INFO.education}</p>
             <p className="text-slate-500 mt-2 text-sm">Strong foundation in Software Engineering principles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
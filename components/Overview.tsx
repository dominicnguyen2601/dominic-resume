import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../constants';
import { MapPin, Mail, Phone, Download, Trophy, Clock, Zap, Activity, PieChart, BarChart2 } from 'lucide-react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const Overview: React.FC = () => {
  // Data for Skills Radar Chart
  const skillsData = [
    { subject: 'Frontend', A: 98, fullMark: 100 },
    { subject: 'Mobile', A: 85, fullMark: 100 },
    { subject: 'Backend', A: 75, fullMark: 100 },
    { subject: 'Cloud/DevOps', A: 70, fullMark: 100 },
    { subject: 'Architecture', A: 80, fullMark: 100 },
    { subject: 'UI/UX', A: 90, fullMark: 100 },
  ];

  // Data for Activity Area Chart (Simulated Project/Contribution Impact)
  const activityData = [
    { year: '2019', impact: 30, projects: 2 },
    { year: '2020', impact: 45, projects: 3 },
    { year: '2021', impact: 60, projects: 4 },
    { year: '2022', impact: 55, projects: 3 },
    { year: '2023', impact: 85, projects: 5 },
    { year: '2024', impact: 90, projects: 4 },
    { year: '2025', impact: 100, projects: 2 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 p-3 rounded-lg shadow-xl">
          <p className="text-white font-medium mb-1">{label}</p>
          <p className="text-primary text-sm">
            Impact Score: {payload[0].value}
          </p>
          <p className="text-slate-400 text-xs">
            Projects Delivered: {payload[0].payload.projects}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-dark-lighter to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Zap size={200} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Hello, I'm <span className="text-primary">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-xl text-slate-400 mb-6 font-light">{PERSONAL_INFO.role}</h2>
            
            <p className="text-slate-300 max-w-2xl leading-relaxed mb-8">
              {PERSONAL_INFO.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 bg-primary hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-emerald-900/20 active:scale-95">
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
              <button className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg font-medium transition-all border border-slate-700 active:scale-95">
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Key Stats Mini Cards */}
          <div className="flex flex-col gap-4 min-w-[200px]">
             <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-slate-400 text-sm">Experience</span>
                   <Clock size={16} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-white">5+ Years</div>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-slate-400 text-sm">Projects</span>
                   <Trophy size={16} className="text-secondary" />
                </div>
                <div className="text-2xl font-bold text-white">10+ Delivered</div>
             </div>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Activity Chart */}
        <div className="bg-dark-card p-6 rounded-xl border border-slate-700/50 shadow-lg flex flex-col h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center">
                <Activity className="mr-2 text-primary" size={20} />
                Career Growth & Impact
              </h3>
              <p className="text-sm text-slate-400">Project delivery impact over time</p>
            </div>
          </div>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis 
                  dataKey="year" 
                  stroke="#94a3b8" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="impact" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorImpact)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills Radar Chart */}
        <div className="bg-dark-card p-6 rounded-xl border border-slate-700/50 shadow-lg flex flex-col h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center">
                <PieChart className="mr-2 text-secondary" size={20} />
                Technical Competency
              </h3>
              <p className="text-sm text-slate-400">Balance across engineering domains</p>
            </div>
          </div>
          <div className="flex-1 w-full min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 500 }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
              </RadarChart>
            </ResponsiveContainer>
            
            {/* Center decorative element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] z-0 pointer-events-none opacity-50 md:opacity-100"></div>
          </div>
        </div>

      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Widget */}
        <div className="bg-dark-card rounded-xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-secondary mr-3 rounded-full"></span>
            Contact Details
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-slate-300">
              <Mail className="text-slate-500" size={18} />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </li>
            <li className="flex items-center space-x-3 text-slate-300">
              <Phone className="text-slate-500" size={18} />
              <span>{PERSONAL_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-300">
              <MapPin className="text-slate-500" size={18} />
              <span>{PERSONAL_INFO.location}</span>
            </li>
          </ul>
        </div>

        {/* Top Skills Widget */}
        <div className="bg-dark-card rounded-xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-1 h-6 bg-primary mr-3 rounded-full"></span>
            Top Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILL_CATEGORIES[0].skills.slice(0, 6).map((skill) => (
              <span key={skill} className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-700">
                {skill}
              </span>
            ))}
            {SKILL_CATEGORIES[2].skills.slice(0, 3).map((skill) => (
              <span key={skill} className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-700">
                {skill}
              </span>
            ))}
             <span className="bg-slate-800 text-slate-400 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-700">
                + more
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
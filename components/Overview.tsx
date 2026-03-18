import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, CV_URL } from '../constants';
import { MapPin, Mail, Phone, Download, Trophy, Clock, Zap, Activity, PieChart, BarChart2 } from 'lucide-react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import { useTheme } from './ThemeContext';

const Overview: React.FC = () => {
  const { chartColors } = useTheme();

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
        <div 
          className="border p-3 rounded-lg shadow-xl"
          style={{ 
            backgroundColor: chartColors.tooltipBg, 
            borderColor: chartColors.tooltipBorder 
          }}
        >
          <p className="font-medium mb-1" style={{ color: chartColors.text }}>{label}</p>
          <p className="text-sm font-bold" style={{ color: chartColors.primary }}>
            Impact Score: {payload[0].value}
          </p>
          <p className="text-xs" style={{ color: chartColors.textMuted }}>
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
      <div className="rounded-2xl p-8 border shadow-xl relative overflow-hidden theme-gradient theme-border">
        <div className="absolute top-0 right-0 p-4 opacity-5 theme-text">
          <Zap size={200} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 theme-text">
              Hello, I'm <span className="theme-primary">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-xl mb-6 font-light theme-text-muted">{PERSONAL_INFO.role}</h2>
            
            <p className="max-w-2xl leading-relaxed mb-8 theme-text-secondary">
              {PERSONAL_INFO.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 theme-primary-bg theme-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-primary-shadow active:scale-95">
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
              <a
                href={CV_URL}
                download="Dominic_Nguyen_CV.pdf"
                className="flex items-center space-x-2 theme-bg-secondary theme-bg-hover theme-text px-6 py-3 rounded-lg font-medium transition-all border theme-border active:scale-95"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Key Stats Mini Cards */}
          <div className="flex flex-col gap-4 min-w-[200px]">
             <div className="p-4 rounded-xl border backdrop-blur-sm theme-bg-badge theme-border">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-sm theme-text-muted">Experience</span>
                   <Clock size={16} className="theme-primary" />
                </div>
                <div className="text-2xl font-bold theme-text">5+ Years</div>
             </div>
             <div className="p-4 rounded-xl border backdrop-blur-sm theme-bg-badge theme-border">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-sm theme-text-muted">Projects</span>
                   <Trophy size={16} className="theme-secondary" />
                </div>
                <div className="text-2xl font-bold theme-text">10+ Delivered</div>
             </div>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Activity Chart */}
        <div className="p-6 rounded-xl border shadow-lg flex flex-col h-[400px] theme-bg-card theme-border-subtle">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold flex items-center theme-text">
                <Activity className="mr-2 theme-primary" size={20} />
                {(chartColors as any).isLight ? 'Activity Index' : 'Career Growth & Impact'}
              </h3>
              <p className="text-sm theme-text-muted">Project delivery impact over time</p>
            </div>
          </div>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColors.primary} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={chartColors.primary} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
                <XAxis 
                  dataKey="year" 
                  stroke={chartColors.textMuted} 
                  tick={{ fill: chartColors.textMuted, fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke={chartColors.textMuted} 
                  tick={{ fill: chartColors.textMuted, fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="impact" 
                  stroke={chartColors.primary} 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorImpact)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills Radar Chart */}
        <div className="p-6 rounded-xl border shadow-lg flex flex-col h-[400px] theme-bg-card theme-border-subtle">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold flex items-center theme-text">
                <PieChart className="mr-2 theme-secondary" size={20} />
                Technical Competency
              </h3>
              <p className="text-sm theme-text-muted">Balance across engineering domains</p>
            </div>
          </div>
          <div className="flex-1 w-full min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                <PolarGrid stroke={chartColors.grid} />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: chartColors.text, fontSize: 12, fontWeight: 500 }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                   name="Proficiency"
                   dataKey="A"
                   stroke={chartColors.secondary}
                   strokeWidth={2}
                   fill={chartColors.secondary}
                   fillOpacity={0.4}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: chartColors.tooltipBg, 
                    borderColor: chartColors.tooltipBorder, 
                    borderRadius: '8px', 
                    color: chartColors.text 
                  }}
                  itemStyle={{ color: chartColors.secondary }}
                />
              </RadarChart>
            </ResponsiveContainer>
            
            {/* Center decorative element */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-0 pointer-events-none opacity-50 md:opacity-100"
              style={{ 
                backgroundColor: chartColors.text,
                boxShadow: `0 0 15px ${chartColors.secondary}`
              }}
            ></div>
          </div>
        </div>

      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Widget */}
        <div className="rounded-xl border p-6 theme-bg-card theme-border-subtle">
          <h3 className="text-lg font-semibold mb-4 flex items-center theme-text">
            <span className="w-1 h-6 mr-3 rounded-full theme-secondary-bg"></span>
            Contact Details
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 theme-text-secondary">
              <Mail className="theme-text-muted" size={18} />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="transition-colors hover:theme-primary">
                {PERSONAL_INFO.email}
              </a>
            </li>
            <li className="flex items-center space-x-3 theme-text-secondary">
              <Phone className="theme-text-muted" size={18} />
              <span>{PERSONAL_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3 theme-text-secondary">
              <MapPin className="theme-text-muted" size={18} />
              <span>{PERSONAL_INFO.location}</span>
            </li>
          </ul>
        </div>

        {/* Top Skills Widget */}
        <div className="rounded-xl border p-6 theme-bg-card theme-border-subtle">
          <h3 className="text-lg font-semibold mb-4 flex items-center theme-text">
            <span className="w-1 h-6 mr-3 rounded-full theme-primary-bg"></span>
            Top Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILL_CATEGORIES[0].skills.slice(0, 6).map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-full text-sm font-medium border theme-bg-secondary theme-text-secondary theme-border">
                {skill}
              </span>
            ))}
            {SKILL_CATEGORIES[2].skills.slice(0, 3).map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-full text-sm font-medium border theme-bg-secondary theme-text-secondary theme-border">
                {skill}
              </span>
            ))}
             <span className="px-3 py-1.5 rounded-full text-sm font-medium border theme-bg-secondary theme-text-dimmed theme-border">
                + more
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
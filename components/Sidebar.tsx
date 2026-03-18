import React from 'react';
import {
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  X,
  Github,
  Linkedin,
  MessageSquareQuote,
  Star
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Tab } from '../types';
import ThemeSwitcher from './ThemeSwitcher';

const avatarImg = '/avatar.jpg'; 

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: Tab.OVERVIEW, icon: User, label: 'Overview' },
    { id: Tab.EXPERIENCE, icon: Briefcase, label: 'Experience' },
    { id: Tab.PROJECTS, icon: FolderGit2, label: 'Projects' },
    { id: Tab.SKILLS, icon: Code2, label: 'Tech Stack' },
    { id: Tab.TESTIMONIALS, icon: MessageSquareQuote, label: 'Testimonials' },
    { id: Tab.RATINGS, icon: Star, label: 'Ratings' },
    { id: Tab.CONTACT, icon: Mail, label: 'Contact' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 md:hidden backdrop-blur-sm theme-overlay"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 h-full w-72 border-r 
          transform transition-transform duration-300 ease-in-out flex flex-col
          theme-bg-secondary theme-border
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}
      >
        {/* Header with Avatar */}
        <div className="p-6 border-b theme-border">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1" />
            <button onClick={toggleSidebar} className="md:hidden theme-text-muted hover:theme-text">
              <X size={24} />
            </button>
          </div>
          
          {/* Avatar */}
          <div className="flex flex-col items-center text-center">
            <div className="relative group mb-4">
              {/* Animated ring */}
              <div 
                className="absolute -inset-1 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
                style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }}
              />
              
              {/* Avatar container */}
              <div 
                className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-offset-2"
                style={{ 
                  '--tw-ring-color': 'var(--border-primary)',
                  '--tw-ring-offset-color': 'var(--bg-primary)'
                } as React.CSSProperties}
              >
                <img 
                  src={avatarImg} 
                  alt="Dominic Nguyen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Online indicator */}
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 theme-primary-bg theme-glow-primary theme-border" />
            </div>
            
            <h1 className="text-xl font-bold tracking-tight theme-text">Dominic Nguyen</h1>
            <p className="text-xs font-medium mt-1 uppercase tracking-wider theme-primary">Senior Software Engineer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 768) toggleSidebar();
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'theme-primary-bg-subtle theme-primary shadow-lg shadow-primary-shadow' 
                    : 'theme-text-muted hover:theme-bg-hover hover:theme-text'
                  }
                `}
              >
                <Icon 
                  size={20} 
                  className={`transition-colors ${isActive ? 'theme-primary' : 'theme-text-muted group-hover:theme-text'}`} 
                />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full theme-primary-bg theme-glow-primary" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t theme-border space-y-4">
          <div className="flex items-center justify-center space-x-4">
             <a href="https://github.com/dominicnguyen2601" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors theme-text-muted hover:theme-text hover:theme-bg-hover">
                <Github size={20} />
             </a>
             <a href="https://www.linkedin.com/in/dominic-nguyen-dev/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors theme-text-muted hover:theme-secondary hover:theme-bg-hover">
                <Linkedin size={20} />
             </a>
          </div>
          
          {/* Theme Switcher Integration */}
          <ThemeSwitcher />

          <div className="text-[10px] text-center uppercase tracking-widest theme-text-dimmed">
            &copy; {new Date().getFullYear()} Portfolio
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
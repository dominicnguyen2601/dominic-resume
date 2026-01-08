import React from 'react';
import { 
  User, 
  Briefcase, 
  Code2, 
  FolderGit2, 
  Mail, 
  X,
  Github,
  Linkedin
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Tab } from '../types';

const avatarImg = '/avatar.jpg'; // Use public folder or static path

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
    { id: Tab.CONTACT, icon: Mail, label: 'Contact' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-20 md:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 h-full w-72 bg-dark-lighter border-r border-slate-700 
          transform transition-transform duration-300 ease-in-out flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}
      >
        {/* Header with Avatar */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1" />
            <button onClick={toggleSidebar} className="md:hidden text-slate-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
          
          {/* Avatar */}
          <div className="flex flex-col items-center text-center">
            <div className="relative group mb-4">
              {/* Animated ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-emerald-400 to-teal-500 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              
              {/* Avatar container */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-slate-700 ring-offset-2 ring-offset-slate-900">
                <img 
                  src={avatarImg} 
                  alt="Dominic Nguyen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Online indicator */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-primary rounded-full border-2 border-slate-900 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            </div>
            
            <h1 className="text-xl font-bold text-white tracking-tight">Dominic Nguyen</h1>
            <p className="text-xs text-primary font-medium mt-1 uppercase tracking-wider">Senior Software Engineer</p>
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
                    ? 'bg-primary/10 text-primary shadow-lg shadow-primary/5' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }
                `}
              >
                <Icon 
                  size={20} 
                  className={`transition-colors ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-white'}`} 
                />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700">
          <div className="flex items-center justify-center space-x-4 mb-4">
             {/* Mock Social Links */}
             <a href="#" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                <Github size={20} />
             </a>
             <a href="#" className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">
                <Linkedin size={20} />
             </a>
          </div>
          <div className="text-xs text-center text-slate-500">
            &copy; {new Date().getFullYear()} Portfolio
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
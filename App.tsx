import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Tab } from './types';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on window resize if viewing on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.OVERVIEW:
        return <Overview />;
      case Tab.EXPERIENCE:
        return <Experience />;
      case Tab.SKILLS:
        return <Skills />;
      case Tab.PROJECTS:
        return <Projects />;
      case Tab.TESTIMONIALS:
        return <Testimonials />;
      case Tab.CONTACT:
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen flex font-sans" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)' }}>
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content */}
      <main className="flex-1 md:ml-72 flex flex-col min-h-screen relative">
        
        {/* Mobile Header */}
        <header
          className="md:hidden flex items-center justify-between px-6 py-4 backdrop-blur sticky top-0 z-20"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-primary)',
          }}
        >
          <div className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Dominic Nguyen</div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg"
            style={{
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-hover)',
            }}
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Page Content Container */}
        <div className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full overflow-x-hidden">
          {renderContent()}
        </div>

      </main>
    </div>
  );
};

export default App;
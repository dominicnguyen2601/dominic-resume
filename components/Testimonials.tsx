import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TESTIMONIALS_DATA } from '../constants';
import { Grid3X3, SlidersHorizontal, ChevronLeft, ChevronRight, X, Quote, ChevronDown, Check } from 'lucide-react';

type ViewMode = 'grid' | 'slide';

const Testimonials: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedProject, setSelectedProject] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Get unique project names for filter
  const projectNames = useMemo(() => {
    const names = [...new Set(TESTIMONIALS_DATA.map(t => t.projectName))];
    return ['all', ...names];
  }, []);

  // Filter testimonials by project
  const filteredTestimonials = useMemo(() => {
    if (selectedProject === 'all') return TESTIMONIALS_DATA;
    return TESTIMONIALS_DATA.filter(t => t.projectName === selectedProject);
  }, [selectedProject]);

  // Slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  // Reset slide index when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedProject]);

  // Handle keyboard navigation for slides & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === 'Escape') setLightboxImage(null);
        return;
      }
      
      if (viewMode === 'slide' && filteredTestimonials.length > 1) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, filteredTestimonials.length, lightboxImage]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8 px-1">
        <h2 className="text-2xl font-bold theme-text uppercase tracking-tight">Client Testimonials</h2>
        <p className="theme-text-muted mt-1">Feedback from industry partners and clients I've worked with</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl border theme-bg-card theme-border-subtle shadow-sm">
        {/* Project Filter - Custom Dropdown */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label className="text-[10px] font-bold uppercase tracking-widest theme-text-dimmed">Filter:</label>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between gap-2 border rounded-xl px-4 py-2 text-sm transition-all theme-bg-input theme-text theme-border-subtle hover:theme-border focus:theme-border min-w-[180px]"
            >
              <span>{selectedProject === 'all' ? 'All Projects' : selectedProject}</span>
              <ChevronDown size={16} className={`theme-text-muted transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] py-1 rounded-xl border shadow-lg z-20 theme-bg-card theme-border-subtle">
                  {projectNames.map((name) => (
                    <button
                      key={name}
                      onClick={() => {
                        setSelectedProject(name);
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left transition-colors hover:theme-bg-hover ${
                        selectedProject === name ? 'theme-primary' : 'theme-text'
                      }`}
                    >
                      <span>{name === 'all' ? 'All Projects' : name}</span>
                      {selectedProject === name && <Check size={16} />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl theme-bg-secondary border theme-border-subtle">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'theme-primary-bg text-white shadow-md'
                : 'theme-text-muted hover:theme-text hover:theme-bg-hover'
            }`}
          >
            <Grid3X3 size={16} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Grid</span>
          </button>
          <button
            onClick={() => setViewMode('slide')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              viewMode === 'slide'
                ? 'theme-primary-bg text-white shadow-md'
                : 'theme-text-muted hover:theme-text hover:theme-bg-hover'
            }`}
          >
            <SlidersHorizontal size={16} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Slide</span>
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredTestimonials.length === 0 && (
        <div className="text-center py-20 rounded-2xl border border-dashed theme-bg-card theme-border-subtle">
          <Quote size={40} className="mx-auto mb-4 theme-text-dimmed opacity-40" />
          <p className="theme-text-muted font-medium">No testimonials found for this project filter.</p>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && filteredTestimonials.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 theme-bg-card theme-border-subtle hover:theme-border"
            >
              {/* Image with subtle zoom */}
              <div
                className="relative aspect-video overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxImage(testimonial.image)}
              >
                <img
                  src={testimonial.image}
                  alt={`Feedback from ${testimonial.projectName}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    <Grid3X3 size={24} />
                  </div>
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Quote size={24} className="theme-primary mb-4 opacity-40" />
                  <p className="theme-text-secondary text-base leading-relaxed italic line-clamp-4">
                    "{testimonial.caption}"
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t theme-border-subtle flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] theme-primary">
                    {testimonial.projectName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Slide View - Fixed with Transition */}
      {viewMode === 'slide' && filteredTestimonials.length > 0 && (
        <div className="relative max-w-4xl mx-auto group">
          {/* Main Content Area */}
          <div className="rounded-3xl border overflow-hidden theme-bg-card theme-border-subtle shadow-xl backdrop-blur-sm">
            {/* Key transition container */}
            <div key={currentSlide} className="animate-fade-in no-theme-transition">
              {/* Card Header/Meta for Slide */}
              <div className="px-8 pt-8 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] theme-primary">
                  {filteredTestimonials[currentSlide].projectName}
                </span>
                <Quote size={32} className="theme-text-dimmed opacity-20" />
              </div>

              {/* Feed Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 p-8 flex flex-col justify-center">
                   <p className="theme-text text-xl md:text-2xl leading-relaxed italic mb-8 font-light">
                     "{filteredTestimonials[currentSlide].caption}"
                   </p>
                   <div className="theme-bg-secondary w-16 h-1 rounded-full mb-2"></div>
                </div>
                
                <div 
                  className="lg:col-span-5 aspect-square lg:aspect-auto cursor-zoom-in relative group/img overflow-hidden"
                  onClick={() => setLightboxImage(filteredTestimonials[currentSlide].image)}
                >
                  <img
                    src={filteredTestimonials[currentSlide].image}
                    alt={filteredTestimonials[currentSlide].projectName}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          {filteredTestimonials.length > 1 && (
            <>
              <div className="absolute top-1/2 -left-4 sm:-left-6 -right-4 sm:-right-6 flex justify-between items-center -translate-y-1/2 pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="p-4 rounded-full shadow-2xl transition-all theme-bg-card theme-text hover:theme-primary-bg hover:text-white pointer-events-auto active:scale-90 theme-border"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-4 rounded-full shadow-2xl transition-all theme-bg-card theme-text hover:theme-primary-bg hover:text-white pointer-events-auto active:scale-90 theme-border"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Paging Dots */}
              <div className="flex items-center justify-center gap-3 mt-10">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? 'theme-primary-bg w-10'
                        : 'theme-bg-secondary w-3 hover:w-5 hover:theme-bg-hover'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Lightbox - Portal to body for true fullscreen overlay */}
      {lightboxImage && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white/80 hover:text-white transition-all"
          >
            <X size={24} />
          </button>

          {/* Centered image */}
          <img
            src={lightboxImage}
            alt="Testimonial Expanded"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default Testimonials;


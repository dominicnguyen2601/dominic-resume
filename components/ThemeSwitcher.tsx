import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme, ThemeInfo } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close popover on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current && !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSelect = (t: ThemeInfo) => {
    setTheme(t.id);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl text-sm font-medium no-theme-transition"
        style={{
          color: 'var(--text-muted)',
          background: 'var(--bg-hover)',
          border: '1px solid var(--border-subtle)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--text-primary)';
          e.currentTarget.style.borderColor = 'var(--color-primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--text-muted)';
          e.currentTarget.style.borderColor = 'var(--border-subtle)';
        }}
        aria-label="Switch theme"
        aria-expanded={isOpen}
      >
        <Palette size={16} />
        <span>Theme</span>
      </button>

      {/* Popover */}
      {isOpen && (
        <div ref={popoverRef} className="theme-switcher-popover">
          <div
            className="text-xs font-semibold uppercase tracking-wider mb-3 px-1"
            style={{ color: 'var(--text-dimmed)' }}
          >
            Choose Theme
          </div>
          <div className="space-y-1">
            {themes.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelect(t)}
                  className={`theme-option ${isActive ? 'active' : ''}`}
                >
                  {/* Color Swatch */}
                  <div className="theme-swatch">
                    {t.swatches.map((color, i) => (
                      <div
                        key={i}
                        className="theme-swatch-color"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{t.name}</div>
                    <div
                      className="text-[11px] truncate"
                      style={{ color: isActive ? 'var(--color-primary)' : 'var(--text-dimmed)', opacity: 0.8 }}
                    >
                      {t.description}
                    </div>
                  </div>

                  {/* Check */}
                  {isActive && (
                    <Check size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeName = 'dark' | 'classic' | 'executive' | 'elegant' | 'creative';

export interface ThemeInfo {
  id: ThemeName;
  name: string;
  description: string;
  swatches: string[]; // [bg, card, primary, secondary]
}

export const THEMES: ThemeInfo[] = [
  {
    id: 'dark',
    name: 'Midnight',
    description: 'Default dark theme',
    swatches: ['#0f172a', '#1e293b', '#10b981', '#3b82f6'],
  },
  {
    id: 'classic',
    name: 'Classic Navy',
    description: 'Navy Blue & White',
    swatches: ['#0c1f3f', '#152d54', '#f0f4f8', '#7eb8da'],
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Charcoal & Light Blue',
    swatches: ['#1f2937', '#2d3748', '#60a5fa', '#e2e8f0'],
  },
  {
    id: 'elegant',
    name: 'Elegance',
    description: 'Beige & Cream',
    swatches: ['#f5f0e8', '#ffffff', '#6b5b47', '#8b7355'],
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Burgundy & Copper',
    swatches: ['#2a1215', '#3d1c21', '#d4a574', '#c9a227'],
  },
];

interface ThemeContextType {
  theme: ThemeName;
  themeInfo: ThemeInfo;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeInfo[];
  chartColors: {
    primary: string;
    secondary: string;
    grid: string;
    tooltipBg: string;
    tooltipBorder: string;
    text: string;
    textMuted: string;
  };
}

const CHART_COLORS: Record<ThemeName, ThemeContextType['chartColors']> = {
  dark: {
    primary: '#10b981', secondary: '#3b82f6', grid: '#334155',
    tooltipBg: '#1e293b', tooltipBorder: '#334155', text: '#ffffff', textMuted: '#94a3b8',
  },
  classic: {
    primary: '#7eb8da', secondary: '#f0f4f8', grid: '#1e3a6b',
    tooltipBg: '#152d54', tooltipBorder: '#1e3a6b', text: '#ffffff', textMuted: '#a0b4c8',
  },
  executive: {
    primary: '#60a5fa', secondary: '#e2e8f0', grid: '#3d4f65',
    tooltipBg: '#2d3748', tooltipBorder: '#3d4f65', text: '#ffffff', textMuted: '#a0aec0',
  },
  elegant: {
    primary: '#6b5b47', secondary: '#8b7355', grid: '#d4cbbe',
    tooltipBg: '#ffffff', tooltipBorder: '#d4cbbe', text: '#2d2418', textMuted: '#7a6e5d',
  },
  creative: {
    primary: '#d4a574', secondary: '#c9a227', grid: '#52272d',
    tooltipBg: '#3d1c21', tooltipBorder: '#52272d', text: '#faf0e6', textMuted: '#c4a896',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'dominic-resume-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && THEMES.some(t => t.id === stored)) {
        return stored as ThemeName;
      }
    } catch {}
    return 'dark';
  });

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themeInfo = THEMES.find(t => t.id === theme) || THEMES[0];
  const chartColors = CHART_COLORS[theme];

  return (
    <ThemeContext.Provider value={{ theme, themeInfo, setTheme, themes: THEMES, chartColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

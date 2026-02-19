import { defaultTheme } from "./defaultTheme.js";

/**
 * Parse hex color to RGB components
 * @param {string} hex 
 * @returns {{r: number, g: number, b: number}}
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
}

/**
 * Convert RGB to hex
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns {string}
 */
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const hex = Math.max(0, Math.min(255, Math.round(x))).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

/**
 * Darken a color by a percentage
 * @param {string} hex 
 * @param {number} percent - 0 to 100
 * @returns {string}
 */
function darken(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const factor = 1 - (percent / 100);
  return rgbToHex(r * factor, g * factor, b * factor);
}

/**
 * Lighten a color and reduce saturation for disabled state
 * @param {string} hex 
 * @param {number} percent - 0 to 100
 * @returns {string}
 */
function desaturate(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const avg = (r + g + b) / 3;
  const factor = percent / 100;
  return rgbToHex(
    r + (avg - r) * factor,
    g + (avg - g) * factor,
    b + (avg - b) * factor
  );
}

/**
 * Generate color variants from a base color
 * @param {string} baseColor - hex color
 * @returns {{hover: string, active: string, disabled: string}}
 */
function generateColorVariants(baseColor) {
  return {
    hover: darken(baseColor, 12),
    active: darken(baseColor, 35),
    disabled: desaturate(baseColor, 50)
  };
}

/**
 * Deep merge user theme with defaults
 * @param {import('./theme.d.js').PartialBrandTheme} userTheme 
 * @returns {import('./theme.d.js').BrandTheme}
 */
function mergeWithDefaults(userTheme) {
  const merged = {
    fonts: {
      ...defaultTheme.fonts,
      ...userTheme.fonts
    },
    dimensions: {
      ...defaultTheme.dimensions,
      ...userTheme.dimensions
    },
    colors: {
      ...defaultTheme.colors,
      ...userTheme.colors
    }
  };

  // Ensure secondary font falls back to primary
  if (!merged.fonts.secondary) {
    merged.fonts.secondary = merged.fonts.primary;
  }

  // Auto-generate color variants if not provided
  const primaryColor = merged.colors.primary;
  const variants = generateColorVariants(primaryColor);
  
  if (!merged.colors.primaryHover) {
    merged.colors.primaryHover = variants.hover;
  }
  if (!merged.colors.primaryActive) {
    merged.colors.primaryActive = variants.active;
  }
  if (!merged.colors.primaryDisabled) {
    merged.colors.primaryDisabled = variants.disabled;
  }

  // Generate secondary variants if secondary color exists
  if (merged.colors.secondary) {
    const secVariants = generateColorVariants(merged.colors.secondary);
    if (!merged.colors.secondaryHover) {
      merged.colors.secondaryHover = secVariants.hover;
    }
    if (!merged.colors.secondaryActive) {
      merged.colors.secondaryActive = secVariants.active;
    }
    if (!merged.colors.secondaryDisabled) {
      merged.colors.secondaryDisabled = secVariants.disabled;
    }
  }

  return merged;
}

/**
 * Structural CSS vars for light mode
 */
const LIGHT_VARS = {
  '--background-base': '#ffffff',
  '--background-elevated': '#f5f5f5',
  '--background-elevated-2': '#e7e7e7',
  '--background-elevated-2-hover': '#e1e1e1',
  '--background-top': '#d8d8d8',
  '--background-translucent': 'rgba(255,255,255,0.65)',
  '--shadow-base': 'none',
  '--shadow-elevated': '0 2px 4px rgba(0,0,0,0.1)',
  '--shadow-elevated-2': '0 2px 4px rgba(0,0,0,0.041)',
  '--shadow-top': '0 0 10px rgba(0,0,0,0.2)',
  '--text-primary': '#000000',
  '--text-primary-alt': '#ffffff',
  '--text-secondary': '#666666',
  '--border-primary': '#e4e4e4',
  '--border-secondary': '#f8f8f8',
  '--border-tertiary': '#c7c7c7',
  '--action-destructive': '#dc3545',
  '--action-destructive-hover': '#bd2130',
  '--action-destructive-active': '#991724',
  '--action-destructive-disabled': '#f0c2c2',
  '--scrollbar-thumb': '#cfcfcf',
  '--scrollbar-thumb-hover': '#aaa',
  '--snt-border-radius': '12px',
};

const DARK_VARS = {
  '--background-base': '#202020',
  '--background-elevated': '#353535',
  '--background-elevated-2': '#272727',
  '--background-elevated-2-hover': '#3c3c3c',
  '--background-top': '#424242',
  '--background-translucent': 'rgba(36,36,36,0.65)',
  '--shadow-base': 'none',
  '--shadow-elevated': '0 2px 4px rgba(0,0,0,0.1)',
  '--shadow-elevated-2': '0 2px 4px rgba(0,0,0,0.041)',
  '--shadow-top': '0 0 10px rgba(0,0,0,0.3)',
  '--text-primary': '#ffffff',
  '--text-primary-alt': '#000000',
  '--text-secondary': '#cccccc',
  '--border-primary': '#3c3c3c',
  '--border-secondary': '#2c2c2c',
  '--border-tertiary': '#4c4c4c',
  '--action-destructive': '#dc3545',
  '--action-destructive-hover': '#bd2130',
  '--action-destructive-active': '#991724',
  '--action-destructive-disabled': '#4b3838',
  '--scrollbar-thumb': '#3f3f3f',
  '--scrollbar-thumb-hover': '#555',
  '--snt-border-radius': '12px',
};

/**
 * Apply theme to document root as CSS variables
 * @param {import('./theme.d.js').BrandTheme} theme 
 */
function applyThemeToRoot(theme) {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;

  // Detect dark mode preference
  const isDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    || root.classList.contains('dark');
  const structVars = isDark ? DARK_VARS : LIGHT_VARS;

  // Apply structural vars (only if not already set by external CSS)
  for (const [k, v] of Object.entries(structVars)) {
    if (!root.style.getPropertyValue(k)) {
      root.style.setProperty(k, v);
    }
  }

  // Border radius from theme dimensions
  root.style.setProperty('--snt-border-radius', `${theme.dimensions.borderRadius}px`);
  
  // Fonts
  root.style.setProperty('--fabkit-font-primary', theme.fonts.primary);
  root.style.setProperty('--fabkit-font-secondary', theme.fonts.secondary || theme.fonts.primary);
  root.style.setProperty('--fabkit-font-mono', theme.fonts.mono || 'monospace');
  root.style.setProperty('font-family', theme.fonts.primary);
  root.style.setProperty('font-size', `${theme.dimensions.fontSize}px`);
  
  // Brand colors — both --fabkit-color- and --snt-color- for compat
  const primary = theme.colors.primary;
  const primaryHover = theme.colors.primaryHover || primary;
  const primaryActive = theme.colors.primaryActive || primary;
  const primaryDisabled = theme.colors.primaryDisabled || primary;

  root.style.setProperty('--fabkit-color-primary', primary);
  root.style.setProperty('--fabkit-color-primary-hover', primaryHover);
  root.style.setProperty('--fabkit-color-primary-active', primaryActive);
  root.style.setProperty('--fabkit-color-primary-disabled', primaryDisabled);

  // Legacy snt- aliases used in action-suggested and some components
  root.style.setProperty('--snt-color-primary', primary);
  root.style.setProperty('--snt-color-primary-hover', primaryHover);
  root.style.setProperty('--snt-color-primary-active', primaryActive);
  root.style.setProperty('--snt-color-primary-disabled', primaryDisabled);

  // action-suggested resolves to brand primary
  root.style.setProperty('--action-suggested', primary);
  root.style.setProperty('--action-suggested-hover', primaryHover);
  root.style.setProperty('--action-suggested-active', primaryActive);
  root.style.setProperty('--action-suggested-disabled', primaryDisabled);

  // Secondary color if provided
  if (theme.colors.secondary) {
    root.style.setProperty('--fabkit-color-secondary', theme.colors.secondary);
    root.style.setProperty('--snt-color-secondary', theme.colors.secondary);
    root.style.setProperty('--fabkit-color-secondary-hover', theme.colors.secondaryHover || theme.colors.secondary);
    root.style.setProperty('--fabkit-color-secondary-active', theme.colors.secondaryActive || theme.colors.secondary);
    root.style.setProperty('--fabkit-color-secondary-disabled', theme.colors.secondaryDisabled || theme.colors.secondary);
  }
}

/** @type {import('./theme.d.js').BrandTheme | null} */
let currentTheme = null;

/**
 * Initialize fabkit-lib with a custom brand theme
 * @param {import('./theme.d.js').PartialBrandTheme} [userTheme={}] - Partial theme config, merged with defaults
 * @returns {import('./theme.d.js').BrandTheme} - The resolved complete theme
 * @example
 * // Basic usage with custom primary color
 * initTheme({
 *   colors: { primary: '#6366f1' }
 * });
 * 
 * @example
 * // Full custom theme
 * initTheme({
 *   fonts: { primary: "'Inter', sans-serif" },
 *   colors: { primary: '#ff6b6b', secondary: '#4ecdc4' },
 *   dimensions: { borderRadius: 12, spacing: 10, fontSize: 14 }
 * });
 */
export function initTheme(userTheme = {}) {
  const theme = mergeWithDefaults(userTheme);
  applyThemeToRoot(theme);
  currentTheme = theme;
  return theme;
}

/**
 * Get the currently active theme
 * @returns {import('./theme.d.js').BrandTheme | null}
 */
export function getTheme() {
  return currentTheme;
}

// Export utilities for advanced usage
export { generateColorVariants, darken, desaturate };

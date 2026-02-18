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
 * Apply theme to document root as CSS variables
 * @param {import('./theme.d.js').BrandTheme} theme 
 */
function applyThemeToRoot(theme) {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  // Fonts
  root.style.setProperty('--fabkit-font-primary', theme.fonts.primary);
  root.style.setProperty('--fabkit-font-secondary', theme.fonts.secondary || theme.fonts.primary);
  root.style.setProperty('--fabkit-font-mono', theme.fonts.mono || 'monospace');
  
  // Dimensions
  root.style.setProperty('--fabkit-border-radius', `${theme.dimensions.borderRadius}px`);
  root.style.setProperty('--fabkit-spacing', `${theme.dimensions.spacing}px`);
  root.style.setProperty('--fabkit-font-size', `${theme.dimensions.fontSize}px`);
  
  // Apply all colors dynamically
  Object.keys(theme.colors).forEach(key => {
    const value = theme.colors[key];
    const cssVarName = `--fabkit-color-${key}`;
    root.style.setProperty(cssVarName, value);
    
    // Generate automated variants for primary/secondary ONLY to preserve current behavior
    // If we wanted variants for EVERYTHING we would do it here, but let's stick to safe
    if (key === 'primary') {
      root.style.setProperty('--fabkit-color-primary-hover', theme.colors.primaryHover || theme.colors.primary);
      root.style.setProperty('--fabkit-color-primary-active', theme.colors.primaryActive || theme.colors.primary);
      root.style.setProperty('--fabkit-color-primary-disabled', theme.colors.primaryDisabled || theme.colors.primary);
    } else if (key === 'secondary') {
      root.style.setProperty('--fabkit-color-secondary-hover', theme.colors.secondaryHover || theme.colors.secondary);
      root.style.setProperty('--fabkit-color-secondary-active', theme.colors.secondaryActive || theme.colors.secondary);
      root.style.setProperty('--fabkit-color-secondary-disabled', theme.colors.secondaryDisabled || theme.colors.secondary);
    }
  });
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

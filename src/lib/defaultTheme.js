/**
 * Default brand theme - retrocompatible with current fabkit-lib styling
 * @type {import('./theme.d.js').BrandTheme}
 */
export const defaultTheme = {
  fonts: {
    primary: "'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    secondary: "'Noto Sans', sans-serif",
    mono: "monospace"
  },
  dimensions: {
    borderRadius: 12,
    spacing: 8,
    fontSize: 15
  },
  colors: {
    primary: "#2196F3",
    primaryHover: "#1e84d8",
    primaryActive: "#135081",
    primaryDisabled: "#aec3db"
  }
};

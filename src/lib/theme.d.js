/**
 * Brand Theme Type Definitions
 * @typedef {Object} BrandFonts
 * @property {string} primary - Main font family, e.g. "'Inter', sans-serif"
 * @property {string} [secondary] - Secondary font, falls back to primary
 * @property {string} [mono] - Monospace font for code blocks
 */

/**
 * @typedef {Object} BrandDimensions
 * @property {number} borderRadius - Base border radius in px
 * @property {number} spacing - Base spacing unit in px
 * @property {number} fontSize - Base font size in px
 */

/**
 * @typedef {Object} BrandColors
 * @property {string} primary - Primary brand color, e.g. "#2196F3"
 * @property {string} [primaryHover] - Primary hover state (auto-generated if omitted)
 * @property {string} [primaryActive] - Primary active state (auto-generated if omitted)
 * @property {string} [primaryDisabled] - Primary disabled state (auto-generated if omitted)
 * @property {string} [secondary] - Secondary color (derived from primary if omitted)
 * @property {string} [secondaryHover]
 * @property {string} [secondaryActive]
 * @property {string} [secondaryDisabled]
 */

/**
 * @typedef {Object} BrandTheme
 * @property {BrandFonts} fonts
 * @property {BrandDimensions} dimensions
 * @property {BrandColors} colors
 */

/**
 * @typedef {Object} PartialBrandTheme
 * @property {Partial<BrandFonts>} [fonts]
 * @property {Partial<BrandDimensions>} [dimensions]
 * @property {Partial<BrandColors>} [colors]
 */

export {};

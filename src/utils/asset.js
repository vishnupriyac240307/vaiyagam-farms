/**
 * Helper to ensure assets always resolve correctly with Vite's base path,
 * both locally and when deployed to GitHub Pages (e.g. /vaiyagam-farms/)
 */
export function getAssetUrl(path) {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

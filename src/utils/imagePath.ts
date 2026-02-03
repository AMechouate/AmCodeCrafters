/**
 * Helper function to get the correct image path with base URL
 * This ensures images work correctly with GitHub Pages base path
 */
export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Combine base URL (from vite.config.ts) with image path
  return `${import.meta.env.BASE_URL}${cleanPath}`
}

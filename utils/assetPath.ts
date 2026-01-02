/// <reference types="vite/client" />

// Helper to get the correct base path for assets
// In Vite, import.meta.env.BASE_URL contains the base path from vite.config.ts
export const BASE_URL = import.meta.env.BASE_URL || '/';

// Helper function to get the correct asset path
export function getAssetPath(path: string): string {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Combine base URL with the path
    return `${BASE_URL}${cleanPath}`;
}

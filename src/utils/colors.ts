export const getCssVar = (varName: string): string => {
  if (typeof window === 'undefined') return '';
  const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return val;
}

export const hexToRgba = (hex: string, alpha: number): string => {
  const normalized = hex.startsWith('#') ? hex : `#${hex}`;
  if (normalized.length !== 7) return `rgba(0, 0, 0, ${alpha})`;
  
  const r = parseInt(normalized.slice(1, 3), 16);
  const g = parseInt(normalized.slice(3, 5), 16);
  const b = parseInt(normalized.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

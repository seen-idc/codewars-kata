function format(n: number): string {
  if (n < 0) n = 0;
  if (n > 255) n = 255;
  return n.toString(16).toUpperCase().padStart(2, '0');
}

export function rgb(r: number, g: number, b: number): string {
  return `${format(r)}${format(g)}${format(b)}`;
}
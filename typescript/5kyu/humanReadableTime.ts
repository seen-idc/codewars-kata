export function humanReadable(seconds: number): string {
  let hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
  seconds -= parseInt(hours) * 3600;
  
  let minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  
  seconds -= parseInt(minutes) * 60;
  
  return `${hours}:${minutes}:${seconds.toString().padStart(2, '0')}`;
}
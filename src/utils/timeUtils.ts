export function generateHours(maxHours: number = 24): string[] {
  return [...Array(maxHours)].map((_, i) => i.toString().padStart(2, '0'));
}

export function generateMinutes(interval: number = 1): string[] {
  return [...Array(60)].map((_, i) => i.toString().padStart(2, '0')).filter((m) => Number(m) % interval === 0);
}

export function generateTimer(remainingSeconds: number): string {
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

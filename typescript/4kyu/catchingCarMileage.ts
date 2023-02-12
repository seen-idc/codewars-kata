// Does not work

function hasDuplicates(array: any[]) {
  return (new Set(array)).size !== array.length;
}

function toDigitArray(n: number): number[] {
  return Array.from(String(n), Number);
}

function matchPattern(n: number): boolean {
  if (n.toString().match(/^[0-9]{1}0+$/)) return true;
  if (n.toString().match(/^([0-9])\1{1,}$/)) return true;

  let digitArray = () => toDigitArray(n);

  if (digitArray().reverse().join('') == n.toString()) return true;

  if (!hasDuplicates(digitArray())) {
    if (digitArray().map(n => n == 0 ? 99 : n).sort().map(n => n == 99 ? 0 : n).join('') == n.toString()) return true;
    if (digitArray().sort().reverse().join('') == n.toString()) return true;
  }

  return false;
}
  
export function isInteresting(n: number, awesomePhrases: number[]): number {
  if (n.toString().length < 3) return 0;

  if (matchPattern(n)) return 2;
  if (matchPattern(n + 1) || matchPattern(n + 2)) return 1;

  if (awesomePhrases.includes(n)) return 2;
  if (awesomePhrases.includes(n + 1) || awesomePhrases.includes(n + 2)) return 1;

  return 0;
}


function hasDuplicates(array: any[]) {
  return (new Set(array)).size !== array.length;
}

function toDigitArray(n: number): number[] {
  return Array.from(String(n), Number);
}

function checkIncrement(digitArray: number[]): boolean {
  let sortedArr = digitArray.map(n => n == 0 ? 10 : n).sort((a, b) => a - b)
  return sortedArr.every((n, i, a) => {
    if (i > 0) {
      if (n == (a[i - 1] + 1)) {
        return true;
      }
      else return false;
    } else {
      return true;
    }
  }) && sortedArr.join('') == digitArray.map(n => n == 0 ? 10 : n).join('')
}

function checkDecrement(digitArray: number[]): boolean {
  let sortedArr = Array(...digitArray).sort().reverse()
  return sortedArr.every((n, i, a) => {
    if (i > 0) {
      if (n == (a[i - 1] - 1)) {
        return true;
      }
      else return false;
    } else {
      return true;
    }
  }) && sortedArr.join('') == digitArray.join('')
}

function matchPattern(n: number): boolean {
  if (n.toString().length < 3) return false;
  if (n.toString().match(/^[0-9]{1}0+$/)) return true;
  if (n.toString().match(/^([0-9])\1{1,}$/)) return true;

  let digitArray = () => toDigitArray(n);

  if (digitArray().reverse().join('') == n.toString()) return true;

  if (!hasDuplicates(digitArray())) {
    if (checkIncrement(digitArray())) return true;
    if (checkDecrement(digitArray())) return true;
  }
  return false;
}

export function isInteresting(n: number, awesomePhrases: number[]): number {
  if (matchPattern(n)) return 2;
  if (matchPattern(n + 1) || matchPattern(n + 2)) return 1;

  if (awesomePhrases.includes(n)) return 2;
  if (awesomePhrases.includes(n + 1) || awesomePhrases.includes(n + 2)) return 1;

  return 0;
}


export function nextBigger(n: number): number {
  if (n.toString().match(/^(.)\1{1,}$/)) return -1; 
  
  let length = n.toString().length;
  let arr = n.toString().split('').map(Number);
  
  let i = 0;
  
  for (i = length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1])
      break;
  }
  
  if (i !== 0) {
      for (let j = length - 1; j >= i; j--) {
        if (arr[i - 1] < arr[j]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[j];
          arr[j] = temp;
          break;
        }
      }
  }
  else {
    return -1;
  }
  
  let arr2 = arr.slice(0,i).concat(arr.slice(i,arr.length).reverse());
  
  return Number(arr2.join(''))
}
// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
console.log(sumNumbers(9));

function sumNumbers(num: number) {
  let result: number = 0;
  for (let i = 0; i <= num; i++) {
    result = result + i;
  }
  return result;
}

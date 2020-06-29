let arr = [5, 1, -25, 88, 0]
let result = selectionSort(arr)
console.log(result);

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     //寻找最小的数
        minIndex = j;                 //将最小数的索引保存
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr;
}

// 思路 
function selectionSort2(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;//1.首先把第一个没有排序过的元素设置为最小值
    for (let j = i + 1; j < len; j++) {
      //2.遍历整个数组同这个最小值比较，遇到更小的值，就把最小值的索引保存下来，然后继续遍历寻找最小值
      if (arr[j] < arr[minIndex]) { 
        minIndex = j;
      }
    }
    //3.交换最小值和当前值的位置，把最小值排依次排到数组左边，然后回到第一步开始寻找第二个最小值
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr;
}

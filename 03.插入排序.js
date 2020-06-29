let arr = [5, 1, 4, 3, 2]
let result = insertionSort(arr)
console.log(result);

function insertionSort(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

// 思路
/* 
现有数组[5, 1, 4, 3, 2]
1.将数组第一个元素标记为已排序，第一元素为5；
2.遍历数组，用下一个元素和已排序元素比较，下一个元素是1；
3.如果已排序元素>未排序元素，将已排序元素右移一格，否则下一个元素就成为排序元素；
  5 > 1，将5换到1的位置，数组=[5, 5, 4, 3, 2]；
  1继续比较5前面的元素，发现已经没有元素，1换到5的位置，数组=[1, 5, 4, 3, 2]；
4.此时5是已排序元素，4和5比较，5 > 4，5换到4的位置，数组=[1, 5, 5, 3, 2]；
  4和1比较，4 < 1，4不需要动，4换到5的位置，数组=[1, 4, 5, 3, 2]；
  然后再用3和5比较......
*/
function insertionSort2(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;//已排序元素索引
    current = arr[i];//当前元素
    while (preIndex >= 0 && arr[preIndex] > current) {//用当前元素和已排序元素依次比较，如果已排序元素 > 当前元素
      arr[preIndex + 1] = arr[preIndex];//把已排序元素移动到当前元素位置
      preIndex--;//已排序元素索引-1，回到while循环头部，继续用当前元素和已排序元素对比，直到 preIndex=0 或者 已排序元素< 当前元素
    }
    arr[preIndex + 1] = current;//如果 preIndex=0 或者 已排序元素< 当前元素，把当前元素排到这个已排序元素的右边
  }
  return arr;
}


let arr = [5, 1, 4, 3, 2]
let result = bubbleSort(arr)
console.log(arr);

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}


// 思路 
/*
1.有数组arr=[5, 1, 4, 3, 2]
首先比较5和1，谁大谁往右边排；5大，5和1交换顺序；此时数组为[ 1, 5, 4, 3, 2 ]；再比较5和4，依此类推；
代码表现为：
*/
/* {
  let arr = [5, 1, 4, 3, 2]
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {//相邻元素两两对比
      //元素交换
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
  //console.log(arr);//[ 1, 4, 3, 2, 5 ]
} */

/*2.此时需要重复上面的过程，把数组中的所有元素都比较一遍，因此需要在外层再调用一次循环*/
/* {
  let arr = [5, 1, 4, 3, 2]
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {//相邻元素两两对比
        //元素交换
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  //console.log(arr);//[1,2,3,4,5]
} */

/*3.优化
我们数组的长度是5，两两比较只需要4次就能执行完比较，外循环循环次数可以-1;
i < len - 1;
由1可知经过一次内循环后，数组等于[ 1, 4, 3, 2, 5 ]，末尾已经是最大值，不需要再比较，因此我们可以逐步减少内循环的次数;
j < len - 1 - i;
此时我们执行循环，在每次外循环后打印数组：
[ 1, 4, 3, 2, 5 ]
[ 1, 3, 2, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
发现在第三次循环的时候，我们就已经排好顺序了，不需要第四次循环，据此判断：如果某次排序没有发生位置交换，那么排序已经完成;
isChange = 0;
使用变量isChange来判断是否发生排序,默认值0，表示没有发生排序
*/
/* {
  let arr = [5, 1, 4, 3, 2]
  let len = arr.length;
  let isChange = 0;
  for (let i = 0; i < len - 1; i++) {
    //每比较一趟就重新初始化为0
    isChange = 0;

    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        //如果进到这里面了，说明发生置换了
        isChange = 1;
      }
    }

    //如果比较完一趟没有发生置换，那么说明已经排好序了，不需要再执行下去了
    if (isChange === 0) {
      break;
    }
  }
} */
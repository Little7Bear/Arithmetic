let arr = [38, 27, 43, 3, 9, 82, 10]
let result = mergeSort(arr)
console.log(result);

/**
 * @description: 归并排序
 * @param {type: Array} 
 * @return:  排序后的数组（Array）
 */
function mergeSort(arr) {  //采用自上而下的递归方法
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle = Math.ceil(len / 2), //也可以使用floor
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * @description: 合并两个数组成一个按从小到大的顺序排列的数组
 * @param {type: 数组1,数组2} 
 * @return: 合并后的数组（Array）
 */
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

// 思路
// return merge(mergeSort(left), mergeSort(right));
/*
有数组 arr=[38, 27, 43, 3, 9, 82, 10]
* 1.核心是这句俄罗斯套娃，这样套娃，会先执行完左边的mergeSort，再执行右边，最后拿到结果执行merge
* 2.套娃流程，先是mergeSort(left)执行到最底层，即 merge(mergeSort([38, 27, 43, 3]),mergeSort([9, 82, 10]))，
* 3.先merge(mergeSort([38,27],mergeSort([43,3])) 然后执行 merge(mergeSort([38]),mergeSort([27]))，然后再执行 merge(mergeSort([38]))
* 4.此时到了最底层mergeSort([38])得[38]，跳回上一层执行右边的mergeSort([27])得[27]， 此时就变成了merge(38,27)得[27,38]，
* 5.再跳回上一层merge([27,38],mergeSort([43,3])),执行右边的mergeSort([43,3]),重复过程4得[3,43]
* 6.此时merge([27,38],[3,43])得[ 3, 27, 38, 43 ]，再跳回上一层merge([3, 27, 38, 43],mergeSort([9, 82, 10])),执行右边的mergeSort([9, 82, 10])
* 7.右边的mergeSort([9, 82, 10])继续执行上面的套娃步骤，得merge([3, 27, 38, 43],[9, 10, 82])
* 8.最终得[3, 9, 10, 27, 38, 43, 82]
* 理解套娃，要理解方法会在原地等待返回值，直到拿到返回值才会继续运行
*/

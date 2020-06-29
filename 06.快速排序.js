let arr = [3, 1, 6, 5, 7, 2, 4]
// let rusult = quickSort(arr)
// console.log(rusult);

function quickSort(arr, left, right) {
  let len = arr.length, partitionIndex;
  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

//分区操作
function partition(arr, left, right) {
  let pivot = left; //设定基准值（pivot）
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 思路
/*
 *1.数组分成三部分left、pivot、right，使left<=pivot，right>pivot
 *2.递归处理left
 *3.递归处理right
 *4.合并三者结果
 *5.如果以数组最后一位为pivot，>pivot的放入right数组，<pivot的放进left数组，那么很容易实现快排，但是这样会占用额外的内存空间（因为需要声明left，right数组）
 */

// 不占用额外的内存空间的算法思路
/*
有数组arr=[3, 1, 6, 5, 7, 2, 4]
 *1.把数组的第一项作为基准点pivot
 *2.比pivot小的数就放入left数组，为了原地排序我们不能真的声明一个left数组，因此left数组需要放在当前数组中。
    我们规定，只要比pivot小的数就放到数组的最左边。当前数组的最左边是pivot，因此我们要从pivot后面一位开始放。let index = pivot + 1
 *3.遍历数组，发现比pivot小的数，就把这个数放到index处，此时index处放了一个数，下个数要放到这个位置后面，因此index++
 *4.arr数组遍历比较完之后，arr数组里比3小的只有2个，因此做了两次放置操作，
    此时index=3，arr=[3, 1, 2, 5,7, 6, 4]，
    只要把pivot放到left数组的最后一位，arr就会被分割成以pivot为中心，左边是比pivot小的left数组，右边是比pivot大的right数组，
    因为index是用来放置left数组的，它总是比left数组长一位，因此index-1就是left数组的最后一位，把pivot和index-1交换位置，
    arr=[2, 1, 3, 5, 7, 6, 4]，可以看到，3（pivot）的左边都是比它小的数，3的右边都是比它大的数
 *5.最后再把这个pivot的索引返回，我们就可以根据这个索引分割数组为left和right两个数组，然后再递归使用此方法分割left和right
 */
{
  let arr = [3, 1, 6, 5, 7, 2, 4]
  let partitionIndex = partition(arr, 0, 6)
  function partition(arr, left, right) {
    let pivot = left; //设定数组第一项为基准值（pivot）
    let index = pivot + 1;//设定left数组的当前项
    for (let i = index; i <= right; i++) {//遍历数组，从pivot的后一位到right（数组终点索引）
      if (arr[i] < arr[pivot]) {//如果发现当前项小于pivot
        swap(arr, i, index);//把当前项放到left数组
        index++;//left数组索引右移
      }
    }
    swap(arr, pivot, index - 1);//把pivot放到left数组最后一位
    return index - 1;//返回pivot的索引
  }
}
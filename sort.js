// https://www.youtube.com/watch?v=lWldunWaLPs&t=351s

import { shortList } from './data/short-list.js';
import { mediumList } from './data/medium-list.js';
import { bigList } from './data/big-list.js'
import { enormousList } from './data/enormous-list.js'
import { executeConfig} from './utils.js';

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
  
    } while (swapped);
  
    return [arr[0], arr[arr.length-1]];
  }
  
  function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return [arr[0], arr[arr.length-1]];
  }

  function insertionSort(nums) {
    for (let i=1; i<nums.length; i++) {
      for (let j=i; j>0; j--) {
          if (nums[j] < nums[j-1]) {
              [nums[j-1], nums[j]] = [nums[j], nums[j-1]];
          }
      }
    }
  
    return [nums[0], nums[nums.length-1]];
  }

  function mergeSort(arr) {
    const n = arr.length;
  
    if (n <= 1) {
      return arr;
    }
  
    const mid = Math.floor(n / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
  
    const leftSorted = mergeSort(leftArr);
    const rightSorted = mergeSort(rightArr);
  
    const res = merge(leftSorted, rightSorted);

    return [res[0], res[res.length-1]];
  }
  
  function merge(leftArr, rightArr) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
  }
  

  function quickSortWrap(arr) {
    const res = quickSort(arr);
    return [res[0], res[res.length-1]];
  }

  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const left = [];
    const right = [];
    const equal = [];
  
    for (let element of arr) {
      if (element < pivot) {
        left.push(element);
      } else if (element > pivot) {
        right.push(element);
      } else {
        equal.push(element);
      }
    }
  
    return quickSort(left).concat(equal, quickSort(right));
  }
  
  


  const defaultCase = () => {};

  const configs = {
    'bubble-sort': {
        method: bubbleSort, 
        datasets: {shortList, mediumList}, 
        useCases: {defaultCase},
        description: `Bubble sort is a simple sorting algorithm that repeatedly steps through the list or array to be sorted, compares adjacent elements and swaps them if they are in the wrong order.`,
        gif: 'https://i.makeagif.com/media/11-24-2015/gI3nus.gif',
      },
    'selection-sort': {
        method: selectionSort, 
        datasets: {shortList, mediumList}, 
        gif: 'https://miro.medium.com/v2/resize:fit:1400/1*5WXRN62ddiM_Gcf4GDdCZg.gif',
        useCases: {defaultCase},
        description: `Selection sort is another simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the list or array and moving it to the beginning of the list or array. The algorithm maintains two sub-lists in the given list or array, one sorted and one unsorted.`
    },
    'insertion-sort': {
        method: insertionSort, 
        datasets: {shortList, mediumList, bigList}, 
        gif: 'https://miro.medium.com/v2/resize:fit:1400/1*bmfRxyIQZEK0Iu5T6YV1sw.gif',
        useCases: {defaultCase},
        description: `La función insertionSort toma un array arr como parámetro y devuelve el array ordenado. La implementación utiliza dos bucles: el bucle exterior itera sobre cada elemento del array, y el bucle interior mueve los elementos mayores que el elemento actual a la derecha del array. Una vez que se encuentra la posición correcta para el elemento actual, se inserta en el array en esa posición.

La complejidad temporal del algoritmo de ordenamiento por inserción es O(n^2) en el peor de los casos, donde n es el número de elementos en el array. Aunque es un algoritmo de ordenamiento simple, puede ser menos eficiente que otros algoritmos de ordenamiento en grandes conjuntos de datos. Sin embargo, puede ser más eficiente en conjuntos de datos pequeños o casi ordenados.`,
    },
    'merge-sort': {
        method: mergeSort, 
        datasets: {shortList, mediumList, bigList, enormousList}, 
        useCases: {defaultCase},
        gif: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif?20151222172210',
        description: `Merge Sort is a divide and conquer sorting algorithm that works by breaking down an array into smaller sub-arrays, sorting those sub-arrays, and then merging them back together to form a sorted array.`,
    },
    'quick-sort': {
        method: quickSortWrap, 
        datasets: {shortList, mediumList, bigList, enormousList}, 
        useCases: {defaultCase},
        gif: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif",
        description: `Quick Sort is a divide and conquer sorting algorithm that works by partitioning an array into two sub-arrays, one containing elements smaller than a chosen pivot and the other containing elements larger than the pivot. The pivot is then placed in its final position in the sorted array, and the same process is applied recursively to the sub-arrays until the entire array is sorted.`,
    }
}


executeConfig(configs);
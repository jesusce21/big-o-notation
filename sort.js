// https://www.youtube.com/watch?v=lWldunWaLPs&t=351s

import { shortList } from './data/short-list.js';
import { mediumList } from './data/medium-list.js';
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

  function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  
    return [arr[0], arr[arr.length-1]];
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
        description: `La función bubbleSort toma un array arr como parámetro y devuelve el array ordenado. La implementación utiliza dos bucles: el bucle exterior es un bucle do-while que se ejecuta hasta que no se realice ningún intercambio en el bucle interior. El bucle interior es un bucle for que compara pares de elementos adyacentes en el array y los intercambia si están en el orden incorrecto. El bucle interior se ejecuta n - 1 veces en la iteración i del bucle exterior, donde n es el número de elementos en el array.

La complejidad temporal del algoritmo de ordenamiento burbuja es O(n^2) en el peor de los casos, donde n es el número de elementos en el array. Aunque es un algoritmo de ordenamiento simple, puede ser menos eficiente que otros algoritmos de ordenamiento en grandes conjuntos de datos.`,
        gif: 'https://i.makeagif.com/media/11-24-2015/gI3nus.gif',
      },
    'selection-sort': {
        method: selectionSort, 
        datasets: {shortList, mediumList}, 
        gif: 'https://miro.medium.com/v2/resize:fit:1400/1*5WXRN62ddiM_Gcf4GDdCZg.gif',
        useCases: {defaultCase},
        description: `La función selectionSort toma un array arr como parámetro y devuelve el array ordenado. La implementación utiliza dos bucles: el bucle exterior itera sobre cada elemento del array y el bucle interior busca el elemento más pequeño en el resto del array. Si se encuentra un elemento más pequeño, se intercambia con el elemento actual en la posición actual del bucle exterior.

La complejidad temporal del algoritmo de ordenamiento por selección es O(n^2) en el peor de los casos, donde n es el número de elementos en el array. Aunque es un algoritmo de ordenamiento simple, puede ser menos eficiente que otros algoritmos de ordenamiento en grandes conjuntos de datos.`
    },
    'insertion-sort': {
        method: insertionSort, 
        datasets: {shortList, mediumList}, 
        gif: 'https://miro.medium.com/v2/resize:fit:1400/1*bmfRxyIQZEK0Iu5T6YV1sw.gif',
        useCases: {defaultCase},
        description: `La función insertionSort toma un array arr como parámetro y devuelve el array ordenado. La implementación utiliza dos bucles: el bucle exterior itera sobre cada elemento del array, y el bucle interior mueve los elementos mayores que el elemento actual a la derecha del array. Una vez que se encuentra la posición correcta para el elemento actual, se inserta en el array en esa posición.

La complejidad temporal del algoritmo de ordenamiento por inserción es O(n^2) en el peor de los casos, donde n es el número de elementos en el array. Aunque es un algoritmo de ordenamiento simple, puede ser menos eficiente que otros algoritmos de ordenamiento en grandes conjuntos de datos. Sin embargo, puede ser más eficiente en conjuntos de datos pequeños o casi ordenados.`,
    },
    'merge-sort': {
        method: mergeSort, 
        datasets: {shortList, mediumList}, 
        useCases: {defaultCase},
        gif: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif?20151222172210',
        description: `La función mergeSort toma un array arr como parámetro y devuelve el array ordenado utilizando el algoritmo de ordenamiento por mezcla. La implementación utiliza recursión para dividir el array en dos partes iguales y luego fusiona las dos partes ordenadas utilizando la función merge.

La función merge toma dos arrays ordenados leftArr y rightArr como parámetros y devuelve un solo array que combina los elementos de ambos arrays en orden ascendente. La implementación utiliza dos índices leftIndex y rightIndex para comparar los elementos de ambos arrays y agregarlos al array resultante.
        
La complejidad temporal del algoritmo de ordenamiento por mezcla es O(n log n) en el peor de los casos, donde n es el número de elementos en el array. Es un algoritmo de ordenamiento eficiente que funciona bien en grandes conjuntos de datos.`,
    },
    'quick-sort': {
        method: quickSortWrap, 
        datasets: {shortList, mediumList}, 
        useCases: {defaultCase},
        gif: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif",
        description: `La función quickSort toma un array arr como parámetro y devuelve el array ordenado utilizando el algoritmo de ordenamiento rápido. La implementación utiliza recursión para dividir el array en dos partes en función de un elemento "pivot" elegido aleatoriamente. Los elementos menores que el pivot se colocan en el array de la izquierda, los elementos mayores que el pivot se colocan en el array de la derecha, y los elementos iguales se colocan en un array "equal". Luego, se combinan los tres arrays utilizando la función concat.

La elección aleatoria del pivot ayuda a evitar el peor caso del algoritmo de ordenamiento rápido, donde el pivot elegido siempre es el mínimo o el máximo, lo que resulta en un rendimiento de O(n^2). La complejidad temporal del algoritmo de ordenamiento rápido es O(n log n) en el promedio de los casos y O(n^2) en el peor de los casos. Es un algoritmo de ordenamiento eficiente que funciona bien en grandes conjuntos de datos.`,
    }
}


executeConfig(configs);
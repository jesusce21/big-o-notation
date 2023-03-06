// https://www.youtube.com/watch?v=lWldunWaLPs&t=351s
import { shortList } from './data/short-list.js';
import { mediumList } from './data/medium-list.js';
import { firstElement, halfListElement, lastElement, executeConfig } from './utils.js';


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
  
    return -1;
  }
  

const configs = {
    'binary-search': {
        method: binarySearch, 
        datasets: {shortList, mediumList}, 
        useCases: {firstElement, halfListElement, lastElement},
        gif: 'https://media.tenor.com/Jl0YrqxnHmAAAAAd/binary-search-sequence-search.gif',
        description: `
La función binarySearch toma un array ordenado arr y un valor target como parámetros y devuelve el índice del valor target en el array arr, o -1 si no se encuentra.

La implementación utiliza un bucle while para iterar sobre el array. En cada iteración, calcula el índice del valor medio del array y lo compara con el valor target. Si son iguales, devuelve el índice medio. Si el valor medio es menor que target, la búsqueda se concentra en la mitad derecha del array, por lo que actualiza el índice left para que apunte al siguiente elemento a la derecha del valor medio. Si el valor medio es mayor que target, la búsqueda se concentra en la mitad izquierda del array, por lo que actualiza el índice right para que apunte al elemento anterior a la izquierda del valor medio.
        
La búsqueda binaria es un algoritmo de búsqueda muy eficiente que tiene una complejidad temporal de O(log n) en el peor de los casos.`,
    },

    'linear-search': {
        method: linearSearch, 
        datasets: {shortList, mediumList}, 
        useCases: {firstElement, halfListElement, lastElement},
        gif: 'https://www.tutorialspoint.com/data_structures_algorithms/images/linear_search.gif',
        description: `La función linearSearch toma un array arr y un valor target como parámetros y devuelve el índice del valor target en el array arr, o -1 si no se encuentra.

La implementación utiliza un bucle for para iterar sobre el array. En cada iteración, comprueba si el valor actual en el array es igual al valor target. Si son iguales, devuelve el índice actual. Si no se encuentra el valor target, la función devuelve -1 después de recorrer todo el array.
        
La búsqueda lineal es un algoritmo de búsqueda sencillo y directo, pero puede ser menos eficiente que otros algoritmos de búsqueda en arrays grandes. La complejidad temporal de la búsqueda lineal es O(n) en el peor de los casos, donde n es el número de elementos en el array.`,
    }
}


executeConfig(configs);
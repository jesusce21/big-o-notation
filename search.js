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
        description: `Binary search is a search algorithm that is used to find a specific element in a sorted list or array. It works by repeatedly dividing the search interval in half until the target element is found or it is determined that the element is not in the list.`,
    },

    'linear-search': {
        method: linearSearch, 
        datasets: {shortList, mediumList}, 
        useCases: {firstElement, halfListElement, lastElement},
        gif: 'https://skilled.dev/images/linear-search.gif',
        description: `Linear search, also known as sequential search, is a simple search algorithm that sequentially checks each element in a list or array until a match is found or the end of the list is reached.`,
    }
}


executeConfig(configs);
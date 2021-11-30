'use strict';

function swap(arr, pos1, pos2) {
	// console.log(arr);
	let temp = arr[pos1];
	arr[pos1] = arr[pos2];
	arr[pos2] = temp;
}

// Hoare vs. Lemuto partition?? which one? 

function quickSort(arr, left, right) {
	// console.log(arr);
	// console.log(left);
	// console.log(right);
	// if (left < right) {
	// 	let pivot = partition(arr, left, right);

	// 	quickSort(arr, left, pivot - 1);
	// 	quickSort(arr, pivot + 1, right);
	// }

	left = left || 0;
	right = right || arr.length - 1;

	let pivot = partition(arr, left, right);

	if(left < pivot -1) {
		quickSort(arr, left, right);
	}

	if(right > pivot) {
		quickSort(arr, left, right);
	}

	return arr;
}

function partition(arr, left, right) {
	// console.log(arr);
	let pivot = Math.floor((left + right) / 2);
	let k = (left - 1);

	for (let i = left; i <= arr.length; i++) {
		if (arr[i] <= pivot) {
			k++;
			swap(arr, k, i);
			// return (k + 1);
		}
	}
	swap(arr, left + 1, right);
	// return (left + 1);
}

let arr = [8, 4, 23, 42, 16, 15];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);

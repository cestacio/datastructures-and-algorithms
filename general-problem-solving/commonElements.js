/*
Given two sorted arrays, find the common element(s) among them and print them to the console. 
Each array can be of varying lengths. 
You can assume that each array contains unique integers.
*/

function commonElements(arr1, arr2) {
  let pointA = 0;
  let pointB = 0;

  while (pointA < arr1.length && pointB < arr2.length) {
    if (arr1[pointA] === arr2[pointB]) {
      console.log(arr1[pointA]);
      pointA++;
      pointB++;
    } else if (arr1[pointA] > arr2[pointB]) {
      pointB++;
    } else {
      pointA++;
    }
  }
}

let arr1 = [1, 3, 5, 6, 8];
let arr2 = [2, 3, 4, 7];

commonElements(arr1, arr2);

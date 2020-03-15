let arr1 = ['mango','apple','f1','f2','f3','f4','f5','f6','f7','f8']
let arr2 = ['pineapple','banana','p1','p2','p3','p4','p5','p6','p7','p8']
let arr3 = ['pink apple','green apple','g1','g2','g3','g4','g5','g6','g7','g8']
arr1 = arr1.concat(arr2)
arr1 = arr1.concat(arr3)
// console.log(arr1)
arr1.forEach(element => console.log(element));
console.log(arr1.join())   
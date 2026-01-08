// let array = ["aa", "bb", "cc"];
// let index = 1;
// let newVal = "BB";
// let newArray = array.map((e, i) => {
//   if (i === index) {
//     return newVal;
//   } else {
//     return e;
//   }
// });
// console.log("🚀 ~ newArray:", newArray);


let array = ["aa", "bb", "cc"];
console.log("🚀 ~ array:", array)

let jsonString = JSON.stringify(array)
console.log("🚀 ~ jsonString:", typeof jsonString)



let x = JSON.parse(jsonString)
console.log("🚀 ~ x:", x)

// let name1 = "kanishk";
// console.log(name1);
// name1 = 3;
// console.log(name1);

// let person = {
//   firstName: "kanshk",
//   age: 23,
// };

// let rectangle = {
//   length: 1,
//   breadth: 2,
//   draw: function () {
//     console.log("drawing the rectangle");
//   },
// };
// console.log(rectangle.draw());

// function createRectangle(len, bre) {
//   let rectangle = {
//     length: len,
//     breadth: bre,
//     draw: function () {
//       console.log("drawing the rectangle");
//     },
//   };
//   return rectangle;
// }

// let rectangleObj1 = createRectangle(1, 2);

// function Rectangle() {
//   this.length = 1;
//   this.breadth = 2;
//   this.draw = function () {
//     console.log("Drawing");
//   };
// }

// let rectangleObj2 = new Rectangle();
// console.log(rectangleObj2);

// rectangleObj2.color = "yellow";
// console.log(rectangleObj2);

// delete rectangleObj2.color;
// console.log(rectangleObj2);

// let Rectangle1 = new Function(
//   "length",
//   "breadth",
//   `this.length = length;
//   this.breadth = breadth;
//   this.draw = function () {
//     console.log("Drawing");
//   };`
// );

// let rect = new Rectangle1(2, 3);

// let rectange = {
//   length: 1,
//   breadth: 2,
// };

// for (let key in rectange) {
//   console.log(key, rectange[key]);
// }

// let arr = [
//   { no: 1, lastName: "singh" },
//   { no: 2, lastName: "kumar" },
//   { no: 3, lastName: "singh" },
// ];

// let findd = arr.find(function (arr) {
//   return arr.lastName == "soni";
// });
// console.log(findd);

// let findd = arr.find((arr) => arr.lastName === "singh");
// console.log(findd);

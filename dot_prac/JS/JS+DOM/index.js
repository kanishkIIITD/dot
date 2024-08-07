// function eventFunction() {
//   console.log("clicked document");
// }

// document.addEventListener("click", eventFunction);
// document.removeEventListener("click", eventFunction);

// const content = document.querySelector("#wrapper");

// content.addEventListener("click", function (event) {
//   console.log(event);
// });

// let links = document.querySelectorAll("a");

// let thirdLink = links[2];
// thirdLink.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Cannot open the link");
// });

// let myDiv = document.createElement("div");

// function paraStatus(e) {
//   if (e.target.nodeName === "P") console.log("Para: " + e.target.textContent);
// }

// myDiv.addEventListener("click", paraStatus);

// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//   let myPara = document.createElement("p");
//   myPara.textContent = "This is para " + i;

//   myDiv.appendChild(myPara);
// }
// document.body.appendChild(myDiv);
// const t2 = performance.now();
// console.log("Time took " + (t2 - t1));

// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//   let myPara = document.createElement("p");
//   myPara.textContent = "This is para " + i;
//   document.body.appendChild(myPara);
// }
// const t2 = performance.now();
// console.log("Time took " + (t2 - t1));

// Optimising the above code
// const t3 = performance.now();
// let myDiv = document.createElement("div");
// for (let i = 1; i <= 100; i++) {
//   let myPara = document.createElement("p");
//   myPara.textContent = "This is optimized para " + i;

//   myDiv.appendChild(myPara);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("Time took " + (t4 - t3));

// Using document fragment
// const t5 = performance.now();
// let fragment = document.createDocumentFragment();
// for (let i = 1; i <= 100; i++) {
//   let myPara = document.createElement("p");
//   myPara.textContent = "This is para " + i;
//   fragment.appendChild(myPara);
// }
// document.body.appendChild(fragment);
// const t6 = performance.now();
// console.log("Time took " + (t6 - t5));

let newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I'm in promise 1");
  }, 2000);
  resolve(true);
});

newPromise
  .then(() => {
    let newPromise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("I'm in promise 2");
      }, 3000);
      resolve("Promise 2 has ended");
    });
    return newPromise2;
  })
  .then((value) => console.log(value));

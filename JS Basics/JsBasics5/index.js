// Method 1
const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para " + i;

  document.body.appendChild(element);
}
const t2 = performance.now();
console.log("Time taken = " + (t2 - t1) + "ms");

// Method 2
const t3 = performance.now();
let myDiv = document.createElement("div");
for (let i = 1; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para " + i;

  myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("Time taken = " + (t4 - t2) + "ms");

// Method 3
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para " + i;

  fragment.appendChild(element);
}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("Time taken = " + (t6 - t5) + "ms");

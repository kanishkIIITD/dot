const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal Opened");
  modal.classList.add("active");
  //   overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  console.log("Modal Closed");
  modal.classList.remove("active");
  //   overlay.classList.remove("overlayactive");
};

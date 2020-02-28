goToDiv = (id, event) => {
  document
    .getElementById(id)
    .scrollIntoView({ block: "center", behavior: "smooth" });
    console.log(event);
};

window.onscroll = () => {
  let header = document.getElementsByTagName("nav");
  window.pageYOffset > 400
    ? header[0].classList.add("color-white")
    : header[0].classList.remove("color-black");
};

window.onload = () => {
  // var elements = document.getElementsByTagName("li");
  // var searchText = "J.L.C & SOCODEE";
  // var searchText2 = "Gallerie";
  // var found;
  // var found2;
  // for (var i = 0; i < elements.length; i++) {
  //   if (elements[i].textContent == searchText) {
  //     found = elements[i];
  //     break;
  //   }
  // }
  // for (var i = 0; i < elements.length; i++) {
  //   if (elements[i].textContent == searchText2) {
  //     found2 = elements[i];
  //     break;
  //   }
  // }
  // console.log('===========>', found)
  // console.log('===========>', found2)
  // found2.classList.remove("active");
  // found.classList.add("active");
};

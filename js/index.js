goToDiv = id => {
  document
    .getElementById(id)
    .scrollIntoView({ block: "center", behavior: "smooth" });
};

window.onscroll = () => {
  let header = document.getElementsByTagName("nav");
  window.pageYOffset > 400
    ? header[0].classList.add("color-white")
    : header[0].classList.remove("color-black");
};

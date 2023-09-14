const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// Get the modal
// var modal = document.getElementById("myModal");
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var btn = document.getElementsByClassName("read-more");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// Button 0 start
btn[0].onclick = function () {
  modal[0].style.display = "block";
};

span[0].onclick = function () {
  modal[0].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal[0].style.display = "none";
  }
};

// Button 1 start
btn[1].onclick = function () {
  modal[1].style.display = "block";
};

span[1].onclick = function () {
  modal[1].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal[1].style.display = "none";
  }
};

// Button 2 start
btn[2].onclick = function () {
  modal[2].style.display = "block";
};

span[2].onclick = function () {
  modal[2].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal[2].style.display = "none";
  }
};

// Button 3 start
btn[3].onclick = function () {
  modal[3].style.display = "block";
};

span[3].onclick = function () {
  modal[3].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal[3].style.display = "none";
  }
};

// Button 4 start
btn[4].onclick = function () {
  modal[4].style.display = "block";
};

span[4].onclick = function () {
  modal[4].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal[4].style.display = "none";
  }
};
// Button 5 start
btn[5].onclick = function () {
  modal[5].style.display = "block";
};

span[5].onclick = function () {
  modal[5].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal[5].style.display = "none";
  }
};

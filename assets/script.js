let sections = document.querySelectorAll("section");
let navLi = document.querySelectorAll(".linked");
console.log(navLi);

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
      console.log(current);
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");

    if (li.classList.contains(current)) {
      li.classList.add("active");
      navLi[0].classList.remove("active");
    } else {
      navLi[0].classList.add("active");
    }
  });
};

//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//Send Mail
function SendMail() {
  (function () {
    emailjs.init("6tu7T7WAXsRRz0i78");
  })();

  var params = {
    from_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    phone_number: document.getElementById("phone_number").value,
    email_subject: document.getElementById("email_subject").value,
    message: document.getElementById("message").value,
  };

  if (
    params.from_name == "" ||
    params.email_id == "" ||
    params.phone_number == "" ||
    params.email_subject == "" ||
    params.message == ""
  ) {
    alert("Riempi ogni campo");
    return;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(params.email_id)) {
    alert("L'indirizzo email che hai inserito non e' valido");
    return;
  }

  emailjs
    .send("service_y3faixn", "template_idszpj9", params)
    .then(function (res) {
      alert("Success");
    });
}

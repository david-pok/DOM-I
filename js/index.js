const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//ADDS CLASSNAME AND TEXT TO NAV LINKS
const links = Array.from(document.getElementsByTagName("a"));
// console.log('HI', links);
for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  links[i].classList.add(`nav-item-${i + 1}`);
}

//ADDS TEXT TO CTA-TEXT
document.querySelector(".cta-text").getElementsByTagName("h1")[0].textContent =
  siteContent["cta"]["h1"];

//ADDS TEXT TO CTA BUTTON
document
  .querySelector(".cta-text")
  .getElementsByTagName("button")[0].textContent = siteContent["cta"]["button"];

//ADDS IMAGE TO CTA IMAGE THING
const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//ADDS TEXT TO H4 AND P IN MAIN
document
  .querySelector(".main-content")
  .getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["features-h4"];

document
  .querySelector(".main-content")
  .getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["features-content"];

document
  .querySelector(".main-content")
  .getElementsByTagName("h4")[1].textContent =
  siteContent["main-content"]["about-h4"];

document
  .querySelector(".main-content")
  .getElementsByTagName("p")[1].textContent =
  siteContent["main-content"]["about-content"];

//ADDS IMAGE TO MIDDLE MAIN IAMGE THING
const accrossImg = document.querySelector("#middle-img");
accrossImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

document
  .querySelector(".main-content")
  .getElementsByTagName("h4")[2].textContent =
  siteContent["main-content"]["services-h4"];

document
  .querySelector(".main-content")
  .getElementsByTagName("p")[2].textContent =
  siteContent["main-content"]["services-content"];

document
  .querySelector(".main-content")
  .getElementsByTagName("h4")[3].textContent =
  siteContent["main-content"]["product-h4"];

document
  .querySelector(".main-content")
  .getElementsByTagName("p")[3].textContent =
  siteContent["main-content"]["product-content"];

document
  .querySelector(".main-content")
  .getElementsByTagName("h4")[4].textContent =
  siteContent["main-content"]["vision-h4"];

document
  .querySelector(".main-content")
  .getElementsByTagName("p")[4].textContent =
  siteContent["main-content"]["vision-content"];

//ADDS TEXT TO CONTACT SECTION
document.querySelector(".contact").getElementsByTagName("h4")[0].textContent =
  siteContent["contact"]["contact-h4"];

document.querySelector(".contact").getElementsByTagName("p")[0].textContent =
  siteContent["contact"]["address"];

document.querySelector(".contact").getElementsByTagName("p")[1].textContent =
  siteContent["contact"]["phone"];

document.querySelector(".contact").getElementsByTagName("p")[2].textContent =
  siteContent["contact"]["email"];

//ADDS TEXT TO FOOTER SECTION
document.querySelector("footer").getElementsByTagName("p")[0].textContent =
  siteContent["footer"]["copyright"];

//PREPENDS A SIMPLE TEXT THING TO NAV
document.querySelector("nav").prepend("whatever");

//APPENDS AN A TAG LINK TO NAV
const wut = document.createElement("A");
const adding = document.createTextNode("wutever");
wut.appendChild(adding);
document.querySelector("nav").appendChild(wut);

//CHANGES NAV LINKS GREEN
Array.from(links).forEach(link => {
  //do something
  link.style.color = "green";
});
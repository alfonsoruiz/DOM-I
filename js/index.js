const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// String helpers
const mc = 'main-content'
const cta = 'cta';
const cnt = 'contact';

// Selectors
const logo = document.getElementById('logo-img');
const navList = document.querySelectorAll('nav a');
const ctaHeading = document.querySelector('h1');
const ctaImg = document.querySelector('#cta-img');
const ctaButton = document.querySelector('button');
const topContentHeadingList = document.querySelectorAll('.top-content h4');
const topContentParagraphList = document.querySelectorAll('.top-content p');
const middleImg = document.querySelector('#middle-img');
const bottomContentHeadingList = document.querySelectorAll('.bottom-content h4');
const bottomContentParagraphList = document.querySelectorAll('.bottom-content p');
const contactHeader = document.querySelector('.contact h4');
const contactParagraphList = document.querySelectorAll('.contact p');
const footer = document.querySelector('footer p');
const nav = document.querySelector('nav');

//Update HTML
logo.setAttribute('src', siteContent['nav']['img-src']);
ctaHeading.innerHTML = siteContent[cta]['h1'];
ctaImg.setAttribute('src', siteContent[cta]['img-src']);
ctaButton.textContent = siteContent[cta]['button'];
topContentHeadingList[0].textContent = siteContent[mc]['features-h4'];
topContentHeadingList[1].textContent = siteContent[mc]['about-h4'];
topContentParagraphList[0].textContent = siteContent[mc]['features-content'];
topContentParagraphList[1].textContent = siteContent[mc]['about-content'];
middleImg.setAttribute('src', siteContent[mc]['middle-img-src']);
bottomContentHeadingList[0].textContent = siteContent[mc]['services-h4'];
bottomContentHeadingList[1].textContent = siteContent[mc]['product-h4'];
bottomContentHeadingList[2].textContent = siteContent[mc]['vision-h4'];
bottomContentParagraphList[0].textContent = siteContent[mc]['services-content'];
bottomContentParagraphList[1].textContent = siteContent[mc]['product-content'];
bottomContentParagraphList[2].textContent = siteContent[mc]['vision-content'];
contactHeader.textContent = siteContent[cnt]['contact-h4'];
contactParagraphList[0].textContent = siteContent[cnt]['address'];
contactParagraphList[1].textContent = siteContent[cnt]['phone'];
contactParagraphList[2].textContent = siteContent[cnt]['email'];
footer.textContent = siteContent['footer']['copyright'];
navList[0].textContent = siteContent['nav']['nav-item-1'];
navList[1].textContent = siteContent['nav']['nav-item-2'];
navList[2].textContent = siteContent['nav']['nav-item-3'];
navList[3].textContent = siteContent['nav']['nav-item-4'];
navList[4].textContent = siteContent['nav']['nav-item-5'];
navList[5].textContent = siteContent['nav']['nav-item-6'];

//Add new content
navList.forEach(element => element.style.color = 'green');
const appendNavLi = document.createElement('a');
const prependNavLi = document.createElement('a');
appendNavLi.setAttribute('href', '#');
appendNavLi.textContent = 'Events';
appendNavLi.style.color = 'green';
prependNavLi.setAttribute('href', '#')
prependNavLi.textContent = 'Investors';
prependNavLi.style.color = 'green';

nav.appendChild(appendNavLi);
nav.prepend(prependNavLi);
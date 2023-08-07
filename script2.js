let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});




const searchForm = document.getElementById("search-form"); // assuming the search form has an id of "search-form"
const searchInput = document.getElementById("search-input"); // assuming the search input has an id of "search-input"
const searchResults = document.getElementById("search-results"); // assuming the search results container has an id of "search-results"
const searchIndex = [
  // the search index data, with URLs and their associated searchable content
  // ...insert your search index data here
  {
    name: "Shaniwar Wada",
    address: "Shaniwar Peth, Pune, Maharashtra",
    category: "Historical",
    rating: 4.5,
    latitude: 18.5196,
    longitude: 73.8553,
  },
  {
    name: "Aga Khan Palace",
    address: "Yerawada, Pune, Maharashtra",
    category: "Museum",
    rating: 4.2,
    latitude: 18.5484,
    longitude: 73.9016,
  },
  {
    name: "Sinhagad Fort",
    address: "Donaje, Pune, Maharashtra",
    category: "Historical",
    rating: 4.6,
    latitude: 18.3659,
    longitude: 73.7533,
  },
  {
    name: "Osho International Meditation Resort",
    address: "Koregaon Park, Pune, Maharashtra",
    category: "Spiritual",
    rating: 4.8,
    latitude: 18.5362,
    longitude: 73.8933,
  },
  {
    name: "Raja Dinkar Kelkar Museum",
    address: "Bajirao Road, Pune, Maharashtra",
    category: "Museum",
    rating: 4.3,
    latitude: 18.5089,
    longitude: 73.8531,
  },
  {
    name: " War Heroes at the National War Museum",
    address: "Bajirao Road, Pune, Maharashtra",
    category: "Museum",
    rating: 4.3,
    latitude: 18.5089,
    longitude: 73.8531,
  },
];

function performSearch(query) {
  // clear the previous search results
  searchResults.innerHTML = "";

  // loop through the search index and find matches
  for (let i = 0; i < searchIndex.length; i++) {
    const url = searchIndex[i].url;
    const content = searchIndex[i].content;

    if (content.toLowerCase().includes(query.toLowerCase())) {
      // create a new search result element
      const resultItem = document.createElement("div");
      const resultLink = document.createElement("a");
      const resultContent = document.createElement("p");

      // set the values for the search result element
      resultLink.href = url;
      resultLink.textContent = url;
      resultContent.textContent = content;

      // append the search result element to the container
      resultItem.appendChild(resultLink);
      resultItem.appendChild(resultContent);
      searchResults.appendChild(resultItem);
    }
  }
}

// handle the search form submission event
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the default form submission behavior
  const query = searchInput.value.trim();
  if (query) {
    performSearch(query);
  }
});


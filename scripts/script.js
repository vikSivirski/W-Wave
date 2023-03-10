const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__nav-wrap');

burger.addEventListener('click', function() {

  burger.classList.toggle('is-active');
  menu.classList.toggle('header__nav--active');

});

const searchBtn = document.querySelector('.header__search-btn ');
const searchForm = document.querySelector('.search-form');
const searchBtnActive = document.querySelector('.search-form__btn');
searchBtn.addEventListener('click', function() {

  searchForm.classList.toggle('search-form--active')

});
searchBtnActive.addEventListener('click', function() {

  searchForm.classList.remove('search-form--active')

});

//Счетчик лайков

let likeBtn = document.querySelectorAll('.like');
let shareBtn = document.querySelectorAll('.share');
let listeningsBtn = document.querySelectorAll('.podcasts__play-btn')
let likeCounter = document.querySelectorAll('.like__counter');
let shareCounter = document.querySelectorAll('.share__counter');
let listeningsCounter = document.querySelectorAll('.listenings__counter');

function counterLikes() {
  likeCounter.forEach(function(elem) {
      let likes = parseInt(elem.textContent);
      elem.textContent = likes + 1;
  });
};
likeBtn.forEach(function(like) {
  like.addEventListener('click', counterLikes)
});

function counterShare() {
  shareCounter.forEach(function(elem) {
      let likes = parseInt(elem.textContent);
      elem.textContent = likes + 1;
  });
};
shareBtn.forEach(function(share) {
  share.addEventListener('click', counterShare)
});

function counterListenings() {
  listeningsCounter.forEach(function(elem) {
      let likes = parseInt(elem.textContent);
      elem.textContent = likes + 1;
  });
};
listeningsBtn.forEach(function(listenings) {
  listenings.addEventListener('click', counterListenings)
});



const moreBtn = document.querySelector('.podcasts__more');
const podcasts = document.querySelectorAll('.podcasts__item');

moreBtn.addEventListener('click', function () {

  moreBtn.classList.toggle('podcasts__more--hidden')
  podcasts.forEach(function (element) {
    element.classList.toggle('podcasts__item--visible')
  });

});


const element = document.querySelector('.broadcast__select');
const choices = new Choices(element, {

  searchEnabled: false,
  itemSelectText: '',

});

let btnTabs = document.querySelectorAll('.tab-btn');
let itemTabs = document.querySelectorAll('.guests__tabs-item');

btnTabs.forEach(function(element) {
  element.addEventListener('click', function(e) {

    const path = e.currentTarget.dataset.path;

    btnTabs.forEach(function(btn){ btn.classList.remove('tab-btn--active')});
    e.currentTarget.classList.add('tab-btn--active');

    itemTabs.forEach(function(element){ element.classList.remove('guests__tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__tabs-item--active');
  })
});

new Accordion('.guests__accordion');

new Accordion('.subheader__accordion')

const swiper = new Swiper('.swiper', {

  loop: false,
  slidesPerView: 4,
  spaceBetween: 32,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    1025: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 2,
    },

    240: {
      slidesPerView: 2.1,

      spaceBetween: 22,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hiddenClass: '.swiper-button-hidden',
      },
    }

}});

new JustValidate('.about__form', {
  rules: {
    checkbox: {
      required: true
    },
    myField: {
      required: false
    },
    email: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minLength: 3
    },
  },
  messages: {
    name: {
      minLength: 'Ошибка',
      required: 'Это поле обязательно для заполнения',
    },
    email:{
      required: 'Это поле обязательно для заполнения',
      email: 'Ошибка',
    } ,

    checkbox: {
      required: 'Это важно'
    }
  },

  submitHandler: function (form, values, ajax) {

    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback: function(response)  {
        console.log(response)
      }
    });
  },
});

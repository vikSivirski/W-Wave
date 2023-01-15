const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__nav-wrap');

burger.addEventListener('click', function() {

  burger.classList.toggle('is-active');
  menu.classList.toggle('header__nav--active');

})


const moreBtn = document.querySelector('.podcasts__more');
const podcasts = document.querySelectorAll('.podcasts__item');

moreBtn.addEventListener('click', function () {

  moreBtn.classList.toggle('podcasts__more--hidden')
  podcasts.forEach(function (element) {
    element.classList.toggle('podcasts__item--visible')
  });


})


const element = document.querySelector('.broadcast__select');
const choices = new Choices(element, {

  searchEnabled: false,
  itemSelectText: '',
  // placeholder: true,

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
  spaceBetween: 30,

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

    320: {
      slidesPerView: 2.5,

      spaceBetween: 20,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hiddenClass: '.swiper-button-hidden',
      },
    }

}});

const moreBtn = document.querySelector('.podcasts__more');
const podcasts = document.querySelectorAll('.podcasts__item');

moreBtn.addEventListener('click', function () {

  moreBtn.classList.toggle('podcasts__more--hidden')
  podcasts.forEach(function (element) {
    element.classList.toggle('podcasts__item--visible')
  });


})

// const like = document.querySelectorAll('.podcasts__reaction-btn');

// like.forEach(likeEl => {
//   const likeCounter = document.querySelector('.podcasts__readtion-counter');
//   let counter = 0;

//   likeEl.addEventListener('click', function () {
//     render(++counter, likeCounter);
//   });
// });

// const render = (counter, likeCounter) => likeCounter.innerText = counter;

const element = document.querySelector('.broadcast__select');
const choices = new Choices(element, {

  searchEnabled: false,
  itemSelectText: '',
  // placeholder: true,

});


var mainHeader = document.querySelector('.main-header');
var mainHeaderBtn = document.querySelector('.main-header__menu-btn');

mainHeader.classList.remove('main-header--nojs');

mainHeaderBtn.addEventListener('click', function() {
  if (mainHeader.classList.contains('main-header--close')) {
    mainHeader.classList.remove('main-header--close');
    mainHeader.classList.add('main-header--opened');
  } else {
    mainHeader.classList.add('main-header--close');
    mainHeader.classList.remove('main-header--opened');
  }
});

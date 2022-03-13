
document.querySelector('#burger').onclick = function() {
    document.querySelector('.bs-01').classList.toggle('active');
    document.querySelector('.bs-02').classList.toggle('active');
    document.querySelector('.bs-03').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.header__nav-tel').classList.toggle('active');

  };

  document.querySelector('.nlt-01').onclick = function() {
    document.querySelector('.bs-01').classList.toggle('active');
    document.querySelector('.bs-02').classList.toggle('active');
    document.querySelector('.bs-03').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.header__nav-tel').classList.toggle('active');
  };
  document.querySelector('.nlt-02').onclick = function() {
    document.querySelector('.bs-01').classList.toggle('active');
    document.querySelector('.bs-02').classList.toggle('active');
    document.querySelector('.bs-03').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.header__nav-tel').classList.toggle('active');
  };
  document.querySelector('.nlt-03').onclick = function() {
    document.querySelector('.bs-01').classList.toggle('active');
    document.querySelector('.bs-02').classList.toggle('active');
    document.querySelector('.bs-03').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.header__nav-tel').classList.toggle('active');
  };
  document.querySelector('.nlt-04').onclick = function() {
    document.querySelector('.bs-01').classList.toggle('active');
    document.querySelector('.bs-02').classList.toggle('active');
    document.querySelector('.bs-03').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.header__nav-tel').classList.toggle('active');
  };
  document.querySelector('.nlt-05').onclick = function() {
    document.querySelector('.bs-01').classList.toggle('active');
    document.querySelector('.bs-02').classList.toggle('active');
    document.querySelector('.bs-03').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.header__nav-tel').classList.toggle('active');
  };

  document.querySelector('.nlt-00').onclick = function() {
    document.querySelector('.bs-01').classList.toggle('active');
    document.querySelector('.bs-02').classList.toggle('active');
    document.querySelector('.bs-03').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.header__nav-tel').classList.toggle('active');
  };


  const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
};
upButton.onclick = function () {
  window.scrollTo(0, 0);
};

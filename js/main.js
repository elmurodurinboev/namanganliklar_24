var ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
      cb();
    })
    : cb();
};

// Usage
ready(function () {

  // Toggle sitenav on site-header__toggler click
  var elSiteHeaderToggler = document.querySelector('.site-header__toggler');
  var elSitenav = document.querySelector('.sitenav');

  elSiteHeaderToggler.addEventListener('click', function () {
    elSitenav.classList.toggle('sitenav--open');
  });


  // Open/close modal
  var elModal = document.querySelector('.modal');
  var elModalClose = elModal.querySelector('.modal__close');

  var closeModal = function () {
    elModal.classList.remove('modal--open');
  };

  var openModal = function () {
    elModal.classList.add('modal--open');
  };

  if (elModalClose) {
    elModalClose.addEventListener('click', function () {
      closeModal();
    });
  }

  if (elModal) {
    elModal.addEventListener('click', function (evt) {
      if (evt.target.matches('.modal')) {
        closeModal();
      }
    });

    document.body.addEventListener('mouseleave', function () {
      openModal();
    }, {
      once: true
    });
  }

});
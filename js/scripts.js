const portfolio_sliders = document.querySelectorAll('.slider-img');
const portfolio_desc = document.querySelectorAll('.slider-ddc');
const ps_count = portfolio_sliders.length;
const next_ps = document.querySelector('.next-ps');
const previous_ps = document.querySelector('.previous-ps');
let ps_counter = 0;

function showNextPS() {
  portfolio_sliders[ps_counter].classList.remove('active');
  portfolio_desc[ps_counter].classList.remove('active');

  if(ps_counter < ps_count - 1) {
    ps_counter++;
  } else {
    ps_counter = 0;
  }

  portfolio_sliders[ps_counter].classList.add('active');
  portfolio_desc[ps_counter].classList.add('active');
  console.log(ps_counter);
}

function showPreviousPS() {
  portfolio_sliders[ps_counter].classList.remove('active');
  portfolio_desc[ps_counter].classList.remove('active');

  if(ps_counter > 0) {
    ps_counter--;
  } else {
    ps_counter = ps_count - 1;
  }

  portfolio_sliders[ps_counter].classList.add('active');
  portfolio_desc[ps_counter].classList.add('active');
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousPS();
  } else if (e.keyCode == '39') {
    showNextPS();
  }
}

next_ps.addEventListener('click', showNextPS);
previous_ps.addEventListener('click', showPreviousPS);
document.addEventListener('keydown', keyPress);

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

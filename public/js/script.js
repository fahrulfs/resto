/*~~~~~~~~~~~~~~~ NAV ON SCROLL STYLE + BACK TO TOP ~~~~~~~~~~~~~~~*/
const nav = document.getElementById('navbar')
const toTop = document.getElementById('top')
const navFixed = nav.offsetTop
window.onscroll = function () {
  if (window.scrollY > navFixed) {
    nav.classList.add('nav-fixed')
    nav.classList.add('nav-color')
    toTop.classList.add('block')
    toTop.classList.remove('hidden')
  }
  else {
    nav.classList.remove('nav-fixed')
    nav.classList.remove('nav-color')
    toTop.classList.add('hidden')
    toTop.classList.remove('block')
  }

}
/*~~~~~~~~~~~~~~~ HAMBURGER MENU ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById('hamburger')
const hamburgerClose = document.getElementById('hamburger-close')
const navMenu = document.getElementById('nav-menu')
const navLinks = document.querySelector('.nav-links')
let navLink = document.querySelectorAll('.nav-link')

// NAV CLOSE WHEN CLICKING LINK
navLink.forEach((link) => {
  link.addEventListener('click', function () {
    navMenu.classList.add('hidden')
    hamburgerClose.classList.add('hidden')
    hamburger.classList.remove('hidden')
  })
})

// hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.add('hidden')
  nav.classList.add('nav-color')
  navMenu.classList.remove('hidden')
  hamburgerClose.classList.remove('hidden')


});
hamburgerClose.addEventListener('click', () => {
  hamburger.classList.remove('hidden')
  navMenu.classList.add('hidden')
  hamburgerClose.classList.add('hidden')

});
/*~~~~~~~~~~~~~~~ DARK / MODE ~~~~~~~~~~~~~~~*/
// darkmode
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  setTheme('dark');
} else {
  setTheme('light');
}

sunIcon.addEventListener('click', () => {
  localStorage.theme = 'dark';
  setTheme('dark');
});

moonIcon.addEventListener('click', () => {
  localStorage.theme = 'light';
  setTheme('light');
});






/*~~~~~~~~~~~~~~~ MOVING ACTIVE LINK / SCROLL ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll('section')
  const navLink = document.querySelectorAll('.nav-link')
  let setLink = 'home'

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (this.scrollY >= sectionTop - 55) {
      setLink = section.getAttribute('id')
    }
  })
  navLink.forEach((item) => {
    item.classList.remove('text-secondaryColor')
    if (item.href.includes(setLink)) {
      item.classList.add('text-secondaryColor')
    }
  })
}

window.addEventListener('scroll', activeLink)
/*~~~~~~~~~~~~~~~ REVEAL ANIMATION / SCROLL ~~~~~~~~~~~~~~~*/

window.sr = ScrollReveal({
  reset: true,
  duration: 1000,
  distance: '40px',
  origin: 'top'
});

// for text-center
sr.reveal(".tittle-center")
sr.reveal(".tittle-center-sec", { origin: "bottom" })

// for text center

// about
sr.reveal(".about-image")
sr.reveal(".about-content", { origin: "right" })
// about

// layanan
sr.reveal(".layanan-image-1", {
  origin: "left", distance: '50px'
})
sr.reveal(".layanan-content-1", { origin: "right", distance: '50px' })

sr.reveal(".layanan-image-2", {
  origin: "right", distance: '50px'
})
sr.reveal(".layanan-content-2", { origin: "left", distance: '50px' })

sr.reveal(".layanan-image-3", {
  origin: "left", distance: '50px'
})
sr.reveal(".layanan-content-3", { origin: "right", distance: '50px' })

sr.reveal(".layanan-image-4", {
  origin: "right", distance: '50px'
})
sr.reveal(".layanan-content-4", { origin: "left", distance: '50px' })

sr.reveal(".layanan-image-5", {
  origin: "left", distance: '50px'
})
sr.reveal(".layanan-content-5", { origin: "right", distance: '50px' })
// layanan

sr.reveal(".fasilitas-content")


/*~~~~~~~~~~~~~~~ TABS selector ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll('.tab-wrapper li');
const items = document.querySelectorAll('.menu-display .item-wrapper');

function showItems(category) {
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    tabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const category = this.getAttribute('data-tabs');
    showItems(category);
  });
});

// Show 'ayam' items by default
showItems('ayam');



// swiper review
const swiperReview = new Swiper('.swiper', {
  loop: true,
  speed: 400,
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1023: {
      slidesPerView: 3,
    }
  }

});



// floating action button
const fab = document.getElementById('fab');
const fabOptions = document.querySelector('.fab-options');

fab.addEventListener('click', function (e) {
  e.stopPropagation();
  if (fabOptions.style.display === 'flex') {
    fabOptions.style.display = 'none';
  } else {
    fabOptions.style.display = 'flex';
  }
});
document.addEventListener('click', () => {
  fabOptions.style.display = 'none';
});


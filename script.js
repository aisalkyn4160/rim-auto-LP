const header = document.querySelector('.header')
const headerOpen = document.querySelector('.header.open')
const headerHeight = document.querySelector('.header').clientHeight

// меню при скролле
document.onscroll = function() {
    let scrollY = window.scrollY 
    if (scrollY > headerHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
} 

const sections = document.querySelectorAll('section');
const btnLinks = document.querySelectorAll('.header-btn-link')
// меню при клике
document.addEventListener('click', (event) => {
  const target = event.target;
  
  if (target.matches('nav a')) {
    const href = target.getAttribute('href');
    sections.forEach((section) => {
      if (href === `#${section.id}`) {
        section.style.paddingTop = headerHeight + 20 + 'px';
      } else {
        section.style.paddingTop = '';
      }
    });
  } 
});

btnLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const href = link.getAttribute('href')
    sections.forEach((section) => {
      if (href === `#${section.id}`) {
        section.style.paddingTop = headerHeight + 0 + 'px';
      } else {
        section.style.paddingTop = '';
      }
    })
  })
})

// burger-меню при клике
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
  header.classList.toggle('open')
  document.body.classList.toggle('no-scroll')
})

document.addEventListener('click', (event) => {
    const target = event.target;

    if(target.matches('nav a, .header-btn-link button ')) {
        setTimeout(() => {
            header.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }, 300)
        
        sections.forEach((section) => {
          if (href === `#${section.id}`) {
            section.style.paddingTop = '0px';
          }
        });

    }
})


// ---------------------------Collapse---------------------------

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    let collBtn = document.querySelectorAll('.collapse-btn');

    if (content.style.maxHeight && collBtn[i].classList.contains('active')) {
      content.style.maxHeight = null;
      content.style.margin = '0';
      collBtn[i].classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.margin = '14px 0';
      collBtn[i].classList.add('active');
    }
  });
}

// ---------------------------Swiper---------------------------

const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
})
const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    thumbs: {
        swiper: swiper
    },
    
})

const teamSwiper = new Swiper(".teamSwiper", {
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: '.team-swiper-btn-next',
      prevEl: '.team-swiper-btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
  },
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      500: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 2.5,
      },
      1024: {
          slidesPerView: 3,
      },
      1200: {
          slidesPerView: 4,
      }
  },
  spaceBetween: 29,
})

const reviewsSwiper = new Swiper(".reviewsSwiper", {
    loop: true,
    slidesPerView: 2,
    navigation: {
      nextEl: '.rev-swiper-btn-next',
      prevEl: '.rev-swiper-btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1.5,
        },
        1200: {
            slidesPerView: 2,
        }
    },
    spaceBetween: 29,
})


// ---------------------------Catalog---------------------------

document.addEventListener('DOMContentLoaded', function() {
  const showAllButton = document.querySelector('.show-all-btn');
  const hiddenItems = document.querySelectorAll('.hidden-item');
  const catalogWrapper = document.querySelector('.catalog-wrapper');

  showAllButton.addEventListener('click', function() {
    hiddenItems.forEach(item => {
      item.style.display = 'flex';
    });
    showAllButton.style.display = 'none'; 
    catalogWrapper.style.marginBottom = '0';
  });
});
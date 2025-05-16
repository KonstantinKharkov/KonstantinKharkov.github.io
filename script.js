AOS.init({
  delay: 100,
  duration: 500
})

let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let colorBtn = document.querySelector('#color-btn');
let themeBtn = document.querySelector('#theme-btn');

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let colorsPalette = document.querySelector('.colors-palette');


menuBtn.onclick = () => {  
    navbar.classList.toggle('active');
    searchForm.classList.remove('active')
    colorsPalette.classList.remove('active')
}

// searchBtn.onclick = () => {
//     searchForm.classList.toggle('active')
//     colorsPalette.classList.remove('active')
//     navbar.classList.remove('active');
// }

colorBtn.onclick = () => {
    colorsPalette.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active')
    colorsPalette.classList.remove('active')
}

document.querySelectorAll('.colors-palette .color').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.documentElement.style.setProperty('--main-color', color);
    }
});

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-moon');
    
    if(themeBtn.classList.contains('fa-moon')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active')
    }
} 


document.addEventListener('click', function (event) {
    
    const clicked = event.target;
  
    const clickOutside = !(
      navbar.contains(clicked) ||
      menuBtn.contains(clicked) ||
      // searchForm.contains(clicked) ||
      // searchBtn.contains(clicked) ||
      colorsPalette.contains(clicked) ||
      colorBtn.contains(clicked)
    );
  
    if (clickOutside) {
      navbar.classList.remove('active');
      // searchForm.classList.remove('active');
      colorsPalette.classList.remove('active');
    }
  });


// add visible class to box section in servicess start


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // если нужно только 1 раз
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.services .box-container .box').forEach(box => {
    observer.observe(box);
  });

// add visible class to box section in servicess end



// full price start


const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close-btn");
  
    openBtn.onclick = function(e) {
      e.preventDefault();
      modal.style.display = "flex";
    };
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    window.onclick = function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };

// full price end







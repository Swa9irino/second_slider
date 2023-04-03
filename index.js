let currentSlide = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


function showSlide(n) {
  
  slides.forEach(slide => {
    slide.classList.remove('active');
  })

  
  slides[n].classList.add('active');

  
  pagination.querySelectorAll('button').forEach(button => {
    button.classList.remove('active');
  })

  
  pagination.querySelectorAll('button')[n].classList.add('active');

  
  currentSlide = n;
}


function nextSlide() {
  if (currentSlide === slides.length - 1) {
   
    showSlide(0);
  } else {
    
    showSlide(currentSlide + 1);
  }
}


function prevSlide() {
  if (currentSlide === 0) {
   
    showSlide(slides.length - 1);
  } else {
    
    showSlide(currentSlide - 1);
  }
}


prevBtn.addEventListener('click', () => {
  prevSlide();
});
nextBtn.addEventListener('click', () => {
  nextSlide();
});


for (let i = 0; i < slides.length; i++) {
  const button = document.createElement('button');
  button.addEventListener('click', () => {
    showSlide(i);
  });
  pagination.appendChild(button);
}

showSlide(currentSlide);

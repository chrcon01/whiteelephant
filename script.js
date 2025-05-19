// enkelt linje kommentar

/*
flere linjer
kommentar
*/

// video pop-up

// åben pop-up med video
document.querySelectorAll('.media-mix .gif-image').forEach(function(gif) {
    gif.addEventListener('click', function(e) {
      var vimeoUrl = gif.getAttribute('data-vimeo'); 
      var modal = document.getElementById('videopopup');
      var iframe = modal.querySelector('iframe');
      iframe.src = vimeoUrl;
      modal.style.display = 'block';
      e.stopPropagation();
    });
  });

 // luk pop-up på kryds
  document.querySelector('.popup .close').onclick = function() {
    var modal = document.getElementById('videopopup');
    var iframe = modal.querySelector('iframe');
    modal.style.display = 'none';
    iframe.src = "";
  };
  
  // luk pop-up hvis der klikkes udenfor indholdet
  window.onclick = function(event) {
    var modal = document.getElementById('videopopup');
    var iframe = modal.querySelector('iframe');
    if (event.target == modal) {
      modal.style.display = 'none';
      iframe.src = "";
    }
  };


// PITCHES
// Adgangskode

const CORRECT_PASSWORD = "whiteelephantpictures";
  const passwordBtn = document.getElementById('passwordBtn');
  const passwordInput = document.getElementById('passwordInput');
  const errorMessage = document.getElementById('errorMessage');
  const passwordContainer = document.getElementById('passwordContainer');
  const gallery = document.getElementById('gallery');

  passwordBtn.addEventListener('click', checkPassword);
  passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') checkPassword();
  });

  function checkPassword() {
    if (passwordInput.value === CORRECT_PASSWORD) {
      passwordContainer.style.display = 'none';
      gallery.style.display = 'block';
      errorMessage.textContent = '';
    } else {
      errorMessage.textContent = 'Forkert adgangskode!';
      passwordInput.value = '';
      passwordInput.focus();
    }
  }

  // --- Karusel-funktionalitet ---
// Definér billeder for hvert galleri-billede
const galleries = [
  // Billeder for billede 1
  ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "13.jpg", "14.jpg", "15.jpg"],
  // Billeder for billede 2
  ["2a.jpg", "2b.jpg", "2c.jpg"], // Ret til dine billeder
  // Billeder for billede 3
  ["3a.jpg", "3b.jpg", "3c.jpg"]  // Ret til dine billeder
];

const galleryImages = document.querySelectorAll('#gallery img');
const modal = document.getElementById('modal');
const carouselImg = document.getElementById('carouselImg');
const closeModalBtn = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselCounter = document.getElementById('carouselCounter');

let currentGallery = 0;
let currentIndex = 0;

// Åbn karusellen med det rigtige billedsæt
galleryImages.forEach((img, idx) => {
  img.addEventListener('click', function() {
    currentGallery = idx;
    currentIndex = 0;
    showCarouselImage();
    modal.classList.add('active');
  });
});

function showCarouselImage() {
  const images = galleries[currentGallery];
  carouselImg.src = images[currentIndex];
  carouselCounter.textContent = `Billede ${currentIndex + 1} af ${images.length}`;
}

prevBtn.addEventListener('click', function() {
  const images = galleries[currentGallery];
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showCarouselImage();
});

nextBtn.addEventListener('click', function() {
  const images = galleries[currentGallery];
  currentIndex = (currentIndex + 1) % images.length;
  showCarouselImage();
});

closeModalBtn.addEventListener('click', function() {
  modal.classList.remove('active');
  carouselImg.src = '';
});

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.remove('active');
    carouselImg.src = '';
  }
});

document.addEventListener('keydown', function(e) {
  if (modal.classList.contains('active')) {
    if (e.key === "Escape") {
      modal.classList.remove('active');
      carouselImg.src = '';
    }
    if (e.key === "ArrowLeft") {
      const images = galleries[currentGallery];
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showCarouselImage();
    }
    if (e.key === "ArrowRight") {
      const images = galleries[currentGallery];
      currentIndex = (currentIndex + 1) % images.length;
      showCarouselImage();
    }
  }
});
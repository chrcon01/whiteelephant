// enkelt linje kommentar

/*
flere linjer
kommentar
*/

// video pop-up

// åben pop-up med video
document.querySelectorAll('.media-mix .gif-image').forEach(function(gif) {
    gif.addEventListener('click', function(e) {
      var vimeoUrl = gif.getAttribute('data-youtube'); 
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


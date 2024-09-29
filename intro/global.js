function display(id) {
    var target = document.getElementById(id);
    if (target.style.display == "none") {
        target.style.display = "";
    } else {
        target.style.display = "none";
    }
}

window.onload = function () {
    const imageFolderUrl = 'https://download.wangkailing151.com/openmedia/cat/';
    const txtFileUrl = './img.txt';
    fetch(txtFileUrl)
    .then(response => response.text())
    .then(data => {
      const imageFiles = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      
      const gallery = document.querySelector('.cat-gallery');
      imageFiles.forEach(file => {
        const img = document.createElement('img');
        img.src = imageFolderUrl + file;
        img.setAttribute('onclick', `openLightbox('${img.src}')`);
        gallery.appendChild(img);
      });

    $(document).ready(function () {
        $('.cat-gallery').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            draggable: false,
            prevArrow: '<button type="button" class="slick-prev custom-arrow"> </button>',
            nextArrow: '<button type="button" class="slick-next custom-arrow"> </button>' 
        });
    });
  })
  .catch(error => {
    console.error('Error fetching the file list:', error);
  });
};

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    document.getElementById('lightbox').addEventListener('click', function (event) {
        if (event.target.tagName !== 'IMG') {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

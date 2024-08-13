document.addEventListener('DOMContentLoaded', () => {
   
    const welcomePage = document.getElementById('welcome-page');
    const galleryPage = document.getElementById('gallery-page');
    const enterButton = document.getElementById('enter-gallery');

    enterButton.addEventListener('click', () => {
        welcomePage.style.display = 'none';
        galleryPage.style.display = 'block';
    });


    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const galleryItems = document.querySelectorAll('.gallery a');
    let currentIndex = 0;

    function openLightbox(index) {
        const item = galleryItems[index];
        lightbox.style.display = 'flex';
        lightboxImg.src = item.href;
        lightboxDesc.textContent = item.querySelector('img').dataset.description;
        currentIndex = index;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openLightbox(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightbox(currentIndex);
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
});

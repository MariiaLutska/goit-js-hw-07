import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imgGallery = document.querySelector('.gallery');
console.log(imgGallery);

const listImages = galleryItems
    .map(item => `<div class="gallery">
        <a class='gallery__item' href=${item.original}>
        <img class='gallery__image'
        src=${item.preview} alt='Image description' />
        </a>
        </div>`)
    .join('');

imgGallery.innerHTML = listImages;

imgGallery.addEventListener('click', showModal);

const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionSelector: 'img', captionsData: 'alt', captionDelay: 250 });

function showModal(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    console.log(event.target)
    event.preventDefault();
}




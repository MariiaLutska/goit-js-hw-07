import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgGallery = document.querySelector('.gallery');
const listImages = createGalleryCard(galleryItems);
imgGallery.innerHTML = listImages;

function createGalleryCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
    })
    .join('');
}

imgGallery.addEventListener('click', showModal);

function showModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(
    `<img
      class="gallery__image"
      src="${event.target.dataset.source}"
      data-source="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />`,
    {
      onShow: instance => addEventListener('onShow', instance),
      onClose: instance => removeEventListener('onClose', instance),
    },
  );

  instance.show();

  window.addEventListener('keydown', onEscKeyPress);
  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

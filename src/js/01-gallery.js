// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

let listEl = '';

galleryItems.forEach(item => {
  const newImage = `
    <li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  listEl += newImage;
});

gallery.insertAdjacentHTML('beforeend', listEl);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsDate: 'alt',
  captionDelay: 250,
});


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const generateGallery = gallery => {
    return gallery
        .map(item => {
            return `
            <a class="gallery__item" href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
                />
            </a>
        `
        })
        .join('');
};

gallery.insertAdjacentHTML('beforeend', generateGallery(galleryItems));

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
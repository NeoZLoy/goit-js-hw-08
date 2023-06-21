// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import createGalleryMarkup from './gallery-markup';
import onGalleryItemClick from './on-gallery-item-click';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.style.listStyle = 'none';

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
onGalleryItemClick();

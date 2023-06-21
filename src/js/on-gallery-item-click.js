export default function onGalleryItemClick() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    enableKeyboard: true,
  });
}

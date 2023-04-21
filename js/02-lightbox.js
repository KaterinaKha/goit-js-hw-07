import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemElement = document.querySelector(".gallery");

galleryItemElement.insertAdjacentHTML("beforeend", createGalleryItem(galleryItems));

galleryItemElement.addEventListener("click", onImgClick);

function createGalleryItem(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
  <li class='gallery__item'>
		<a class='gallery__link' href='${original}'>
	<img 
      class='gallery__image' 
      src='${preview}'
      alt='${description}' />
		</a>
	</li>`;
		})
		.join(" ");
}
function onImgClick(e) {
	e.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
	captions: true,
	captionsData: "alt",
	captionDelay: 250,
	captionPosition: "bottom",
});
console.log(galleryItems);

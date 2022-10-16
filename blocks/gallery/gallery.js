export default function decorate(block) {
    const galleryWrapper = block.parentElement;
    const galleryPicture = document.createElement("div");
    galleryPicture.classList.add("gallery-picture");
    const first = block.firstElementChild;
    block.firstElementChild.classList.add("selected");
    galleryPicture.append(first.cloneNode(true));
    galleryWrapper.prepend(galleryPicture);

    // function for selecting new gallery image
    const selectImage = (element) => {

    }
}

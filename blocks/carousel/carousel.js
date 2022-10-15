export default function decorate(block) {
    // select first item to display
    block.firstElementChild.classList.add("selected");
    // get parent
    const parent = block.parentElement;
    // create pagination Arrows
    let leftArrow = document.createElement("a");
    let rightArrow = document.createElement("a");
    leftArrow.innerHTML = "<";
    rightArrow.innerHTML = ">";

    const paginateLeft = () => {
        const selected = block.getElementsByClassName("selected")[0];
        if (selected.previousElementSibling){
            selected.classList.remove("selected");
            selected.previousElementSibling.classList.add("selected");
        }
    }

    const paginateRight = () => {
        const selected = block.getElementsByClassName("selected")[0];
        if (selected.nextElementSibling){
            selected.classList.remove("selected");
            selected.nextElementSibling.classList.add("selected");
        }
    }

    leftArrow.addEventListener("click", paginateLeft);
    rightArrow.addEventListener("click", paginateRight);
    leftArrow.classList.add("arrow");
    rightArrow.classList.add("arrow");

    parent.prepend(leftArrow);
    parent.append(rightArrow);
}

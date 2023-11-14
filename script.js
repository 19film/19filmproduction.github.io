let menu= document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}

function changeContent(title, background) {
    const banner = document.querySelector('.banner');
    const contents = banner.querySelectorAll('.content');

    // Hide all content sections
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the content section for the clicked image
    const selectedContent = banner.querySelector(`.${title}`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    banner.style.background = `url("${background}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    banner.style.display = 'block'; // Show the banner when an image is clicked
}
const container = document.querySelector(".container");
const defaultImage = 'default-image.jpg'; // Default background image
let currentImage = defaultImage; // Initialize with the default image

const imageChangeElements = document.querySelectorAll('.image-change');

imageChangeElements.forEach((element) => {
    const backgroundImage = element.getAttribute('data-image');

    element.addEventListener('mouseover', () => {
        currentImage = backgroundImage;
        container.style.backgroundImage = `url('${currentImage}')`;
    });

    element.addEventListener('mouseout', () => {
        container.style.backgroundImage = `url('${currentImage}')`;
    });
});

let menu=document.querySelector('#menu-icon');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.tremove('active');
}

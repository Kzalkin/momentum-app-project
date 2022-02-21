const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

linksContainer.addEventListener('click', () => {
    links.classList.toggle('hide1');
})
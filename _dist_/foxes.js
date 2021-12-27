import { registerImage } from './lazy.js';

const max = 122;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min)) + min;
const mountNode = document.getElementById('images')

const createImageNode = () => {
    const container =  document.createElement('div');
    container.className = 'group';
    const image =  document.createElement('img');

    image.className = ' rounded-lg group-hover:opacity-75 object-cover';
    image.width = '320';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    container.appendChild(image);
    return container;
};

const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
}

const addButton = document.querySelector('button');

addButton.addEventListener('click', addImage);




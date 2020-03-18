// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const createGalleryRef = image => {
//     const createListItemRef = document.createElement('li');
//     createListItemRef.classList.add('gallery__list-item');
//     const createImageRef = document.createElement('img');
//     createImageRef.classList.add('gallery__list-item__image');
//     createImageRef.src = image.url;
//     createImageRef.alt = image.alt;
//     createListItemRef.appendChild(createImageRef);
//     return createListItemRef;
// }

// const imageList = images.map(image => createGalleryRef(image));

// const containerGalleryRef = document.querySelector('#gallery');

// containerGalleryRef.append(...imageList);


const createGalleryRef = document.querySelector('#gallery');
const createListItemRef = images.reduce((string, image) => string + `<li class = 'gallery__list-item' ><img class = 'gallery__list-item__image' src = ${image.url}, alt = "${image.alt}"></li>`, '');

createGalleryRef.insertAdjacentHTML('beforeend', createListItemRef);
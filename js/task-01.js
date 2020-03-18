// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

const categoriesRef = document.querySelector('#categories');

console.log (`В списке ${categoriesRef.children.length} категории`);

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2) и 
// количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesItemRef = document.querySelectorAll('.item');

categoriesItemRef.forEach(categoriesItemRef => console.log('Категория:', categoriesItemRef.firstElementChild.textContent, ',',
 'Количество елементов:',categoriesItemRef.lastElementChild.childElementCount));




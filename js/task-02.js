// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
//   Для создания DOM-узлов используй document.createElement().

const createItemListRef = ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    return itemRef;
}

const itemList = ingredients.map(ingredient => createItemListRef(ingredient));

const containerListRef = document.querySelector('#ingredients');

containerListRef.append(...itemList);

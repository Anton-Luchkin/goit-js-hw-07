// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterRef = document.querySelector('#counter');
const decrementBtnRef = counterRef.firstElementChild;
const incrementBtnRef = counterRef.lastElementChild;
const counterValueRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', () => {
    counterValueRef.textContent = Number(counterValueRef.textContent) - 1;
});

incrementBtnRef.addEventListener('click', () => {
    counterValueRef.textContent = Number(counterValueRef.textContent) + 1;
});
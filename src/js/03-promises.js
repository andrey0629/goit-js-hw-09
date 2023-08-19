// Задание 3 - генератор промисов
// Выполняй это задание в файлах 03-promises.html и 03-promises.js. Посмотри демо видео работы генератора промисов.

// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах, шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.

// <form class="form">
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   </label>
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   </label>
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   </label>
//   <button type="submit">Create promises</button>
// </form>

// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// Библиотека уведомлений
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Для отображения уведомлений пользователю вместо console.log() используй библиотеку notiflix.

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import throttle from 'lodash/throttle.js';

const form = document.querySelector('.form');
const btn = document.querySelector('button');
// const userData = {
//   // delay,
//   // step,
//   // amount,
//   delay: form.elements.delay,
//   step: form.elements.step,
//   amount: form.elements.amount,
// };

const delay = document.querySelector('[name="delay"]');
delay.addEventListener('input', throttle(handlerInput, 1000));
// console.log(delay);
// console.log(delay.value);

const step = document.querySelector('[name="step"]');
step.addEventListener('input', throttle(handlerInput, 1000));

const amount = document.querySelector('[name="amount"]');
// amount.addEventListener('input', throttle(handlerInput, 1000));

// console.log(amount);
// console.log(amount.value);

function handlerInput(evt) {
  evt.preventDefault();
  console.log(amount.value);
}
// const delayV = userData.delay.value;
// // console.log(delayV);
// const stepV = userData.step.value;
// const amountV = userData.amount.value;

// form.elements.delay.value = userData.delay;
// form.elements.step.value = userData.step;
// form.elements.amount.value = userData.amount;

// userData[evt.target.name] = evt.target.value;
// console.log(handlerInput());

// btn.addEventListener('submit', createPromise);

// form.addEventListener('input', handlerInput);
// ***** пробую достать количество промисов из поля delay:
// amountV.forEach(promis => console.log(promis));

for (let position = 1; position <= 5; position++) {
  // amount.addEventListener('input', handlerInput);

  // function handlerInput(evt) {
  //   evt.preventDefault();
  //   console.log(amount.value);
  // }

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve('Success! Value passed to resolve function');
        }
        reject('Error! Error passed to reject function');
      }, delay);
      setInterval(() => {
        if (shouldResolve) {
          resolve('Success! Value passed to resolve function');
        }
        reject('Error! Error passed to reject function');
      }, step);
    });
  }
  position;
  btn.addEventListener('submit', createPromise);

  // btn.addEventListener('submit', function createPromise(position, delay) {
  // btn.preventDefault();

  // const promis = new Promise((resolve, reject) => {
  //   const shouldResolve = Math.random() > 0.3;
  //   setTimeout(() => {
  //     if (shouldResolve) {
  //       resolve('Success! Value passed to resolve function');
  //     }
  //     reject('Error! Error passed to reject function');
  //   }, 1000);
  // });

  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
amount.addEventListener('input', throttle(handlerInput, 1000));

function handlerInput(evt) {
  evt.preventDefault();
  console.log(amount.value);
}
// по форме с 8 ДЗ
// const form = document.querySelector('.feedback-form');
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// let userText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

// form.addEventListener('input', handlerInput);
// form.addEventListener('submit', handlerSubmit);

// form.elements.email.value = userText.email || '';
// form.elements.message.value = userText.message || '';

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   console.log(userData);
//   evt.currentTarget.reset();
// localStorage.removeItem(LOCALSTORAGE_KEY);
// }

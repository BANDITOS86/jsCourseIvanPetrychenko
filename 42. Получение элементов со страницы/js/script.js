'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach((item) => {
//   item.style.backgroundColor = 'blue';
// })

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);

div.innerHTML = "<h1>Hello World!</h1>";
// div.textContent = 'Hello'

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

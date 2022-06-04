'use strict';
import { gaz } from './gaz';
import { koteln } from './koteln';
console.log(gaz, koteln);
const arr = [];
arr.push(...gaz);
// console.log(arr);
const selectMenu = document.querySelector('select');
const textStr = document.querySelector('h1');
// console.log(selectMenu);
const options = document.querySelectorAll('option');
let testTheme;
const quest = [];
// console.log(options);
// console.log(selectMenu.value);
// console.log(selectMenu.selectedIndex);
selectMenu.addEventListener('change', function () {
  quest.splice(0);
  testTheme = selectMenu.value;
  console.log(selectMenu.value);
  //   console.log(selectMenu.selectedIndex);
  if (testTheme === 'koteln') {
    quest.push(...koteln);
    // console.log('koteln');
  } else if (testTheme === 'gaz') {
    quest.push(...gaz);
    // console.log('gaz');
  }
  textStr.textContent = `The theme of the test is ${testTheme}`;
  console.log(quest);
});
// console.log(quest);
// selectMenu.onchange = function () {
//   console.log(selectMenu.value);
//   console.log(selectMenu.selectedIndex);
// };

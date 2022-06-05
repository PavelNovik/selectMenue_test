'use strict';
import { gaz } from './gaz';
import { koteln } from './koteln';
import { pipes } from './pipes';
import { vessels } from './vessel';
console.log(gaz, koteln);
const arr = [];
arr.push(...gaz);
// console.log(arr);
const selectMenu = document.querySelector('select');
const textStr = document.querySelector('h1');

let testTheme;
const quest = [];

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
  } else if (testTheme === 'pipes') {
    quest.push(...pipes);
    // console.log('gaz');
  } else if (testTheme === 'vessels') {
    quest.push(...vessels);
    // console.log('gaz');
  }
  textStr.textContent = `The theme of the test is ${testTheme}`;
  console.log(quest);
});

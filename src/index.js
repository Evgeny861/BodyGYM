'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import clubsName from './modules/clubsName';
import firstSlider from './modules/firstSlider';
import burgerMenu from './modules/burgerMenu';
import forms from "./modules/forms";
import carousel from "./modules/carousel";
import calc from "./modules/calc";
import gallery from "./modules/gallery";
import sendForms from "./modules/sendForms";


// вызываю poputs 
clubsName();
// Слайдер 
firstSlider();
// burgerMenu
burgerMenu();
// Валидация для форм
forms();
//  Карусель
carousel();
// Калькулятор
calc();
// Фотогалерея
gallery();
//  формы из модальных форм
sendForms();
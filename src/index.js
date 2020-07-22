'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import clubsName from './modules/clubsName';
import firstSlider from './modules/firstSlider';
import burgerMenu from './modules/burgerMenu';



// вызываю poputs 
clubsName();
// Слайдер 
firstSlider();
// burgerMenu
burgerMenu();
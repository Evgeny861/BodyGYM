'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import clubsName from './modules/clubsName';
import firstSlider from './modules/firstSlider';



// вызываю poputs 
clubsName();
// Слайдер 
firstSlider();
import menu from '../html/_menu.html';
import header from '../html/_header.html';
import main from '../html/_main.html';
import footer from '../html/_footer.html';

import '../scss/main.scss';
import '../index.html';

document.querySelector('.menu').innerHTML = menu;
document.querySelector('.header').innerHTML = header;
document.querySelector('.main').innerHTML = main;
document.querySelector('.footer').innerHTML = footer;

import "../../../node_modules/flickity/css/flickity.css";
import "./about.css";

const Flickity = require('flickity');

const element = document.querySelector('.commits__carousel');
const flkty = new Flickity(element, {
  cellAlign: 'center',
  draggable: true,
  // contain: true,
  wrapAround: true,
  freeScroll: true
})

import './css/styles.css';
import run from './app/app';
import generateHeader from './app/header';
import generatePagesSection from './app/pages';
import generateHomeSection from './app/pages/home-page';
import generateMenuSection from './app/pages/menu-page';
import generateContactSection from './app/pages/contact-page';

require('animate.css');

window.onload = function onLoad() {
  const content = document.getElementById('content');
  generateHeader(content);
  generatePagesSection(content);

  const pagesContent = document.getElementById('pages-section');
  generateHomeSection(pagesContent);
  generateMenuSection(pagesContent);
  generateContactSection(pagesContent);

  run();
};

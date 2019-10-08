// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import { Link } from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
  
  let mbMenuStatus = false
  let menuButton = document.getElementById('mbmenubutton')
  menuButton.onclick = () => {
    let menu = document.getElementById('mbmenu')
    if (mbMenuStatus) {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
    }
    mbMenuStatus = !mbMenuStatus
  }

  let menu = document.getElementById('mbmenu')
  menu.style.display = 'none'
});
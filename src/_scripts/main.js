// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';
import { Link } from '../_modules/link/link';


  new Link(); // Activate Link modules logic
  console.log('你来审计源代码啦！有没有兴趣来团队工作呢？email: i@linux.dog');
  
  let mbMenuStatus = false
  let menuButton = document.getElementById('mbmenubutton')
  menuButton.onclick = () => {
    let menu = document.getElementById('mbmenu')
    if (mbMenuStatus) {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
      menu.classList.add('animated', 'bounceInDown')
    }
    mbMenuStatus = !mbMenuStatus
  }

  let menu = document.getElementById('mbmenu')
  menu.style.display = 'none'

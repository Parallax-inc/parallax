import { Component, OnInit, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ImgParallax: boolean;
  scrollBtn: boolean;
  arrowUp: boolean;
  title = 'Веб студія - PARALLAX';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.animatetitle();
    }, 500);
    
  }
  @HostListener('window:scroll', ['$event']) onscroll(event): void {
    const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    // console.log(top);
    if (top > 2400) {
      this.ImgParallax = false;
    } else {
      this.ImgParallax = true;
    }
    if (top > 800) {
      this.scrollBtn = true;
    } else {
      this.scrollBtn = false;
    }
  }

  animatetitle() {
    let mas = this.title.split('');
    let maintitle = document.getElementsByClassName('mainTitle');

    // console.log(mas);
    mas.forEach((elem, index) => {
      setTimeout(() => {
        maintitle[0].insertAdjacentHTML('beforeend', `<span class='t${index}'>${elem}</span>`);
        anime({
          targets: `.t${index}`,
          translateY: 450,
          scale: 1.2,
          duration: 2000,
          width: 60,
        });
      }, index * 70);
    })

    setTimeout(() => {
      anime({
        targets: `.smallTitle>p`,
        translateY: -200,
        easing: 'linear',
        duration: 300,
      });
    }, 2000);
  }

  scrollUp(){
    const scroll = setInterval(scrollStep, 20);
    this.arrowUp = true;
    function scrollStep() {
      const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      if (top > 0) {
        window.scrollBy(0, -100);
      } else {
        clearInterval(scroll);
      }
    }
    setTimeout(() => {
      this.arrowUp = false;
    }, 1500);
  }

}

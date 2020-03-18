import { Component, OnInit, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ImgParallax: boolean;
  title = 'Веб студия - PARALLAX';
  constructor() { }

  ngOnInit() {
    this.animatetitle();
  }
  @HostListener('window:scroll', ['$event']) onscroll(event): void {
    const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    // console.log(top);
    if (top > 2200) {
      this.ImgParallax = false;
    } else {
      this.ImgParallax = true;
    }
  }

  animatetitle() {
    let mas = this.title.split('');
    let maintitle = document.getElementsByClassName('mainTitle');

    console.log(mas);
    mas.forEach((elem, index) => {
      setTimeout(() => {
        maintitle[0].insertAdjacentHTML('beforeEnd', `<span class='t${index}'>${elem}</span>`);
        anime({
          targets: `.t${index}`,
          translateY: 450,
          duration: 2000,
          width: 60,
        });
      }, index * 200);
    })
  }

}

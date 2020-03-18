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
    // let span = document.createElement("span");
    let span = document.createElement("span")

    console.log(mas);
    // debugger
    mas.forEach((elem) => {
      setTimeout(() => {
        // maintitle[0].appendChild(span).textContent = `${elem}`;
        maintitle[0].insertAdjacentHTML('beforeEnd' ,`<span>${elem}</span>`);

        console.log(elem);

      }, 1000);
    })



  }

  // anime({
  //   targets: `${this.title}`,
  //     // translateY: 100,
  //     // translateY: -100,
  //     // easing: 'linear',
  //     duration: 10000,
  //       // delay: 1000,
  //       loop: true,
  //         opacity: 1
  //   });;
  // }




}

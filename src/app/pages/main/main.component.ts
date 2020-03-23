import { Component, OnInit, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { ScrollService } from 'src/app/shared/services/scroll.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ImgParallax: boolean;
  menubig: boolean = false;
  scrollBtn: boolean;
  arrowUp: boolean;
  title = 'Веб студія - PARALLAX';
  posImg: number;

  constructor(public scrollService: ScrollService) { }

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

    let winHeight = document.documentElement.clientHeight;

    if (top > winHeight && top < winHeight * 3) {
      this.posImg = (top - winHeight) / 3;
      let bgParallax = document.getElementsByClassName('parallaxBg');
      bgParallax[0].style.transform = `translateY(-${this.posImg}px)`;

    }
    if (top > winHeight * 3 -350) {
      this.posImg = (top - winHeight*3) / 3;
      let bgParallax = document.getElementsByClassName('parallaxBg');
      bgParallax[0].style.transform = `translateY(-${this.posImg}px)`;
    }




    // bgParallax.style.top = `${top/100}px`;
  }

  animationService() {
    anime({
      targets: `.servPart`,
      translateY: 10,
    });
  }
  showMenu() {
    if (this.menubig) {
      this.menubig = false;
    } else {
      this.menubig = true;
    }

  }

  scrollPoint(scrollPart): void {
    let winHeight = document.documentElement.clientHeight;

    let point = 0;
    if (scrollPart == 'main') {
      point = 0;

    } else if (scrollPart == 'aboutUs') {
      point = winHeight;
    } else if (scrollPart == 'portfolio') {
      point = winHeight * 2 + 350;
    } else if (scrollPart == 'services') {
      point = winHeight * 3 + 350;
    } else if (scrollPart == 'whyWe') {
      point = winHeight * 4 + 700;
    } else if (scrollPart == 'contacts') {
      point = winHeight * 5 + 700;
    }

    const scroll = setInterval(scrollStep, 10);
    function scrollStep() {
      const position = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      // console.log(position);
      let difference = position - point;

      if (position > point) {
        difference = position - point;
      } else {
        difference = point - position;
      }


      if (position > point) {
        if (difference < 20) {
          window.scrollBy(0, -1);
        } else {
          window.scrollBy(0, -20);
        }
      }
      else if (position < point) {
        if (difference < 20) {
          window.scrollBy(0, 1);
        } else {
          window.scrollBy(0, 20);
        }
      }
      else {
        clearInterval(scroll);
      }
    }

    if (scrollPart == 'main') {
      window.scrollBy(0, -100);
    }

    // console.log('scroll');

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

  scrollUp() {
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

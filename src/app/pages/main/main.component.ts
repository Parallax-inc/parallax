import { Component, OnInit, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { BackenadService } from 'src/app/shared/services/backend.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  formData = new FormData();
  ImgParallax: boolean;
  menubig: boolean = false;
  scrollBtn: boolean;
  arrowUp: boolean;
  title = 'Веб студія - PARALLAX';
  posImg: number;
  projectArray = [];
  randomProjectArray = [];
  random: number;

  nameClient: string;
  phone: string;
  email: string;
  text: string;

  constructor(public scrollService: ScrollService, public backEnd: BackenadService) { }

  ngOnInit() {
    this.getProject();

    setTimeout(() => {
      this.animatetitle();
    }, 500);
  }

  @HostListener('window:scroll', ['$event']) onscroll(event): void {
    const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
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
    }
    if (top > winHeight * 3 - 350) {
      this.posImg = (top - winHeight * 3) / 3;
    }

  }

  sendFeedBack() {
    this.formData.append('name', this.nameClient);
    this.formData.append('phone', this.phone);
    this.formData.append('email', this.email);
    this.formData.append('text', this.text);
    console.log(this.formData)
    this.backEnd.feedback(this.formData).subscribe((res: any) => { }, (err: any) => { console.log(err); })

  }

  randerRandomOurWorks() {
    let min = 0;
    let max = this.projectArray.length - 1
    this.random = Math.floor(min + Math.random() * (max - min));
    console.log('min =' + min);
    console.log('max =' + max);

    console.log(this.random);

    this.randomProjectArray = this.projectArray.slice(this.random, this.random + 2)
    console.log(this.projectArray);

  }

  getProject() {
    this.backEnd.getProject().subscribe((res) => {
      this.projectArray = res as [];
      this.randerRandomOurWorks();
    })
  }

  animationService() {
    anime({
      targets: `.servPart`,
      translateY: 10,
    });
  }
  showMenu() {
    this.menubig = !this.menubig;
  }


  animatetitle() {
    let winWidth = document.documentElement.clientWidth;
    let mas = this.title.split('');
    let maintitle = document.getElementsByClassName('mainTitle');

    // console.log(mas);
    mas.forEach((elem, index) => {
      setTimeout(() => {
        maintitle[0].insertAdjacentHTML('beforeend', `<span class='t${index}'>${elem}</span>`);
        if (winWidth > 1670) {
          anime({
            targets: `.t${index}`,
            translateY: 450,
            scale: 1.2,
            duration: 2000,
            width: 60,
          });
        } else if (winWidth > 1030 && winWidth < 1670) {
          anime({
            targets: `.t${index}`,
            translateY: 450,
            scale: 1,
            duration: 2000,
            width: 50,
          });
        } else if (winWidth > 770 && winWidth < 1030) {
          anime({
            targets: `.t${index}`,
            translateY: 300,
            scale: 1,
            duration: 2000,
            width: 37,
          });
        }else if (winWidth > 645 && winWidth < 770) {
          anime({
            targets: `.t${index}`,
            translateY: 300,
            scale: 1.2,
            duration: 2000,
            width: 45,
          });
        } else if (winWidth < 645) {
          anime({
            targets: `.t${index}`,
            translateY: 450,
            scale: 1,
            duration: 2000,
            width: 30,
          });
        }

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

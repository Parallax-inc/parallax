import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ImgParallax: boolean;
  constructor() { }

  ngOnInit() {
   
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

  

}

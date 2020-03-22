import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // menubig: boolean = false;
  feedBackShow: boolean = false;
  constructor(public scrollService: ScrollService) { }

  ngOnInit() {
  }

  // showMenu(){
  //   if(this.menubig){
  //     this.menubig = false;
  //   } else {
  //     this.menubig = true;
  //   }
    
  // }

  feedBackForm(){
    if(this.feedBackShow){
      this.feedBackShow = false;
    } else {
      this.feedBackShow = true;
    }
  }
}

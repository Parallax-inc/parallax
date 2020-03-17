import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menubig: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showMenu(){
    console.log('work');
    if(this.menubig){
      this.menubig = false;
    } else {
      this.menubig = true;
    }
    
  }
}

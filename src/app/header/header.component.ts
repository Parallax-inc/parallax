import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service';
import { BackenadService } from '../shared/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // menubig: boolean = false;
  feedBackShow: boolean = false;
  formData = new FormData();
  nameClient: string;
  phone: string;
  email: string;
  text: string;
  constructor(public scrollService: ScrollService, public backEnd: BackenadService) { }

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
  sendFeedBack(){
    this.formData.append('name', this.nameClient);
    this.formData.append('phone', this.phone);
    this.formData.append('email', this.email);
    this.formData.append('text', this.text);
    console.log(this.formData)
    this.backEnd.feedback(this.formData).subscribe((res: any) => { }, (err: any) => { console.log(err); })

  }
}

import { Component, OnInit } from '@angular/core';
import { BackenadService } from 'src/app/shared/services/backend.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projectArray = [];
  constructor(public backEnd: BackenadService) { }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.backEnd.getProject().subscribe((res) => {
      this.projectArray = res as [];
      console.log(this.projectArray); 
    })
  }
  

}

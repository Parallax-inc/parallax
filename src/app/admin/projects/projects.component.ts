import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/shared/services/web-service.service';
import { BackenadService } from 'src/app/shared/services/backend.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  name: string;
  category: string;
  link: string;
  desc: string;
  arrayImages = [];

  projectArray = [];
  constructor(private backEnd: BackenadService) { }

  ngOnInit() {
    this.getProject()
  }

  addImages(files){
    console.log(files);
    
    for(let img of files){
      this.arrayImages.push(img)
      console.log(img);
      
    }
  }

  onSubmit(){
    const data = new FormData();
    data.append('name', this.name);
    data.append('category', this.category);
    data.append('link', this.link);
    data.append('desc', this.desc);
    for (let img of this.arrayImages) {
      data.append('images', img)
    }

    this.backEnd.postProject(data).subscribe((res: any) => { this.getProject();}, (err: any) => { console.log(err); })
    console.log(data);
    this.getProject();
  }

  deleteProject(id){
    this.backEnd.deleteProject(id).subscribe((res:any)=> {this.getProject();},(err: any)=>{console.log(err);});
    // this.getProject();
  }

  getProject() {
    this.backEnd.getProject().subscribe((res) => {
      this.projectArray = res as [];
    })
  }
}

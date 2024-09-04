import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  loader=true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader=false;
    }, 1000);
  }

}

import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  panelOpenState = false;
  loader=true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader=false;
    }, 1000);
  }

}

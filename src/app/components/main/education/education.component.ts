import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  panelOpenState = false;
  loader=true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader=false;
    }, 1000);
  }

}

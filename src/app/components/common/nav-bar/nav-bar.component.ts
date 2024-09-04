import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showFiller = false;
  constructor(
    private scroller: ViewportScroller,
  ) { }

  ngOnInit(): void {

  }
scrollTo(element:any){
  this.scroller.scrollToAnchor(element);
}
}

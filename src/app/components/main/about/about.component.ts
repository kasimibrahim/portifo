import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import AOS from 'aos';
import SwiperCore, { Pagination, Autoplay, Swiper, SwiperOptions, EffectCube,EffectFade } from 'swiper';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  loader=true;
  value = 'Clear me';
  contactFormGroup!:FormGroup;
  panelOpenState = false;
  email='sangminsilas@gmail.com';
  constructor(
      private formBuilder: FormBuilder,
      private scroller: ViewportScroller
      ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader=false;
    }, 1000);
    AOS.init();
    //this.scroller.scrollToAnchor("top");
    Swiper.use([Pagination,Autoplay,EffectCube,EffectFade])
    this.contactFormGroup=this.formBuilder.group({
      fullName: ['',Validators.required],
      email:['',Validators.required],
      message:['',Validators.required]
    })
  }
  onActivate(event:any) {
    // window.scroll(0,0);

    window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
     });

     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)

 }

  sendMessage(data:any){
    console.log(data)
    alert(`Message Sent. You will hear from me soon ${data.fullName}. Thank you 😇`)
  }
 
  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    //spaceBetween: 50,
    //navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
        delay: 5000,
      },
    //effect: 'fade',
    // cubeEffect:{
    //   shadow: true,
    //   slideShadows: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94
    // },
  };

  get fullNameCtrl(){return this.contactFormGroup?.get('fullName');}
  get emailCtrl(){return this.contactFormGroup?.get('email');}
  get messageCtrl(){return this.contactFormGroup?.get('message');}
}

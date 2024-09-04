import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js'
import SwiperCore, { Pagination, Autoplay, Swiper, SwiperOptions, EffectCube,EffectFade } from 'swiper';

// @ts-ignore
import AOS from 'aos'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = true;
  loader=true;
  constructor() { }
// @ts-ignore
  ngOnInit(): void {
    setTimeout(() => {
      this.loader=false;
    }, 1000);
    AOS.init();
    Swiper.use([Pagination,Autoplay,EffectCube,EffectFade])
    //type writing animation
    const target = document.querySelector('.text-animate');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#9582f5'
    })

    writer
      .strings(
        1000,
        "a Software Engineer",
        " an AI Engineer",
        "a Full Stack Developer"
      )
      .start()

  }
  // target element  <div class="tw"></div>

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
  //@ts-ignore



}

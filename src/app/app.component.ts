import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/999999"},
    {img: "http://placehold.it/350x150/CCCCCC"},
    {img: "http://placehold.it/350x150/FFFFFF"}
  ];
  slideConfig = {

    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev" style="color: black; font-size:40px;z-index: 2000; left: -11px" (click)="slickModal.slickPrev()"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next" style="color: black; font-size:40px; right: 13px" (click)="slickModal.slickNext()"><i class="fa fa-chevron-right"></i></button>',
    edgeFriction: 0
  };

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}

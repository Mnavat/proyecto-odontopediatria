import { Component, OnInit } from '@angular/core';
declare var $:any; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngOnInit(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      adaptiveHeight: true,
      slideWidth: 400
    });
  }
  
}

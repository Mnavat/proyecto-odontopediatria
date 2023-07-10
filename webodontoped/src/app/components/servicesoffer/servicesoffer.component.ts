import { Component} from '@angular/core';
declare var $:any; 

@Component({
  selector: 'app-servicesoffer',
  templateUrl: './servicesoffer.component.html',
  styleUrls: ['./servicesoffer.component.css']
})
export class ServicesofferComponent {
  ngOnInit(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      adaptiveHeight: false,
      slideWidth: 400
    });
  }
}

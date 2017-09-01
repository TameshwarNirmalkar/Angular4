import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs: ['counterTotal']
})
export class HeaderComponent implements OnInit {

  public userData:Object = {
    image: 'https://lh3.googleusercontent.com/-k71LpF7IVys/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUq9ekuyMSPxFPXTYevaT4FNXGAdPQ/mo/photo.jpg?sz=46',
    name: 'Tameshwar Nirmalkar',
    email: 'tameshwar.nirmalkar@gmail.com'
  };

  // @Output() counterTotalChange:EventEmitter<Number> = new EventEmitter();
  public counterTotal: number = 0;

  constructor() { }

  ngOnInit() {
    
  }

  logout(){
    
  }

}

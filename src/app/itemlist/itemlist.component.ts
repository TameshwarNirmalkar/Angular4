import { Component, OnInit, Input } from '@angular/core';
import { Products } from './products.interface';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  @Input()
  product: Products;

  constructor() { }

  ngOnInit() {
    console.log( this.product );
  }

  addRemoveToCart(){

  }

}

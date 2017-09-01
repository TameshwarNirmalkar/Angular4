import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from './products.interface';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  @Input() product: Products;
  @Input() cartitems: Array<Object>;
  // @Output() totalPriceChange = new EventEmitter<Number>();

  constructor() {
    // this.totalPriceChange.emit(this.tp);
  }

  ngOnInit() {
  }

  addRemoveToCart(){
    
  }

}

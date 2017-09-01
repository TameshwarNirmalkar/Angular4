import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Title } from '@angular/platform-browser';
import * as _ from 'lodash';
import { Products } from './../itemlist/products.interface';
@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {
  public products: Observable<Products[]>;
  public totalPrice:Number = 0;
  public selectedItems: Array<Object> = [];

  constructor(private titleService: Title){
    this.titleService.setTitle('Mastercard || Food Items');
    // this.totalPriceChangeEvent();
  }

  ngOnInit() { 
    this.products = Observable.of([
      {
        "id": 1,
        "name": "A",
        "price": 10,
        "quantity": 1,
        "totalperitem": 10,
        "totalPrice": 10
      },
      {
        "id": 2,
        "name": "B",
        "price": 10,
        "quantity": 1,
        "totalperitem": 10,
        "totalPrice": 10
      },
      {
        "id": 3,
        "name": "C",
        "price": 10,
        "quantity": 1,
        "totalperitem": 10,
        "totalPrice": 10
      },
      {
        "id": 4,
        "name": "D",
        "price": 10,
        "quantity": 1,
        "totalperitem": 10,
        "totalPrice": 10
      },
      {
        "id": 5,
        "name": "E",
        "price": 10,
        "quantity": 1,
        "totalperitem": 10,
        "totalPrice": 10
      }
    ]);
  }

  toggleCartItems(a:object, id:number){
    let x = _.find(this.selectedItems, {id: id})
    if(!x){
      this.selectedItems.push(a);
    }else{
      _.remove(this.selectedItems, {id: id})
    }
    // console.log( this.selectedItems);

  }

}

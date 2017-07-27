import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Products } from './../itemlist/products.interface';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {
  products: Observable<Products[]>;
  constructor(private titleService: Title){
    this.titleService.setTitle('Mastercard || Food Items');
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
      }
    ]);
  }

}

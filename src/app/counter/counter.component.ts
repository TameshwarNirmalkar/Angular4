import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  private _count : number = 1;
  private _totalprice: number;
  private _finalprice:Array<Number> = [];

  @Input() itemobject: Object;
  @Input() cartitems: any[];

  constructor() { 
  }

  ngOnInit() {
      console.log( this.cartitems);
  }


  increment(e:Event){
      
      e.stopImmediatePropagation();
      this._count = +this._count+1;
      // this.counterChange.emit(this._count);

      this._totalprice = (this._count);
      
      // this.totalpriceChange.emit(this._totalprice);
      
      // this._finalprice = this.getTotalPrice();;
      // this.finalpriceChange.emit(this._finalprice);

      console.log( this.cartitems );
  }
  decrement(e:Event){
      // console.log( this.cartitems );
      e.stopImmediatePropagation();
      if(this._count <= 1) return;
      this._count = +this._count - 1;
      // this.counterChange.emit(this._count);
      
      this._totalprice = (this._count);
      
      // this.totalpriceChange.emit(this._totalprice);

      // this._finalprice = this.getTotalPrice();
      // this.finalpriceChange.emit(this._finalprice);

      console.log( this.cartitems );
  }

  getTotalPrice(){
      // let x = this.cartitems.map(cart => cart.totalperitem);
      // return x.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }

}

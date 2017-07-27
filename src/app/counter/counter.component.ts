import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  private _count : number = 1;
  private _totalprice: number;
  private _finalprice:number = 0;

  constructor() { 
    this.counterChange = new EventEmitter<number>();
    this.totalpriceChange =  new EventEmitter<number>();
    this.finalpriceChange = new EventEmitter<number>(); 
  }

  ngOnInit() {
  }

  @Output() counterChange :  EventEmitter<number>;
  @Output() totalpriceChange :  EventEmitter<number>;
  @Output() finalpriceChange :  EventEmitter<number>;

  @Input()
  set counter(cnt: number) {
      this._count = cnt;
  }
  get counter():number {
      return this._count; 
  }
  /**
  * One way data binding for item price, due its constant for per item.
  */
  @Input('itemprice')
  itemprice: number;

  /**
  * Two way data binding for total price
  */
  @Input('totalprice')
  set totalprice(p: number) {
      this._totalprice = p;
  }
  get totalprice():number {
      return this._totalprice; 
  }
  /**
    * Two way data binding for finalprice price
    */
    @Input('finalprice')
    set finalprice(p: number) {
        this._finalprice = p;
    }
    get finalprice():number {
        return this._finalprice; 
    }

    @Input() cartitems: any[];

    increment(e:Event){
      e.stopImmediatePropagation();
      this._count = +this._count+1;
      this.counterChange.emit(this._count);

      this._totalprice = (this._count * this.itemprice);
      this.totalpriceChange.emit(this._totalprice);
      
      // this._finalprice = this.getTotalPrice();;
      this.finalpriceChange.emit(this._finalprice);
    }
    decrement(e:Event){
      e.stopImmediatePropagation();
      if(this._count <= 1) return;
      this._count = +this._count - 1;
      this.counterChange.emit(this._count);
      
      this._totalprice = (this._count * this.itemprice);
      this.totalpriceChange.emit(this._totalprice);

      // this._finalprice = this.getTotalPrice();
      this.finalpriceChange.emit(this._finalprice);
    }

    getTotalPrice(){
      let x = this.cartitems.map(cart => cart.totalperitem);
      return x.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

}

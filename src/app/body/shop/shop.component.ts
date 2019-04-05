import { Component, OnInit } from '@angular/core';
import { Shopping } from '../../shopping.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShoppingService]
})
export class ShopComponent implements OnInit {
  shopContents: FirebaseListObservable<any[]>;
  // shopContents: Shopping[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
     this.shopContents = this.shoppingService.getShopping();
  }

}

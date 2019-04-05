import { Component, OnInit } from '@angular/core';
import { Shopping } from '../../shopping.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopContents: Shopping[] = [
    new Shopping ("https://picsum.photos/200/300/?random?", "Fearlessly Female"),
    new Shopping ("https://picsum.photos/200/300/?random", "DIY craft projects"),
    new Shopping ("https://picsum.photos/200/300/?random?", "Jewelry gifts under $30"),
    new Shopping ("https://picsum.photos/200/300/?random?", "Vintage clothing"),
    new Shopping ("https://picsum.photos/200/300/?random?", "Etsy weddings"),
    new Shopping ("https://picsum.photos/200/300/?random?", "One of a kind gift ideas"),
    new Shopping ("https://picsum.photos/200/300/?random?", "EDITOR'S PICKS")
  ],

  constructor() { }

  ngOnInit() {
  }

}

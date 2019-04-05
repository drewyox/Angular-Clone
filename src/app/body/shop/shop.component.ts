import { Component, OnInit } from '@angular/core';
import { Shopping } from '../../shopping.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopContents: Shopping[] = [
    new Shopping ("This is Totally an Image", "Fearlessly Female"),
    new Shopping ("This is Totally an Image", "DIY craft projects"),
    new Shopping ("This is Totally an Image", "Jewelry gifts under $30"),
    new Shopping ("This is Totally an Image", "Vintage clothing"),
    new Shopping ("This is Totally an Image", "Etsy weddings"),
    new Shopping ("This is Totally an Image", "One of a kind gift ideas"),
    new Shopping ("This is Totally an Image", "EDITOR'S PICKS")
  ];

  constructor() { }

  ngOnInit() {
  }

}

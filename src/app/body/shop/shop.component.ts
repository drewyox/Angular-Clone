import { Component, OnInit } from '@angular/core';
import { Shopping } from '../../shopping.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopContents: Shopping[] = [
    new Shopping ("https://via.placeholder.com/150.jpg", "Fearlessly Female"),
    new Shopping ("https://via.placeholder.com/150.jpg", "DIY craft projects"),
    new Shopping ("https://via.placeholder.com/150.jpg", "Jewelry gifts under $30"),
    new Shopping ("https://via.placeholder.com/150.jpg", "Vintage clothing"),
    new Shopping ("https://via.placeholder.com/150.jpg", "Etsy weddings"),
    new Shopping ("https://via.placeholder.com/150.jpg", "One of a kind gift ideas"),
    new Shopping ("https://via.placeholder.com/150.jpg", "EDITOR'S PICKS")
  ];

  constructor() { }

  ngOnInit() {
  }

}

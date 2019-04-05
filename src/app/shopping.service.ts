import { Injectable } from '@angular/core';
import { Shopping } from './shopping.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShoppingService {
  shoppingContent: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.shoppingContent= database.list('shopping');
 }
 getShopping(){
   return this.shoppingContent;
 }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;
  public product2: Product;
  public product3: Product;
  constructor() { }

  ngOnInit(): void {
    this.product = {
      name: "Monitor Dell",
      price: 25000,
      isOnSale: true,
      quantity: 0,
      imageUrl: "https://img.gigatron.rs/img/products/large/image5b854e7ad91cf.png"
    }
    this.product2 = {
      name: "Monitor ViewSonic",
      price: 15000,
      isOnSale: false,
      quantity: 0,
      imageUrl: "https://www.winwin.rs/media/catalog/product/420x420/860/94/8609418.jpg"
    }
    this.product3 = {
      name: "Benq",
      price: 27000,
      isOnSale: true,
      quantity: 0,
      imageUrl: "https://www.winwin.rs/media/catalog/product/420x420/865/47/8654761.jpg"
    }
  }

  
  incrementInCart() {
    this.product.quantity++;
  }


  decrementInCart() {
    if (this.product.quantity > 0) {
      this.product.quantity--;
    }
  }
}

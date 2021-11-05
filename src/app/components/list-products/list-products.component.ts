import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: any = [];
  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(response => {
      console.log(response)
      this.products = response
    })
  }

}

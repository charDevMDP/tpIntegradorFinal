import { Product } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _productsServive: ProductsService) { }

  id?:string | null;
  product?:Product;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct();

  }

  getProduct(){
    this._productsServive.getProductById(this.id).subscribe(response => {
      console.log('ProdServ');
      console.log(response)
      this.product = response
    })
  }


}

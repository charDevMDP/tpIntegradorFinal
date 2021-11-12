import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private _productsServive: ProductsService, private router: Router) { }

  id?:string | number | null;
  product?:Product;

  prodForm?:FormGroup;
  loading:boolean = false
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getProduct();

    this.prodForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      productCategoryId: ['',[Validators.required]],
      
    })

  }

  getProduct(){
    this._productsServive.getProductById(this.id).subscribe(response => {
      console.log('ProdServ');
      console.log(response)
      this.product = response
    })
  }

  onSubmit(){
    let prod = new Product();

    prod.name = this.prodForm?.get('name')?.value;
    prod.description = this.prodForm?.get('description')?.value;
    prod.price = this.prodForm?.get('price')?.value;
    prod.productCategoryId = this.prodForm?.get('productCategoryId')?.value;

    prod.productId = Number(this.id);
    
    this._productsServive.updateProduct(prod).subscribe(reponse => {
      this.router.navigate(['/products'])
    })
    

  }
}

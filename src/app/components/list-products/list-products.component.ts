import { CategoryService } from './../../services/category.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: any = [];
  productsFilters: any = [];
  categories: any = [0,1,2,3,4,5]

  seleccionado: any = '-1'
  constructor(private _productsService: ProductsService, private _categoryService:CategoryService) { }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(response => {
      console.log(response)
      this.products = response
      this.productsFilters = this.products
    })
    this._categoryService.getCategory().subscribe(response => {
      console.log('Categorias')
      console.log(response)
      //this.categories = response
    })
  }

  editar(){
    console.log('editar')
  }

  Filtrar(){
    /*let prodFilter: any[] = []
    this.products.forEach((product:any) => {
      if(product.productCategoryId === this.seleccionado){
          prodFilter.push(product)
      }
    });
    this.products = prodFilter;
    */
   if(this.seleccionado != '-1'){
     this.productsFilters = this.products.filter((prod:any) => prod.productCategoryId == this.seleccionado)
   }else{
     this.productsFilters = this.products
   }
    
  }

}

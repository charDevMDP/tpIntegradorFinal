import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './screens/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { ProductsComponent } from './screens/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent,canActivate: [AuthGuard]},
  { path: 'product/:id', component: ProductDetailsComponent,canActivate: [AuthGuard]},
  { path: 'product-edit/:id', component: ProductEditComponent,canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

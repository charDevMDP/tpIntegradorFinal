import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LoginComponent } from './screens/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductsComponent } from './screens/products/products.component';
import { ProductComponent } from './screens/product/product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    ProductComponent,
    ListProductsComponent,
    LoginFormComponent,
    NavbarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ 
    { // necesario para que ande los interceptores
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true // indica que puede tenes multiples interceptores, import el orden
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

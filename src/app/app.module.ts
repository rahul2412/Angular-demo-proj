import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularWebStorageModule } from 'angular-web-storage'
import {HttpClientModule} from '@angular/common/http';

import{RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { GreetComponent } from './greet.component';
import { MenuComponent } from './menu/menu.component';
import { AppIIComponent } from './app-ii/app-ii.component';
import { Product } from './product';
import { ProductsComponent } from './products.component';
import { cartdetailsComponent } from './carddetails.component';
import { addToCartComponent } from './addtocard.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { headercomponent } from './header.component';
import { LoginService } from './login_service';
import { profileComponent } from './profile.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { productdetailsComponent } from './productdetails.component';
import {  photosComponent } from './photos.component';
import { SignUpComponent } from './signup.component';
import { PipeDemoComponent } from './pipedemo.component';
import { ReversePipe } from './reversestr.pipe';


let routes=[
  {
    path: '', //default
    component: GreetComponent
  },

  {
    path: 'login', //default
    component: LoginComponent
  },
  {
    path: 'products', //default
    component: ProductsComponent,
    children:[{
      path:'productdetails/:id',
      component:productdetailsComponent
    }]
  },
  {
    path: 'cartdetails', //default
    component: cartdetailsComponent
  },
  {
    path: 'profile', //default
    component:profileComponent
  },
  {
    path: 'photos', //default
    component: photosComponent
  },
  {
    path: 'signup', //default
    component: SignUpComponent
  },
  {
    path: 'pipe', //default
    component: PipeDemoComponent
  },
  {
    path: '**', //default
    component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    MenuComponent,
    AppIIComponent,
    ProductsComponent,
    addToCartComponent,
    cartdetailsComponent,
    LoginComponent,
    headercomponent,
    profileComponent,
    PageNotFoundComponent,
    productdetailsComponent,photosComponent,
   SignUpComponent, PipeDemoComponent,ReversePipe
    

  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent, AppIIComponent]
  // By default the scope of angular change detection is the whole
  // component tree.You may want to bootstrap diff component separately
  // so that chnage detection runs in a smaller scope so bootstrap different component
})
export class AppModule { }

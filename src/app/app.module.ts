import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularWebStorageModule } from 'angular-web-storage'

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
    profileComponent
    

  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent, AppIIComponent]
  // By default the scope of angular change detection is the whole
  // component tree.You may want to bootstrap diff component separately
  // so that chnage detection runs in a smaller scope so bootstrap different component
})
export class AppModule { }

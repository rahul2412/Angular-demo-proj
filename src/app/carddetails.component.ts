import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { cartService } from './cartservice';
import {  SessionStorageService, SessionStorage } from 'angular-web-storage';



@Component({
    selector: 'cartdetails',
    template: `
    <br>
    <h1> My cart Products</h1>
    <table border = "3px solid black" align = "center">
    <tr>
    <th> Id </th>
    <th> Name </th>
    <th> Price </th>
    <th> Product Image </th>
    <th>Category </th>
    <th> Action </th>
    </tr>
    <tr *ngFor="let product of cartProduct; ">
    <td>{{product.id}}</td>
    <td>{{product.name}}</td>
    <td>{{product.price}}</td>
    <td><img [src]="product.imgPath"></td>
    <td>{{product.category}}</td>
    <td><button (click)="remove(product)">Delete</button></td>
    </tr>
</table>
    `,
    styles: [`
    table {
        width:100%;
        
    }
    img{
        width:auto;
        height:130px;
    }
    th{
        text-align = center;
        background-color:peachpuff;
        fontweight:bold;
    }
    `],
    // ethe comment isiliye kita kyunki aapa nu app level te array update krna hai is krke eh providers nu comment krke aapa 
    // app.component.ts te likhya providers 
    // providers:[cartService]
})
export class cartdetailsComponent  {
    // Trying to save in session storage
    @SessionStorage()
    cartProduct:Product[];

    constructor(private cartService: cartService) {

        this.cartService.cartBrodCaster.subscribe(res =>{
            this.cartProduct = JSON.parse(res);
            //alert(res);

           
        })
        this.cartProduct = this.cartService.getCartItems();
     }
     remove(index){
         this.cartService.removeFromCart(index);
     }


}

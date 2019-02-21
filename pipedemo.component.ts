import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pipe-demo',
    template:`<h2>Pipe Demo</h2>
    Product Name: {{productName}}<br>
    Product Name: {{productName|lowercase}}<br>
    Product Name: {{productName|uppercase}}<br>
    <h2>Date</h2>
    {{today}}<br>
    {{today|date}}<br>
    {{today|date:"medium"}}<br>
    {{today|date:"short"}}<br>
    <h2>Currency</h2>
    {{price|currency}}<br>
    {{price|currency:"INR"}}<br>
    {{price|currency:"EUR"}}<br>
    <h2> custome pipe </h2>
    {{productName | reversestr }}
    `,
    styles: [``]
})
export class PipeDemoComponent implements OnInit {
    productName:string="Xyz MoBile";
    today:Date=new Date();
    price:number=256.20;
    constructor() { }

    ngOnInit(): void { }
}

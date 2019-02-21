import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menuItem: string[];
    constructor() {
        this.menuItem = ["Login", "Products", "CartDetails","Profile","SomeLinks","photos","Signup","Pipe"];
    }
    getItems(): string[]{
        return this.menuItem;
    }
}
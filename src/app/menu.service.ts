import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menuItem: string[];
    constructor() {
        this.menuItem = ["Login", "Products", "Cart Details"];
    }
    getItems(): string[]{
        return this.menuItem;
    }
}
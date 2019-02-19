import { Component, OnInit } from '@angular/core';
import { LoginService } from './login_service';

@Component({
    selector: 'header',
    template:`
    <h2>welcome {{username}}</h2>`,
    styles:[]
})
export class headercomponent  {
    username:string;
    constructor(private loginService:LoginService) {
        this.loginService.getName().subscribe(newName=>{
            this.username=newName;
        })
    }}
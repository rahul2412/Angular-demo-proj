import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reversestr'})
export class ReversePipe implements PipeTransform {
    transform(value: any): any {

        let newstr:string = '';
        for(var i  = value.length-1;i>=0;i--){
            newstr += value.charAt(i);
        }
        return newstr;
        
    }
}
        
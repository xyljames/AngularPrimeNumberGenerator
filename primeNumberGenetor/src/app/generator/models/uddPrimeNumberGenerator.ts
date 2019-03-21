import { PrimeNumberGenerator } from ".";
import { Component } from "@angular/core";

@Component({
    template:''
})

export class UpdPrimeNumGenerator implements PrimeNumberGenerator{
    newReturnList: Array<Number> = [];

    generate(startingNumber:number,ending:number):Array<Number>{
        return;
    }

    isPrime(value:number):boolean{
        return
    }

}
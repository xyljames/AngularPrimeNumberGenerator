import { UpdPrimeNumGenerator } from "./uddPrimeNumberGenerator";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { start } from "repl";

describe('UpdPrimeNumberGenerator class test cases',()=>{
    let component:UpdPrimeNumGenerator;
    let fixture:ComponentFixture<UpdPrimeNumGenerator>;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[UpdPrimeNumGenerator],
        }).compileComponents();
    }));
    beforeEach(()=>{
        fixture=TestBed.createComponent(UpdPrimeNumGenerator);
        component = fixture.componentInstance;
        fixture.detectChanges()
    });
    it('should create',()=>{
        expect(component).toBeTruthy()
    })
    describe('generate test cases',()=>{
        it('given a range, isPrime should be called',()=>{
            let startNum = 1;
            let endNum = 5;
            let spyPrime = spyOn(component,'isPrime').and.returnValue(true);
            component.generate(startNum,endNum);
            expect(spyPrime).toHaveBeenCalled();
            expect(component.generate(startNum,endNum)).not.toBeNull()
            
        })

        it('if start or end number is invalid',()=>{
            let startNum = 1;
            expect(component.generate(startNum,null)).toBeTruthy()
            let spyPrimeFalse = spyOn(component,'isPrime').and.returnValue(false);
            expect(spyPrimeFalse).not.toHaveBeenCalled();
        })

        it('if isPrime(value) is true, push to list',()=>{
            let startNum =1;
            let endNum = 5;
            component.generate(startNum,endNum);
            component.isPrime(startNum);
            expect(component.generate(startNum,endNum)).not.toBeNull()    
        })
    })
})
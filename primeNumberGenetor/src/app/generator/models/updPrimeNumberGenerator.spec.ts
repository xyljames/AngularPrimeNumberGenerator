import { UpdPrimeNumGenerator } from "./uddPrimeNumberGenerator";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";

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
})
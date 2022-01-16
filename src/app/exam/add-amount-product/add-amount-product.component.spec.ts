import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmountProductComponent } from './add-amount-product.component';

describe('AddAmountProductComponent', () => {
  let component: AddAmountProductComponent;
  let fixture: ComponentFixture<AddAmountProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAmountProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

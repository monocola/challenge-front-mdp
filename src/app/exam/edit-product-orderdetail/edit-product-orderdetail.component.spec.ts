import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductOrderdetailComponent } from './edit-product-orderdetail.component';

describe('EditProductOrderdetailComponent', () => {
  let component: EditProductOrderdetailComponent;
  let fixture: ComponentFixture<EditProductOrderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductOrderdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductOrderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

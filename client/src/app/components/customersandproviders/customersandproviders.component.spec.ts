import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersandprovidersComponent } from './customersandproviders.component';

describe('CustomersandprovidersComponent', () => {
  let component: CustomersandprovidersComponent;
  let fixture: ComponentFixture<CustomersandprovidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersandprovidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersandprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProviderComponent } from './navbar-provider.component';

describe('NavbarProviderComponent', () => {
  let component: NavbarProviderComponent;
  let fixture: ComponentFixture<NavbarProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

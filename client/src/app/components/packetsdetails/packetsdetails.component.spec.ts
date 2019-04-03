import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketsdetailsComponent } from './packetsdetails.component';

describe('PacketsdetailsComponent', () => {
  let component: PacketsdetailsComponent;
  let fixture: ComponentFixture<PacketsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

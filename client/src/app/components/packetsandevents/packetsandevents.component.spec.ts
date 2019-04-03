import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketsandeventsComponent } from './packetsandevents.component';

describe('PacketsandeventsComponent', () => {
  let component: PacketsandeventsComponent;
  let fixture: ComponentFixture<PacketsandeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketsandeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketsandeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

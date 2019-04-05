import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformpacketComponent } from './newformpacket.component';

describe('NewformpacketComponent', () => {
  let component: NewformpacketComponent;
  let fixture: ComponentFixture<NewformpacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewformpacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewformpacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

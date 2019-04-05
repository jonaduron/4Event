import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpacketComponent } from './editpacket.component';

describe('EditpacketComponent', () => {
  let component: EditpacketComponent;
  let fixture: ComponentFixture<EditpacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

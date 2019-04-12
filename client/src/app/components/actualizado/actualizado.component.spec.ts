import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizadoComponent } from './actualizado.component';

describe('ActualizadoComponent', () => {
  let component: ActualizadoComponent;
  let fixture: ComponentFixture<ActualizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

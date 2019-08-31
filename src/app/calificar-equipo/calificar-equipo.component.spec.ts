import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarEquipoComponent } from './calificar-equipo.component';

describe('CalificarEquipoComponent', () => {
  let component: CalificarEquipoComponent;
  let fixture: ComponentFixture<CalificarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

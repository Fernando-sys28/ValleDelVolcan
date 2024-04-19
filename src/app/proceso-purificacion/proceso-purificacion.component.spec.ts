import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoPurificacionComponent } from './proceso-purificacion.component';

describe('ProcesoPurificacionComponent', () => {
  let component: ProcesoPurificacionComponent;
  let fixture: ComponentFixture<ProcesoPurificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesoPurificacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcesoPurificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

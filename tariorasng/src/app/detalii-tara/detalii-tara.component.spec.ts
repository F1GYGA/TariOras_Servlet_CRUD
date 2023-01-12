import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiTaraComponent } from './detalii-tara.component';

describe('DetaliiTaraComponent', () => {
  let component: DetaliiTaraComponent;
  let fixture: ComponentFixture<DetaliiTaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliiTaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaliiTaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

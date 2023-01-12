import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiOrasComponent } from './detalii-oras.component';

describe('DetaliiOrasComponent', () => {
  let component: DetaliiOrasComponent;
  let fixture: ComponentFixture<DetaliiOrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliiOrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaliiOrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

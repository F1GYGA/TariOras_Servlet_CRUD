import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOraseComponent } from './lista-orase.component';

describe('ListaOraseComponent', () => {
  let component: ListaOraseComponent;
  let fixture: ComponentFixture<ListaOraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

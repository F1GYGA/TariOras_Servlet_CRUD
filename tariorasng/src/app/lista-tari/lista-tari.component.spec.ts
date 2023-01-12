import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTariComponent } from './lista-tari.component';

describe('ListaTariComponent', () => {
  let component: ListaTariComponent;
  let fixture: ComponentFixture<ListaTariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

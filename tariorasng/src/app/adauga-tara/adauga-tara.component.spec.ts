import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaTaraComponent } from './adauga-tara.component';

describe('AdaugaTaraComponent', () => {
  let component: AdaugaTaraComponent;
  let fixture: ComponentFixture<AdaugaTaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaugaTaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdaugaTaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

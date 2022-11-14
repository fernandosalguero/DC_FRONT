import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromosComerciosComponent } from './promos-comercios.component';

describe('PromosComerciosComponent', () => {
  let component: PromosComerciosComponent;
  let fixture: ComponentFixture<PromosComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromosComerciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromosComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

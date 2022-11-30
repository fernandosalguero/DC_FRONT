import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoComerciosComponent } from './catalogo-comercios.component';

describe('CatalogoComerciosComponent', () => {
  let component: CatalogoComerciosComponent;
  let fixture: ComponentFixture<CatalogoComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoComerciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

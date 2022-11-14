import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComerciosComponent } from './registro-comercios.component';

describe('RegistroComerciosComponent', () => {
  let component: RegistroComerciosComponent;
  let fixture: ComponentFixture<RegistroComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComerciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

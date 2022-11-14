import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorUsuarioComponent } from './comparador-usuario.component';

describe('ComparadorUsuarioComponent', () => {
  let component: ComparadorUsuarioComponent;
  let fixture: ComponentFixture<ComparadorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparadorUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparadorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesUsuarioComponent } from './novedades-usuario.component';

describe('NovedadesUsuarioComponent', () => {
  let component: NovedadesUsuarioComponent;
  let fixture: ComponentFixture<NovedadesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovedadesUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

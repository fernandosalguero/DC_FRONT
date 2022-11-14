import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComerciosComponent } from './login-comercios.component';

describe('LoginComerciosComponent', () => {
  let component: LoginComerciosComponent;
  let fixture: ComponentFixture<LoginComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComerciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

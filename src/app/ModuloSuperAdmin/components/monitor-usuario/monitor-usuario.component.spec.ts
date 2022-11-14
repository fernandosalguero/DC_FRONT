import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorUsuarioComponent } from './monitor-usuario.component';

describe('MonitorUsuarioComponent', () => {
  let component: MonitorUsuarioComponent;
  let fixture: ComponentFixture<MonitorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

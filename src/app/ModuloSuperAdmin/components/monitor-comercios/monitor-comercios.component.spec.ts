import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorComerciosComponent } from './monitor-comercios.component';

describe('MonitorComerciosComponent', () => {
  let component: MonitorComerciosComponent;
  let fixture: ComponentFixture<MonitorComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorComerciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

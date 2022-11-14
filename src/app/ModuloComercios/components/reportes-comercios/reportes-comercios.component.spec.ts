import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesComerciosComponent } from './reportes-comercios.component';

describe('ReportesComerciosComponent', () => {
  let component: ReportesComerciosComponent;
  let fixture: ComponentFixture<ReportesComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesComerciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

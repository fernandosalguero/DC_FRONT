import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPISuperAdminComponent } from './kpisuper-admin.component';

describe('KPISuperAdminComponent', () => {
  let component: KPISuperAdminComponent;
  let fixture: ComponentFixture<KPISuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPISuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KPISuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

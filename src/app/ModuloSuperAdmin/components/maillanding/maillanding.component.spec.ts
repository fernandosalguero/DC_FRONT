import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaillandingComponent } from './maillanding.component';

describe('MaillandingComponent', () => {
  let component: MaillandingComponent;
  let fixture: ComponentFixture<MaillandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaillandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaillandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

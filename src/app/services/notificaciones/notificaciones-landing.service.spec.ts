import { TestBed } from '@angular/core/testing';

import { NotificacionesLandingService } from './notificaciones-landing.service';

describe('NotificacionesLandingService', () => {
  let service: NotificacionesLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacionesLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

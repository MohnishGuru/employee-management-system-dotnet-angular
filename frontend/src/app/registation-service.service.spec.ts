import { TestBed } from '@angular/core/testing';

import { RegistationServiceService } from './registation-service.service';

describe('RegistationServiceService', () => {
  let service: RegistationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

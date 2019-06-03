import { TestBed } from '@angular/core/testing';

import { CousesWebService } from './couses-web.service';

describe('CousesWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CousesWebService = TestBed.get(CousesWebService);
    expect(service).toBeTruthy();
  });
});

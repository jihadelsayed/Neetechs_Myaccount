import { TestBed } from '@angular/core/testing';

import { StudiersService } from './studiers.service';

describe('StudiersService', () => {
  let service: StudiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

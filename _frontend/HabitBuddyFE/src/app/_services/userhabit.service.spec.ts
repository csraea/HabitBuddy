import { TestBed } from '@angular/core/testing';

import { UserhabitService } from './userhabit.service';

describe('UserhabitService', () => {
  let service: UserhabitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserhabitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

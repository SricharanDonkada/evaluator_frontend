import { TestBed } from '@angular/core/testing';

import { CodejamService } from './codejam.service';

describe('CodejamService', () => {
  let service: CodejamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodejamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

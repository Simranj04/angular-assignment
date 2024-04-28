import { TestBed } from '@angular/core/testing';

import { Logic } from './logic.service';

describe('LogicService', () => {
  let service: Logic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

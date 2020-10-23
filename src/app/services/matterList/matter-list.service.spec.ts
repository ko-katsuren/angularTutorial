import { TestBed } from '@angular/core/testing';

import { MatterListService } from './matter-list.service';

describe('MatterListService', () => {
  let service: MatterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

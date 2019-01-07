import { TestBed } from '@angular/core/testing';

import { GonitwaServiceService } from './gonitwa-service.service';

describe('GonitwaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GonitwaServiceService = TestBed.get(GonitwaServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SlideHomeService } from './slide-home.service';

describe('SlideHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideHomeService = TestBed.get(SlideHomeService);
    expect(service).toBeTruthy();
  });
});

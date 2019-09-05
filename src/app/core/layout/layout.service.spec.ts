import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [LayoutService],
  }));

  it('should be created', () => {
    const service: LayoutService = TestBed.get(LayoutService);
    expect(service).toBeTruthy();
  });

  it('should generate routes with layout', () => {
    expect(LayoutService.childRoutes([]))
      .toEqual(jasmine.objectContaining({
        path: '',
        children: [],
        canActivate: [],
        data: Object({reuse: true}),
      }));
  });
});

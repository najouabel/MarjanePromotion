import { TestBed } from '@angular/core/testing';

import { PromotionProductService } from './promotion-product.service';

describe('PromotionProductService', () => {
  let service: PromotionProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

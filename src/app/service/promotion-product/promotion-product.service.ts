import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionProductService {

  private apiUrl = 'http://localhost:8081/api/products/promotions';

  constructor(private http: HttpClient) { }

  createProductPromotion(percentage: number, productUuid: string): Observable<any> {
    const body = {
      percentage: percentage,
      product: {
        uuid: productUuid
      },
      status: 'pending'
    };
    return this.http.post<any>(this.apiUrl, body);
  }

  getPromotionProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  acceptProductPromotion(productId: string): Observable<any> {
    const acceptUrl = `${this.apiUrl}/${productId}/accept`;
    return this.http.put<any>(acceptUrl, {});
  }

  denyProductPromotion(productId: string): Observable<any> {
    const denyUrl = `${this.apiUrl}/${productId}/deny`;
    return this.http.put<any>(denyUrl, {});
  }


}

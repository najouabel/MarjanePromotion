import { Component, OnInit } from '@angular/core';
import { PromotionProductService } from "../service/promotion-product/promotion-product.service";
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PromotionProduct } from '../models/promotion-product';

@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

    promotionProducts$: Observable<PromotionProduct[]>;

    constructor(private productService: PromotionProductService) { }

    acceptProduct(product: PromotionProduct): void {
        this.productService.acceptProductPromotion(product.uuid)
            .pipe(
                switchMap(() => this.productService.getPromotionProducts())
            )
            .subscribe((updatedProducts: PromotionProduct[]) => {
                this.promotionProducts$ = this.updateObservable(updatedProducts);
            });
    }

    denyProduct(product: PromotionProduct): void {
        this.productService.denyProductPromotion(product.uuid)
            .pipe(
                switchMap(() => this.productService.getPromotionProducts())
            )
            .subscribe((updatedProducts: PromotionProduct[]) => {
                this.promotionProducts$ = this.updateObservable(updatedProducts);
            });
    }

    ngOnInit(): void {
        this.loadPromotionProducts();
    }

    loadPromotionProducts(): void {
        this.promotionProducts$ = this.productService.getPromotionProducts()
            .pipe(
                map((data: any[]) => data as PromotionProduct[])
            );
    }

    private updateObservable(products: PromotionProduct[]): Observable<PromotionProduct[]> {
        return new Observable<PromotionProduct[]>((observer) => {
            observer.next(products);
            observer.complete();
        });
    }
}

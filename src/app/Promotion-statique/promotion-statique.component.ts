import { Component, OnInit } from '@angular/core';
import { PromotionProductService } from "../service/promotion-product/promotion-product.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-promotion-statique',
    templateUrl: './promotion-statique.component.html',
    styleUrls: ['./promotion-statique.component.css']
})
export class PromotionStatiqueComponent implements OnInit {
    promotionProducts$: Observable<any[]>;
    acceptedCount = 0;
    rejectedCount = 0;
    pendingCount = 0;

    constructor(private productService: PromotionProductService) { }

    ngOnInit(): void {
        // this.loadPromotionProducts();
    }

    loadPromotionProducts(): void {
        // this.promotionProducts$ = this.productService.getPromotionProducts();
        // this.promotionProducts$.subscribe((products) => {
        //     this.calculateStats(products);
        // });
    }

    calculateStats(products: any[]): void {
        this.acceptedCount = products.filter(product => product.status === 'approved').length;
        this.rejectedCount = products.filter(product => product.status === 'denied').length;
        this.pendingCount = products.filter(product => product.status !== 'approved' && product.status !== 'denied').length;
    }
}

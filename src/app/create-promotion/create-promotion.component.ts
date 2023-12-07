import { Component } from '@angular/core';
import { PromotionProductService } from "../service/promotion-product/promotion-product.service";
import { ProductService } from "../service/product/product.service";

@Component({
    selector: 'app-create-promotion',
    templateUrl: './create-promotion.component.html',
    styleUrls: ['./create-promotion.component.css']
})
export class CreatePromotionComponent {

    selectedProduct: any;
    percentage: number;
    productUuid: string;
    products: any[] = [];

    constructor(private promotionproductService: PromotionProductService, private  productService: ProductService) {
    }

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(): void {
        this.productService.getProducts().subscribe(
            (data: any[]) => {
                this.products = data;
            },
            (error) => {
                console.error('Error fetching products:', error);
            }
        );
    }

    onSubmit(): void {
        if (this.selectedProduct) {
            this.productUuid = this.selectedProduct;
            this.promotionproductService.createProductPromotion(this.percentage, this.productUuid)
                .subscribe(response => {
                    console.log('Promotion created:', response);
                    // Réinitialiser les champs du formulaire après la création de la promotion
                    this.percentage = null;
                    this.selectedProduct = null;
                }, error => {
                    console.error('Error creating promotion:', error);
                    // Gérez les erreurs ici
                });
        } else {
            console.error('No product selected');
        }
    }


    onProductSelect(event: Event): void {
        const target = event.target as HTMLSelectElement;
        this.selectedProduct = target.value;
    }
}

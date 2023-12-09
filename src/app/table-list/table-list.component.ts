import { Component, OnInit } from "@angular/core";
import { PromotionProductService } from "../service/promotion-product/promotion-product.service";
import { PromotionProduct } from "../models/promotion-product";
import { share } from "rxjs";

@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.css"],
})
export class TableListComponent implements OnInit {
  promotionProducts: PromotionProduct[];
  pages: number[];
  currentPage: number = 0;

  constructor(private productService: PromotionProductService) {}

  ngOnInit(): void {
    this.loadPromotionProducts(this.currentPage);
  }

  acceptProduct(product: PromotionProduct): void {
    console.log("want to update product");
    this.productService.acceptProductPromotion(product.uuid).subscribe({
      next: () => {
        this.loadPromotionProducts(this.currentPage);
      },
      error: (error) => {
        console.error("Error accepting product:", error.message);
      },
    });
  }

  denyProduct(product: PromotionProduct): void {
    console.log("want to update product");
    this.productService.denyProductPromotion(product.uuid).subscribe({
      next: (response) => {
        console.log(response);
        this.loadPromotionProducts(this.currentPage);
      },
      error: (error) => {
        console.error("Error denying product:", error);
      },
    });
  }

  // fetching method, fetching paginated data
  loadPromotionProducts(currentPage): void {
    this.productService.getPromotionProducts(currentPage).subscribe({
      next: (data) => {
        this.promotionProducts = data.content;
        this.pages = new Array(data.totalPages);
        currentPage = data.pageable.pageNumber;
      },
      error: (error) => {
        console.error("Error loading promotion products:", error);
      },
    });
  }

  setCurrentPage(choosenPage: number): void {
    console.log("choosen page" + choosenPage);
    this.currentPage = choosenPage;
    this.loadPromotionProducts(this.currentPage);
  }
  // fetching pages method, triggered when clicking on a navigation button
}

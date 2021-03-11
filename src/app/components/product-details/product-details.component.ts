import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services';
import { browserData, ProductInformation } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  isHandset$: Observable<boolean> = this._utilService.isHandset$;

  productTitle: string;
  productDescription: string
  productSubcategoryLabel: string
  productColor: Array<any>;
  productImageURL: Array<any>;
  productQtyPrice: Array<any>;


  currentCategoryRoute: string;
  currentSubcategorySlug: string;
  currentProductSlug: string;
  currentProductQuantityApplied: string;
  currentProductPriceApplied: string;

  constructor(
    private _route: ActivatedRoute,
    private _utilService: UtilsService
  ) { }

  ngOnInit(): void {

    // get route param values [categoryRoute and subcategorySlug]
    this._route.params.subscribe((params) => {
      this.currentCategoryRoute = params['categoryRoute'];
      this.currentSubcategorySlug = params['subcategorySlug'];
      this.currentProductSlug = params['productSlug'];
    });


    this.setProductDetails(this.currentProductSlug);

  }

  async setProductDetails(productSlug: string) {

    // aync data fetch
    const productData: any = await this.getProductDetails(productSlug);

    // assign product value
    this.productTitle = productData?.title;
    this.productDescription = productData?.description;
    this.productColor = productData?.Color;
    this.productImageURL = productData?.ImageUrl;
    this.productQtyPrice = productData?.QtyPrice;
    this.productSubcategoryLabel = productData?.product_subcategory?.subcategoryLabel;

    this._utilService.sortWeightageMaximum(this.productQtyPrice, 'weightage');

    this.currentProductQuantityApplied = this.productQtyPrice[0]?.qty;
    this.currentProductPriceApplied = this.productQtyPrice[0]?.price;

  }

  quantityValueChanged(event: any) {

    const updatedQuantityValue = event?.value;

    const updatedQtyPriceObject = this.productQtyPrice.find(item => item?.qty === updatedQuantityValue);
    this.currentProductPriceApplied = updatedQtyPriceObject?.price;

  }

  // actual async request
  getProductDetails(productSlug: string) {
    return new Promise((resolve, reject) => {
      // actual http api-call here [async]

      setTimeout(() => {
        const dataPlaceholder = ProductInformation?.products[productSlug];
        resolve(dataPlaceholder);
      }, 1000)

    });
  }

}

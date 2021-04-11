import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UnifiedApiService, UtilsService } from 'src/app/services';
import { browserData, ProductInformation } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  isHandset$: Observable<boolean> = this._utilService.isHandset$;
  isLoading = true;

  productTitle: string;
  productDescription: string
  productSubcategoryLabel: string;
  productQuantityUnitLabel: string;
  productColor: Array<any>;
  productImageURL: Array<any>;
  productQtyPrice: Array<any>;
  similarProducts: Array<any> = [];


  currentCategoryRoute: string;
  currentSubcategorySlug: string;
  currentProductSlug: string;
  currentProductQuantityApplied: string;
  currentProductPriceApplied: string;
  currentProductImageShowcased: string;
  colorOptionExists: boolean;

  whatsAppContactNumber = browserData?.whatsAppDataContent?.whatsAppContactNumber;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _utilService: UtilsService,
    private _unifiedService: UnifiedApiService
  ) {
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {

    // get route param values [categoryRoute and subcategorySlug]
    this._activatedRoute.params.subscribe((params) => {
      this.currentCategoryRoute = params['categoryRoute'];
      this.currentSubcategorySlug = params['subcategorySlug'];
      this.currentProductSlug = params['productSlug'];
    });


    this.setProductDetails(this.currentProductSlug);

  }

  async setProductDetails(productSlug: string) {
    this.isLoading = true;

    // aync data fetch
    const productData: any = await this.getProductDetails(productSlug);


    // @todo: take some decision whether product exist or not [render views accordingly]

    // assign product value
    this.productTitle = productData?.title;
    this.productDescription = productData?.description;
    this.productColor = productData?.Color;
    this.productImageURL = productData?.ImageUrl;
    this.productQtyPrice = productData?.QtyPrice;
    this.productSubcategoryLabel = productData?.product_subcategory?.subcategoryLabel;
    this.productQuantityUnitLabel = productData?.product_subcategory?.quantityUnitLabel || 'piece(s)';
    this.similarProducts = productData?.similar_products;

    this.productQtyPrice = this._utilService.sortWeightageMaximum(this.productQtyPrice, 'weightage');
    this.productImageURL = this._utilService.sortWeightageMaximum(this.productImageURL, 'weightage');

    // @fix later: this arrray[0] will give error if array is undefined/null
    this.currentProductQuantityApplied = this.productQtyPrice[0]?.qty;
    this.currentProductPriceApplied = this.productQtyPrice[0]?.price;

    this.currentProductImageShowcased = this.productImageURL[0]?.imgURL;

    this.colorOptionExists = !!this.productColor?.length;

    this.isLoading = false;
  }

  quantityValueChanged(event: any) {

    this.currentProductQuantityApplied = event?.value;

    const updatedQtyPriceObject = this.productQtyPrice.find(item => item?.qty === this.currentProductQuantityApplied);
    this.currentProductPriceApplied = updatedQtyPriceObject?.price;

  }

  buyNowClicked() {
    const currentURL = location?.href;

    const whatsappBuyNowMessage = `Hi, I'm interested in buying the product '${this.productTitle}' from the '${this.productSubcategoryLabel}' subcategory. Price: ₹${this.currentProductPriceApplied}. Quantity: ${this.currentProductQuantityApplied} ${this.productQuantityUnitLabel}. The reference URL: ${currentURL}`

    window.open(`https://wa.me/${this.whatsAppContactNumber}?text=${whatsappBuyNowMessage}`, "_blank");

  }

  findMoreSimilarProducts(){
    this._router.navigate(['../'], {relativeTo: this._activatedRoute});
  }

  // actual async request
  getProductDetails(productSlug: string) {
    return new Promise((resolve, reject) => {
      // actual http api-call here [async]
      const shouldUseInBrowserData: boolean = !!browserData?.storeInformation?.useInBrowserProductData;

      if (shouldUseInBrowserData) {
        // in-browser data usage
        setTimeout(() => {
          const dataPlaceholder = ProductInformation?.products[productSlug];
          resolve(dataPlaceholder);
        }, 1000)
      } else {
        this._unifiedService.graphqlGetProductDetails(productSlug).subscribe((gqlResponse: any) => {

          if (gqlResponse?.data?.products && gqlResponse?.data?.products?.length > 0) {
            const productData = gqlResponse?.data?.products[0];
            resolve(productData);
          }

          //else
          // @todo: some error condition; handle it later

        }, (error) => {
          // @todo: do a better error handling
          console.log('graphql error[product subcategory]:', error);
        })
      }

    });
  }

}

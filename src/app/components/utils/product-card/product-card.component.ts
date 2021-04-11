import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productDetail: any;

  isHandset$: Observable<boolean> = this._utilService.isHandset$;
  buttonLabel: string = 'Check details'

  productTitle: string;
  productPrice: string;
  productImageURL: string;
  currentCategoryRoute: string;
  currentSubcategorySlug: string;
  activeProductSlug: string;


  constructor(
    private _utilService: UtilsService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.assignVariableData();
  }

  assignVariableData() {

    // get route param values [categoryRoute and subcategorySlug]
    this._route.params.subscribe((params) => {
      this.currentCategoryRoute = params['categoryRoute'];
      this.currentSubcategorySlug = params['subcategorySlug'];
    });

    this.productTitle = this.productDetail?.title;
    this.activeProductSlug = this.productDetail?.productSlug;

    // sort the price-quantity and image url data as per its weightage
    let productDetailQtyPrice = this._utilService.sortWeightageMaximum(this.productDetail?.QtyPrice, 'weightage');
    let productDetailImageUrl = this._utilService.sortWeightageMaximum(this.productDetail?.ImageUrl, 'weightage');

    // price and image data
    this.productPrice = productDetailQtyPrice[0]?.price;
    this.productImageURL = productDetailImageUrl[0]?.imgURL;
  }

  navigateProductDetailsPage() {

    const routeURL = `products/${this.currentCategoryRoute}/${this.currentSubcategorySlug}/${this.activeProductSlug}`
    this._utilService.navigationRoute(routeURL);
  }

}

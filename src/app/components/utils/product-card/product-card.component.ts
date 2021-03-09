import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productDetail: any;

  buttonLabel: string = 'Check details'

  productTitle: string;
  productPrize: string;
  productImageURL: string;

  constructor(
    private _utilService: UtilsService,
  ) { }

  ngOnInit(): void {
    this.assignVariableData();
  }

  assignVariableData() {

    // console.log('productDetail', this.productDetail);
    
    this.productTitle = this.productDetail?.title;

    // sort the price-quantity and image url data as per its weightage
    this._utilService.sortWeightageMaximum(this.productDetail?.QtyPrice, 'weightage');
    this._utilService.sortWeightageMaximum(this.productDetail?.ImageUrl, 'weightage');

    // price and image data 
    this.productPrize = this.productDetail?.QtyPrice[0]?.price;
    this.productImageURL = this.productDetail?.ImageUrl[0]?.imgURL;
  }

  navigateProductDetailsPage() {
    this._utilService.navigationRoute(`products/beads/some-slug/xyz`);
  }

}

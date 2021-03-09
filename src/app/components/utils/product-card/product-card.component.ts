import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.assignVariableData();
  }

  assignVariableData() {

    this.productTitle = this.productDetail?.title;
    
    // price and image data needs to be updated using weightage param
    this.productPrize = this.productDetail?.QtyPrice[0]?.price;
    this.productImageURL = this.productDetail?.ImageUrl[0]?.imgURL;
  }

  navigateProductDetailsPage() {
    this._router.navigate([`/products/beads/some-slug/xyz`]);
  }

}

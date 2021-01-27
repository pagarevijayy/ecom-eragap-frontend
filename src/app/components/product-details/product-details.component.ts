import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  categoryID: string;
  productID: string;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    // subscribe to route param id
    this._route.params.subscribe(params => {
      this.categoryID = params['categoryID'];
      this.productID = params['productID'];

      console.log('productID [productdetails]', this.productID, params);
    });
  }

}

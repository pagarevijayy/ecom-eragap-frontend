import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  isHandset$: Observable<boolean> = this._utilService.isHandset$;

  categoryID: string;
  productID: string;

  constructor(
    private _route: ActivatedRoute,
    private _utilService: UtilsService
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

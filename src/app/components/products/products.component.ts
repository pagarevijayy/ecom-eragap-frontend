import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  currentRouteID: string;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.currentRouteID = params['id'];
      console.log('currentRouteID', this.currentRouteID);
    });
  }

}

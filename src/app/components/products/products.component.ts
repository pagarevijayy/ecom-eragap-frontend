import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyData } from 'src/assets/data'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  currentRouteID: string;
  currentCategory: string = 'Beads'; 
  //pass currentCategory value from menu click [no need to iterate the loop and discover value]
  
  primarySubcategory: string = 'Crystal Beads';
  subcategories: Array<any> = DummyData.subcategories;


  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // subscribe to DummyData

    // subscribe to route param id
    this._route.params.subscribe(params => {
      this.currentRouteID = params['categoryID'];
      console.log('categoryID', this.currentRouteID);
    });

  }

}

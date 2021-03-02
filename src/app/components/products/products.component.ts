import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services';
import { browserData } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isHandset$: Observable<boolean> = this._utilService.isHandset$;
  
  enquiryPrefillMessage: string = `Hi! I wanted to know more about your product and services.
  Can we have a word?`;
  whatsappBtnLabel: string = 'Contact for Business Enquiry';

  currentRouteID: string;
  currentCategory: string = 'Beads';
  //pass currentCategory value from menu click [no need to iterate the loop and discover value]

  primarySubcategory: string = 'Crystal Beads';
  subcategories: Array<any> = browserData.subcategories;


  constructor(
    private _route: ActivatedRoute,
    private _utilService: UtilsService
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

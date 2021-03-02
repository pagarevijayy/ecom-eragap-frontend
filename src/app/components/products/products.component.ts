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
  subcategories: Array<any> = browserData.subcategories;
  
  whatsAppButtonLabelPrimary= browserData?.whatsAppDataContent?.buttonLabelPrimary;
  whatsAppEnquiryTextPrimary= browserData?.whatsAppDataContent?.enquiryTextPrimary;
  whatsAppContactNumber= browserData?.whatsAppDataContent?.whatsAppContactNumber;

  currentRouteID: string;
  currentCategory: string = 'Beads';
  //pass currentCategory value from menu click [no need to iterate the loop and discover value]

  primarySubcategory: string = 'Crystal Beads';


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

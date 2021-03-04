import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StateManagementService, UtilsService } from 'src/app/services';
import { browserData } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isHandset$: Observable<boolean> = this._utilService.isHandset$;

  // @todo: move this stuff to data-service
  whatsAppButtonLabelPrimary = browserData?.whatsAppDataContent?.buttonLabelPrimary;
  whatsAppEnquiryTextPrimary = browserData?.whatsAppDataContent?.enquiryTextPrimary;
  whatsAppContactNumber = browserData?.whatsAppDataContent?.whatsAppContactNumber;

  //pass currentCategory value from menu click [no need to iterate the loop and discover value]
  currentCategoryRoute: string;

  currentCategory: string = 'Beads';
  primarySubcategory: string = 'Crystal Beads';
  subcategories: Array<any> = [
    'Crystal Beads',
    'Bone Beads',
    'Clay Beads'
  ];


  constructor(
    private _route: ActivatedRoute,
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,

  ) { }

  ngOnInit(): void {

    // get name of current category route 
    this._route.params.subscribe(params => this.currentCategoryRoute = params['categoryRoute']);

  }

}

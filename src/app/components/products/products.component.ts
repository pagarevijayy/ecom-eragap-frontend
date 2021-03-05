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

  currentCategoryRoute: string;
  activeSubcategorySlug: string;
  currentCategory: string;
  subcategories: Array<any> = [];


  constructor(
    private _route: ActivatedRoute,
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,

  ) { }

  ngOnInit(): void {

    // get routing details [route and slug]
    this._route.params.subscribe((params) => {
      this.currentCategoryRoute = params['categoryRoute'];
      this.activeSubcategorySlug = params['subcategorySlug'];
    });

    // categoryInformation
    this._stateManagementService.itemCategoryClickedBroadcast$.subscribe((data) => {
      this.currentCategory = data?.categoryLabel;

      //@todo: also pass slug info
      this.subcategories = data?.product_subcategories.map(element => element.subcategoryLabel);
    });

  }

}

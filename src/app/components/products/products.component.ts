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
  currentCategoryLabel: string;
  currentSubcategoryInfo: Array<any> = [];

  subcategories: Array<any> = [];


  constructor(
    private _route: ActivatedRoute,
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,
  ) { }

  ngOnInit(): void {
    console.log('products oninit');

    // get routing details [route and slug]
    this._route.params.subscribe((params) => {
      this.currentCategoryRoute = params['categoryRoute'];
      this.activeSubcategorySlug = params['subcategorySlug'];
    });

    // categoryInformation
    this._stateManagementService.itemCategoryClickedBroadcast$.subscribe((categoryInformation) => {
      // flush existing data in variables before assigning values
      this.currentCategoryLabel = null;
      this.currentSubcategoryInfo = [];

      console.log('categoryInformation', categoryInformation);

      // assigning category label
      this.currentCategoryLabel = categoryInformation?.categoryLabel;

      // console.log('currentCategoryLabel', this.currentCategoryLabel);


      // creating currentSubcategoryInfo [to be used in UI]
      categoryInformation?.product_subcategories?.forEach(element => {
        
        // create an temporary object and push onto currentSubcategoryInfo
        let subcategoryLabel = element?.subcategoryLabel;
        let subcategorySlug = element?.subcategorySlug;
        let subcategoryWeightage = element?.weightage;

        let subcategoryHolder = { subcategoryLabel, subcategorySlug, subcategoryWeightage };

        this.currentSubcategoryInfo.push(subcategoryHolder)
      });

      // console.log('currentSubcategoryInfo', this.currentSubcategoryInfo);
    });


  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StateManagementService, UtilsService } from 'src/app/services';
import { browserData } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private rxSubscription: Subscription = new Subscription();

  isHandset$: Observable<boolean> = this._utilService.isHandset$;

  // @todo: move this stuff to data-service
  whatsAppButtonLabelPrimary = browserData?.whatsAppDataContent?.buttonLabelPrimary;
  whatsAppEnquiryTextPrimary = browserData?.whatsAppDataContent?.enquiryTextPrimary;
  whatsAppContactNumber = browserData?.whatsAppDataContent?.whatsAppContactNumber;

  currentCategoryRoute: string;
  currentCategoryLabel: string;
  currentSubcategoryInfo: Array<any> = [];
  currentSubcategoryValue: string;
  activeSubcategorySlug: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,
  ) { }

  ngOnInit(): void {

    // get routing details [route and slug]
    this._route.params.subscribe((params) => {
      this.currentCategoryRoute = params['categoryRoute'];
      this.activeSubcategorySlug = params['subcategorySlug'];

      // set default subcategory value
      this.currentSubcategoryValue = this.activeSubcategorySlug;
    });

    // add a new rxjs subscription. || reason: subcribe to categoryInformation
    this.rxSubscription.add(
      this._stateManagementService.itemCategoryClickedBroadcast$.subscribe((categoryInformation) => {
        // flush existing data in variables before assigning values
        this.currentCategoryLabel = null;
        this.currentSubcategoryInfo = [];

        // console.log('categoryInformation', categoryInformation);

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
      })
    );

  }

  subcategoryValueChanged(event: any) {
    // assign new subcategory value
    this.currentSubcategoryValue = event?.value;

    // change the route parameter [in-sync with the drop-down value]
    const routeCommand = (!!this.activeSubcategorySlug) ? `../${this.currentSubcategoryValue}` : `${this.currentSubcategoryValue}`;

    const updatedRoute = this._router.createUrlTree([routeCommand], { relativeTo: this._route }).toString();

    this._router.navigateByUrl(updatedRoute);
  }

  ngOnDestroy(): void {
    this.rxSubscription.unsubscribe();
  }

}

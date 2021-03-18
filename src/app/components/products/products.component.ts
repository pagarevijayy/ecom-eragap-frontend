import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StateManagementService, UnifiedApiService, UtilsService } from 'src/app/services';
import { browserData, ProductInformation } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private rxSubscription: Subscription = new Subscription();

  isHandset$: Observable<boolean> = this._utilService.isHandset$;
  isLoading = true;
  productsAvailable = false;

  // @todo: move this stuff to data-service
  whatsAppButtonLabelPrimary = browserData?.whatsAppDataContent?.buttonLabelPrimary;
  whatsAppEnquiryTextPrimary = browserData?.whatsAppDataContent?.enquiryTextPrimary;
  whatsAppContactNumber = browserData?.whatsAppDataContent?.whatsAppContactNumber;

  currentCategoryRoute: string;
  currentCategoryLabel: string;
  currentSubcategoryInfo: Array<any> = [];
  currentSubcategoryValue: string;
  activeSubcategorySlug: string;
  productsCatlogue: Array<any> = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,
    private _unifiedService: UnifiedApiService
  ) { }

  ngOnInit(): void {

    // get route param values [categoryRoute and subcategorySlug]
    this._route.params.subscribe((params) => {
      this.currentCategoryRoute = params['categoryRoute'];
      this.activeSubcategorySlug = params['subcategorySlug'];
    });

    // subcribe to categoryInformation
    this.rxSubscription.add(
      this._stateManagementService.itemCategoryClickedBroadcast$.subscribe((categoryInformation) => {
        // flush existing data in variables before assigning values
        this.currentCategoryLabel = null;
        this.currentSubcategoryInfo = [];

        // assigning category label
        this.currentCategoryLabel = categoryInformation?.categoryLabel;


        // creating currentSubcategoryInfo [to be used in UI]
        categoryInformation?.product_subcategories?.forEach(element => {

          // create an temporary object and push onto currentSubcategoryInfo
          let subcategoryLabel = element?.subcategoryLabel;
          let subcategorySlug = element?.subcategorySlug;
          let subcategoryWeightage = element?.weightage;

          let subcategoryHolder = { subcategoryLabel, subcategorySlug, subcategoryWeightage };

          this.currentSubcategoryInfo.push(subcategoryHolder)
        });

      })
    );


    // sort the subcategory data as per its weightage
    this.currentSubcategoryInfo = this._utilService.sortWeightageMaximum(this.currentSubcategoryInfo, 'subcategoryWeightage');

    // assign default drop-down value [available slug or max weight subcategory]
    (!!this.activeSubcategorySlug) ? this.currentSubcategoryValue = this.activeSubcategorySlug : this.currentSubcategoryValue = this.currentSubcategoryInfo[0]?.subcategorySlug;

    // sync routing with assigned drop-drop value
    this.updateRouteParams(this.currentSubcategoryValue);

    // get the subcategory products list
    this.updateSubcategoryProductsList(this.currentSubcategoryValue);


  }

  subcategoryValueChanged(event: any) {
    // assign new subcategory value
    this.currentSubcategoryValue = event?.value;

    // change the route parameter [in-sync with the drop-down value]
    this.updateRouteParams(this.currentSubcategoryValue);

    // get the subcategory products list
    this.updateSubcategoryProductsList(this.currentSubcategoryValue);
  }

  async updateSubcategoryProductsList(subcategorySlug: string) {

    // aync data fetch
    this.isLoading = true;
    this.productsAvailable = false;

    const subcategoryData: any = await this.getSubcategoryProductsList(subcategorySlug);
    this.productsCatlogue = subcategoryData?.products;


    // view manipulation
    if (this.productsCatlogue?.length > 0) {
      // products are available - generate products catlogue view
      this.isLoading = false;
      this.productsAvailable = true;
    } else if (this.productsCatlogue?.length === 0) {
      // products unavailable - generate no product available view
      this.isLoading = false;
      this.productsAvailable = false;
    }


  }

  // actual async request
  getSubcategoryProductsList(subcategorySlug: string) {
    return new Promise((resolve, reject) => {
      // actual http api-call here [async]
      const shouldUseInBrowserData: boolean = !!browserData?.storeInformation?.useInBrowserProductData;

      if (shouldUseInBrowserData) {
        // in-browser data usage
        setTimeout(() => {
          const dataPlaceholder = ProductInformation?.productSubcategories[subcategorySlug];
          resolve(dataPlaceholder);
        }, 1000)

      } else {
        this._unifiedService.graphqlGetSubcategoryData(subcategorySlug).subscribe((gqlResponse: any) => {

          if (gqlResponse?.data?.productSubcategories && gqlResponse?.data?.productSubcategories?.length > 0) {
            const subcategoryData = gqlResponse?.data?.productSubcategories[0];
            resolve(subcategoryData);
          }
          //else 
          // @todo: some error condition; handle it later

        }, (error) => {
          // @todo: do a better error handling
          console.log('graphql error[product subcategory]:', error);
        })
      }

    });
  }

  updateRouteParams(subcategorySlug: string) {
    const routeCommand = (!!this.activeSubcategorySlug) ? `../${subcategorySlug}` : `${subcategorySlug}`;

    const updatedRoute = this._router.createUrlTree([routeCommand], { relativeTo: this._route }).toString();

    this._router.navigateByUrl(updatedRoute);
  }

  ngOnDestroy(): void {
    this.rxSubscription.unsubscribe();
  }

}

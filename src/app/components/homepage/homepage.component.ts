import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { StateManagementService, UtilsService } from 'src/app/services';

import { browserData } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // variable declaration and assignment
  homepageItems: any;
  isHandset$: Observable<boolean> = this._utilService.isHandset$;
  isLoading = true;

  // @todo: move this kinda stuff into data-service
  carouselLargeScreen: Array<any> = browserData.carouselLargeScreen;
  carouselSmallScreen: Array<any> = browserData.carouselSmallScreen;

  whatsAppButtonLabelSecondary = browserData?.whatsAppDataContent?.buttonLabelSecondary;
  whatsAppEnquiryTextPrimary = browserData?.whatsAppDataContent?.enquiryTextPrimary;
  whatsAppContactNumber = browserData?.whatsAppDataContent?.whatsAppContactNumber;

  storeEmailAddress = browserData?.storeInformation?.emailAddress;
  storeContactNumber = browserData?.storeInformation?.contactNumber;
  storeAddressLineOne = browserData?.storeInformation?.addressLineOne;
  storeAddressLineTwo = browserData?.storeInformation?.addressLineTwo;
  storeGoogleMapLocationURL = browserData?.storeInformation?.googleMapsLocationURL;
  storeFacebookURL = browserData?.storeInformation?.socialFacebook;
  storeInstagramURL = browserData?.storeInformation?.socialInstagram;
  storeTwitterURL = browserData?.storeInformation?.socialTwitter;


  constructor(
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,
    public _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    // get homepage data
    this._stateManagementService.homepageItemsBroadcast$.subscribe((data) => {
      this.homepageItems = data;

      if (!!this.homepageItems?.length) {
        this.isLoading = false;
      }
    });
  }

  subcategoryClicked(categoryInformation: any, subcategoryData: any) {

    // pass-on category details via BS [to products page]
    this._stateManagementService.updateItemCategoryClicked(categoryInformation, 'lastItemCategoryClicked');

    //navigate to products page
    const categoryRoute = categoryInformation?.route;
    const subcategorySlug = subcategoryData?.subcategorySlug;
    const destinationRoute = `products/${categoryRoute}/${subcategorySlug}`

    this._utilService.navigationRoute(destinationRoute);
  }

  mailMe() {
    window.open(`mailto:${this.storeEmailAddress}`, "_blank");
  }

  callMe() {
    window.open(`tel:${this.storeContactNumber}`, "_blank");
  }

  socialMediaCTA(platform: string) {
    switch (platform) {
      case 'facebook':
        window.open(`${this.storeFacebookURL}`, "_blank");
        break;

      case 'instagram':
        window.open(`${this.storeInstagramURL}`, "_blank");
        break;
      case 'twitter':
        window.open(`${this.storeTwitterURL}`, "_blank");
        break;

      default:
        break;
    }
  }

}


/* layouts meta:
    1. attractive page layout: [view 4-1-2-3 repeat]
        - large screen
            4 layout - min. 6 cards
            1 layout - min. 3 cards
            2 layout - min. 2 cards
            3 layout - min. 3 cards

        - mobile screen
            4 layout - min. 4 cards
            1 layout - min. 2 cards
            2 layout - min. 2 cards
            3 layout - min. 3 cards


    2. --- for only one/no sub-category - directly show products [how? -- solve]
    3. Atleast have 2 subcategories
*/
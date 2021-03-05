import { Component, OnInit } from '@angular/core';
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

  sectionAHeading: string = 'Natural Beads Collection';
  sectionBHeading: string = 'Pendants Collection';
  sectionCHeading: string = 'Jewellery component';


  showcaseImages = [
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-4_IMTJrTZIW.webp'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-5_Bmvc6No5S.jpg'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-1_tbE8TJhRa.webp'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-2_kMPTyfcDi.jpg'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-6_N3T0c8dM9.jpg'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-3_rOFYI3OS2.jpg'
    }
  ];

  constructor(
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,
  ) { }

  ngOnInit(): void {
    // get homepage data
    this._stateManagementService.homepageItemsBroadcast$.subscribe((data) => {
      this.homepageItems = data;
      // console.log('from homepage component[homepageItems]', this.homepageItems);
    });
  }
}


/* layouts meta:
    1. attractive page layout: keep the first section with more than 4 cards [even number items]
    2. --- for only one/no sub-category - directly show products [how? -- solve]
    3. Atleast have 2 subcategories
*/
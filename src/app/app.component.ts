import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';
import { browserData, ProductInformation } from 'src/assets/data/inbrowser-data'
import { StateManagementService, UnifiedApiService, UtilsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  homepageItems: any;

  footerText = this.getProjectFooterText();

  favIcon: HTMLLinkElement = document.querySelector('#appIcon');

  constructor(
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,
    private _titleService: Title,
    private _unifiedService: UnifiedApiService,
    private _updates: SwUpdate
  ) {
    //check if the code has an update and force trigger the new one.
    this._updates.available.subscribe(event => {
      if (!!event) {
        this._updates.activateUpdate().then(() => window.location.assign(window.location.origin));
      }
    });
  }

  ngOnInit(): void {
    // homepage data
    this.setHomepageData();

    //set index page title
    this.setIndexHtmlHeaderElements();
  }

  async setHomepageData() {
    this.homepageItems = await this.getHomepageData();

    // sort the category data as per its weightage
    this.homepageItems = this._utilService.sortWeightageMaximum(this.homepageItems, 'weightage');

    // assign the data to a BS [also store in session storage]
    this._stateManagementService.updateHomepageItems(this.homepageItems, 'homepageItems');

  }

  // actual async request
  getHomepageData() {
    return new Promise((resolve, reject) => {
      // actual http api-call here [async]
      const shouldUseInBrowserData: boolean = !!browserData?.storeInformation?.useInBrowserProductData;

      if (shouldUseInBrowserData) {
        // In-browser data:
        setTimeout(() => {
          const dataPlaceholder = ProductInformation?.productCategories;
          resolve(dataPlaceholder);
        }, 1000);

      } else {
        this._unifiedService.graphqlGetHomepageData().subscribe((gqlResponse: any) => {

          if (gqlResponse?.data?.productCategories && gqlResponse?.data?.productCategories?.length > 0) {
            const categoryData = gqlResponse?.data?.productCategories;
            resolve(categoryData);
          }
          //else 
          // @todo: some error condition; handle it later

        }, (error) => {
          // @todo: do a better error handling
          console.log('graphql error [homepage]:', error);
        });

      }

    });
  }

  getProjectFooterText() {
    // @todo: move this kinda stuff into data service.

    const currentYear = new Date().getFullYear();
    const copyrightSymbol = browserData?.footerContent?.copyright;
    const copyrightClaimName = browserData?.footerContent?.claimName;
    const copyrightRightReserved = browserData?.footerContent?.allRightsReserved;

    return `${copyrightSymbol} ${currentYear} ${copyrightClaimName} ${copyrightRightReserved}`;
  }

  setIndexHtmlHeaderElements() {

    // set title
    const newTitle = browserData?.storeInformation?.storeName;
    this._titleService.setTitle(newTitle);

    //set favicon [use either url or emoji svg]
    const faviconURL = browserData?.storeInformation?.faviconURL;
    this.favIcon.href = faviconURL;
  }

  poweredByEragapTech() {
    window.open(`https://twitter.com/pagarevijayy`, "_blank");
  }
}

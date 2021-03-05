import { Component, OnInit } from '@angular/core';
import { browserData } from 'src/assets/data/inbrowser-data'
import { StateManagementService, UtilsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  homepageItems: any;

  footerText = this.getProjectFooterText();

  constructor(
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,
  ) { }

  ngOnInit(): void {
    // homepage data
    this.setHomepageData();
  }

  async setHomepageData() {
    this.homepageItems = await this.getHomepageData();
    console.log('app component [data received via. api]:', this.homepageItems);

    // assign the data to a BS 
    this._stateManagementService.updateHomepageItems(this.homepageItems)

    // store in session storage
    this._utilService.setDataIntoSessionStorage(this.homepageItems, 'homepageItems');
  }

  // actual async request
  getHomepageData() {
    return new Promise((resolve, reject) => {
      // actual http api-call here [async]

      setTimeout(() => {
        const dataPlaceholder = browserData?.productCategories;
        resolve(dataPlaceholder);
      }, 1000)

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
}

// responsibilities:
// 1. set footer text
// 2. get homepage data
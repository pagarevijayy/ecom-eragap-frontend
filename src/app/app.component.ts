import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { browserData, ProductInformation } from 'src/assets/data/inbrowser-data'
import { StateManagementService, UtilsService } from './services';

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
    private _titleService: Title
  ) { }

  ngOnInit(): void {
    // homepage data
    this.setHomepageData();

    //set index page title
    this.setIndexHtmlHeaderElements();
  }

  async setHomepageData() {
    this.homepageItems = await this.getHomepageData();
    // console.log('app component [data received via. api]:', this.homepageItems);

    // assign the data to a BS [also store in session storage]
    this._stateManagementService.updateHomepageItems(this.homepageItems, 'homepageItems');
    
  }

  // actual async request
  getHomepageData() {
    return new Promise((resolve, reject) => {
      // actual http api-call here [async]

      setTimeout(() => {
        const dataPlaceholder = ProductInformation?.productCategories;
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

  setIndexHtmlHeaderElements() {
    
    // set title
    const newTitle = browserData?.storeInformation?.storeName;
    this._titleService.setTitle(newTitle);

    //set favicon [use either url or emoji svg]
    const faviconURL =  browserData?.storeInformation?.faviconURL;
    this.favIcon.href = faviconURL;
  }
}

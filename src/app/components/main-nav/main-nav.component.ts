import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StateManagementService, UtilsService } from 'src/app/services';
import { browserData } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent implements OnInit {
  @ViewChild('drawer') sideNavDrawer: MatSidenav;

  homepageItems: any
  isHandset$: Observable<boolean> = this._utilService.isHandset$;


  // @todo: move this stuff to data-service
  storeName: string = browserData?.storeInformation?.storeName;
  copyrightText = browserData?.footerContent?.copyrightText;

  whatsAppButtonLabelPrimary = browserData?.whatsAppDataContent?.buttonLabelPrimary;
  whatsAppEnquiryTextPrimary = browserData?.whatsAppDataContent?.enquiryTextPrimary;
  whatsAppContactNumber = browserData?.whatsAppDataContent?.whatsAppContactNumber;

  constructor(
    private _utilService: UtilsService,
    private _stateManagementService: StateManagementService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // get homepage data
    this._stateManagementService.homepageItemsBroadcast$.subscribe((data) => {
      this.homepageItems = data;
      // console.log('from main-nav component[homepageItems]', this.homepageItems);
    });
  }

  navigationRoute(navigateToProductsPage: boolean, routeName: string) {
    if (navigateToProductsPage) {
      // navigate to products page and close the menu drawer
      this._router.navigate([`/product/${routeName}`]);
      this.sideNavDrawer.close();
      return
    }

    // navigate directly to the specified route.
    this._router.navigate([`${routeName}`]);
  }

}
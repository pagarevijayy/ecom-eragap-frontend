import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UtilsService } from 'src/app/services';
import { browserData } from 'src/assets/inbrowser-data'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {
  @ViewChild('drawer') sideNavDrawer: MatSidenav;

  storeName: string = 'SSK Beads';
  menuItems: Array<any> = browserData.categories;

  enquiryPrefillMessage: string = `Hi! I wanted to know more about your product and services.
                                 Can we have a word?`;
  whatsappBtnLabel: string = 'Contact for Business Enquiry';
  copyright_text: string = '© Shree Sai Krupa Beads';

  isHandset$: Observable<boolean> = this._utilService.isHandset$;

  constructor(
    private _utilService: UtilsService,
    private _router: Router
  ) { }

  redirectRoute(isCategory: boolean, routeName: string) {
    if (isCategory) {
      this._router.navigate([`/product/${routeName}`]);
      // close side nav drawer after routing
      this.sideNavDrawer.close();
    } else {
      this._router.navigate([`${routeName}`]);
    }

  }

}

// todo -
// 1. get menu list via API [categories]
// 2. latest arrivals -- new api
// 3. toolbar menu items for large screen

// bug -
// 1. [DRAWER RESPONSIVENESS] if drawer is opened in handset mode and stretched to larger screens drawer must close 
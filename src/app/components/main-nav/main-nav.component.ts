import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {

  storeName: string = 'SSK Beads';
  menuItems: Array<any> = [
    {
      label: 'Beads',
      route: 'bead'
    },
    {
      label: 'Pendants',
      route: 'pendant'
    },
    {
      label: 'Jewellery',
      route: 'jewellery'
    },
    {
      label: 'Tools & Kit',
      route: 'tools-and-kit'
    }
  ];
  
  enquiryPrefillMessage: string = `Hi! I wanted to know more about your product and services.
                                 Can we have a word?`;
  whatsappBtnLabel: string = 'Contact for Business Enquiry';
  copyright_text: string = '© Shree Sai Krupa Beads';

  isHandset$: Observable<boolean> = this._utilService.isHandset$;

  constructor(
    private _utilService: UtilsService,
    private _router: Router
  ) { }

  redirectRoute(routeName: string) {
    this._router.navigate([`/product/${routeName}`]);
  }

}

// todo -
// 1. get menu list via API [categories]
// 2. latest arrivals -- new api
// 3. toolbar menu items for large screen

// bug -
// 1. [DRAWER RESPONSIVENESS] if drawer is opened in handset mode and stretched to larger screens drawer must close 
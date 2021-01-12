import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {

  storeName: string = 'SSK Beads';
  menuItems: Array<string> = ['Beads', 'Pendants', 'Jewellery', 'Tools & Kit'];
  enquiryPrefillMessage: string = `Hi! I wanted to know more about your product and services.
                                 Can we have a word?`;
  whatsappBtnLabel: string = 'Contact for Business Enquiry';
  copyright_text: string = '© Shree Sai Krupa Beads';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}

// todo -
// 1. get menu list via API [categories]
// 2. latest arrivals -- new api
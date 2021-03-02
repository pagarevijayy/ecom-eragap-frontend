import { Component } from '@angular/core';
import { browserData } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentYear = new Date().getFullYear();
  copyrightSymbol= browserData?.footerContent?.copyright;
  copyrightClaimName= browserData?.footerContent?.claimName;
  copyrightRightReserved= browserData?.footerContent?.allRightsReserved;


  footerText = `${this.copyrightSymbol} ${this.currentYear} ${this.copyrightClaimName} ${this.copyrightRightReserved}`;
}

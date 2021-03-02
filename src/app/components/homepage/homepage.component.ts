import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services';

import { browserData } from 'src/assets/data/inbrowser-data'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // variable declaration and assignment
  isHandset$: Observable<boolean> = this._utilService.isHandset$;

  carouselLargeScreen: Array<any> = browserData.carouselLargeScreen;
  carouselSmallScreen: Array<any> = browserData.carouselSmallScreen;


  sectionAHeading: string = 'Natural Beads Collection';
  sectionBHeading: string = 'Pendants Collection';
  sectionCHeading: string = 'Jewellery component';


  showcaseImages = [
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-demo-project/prod-6_N3T0c8dM9.jpg'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-demo-project/prod-5_Bmvc6No5S.jpg'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-demo-project/product-4_IMTJrTZIW.webp'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-demo-project/product-3_rOFYI3OS2.jpg'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-demo-project/product-1_tbE8TJhRa.webp'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-demo-project/product-2_kMPTyfcDi.jpg'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-demo-project/prod-5_Bmvc6No5S.jpg'
    },
    {
      name: 'image identifier',
      url: 'https://ik.imagekit.io/pagarevijayytech/ecom-demo-project/product-4_IMTJrTZIW.webp'
    },
  ];

  constructor(private _utilService: UtilsService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  sectionAHeading: string = 'Natural Beads Collection';
  sectionBHeading: string = 'Pendants Collection';
  sectionCHeading: string = 'Jewellery component';

  transformationLayoutOne = [
    { width: "100vw" }
  ];

  lqip = { active: true, quality: 1 };

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

  isHandset$: Observable<boolean> = this._utilService.isHandset$;


  constructor(private _utilService: UtilsService) { }

  ngOnInit(): void {
  }

}

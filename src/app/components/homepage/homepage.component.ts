import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  sectionAHeading:string = 'Natural Beads Collection';
  sectionBHeading:string = 'Pendants Collection';
  sectionCHeading:string = 'Jewellery component';

  isHandset$: Observable<boolean> = this._utilService.isHandset$;


  constructor(private _utilService: UtilsService) { }

  ngOnInit(): void {
  }

}

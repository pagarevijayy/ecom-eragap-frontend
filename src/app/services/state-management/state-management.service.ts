import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  private homepageItems = new BehaviorSubject<any>(this.setHomepageItems());
  homepageItemsBroadcast$ = this.homepageItems.asObservable();

  private itemCategoryClicked = new BehaviorSubject<any>(null);
  itemCategoryClickedBroadcast$ = this.itemCategoryClicked.asObservable();


  constructor(
    private _utilService: UtilsService,
  ) { }

  setHomepageItems() {
    const homepageDataSessionStorage = this._utilService.getDataFromSessionStorage('homepageItems');
    return homepageDataSessionStorage;
  }

  updateHomepageItems(data: any) {
    this.homepageItems.next(data);
  }

  updateItemCategoryClicked(data: any) {
    this.itemCategoryClicked.next(data);
  }

}

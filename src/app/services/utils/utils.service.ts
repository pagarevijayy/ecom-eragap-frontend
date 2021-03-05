import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  // check whether device is handset or not
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  // encrypt and set data into session storage
  setDataIntoSessionStorage(data: any, keyLabel: string) {
    // @todo: edge case error handling
    const stringifiedData = JSON.stringify(data);

    const encryptedData = btoa(stringifiedData);

    sessionStorage.setItem(keyLabel, encryptedData);
  }

  // get data from session storage and decrypt
  getDataFromSessionStorage(keyLabel: string) {
    const encryptedData = sessionStorage.getItem(keyLabel);

    if (!!encryptedData) {
      const decryptedData = atob(encryptedData);
      const parsedOriginalData = JSON.parse(decryptedData);
      return parsedOriginalData;
    }

    return null;
  }

}

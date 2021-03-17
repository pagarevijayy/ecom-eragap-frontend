import gql from "graphql-tag";
import { Injectable } from '@angular/core';
import { BaseProviderService } from '../base-provider/base-provider.service';


@Injectable({
  providedIn: 'root'
})
export class UnifiedApiService {

  // REST and GraphQL backend server calls for data using base-provider

  constructor(
    private _baseProviderService: BaseProviderService
  ) { }

  graphqlGetHomepageData() {
    const queryObject = {
      query: gql`
      {
        productCategories {
          categoryLabel
          route
          displayTitle
          weightage
          product_subcategories{
            subcategoryLabel
            displayPictureUrl
            subcategorySlug
            weightage
          }
        }
      }`
    }

    return this._baseProviderService.graphqlRequest(queryObject)
  }
}

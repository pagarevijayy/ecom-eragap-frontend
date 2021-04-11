import gql from "graphql-tag";
import { Injectable } from '@angular/core';
import { BaseProviderService } from '../base-provider/base-provider.service';


@Injectable({
  providedIn: 'root'
})
export class UnifiedApiService {

  // REST and GraphQL backend server calls for data using base-provider
  // Currently going live only with graphQL

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

  graphqlGetSubcategoryData(subcategorySlug: string) {
    const queryObject = {
      query: gql`
      {
        productSubcategories(
            where: { subcategorySlug: "${subcategorySlug}" }
            ){
          subcategoryLabel
          subcategorySlug
          displayPictureUrl
          description
          weightage
          quantityUnitLabel
          products{
            title
            description
            productSlug
            QtyPrice{
              qty
              price
              weightage
            }
            Color{
              colorTitle
              colorCode
            }
            ImageUrl{
              imgURL
              weightage
              description
            }
          }
        }
      }`
    }

    return this._baseProviderService.graphqlRequest(queryObject)
  }

  graphqlGetProductDetails(productSlug: string) {
    const queryObject = {
      query: gql`
      {
        products (
            where: { productSlug: "${productSlug}" }
        ){
          title
          description
          rating
          productSlug
          product_subcategory{
            subcategoryLabel
            quantityUnitLabel
          }
          similar_products{
            title
            description
            productSlug
            QtyPrice{
                qty
                price
                weightage
            }
            Color{
                colorTitle
                colorCode
            }
            ImageUrl{
                imgURL
                weightage
                description
            }
          }
          QtyPrice{
            qty
            price
            weightage
          }
          Color{
            colorTitle
            colorCode
          }
          ImageUrl{
            imgURL
            weightage
            description
          }
        }
    }`
    }

    return this._baseProviderService.graphqlRequest(queryObject)
  }


}

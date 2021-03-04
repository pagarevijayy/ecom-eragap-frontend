import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  //products page with a given category
  { path: 'product/:categoryRoute', component: ProductsComponent },
  //products page with a given category and subcategory
  { path: 'product/:categoryRoute/:subcategorySlug', component: ProductsComponent },
  //product details page
  { path: 'product/:categoryRoute/:subcategorySlug/:productSlug', component: ProductDetailsComponent },

  // error cases [streamline later]
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home-component`
  { path: '**', component: HomepageComponent },  // Wildcard route ideally for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

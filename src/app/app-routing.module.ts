import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'product/:id', component: ProductsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home-component`
  { path: '**', component: HomepageComponent },  // Wildcard route ideally for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

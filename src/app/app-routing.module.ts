import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {ServicesComponent} from './Components/services/services.component';
import {ECommerceComponent} from './Components/e-commerce/e-commerce.component';
import {AboutusComponent} from './Components/aboutus/aboutus.component';
import {BlogComponent} from './Components/blog/blog.component';
import {ContactComponent} from './Components/contact/contact.component';
import {PortfolioComponent} from './Components/portfolio/portfolio.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'e-commerce', component: ECommerceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

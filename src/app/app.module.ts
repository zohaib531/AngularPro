import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';
import { ECommerceComponent } from './Components/e-commerce/e-commerce.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    ECommerceComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    AboutusComponent,
    SidebarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

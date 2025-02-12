import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HowTooComponent } from './how-too/how-too.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { PricingComponent } from './pricing/pricing.component';
import { MoreFeatComponent } from './more-feat/more-feat.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HowTooComponent,
    FeaturesComponent,
    FeaturedProductsComponent,
    PricingComponent,
    MoreFeatComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    HttpClientModule,

  ],
  exports:[
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

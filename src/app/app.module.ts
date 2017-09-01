import '../assets/google/platform.js';
/**
 * @Angular and other libraries imported.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {ToastModule, ToastsManager} from 'ng2-toastr/ng2-toastr';
import { Angular2SocialLoginModule } from "angular2-social-login";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/**
 * @Components imported
 */
import { AppComponent } from './app.component';
import { HomepagenotificationsetupComponent } from './homepagenotificationsetup/homepagenotificationsetup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductionrequestsComponent } from './productionrequests/productionrequests.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { HeaderComponent } from './header/header.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { CounterComponent } from './counter/counter.component';

/**
 * @Services imported
 */
// import { LoginService } from './service/login.service';

const routes = [
  { path: '', name: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', name: 'login', component: LoginComponent},
  { path: 'fooditem', name: 'fooditem', component: FooditemsComponent},
  { path: 'home', name: 'home', component: HomepagenotificationsetupComponent },
  { path: 'productionRequests', name: 'productionRequests', component: ProductionrequestsComponent },
  { path: '**', component: PagenotfoundComponent }
];

const socialLoginProviders = {
  "google": {
    "clientId": "807893799513-pgthruo7ct7uksbaqdk8tlvodndo68ik.apps.googleusercontent.com"
  }
  // "facebook": {
  //   "clientId": "155228958352554",
  //   "apiVersion": "v2.9", //like v2.4,
  //   "appId"      : '155228958352554'
  // }
};
@NgModule({
  declarations: [
    AppComponent,
    ProductionrequestsComponent,
    HomepagenotificationsetupComponent,
    PagenotfoundComponent,
    SidebarComponent,
    LoginComponent,
    FooditemsComponent,
    HeaderComponent,
    ItemlistComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    Angular2SocialLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(socialLoginProviders);

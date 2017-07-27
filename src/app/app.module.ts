import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

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

const routes = [
  { path: '', name: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', name: 'login', component: LoginComponent},
  { path: 'fooditem', name: 'fooditem', component: FooditemsComponent},
  { path: 'home', name: 'home', component: HomepagenotificationsetupComponent },
  { path: 'productionRequests', name: 'productionRequests', component: ProductionrequestsComponent },
  { path: '**', component: PagenotfoundComponent }
];

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

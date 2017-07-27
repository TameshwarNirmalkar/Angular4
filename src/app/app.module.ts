import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepagenotificationsetupComponent } from './homepagenotificationsetup/homepagenotificationsetup.component';
import { ItemlistService } from './itemlist.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductionrequestsComponent } from './productionrequests/productionrequests.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes = [
  { path: '', name: '', redirectTo: 'home', pathMatch: 'full' },
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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

const SIDEBARS = [{
  label: "Homepage Notification Setup",
  routes: "home"
},{
  label: "Masterpass Production Requests",
  routes: "productionRequests"
}];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebars = SIDEBARS;
  constructor() { }

  ngOnInit() {
  }

}

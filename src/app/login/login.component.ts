import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from "angular2-social-login";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as _ from "lodash";
import 'rxjs/add/operator/catch';

import {ValidateUser} from './validateuser.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ValidateUser]
})
export class LoginComponent implements OnInit {
  public sub:any;
  counterConsumer:Object = null;
  constructor(
    private _titleService: Title,
    private router: Router,
    private _socialLoginService: AuthService,
    private toastr: ToastsManager,
    vRef: ViewContainerRef,
    private _vldUser: ValidateUser
  ){
    _titleService.setTitle('Mastercard || Login');
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
  }

  signIn(provider:string){
    this._socialLoginService.login(provider).subscribe(
      data => this._vldUser.validateUser(data),
      error => this._vldUser.validateUser(error)
    );
  }
 
  logout(){
    this._socialLoginService.logout().subscribe(
      (data)=>{
        // this.user = data;
        this.router.navigate(['login']);
      }
    )
  }

}

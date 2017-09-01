import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
@Injectable()
export class ValidateUser {
    constructor(private toastr: ToastsManager,private router: Router){}

    validateUser(data:Object){
        let validEmail = true;//_.some(this.counterConsumer, {"email": data['email']});
        if(validEmail && data){
          // this.user =  data;
          // let navextras: NavigationExtras = {
          //   queryParams: {"ownerId":"2", "userData": JSON.stringify(data)}
          // };
            // this._authenticationServices.setUser(data);
          this.toastr.success('Successful login.', 'Success').then(() => {
            setTimeout(() => {
              this.router.navigate(['fooditem']);
            },10);
          });
          
          
        }else{
          this.toastr.error('You are not whitlisng user.', 'Error').then(() => {
            setTimeout(() => {
              this.router.navigate(['login']);
            },10);
          });
          
        }
    
    }
}


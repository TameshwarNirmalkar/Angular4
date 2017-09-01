import { Injectable } from '@angular/core';
// import { AuthService } from "angular2-social-login";
// import * as _ from "lodash";
// import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class LoginService {
//   // private _socialLoginService: AuthService;
//   // private router: Router;
  
//   private counterConsumer:Object = null;

//   constructor(private _socialLoginService: AuthService, private router: Router, private toastr: ToastsManager) { }

//   login(provider:string){
//     this._socialLoginService.login(provider).subscribe((data) => {
//         let validEmail = _.some(this.counterConsumer, {"email": data['email']});

//         if(validEmail){
//           // this.user =  data;
//           // let navextras: NavigationExtras = {
//           //   queryParams: {"ownerId":"2", "userData": JSON.stringify(data)}
//           // };
//           this.toastr.success('Successful login.', 'Success');
//           // this._authenticationServices.setUser(data);
//           this.router.navigate(['fooditem']);
//           // window.location.reload();
//         }else{
//           this.toastr.error('You are not whitlisng user.', 'Error');
//           this.logout();
//         }
//       }
//     );
//   }

//   logout(){
//     // console.log( this._socialLoginService );
//     this._socialLoginService.logout().subscribe(
//       (data)=>{
//         // this.user = data;
//         console.log( data );
//         this.router.navigate(['login']);
//       }
//     )
//   }

}

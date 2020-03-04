import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CodejamComponent } from './components/codejam/codejam.component';
import { SelcetCodejamComponent } from './components/selcet-codejam/selcet-codejam.component';


const routes: Routes = [
  {path:"user-signup",component:UserSignupComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"codejam",component:CodejamComponent},
  {path:"select-codejam", component:SelcetCodejamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

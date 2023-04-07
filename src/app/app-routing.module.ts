import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './user/signin/signin.component';
import { HomePgComponent } from './view/home-pg/home-pg.component';
import { DetailsPgComponent } from './view/details-pg/details-pg.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  { path:"",component:SigninComponent},
  { path:"home",
  component:HomePgComponent},
  // canActivate:[GuardService]},
  { path:'details',component:DetailsPgComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EatagainComponent } from './eatagain/eatagain.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'settings',component:SettingsComponent},
  {path:'profile',component:UserAccountComponent,
  children:[
    {path:'orders',component:UserOrdersComponent},
    {path:'eatagain',component:EatagainComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { EatagainComponent } from './eatagain/eatagain.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeModule } from '../home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserAccountComponent,
    UserOrdersComponent,
    EatagainComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatMenuModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents:[
    UserOrdersComponent,
    EatagainComponent
  ]
})
export class UserModule { }

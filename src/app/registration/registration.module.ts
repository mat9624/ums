import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { RegistrationPage } from './registration.page';
import {UmsService} from '../services/ums.service';
import {FolderLoginPageRoutingModule} from './registration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderLoginPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [RegistrationPage],
  exports: [RegistrationPage],
  providers: [UmsService,HttpClient]
})
export class RegistrationPageModule {
}

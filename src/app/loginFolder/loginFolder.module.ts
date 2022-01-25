import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { FolderLoginPage } from './loginFolder.page';
import {UmsService} from '../services/ums.service';
import {FolderLoginPageRoutingModule} from './loginFolder-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderLoginPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [FolderLoginPage],
  exports: [FolderLoginPage],
  providers: [UmsService,HttpClient]
})
export class LoginFolderPageModule {
}

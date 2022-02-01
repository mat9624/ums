import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { UmsService } from '../services/ums.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from '../interceptor/httpconfig.interceptor';
import {FolderPageRoutingModule} from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [HomePage],
  exports: [HomePage],
  providers: [
    UmsService,
    HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor,multi:true}
  ]
})
export class HomePageModule {}

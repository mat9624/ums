import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FolderPage } from './folder.page';
import { UmsService } from '../services/ums.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from '../interceptor/httpconfig.interceptor';
import {FolderPageRoutingModule} from './folder-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [FolderPage],
  exports: [FolderPage],
  providers: [
    UmsService,
    HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor,multi:true}
  ]
})
export class FolderPageModule {}

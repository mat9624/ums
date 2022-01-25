import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FolderPage } from './folder.page';
import { UmsService } from '../services/ums.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
    HttpClient
  ]
})
export class FolderPageModule {}

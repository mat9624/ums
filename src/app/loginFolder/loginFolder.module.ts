import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderLoginPageRoutingModule } from './loginFolder-routing.module';

import { FolderLoginPage } from './loginFolder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderLoginPageRoutingModule
  ],
  declarations: [FolderLoginPage]
})
export class FolderPageModule {
}

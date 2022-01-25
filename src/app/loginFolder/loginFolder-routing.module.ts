import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderLoginPage } from './loginFolder.page';

const routes: Routes = [
  {
    path: 'register',
    component: FolderLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderLoginPageRoutingModule {}

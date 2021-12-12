import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSosPage } from './modal-sos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSosPageRoutingModule } from './modal-sos-routing.module';

import { ModalSosPage } from './modal-sos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSosPageRoutingModule
  ],
  declarations: [ModalSosPage]
})
export class ModalSosPageModule {}

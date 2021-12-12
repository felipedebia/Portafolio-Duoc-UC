import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarfotoPageRoutingModule } from './tomarfoto-routing.module';

import { TomarfotoPage } from './tomarfoto.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarfotoPageRoutingModule,
    ComponentsModule,
    NgxUsefulSwiperModule 

  ],
  declarations: [TomarfotoPage]
})
export class TomarfotoPageModule {}

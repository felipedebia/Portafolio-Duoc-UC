import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutePageRoutingModule } from './route-routing.module';

import { RoutePage } from './route.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutePageRoutingModule,
    ComponentsModule,
    NgxUsefulSwiperModule

  ],
  declarations: [RoutePage]
})
export class RoutePageModule {}

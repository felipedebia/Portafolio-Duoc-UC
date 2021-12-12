import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteDetailPageRoutingModule } from './route-detail-routing.module';

import { RouteDetailPage } from './route-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RouteDetailPage]
})
export class RouteDetailPageModule {}

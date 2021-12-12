import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteDetailPage } from './route-detail.page';
import { LocalResolveService } from '../../services/localResolve.service';

const routes: Routes = [
  {
    path: '',
    component: RouteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteDetailPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { LocalResolveService } from './services/localResolve.service';

const routes: Routes = [

  {path:'', redirectTo:'loader', pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'route',canActivate: [AuthGuard],
    loadChildren: () => import('./pages/route/route.module').then( m => m.RoutePageModule)
  },
  {
    path: 'route-detail/:rp_id',canActivate: [AuthGuard],
    loadChildren: () => import('./pages/route-detail/route-detail.module').then( m => m.RouteDetailPageModule)
  },
  {
    path: 'tomarfoto',canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tomarfoto/tomarfoto.module').then( m => m.TomarfotoPageModule)
  },
  {
    path: 'modal-sos',
    loadChildren: () => import('./modals/modal-sos/modal-sos.module').then( m => m.ModalSosPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./pages/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

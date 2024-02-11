import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'routes',
    pathMatch: 'full'
  },
  {
    path: 'routes',
    loadChildren: () => import('./route-visualizer/route-visualizer.module').then(m => m.RouteVisualizerModule)
  },
  {
    path: '**',
    redirectTo: 'routes'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

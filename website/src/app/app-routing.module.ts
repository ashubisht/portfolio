import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LandingComponent } from './container/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
        {path: '', redirectTo: '', pathMatch: 'full'},
        {path: '', loadChildren: () => import('./container/container.module').then(m => m.ContainerModule)},
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

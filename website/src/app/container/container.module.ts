import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { LandingComponent } from './landing/landing.component';
import { MeshComponent } from './mesh/mesh.component';
import { ContainerComponent } from './container.component';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './about/about.component';
import { About2Component } from './about2/about2.component';
import { AboutStatsComponent } from './about-stats/about-stats.component';
import { About3Component } from './about3/about3.component';
import { DottedSphereComponent } from './dotted-sphere/dotted-sphere.component';


@NgModule({
  declarations: [
    LandingComponent,
    MeshComponent,
    ContainerComponent,
    AboutComponent,
    About2Component,
    AboutStatsComponent,
    About3Component,
    DottedSphereComponent,
    
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MaterialModule
  ]
})
export class ContainerModule { }

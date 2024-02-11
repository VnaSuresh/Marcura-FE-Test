import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { RouteVisualizerRoutingModule } from './route-visualizer-routing.module';
import { RouteMapComponent } from './route-map/route-map.component';
import { RouteFilterComponent } from './route-filter/route-filter.component';
import { SpeedChartComponent } from './speed-chart/speed-chart.component';


@NgModule({
  declarations: [
    RouteMapComponent,
    RouteFilterComponent,
    SpeedChartComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgChartsModule,
    RouteVisualizerRoutingModule
  ]
})
export class RouteVisualizerModule { }

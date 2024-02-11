import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { RoutesService } from '../services/routes.service';
import { Papa } from 'ngx-papaparse';
import { GoogleMap, MapPolyline } from '@angular/google-maps';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrl: './route-map.component.css',
})
export class RouteMapComponent {
  options: google.maps.MapOptions = {
    center: { lat: 40, lng: -20 },
    zoom: 6
  };
  routeData: any;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  selectedRoute: any;
  polylineOptions: any = {
    strokeColor: 'red', strokeWeight: 5, path: []
  }

  constructor(private routesService: RoutesService, private papa: Papa) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.routesService.getRouteData().subscribe(response => {
      this.papa.parse(response, {
        header: true,
        complete: (result) => {
          console.log('Parsed: ', result?.data);
          this.routeData = result?.data;
        }
      });
    })
  }

  onSelectionChange(route: any) {
    this.selectedRoute = route;
    this.drawRoute(route);
  }

  drawRoute(route: any) {
    const points = JSON.parse(route.points);
    this.polylineOptions.path = [];
    points.forEach((point: any, index: number) => {
      this.polylineOptions.path.push({ lat: point[0], lng: point[1] });
      if (index === 0) {
        this.options.center = { lat: point[0], lng: point[1] };
        this.markerPositions = [{ lat: point[0], lng: point[1] }];
        this.options = { ...this.options };
      }
    })
    this.polylineOptions = { ...this.polylineOptions };
  }
}

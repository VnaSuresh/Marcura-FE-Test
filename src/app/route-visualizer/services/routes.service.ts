import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http: HttpClient) { }

  getRouteData() {
    return this.http.get('assets/web_challenge.csv', {responseType: 'text'});
  }
}

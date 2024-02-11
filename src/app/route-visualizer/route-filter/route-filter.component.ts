import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-route-filter',
  templateUrl: './route-filter.component.html',
  styleUrl: './route-filter.component.css'
})
export class RouteFilterComponent {
  @Input() routeData: any;
  @Output() selectedRoute = new EventEmitter();
  routeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.routeForm = this.fb.group({
      route: new FormControl('')
    })
    this.routeForm.get('route')?.valueChanges.subscribe(route => {
      this.selectedRoute.emit(route);
    })
  }

  ngOnInit() {
  }
}

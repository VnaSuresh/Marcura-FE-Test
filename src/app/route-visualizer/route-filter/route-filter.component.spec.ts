import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFilterComponent } from './route-filter.component';

describe('RouteFilterComponent', () => {
  let component: RouteFilterComponent;
  let fixture: ComponentFixture<RouteFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

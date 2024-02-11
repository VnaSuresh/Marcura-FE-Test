import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-speed-chart',
  templateUrl: './speed-chart.component.html',
  styleUrl: './speed-chart.component.css'
})
export class SpeedChartComponent {
  @Input() routeData: any;
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Vessel Speed',
        fill: false,
        tension: 0.5,
        borderColor: '#ff6384',
        backgroundColor: '#ff6384'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor(private datePipe: DatePipe) {
  }

  ngOnChanges() {
    const points = this.routeData?.points ? JSON.parse(this.routeData?.points) : [];
    const timeData = points?.map((p: any) => {
      return this.datePipe.transform(p[2], 'dd/MM/yy HH:mm:ss');
    });
    const speedData = points?.map((p: any) => {
      return p[3];
    });
    this.lineChartData.labels = timeData;
    this.lineChartData.datasets[0].data = speedData;
    this.lineChartData = { ...this.lineChartData };
  }
}

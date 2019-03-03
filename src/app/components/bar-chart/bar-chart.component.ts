import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
          renderTo: 'container2',
          type: 'bar',
          height: '250'
      },
      title:{
          text:''
      },
      yAxis: {
          title: {
              text: 'Placements',
              useHTML: true
          }
      },
      xAxis: {
        categories: ['IISC Blore', 'JNU Delhi', 'BHU Varanasi', 'AU Chennai', 'University of Hyderabad'],
},
      credits: {
          enabled: false
      },
      legend: {
          enabled: false
      },
      series: [{
        data: [['IISC Blore' , 90],['JNU Delhi', 80],['BHU Varanasi', 70],['AU Chennai',60],['University of Hyderabad',50]]
    }]
  })
 }
}

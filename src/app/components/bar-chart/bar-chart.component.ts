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
              text: 'Percentage(%)',
              useHTML: true
          }
      },
      xAxis: {
        categories: ['JNU', 'Bharat Institute of Scieneces', 'Tata Institute of Social Sciences', 'Shiv Nadar University', 'Jamia Millia Islamia University'],
},
      credits: {
          enabled: false
      },
      legend: {
          enabled: false
      },
      series: [{
        data: [['JNU' , 80],['Bharat Institute of Scieneces', 79],['Tata Institute of Social Sciences', 72],['Shiv Nadar University',71],['Jamia Millia Islamia University',68]]
    }]
  })
 }
}

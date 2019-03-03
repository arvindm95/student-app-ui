import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html'
})
export class PieComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
          renderTo: 'container2',
          type: 'pie',
          height: '250'
      },
      title:{
          text:''
      },
      credits: {
          enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
      legend: {
          enabled: true
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
      series: [{
        data: [{
            name: 'IISC Blore',
            y: 60,
            sliced: false,
            selected: true
        }, {
            name: 'JNU Delhi',
            y: 11
        }, {
            name: 'BHU Varanasi',
            y: 10
        }, {
            name: 'AU Chennai',
            y: 4
        }, {
            name: 'University of Hyderabad',
            y: 4
        }]
    }]
  })
  }

}



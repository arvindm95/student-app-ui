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
            type: 'bar',
            height: '250'
        },
        title:{
            text:''
        },
        colors:['#ff5050','#ff5050','#ff5050','#FFFF00','#FFFF00'],
        yAxis: {
            title: {
                text: 'Percentage(%)',
                useHTML: true
            }
        },
        xAxis: {
          categories: ['JNU', 'BHU', 'Osmania University', 'Jadavapur University', 'Aligarh University'],
  },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        series: [{
          data: [['JNU' , 99],['BHU', 95],['Osmania University', 93],['Jadavapur University',91],['Aligarh University',90]]
      }]
    })
  }

}



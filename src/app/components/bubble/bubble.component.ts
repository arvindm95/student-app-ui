import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts'
import * as HighchartsMore from 'highcharts/highcharts-more.src.js'
HighchartsMore(Highcharts)

@Component({
  selector: 'bubble',
  templateUrl: './bubble.component.html'
})
export class BubbleComponent implements OnInit {

  public chart: Chart;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
          renderTo: 'container2',
          type: 'line',
          height: '285'
      },
      title:{
          text:''
      },
      xAxis: {
        crosshair: true,
        labels: {
            style: {
                fontSize: '14px'
            }
        },
        type: 'category'
    },
    yAxis: {
      min: 0,
      max:100,
      title: {
          text: 'Percentage(%)'
      }
  },
      credits: {
          enabled: false
      },
      legend: {
          enabled: false
      },
      series: [{
          data: [['IISC',91], ['AU',60], ['University of Delhi',58], ['Jadavapur University',57], ['BHU Varanasi',53]]
      }]
  });

  }

}

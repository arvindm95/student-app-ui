import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

declare var require: any;

import { Highcharts } from 'angular-highcharts';

@Component({
    selector: 'dashboard-chart',
    templateUrl: './dashboard-chart.component.html'
})
export class DashboardChartComponent implements OnInit {

    public chart: Chart;

    ngOnInit() {
        this.chart = new Chart({
            chart: {
                renderTo: 'container2',
                type: 'column',
                height: '285'
            },
            yAxis: {
                title: {
                    text: 'axis title',
                    useHTML: true
                }
            },
            series: [{
                data: [23, 45, 12, 89, 123, 12, 5]
            }]
        });

    }

}


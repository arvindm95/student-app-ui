import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';

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
                type: 'line',
                height: '285'
            },
            title:{
                text:''
            },
            yAxis: {
                min:0,
                max:100,
                title: {
                    text: 'Percentage(%)',
                    useHTML: true
                }
            },
            xAxis: {
                    categories: ['Homi Baba National', 'IISC', 'King George\'s Medical University', 'Panjab Agriculture University', 'Jamia Millia Islamia'],
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                data: [['Homi Baba National', 85],['IISC', 84],['King George\'s Medical University', 83],['Panjab Agriculture University',80],['Jamia Millia Islamia',79]]
            }]
        });

    }

}


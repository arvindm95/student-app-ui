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
                type: 'line',
                height: '285'
            },
            title:{
                text:''
            },
            yAxis: {
                title: {
                    text: 'Pass percentage',
                    useHTML: true
                }
            },
            xAxis: {
                title: {
                    text: 'Year',
                    useHTML: true
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                data: [[2006, 450],[2008, 800],[2010, 600], [2012, 1000], [2014, 1220], [2016,900], [2018, 1450]]
            }]
        });

    }

}


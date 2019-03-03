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
                title: {
                    text: 'University Ranks',
                    useHTML: true
                }
            },
            xAxis: {
                    categories: ['University of Hyderabad', 'JNU Delhi', 'AU Chennai', 'IISC Blore', 'BHU Varanasi'],
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                data: [['University of Hyderabad', 50],['JNU Delhi', 80],['AU Chennai', 60],['IISC Blore',89],['BHU Varanasi',70]]
            }]
        });

    }

}


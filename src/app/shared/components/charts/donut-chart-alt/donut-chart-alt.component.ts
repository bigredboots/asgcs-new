import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-donut-chart-alt',
  templateUrl: './donut-chart-alt.component.html',
  styleUrls: ['./donut-chart-alt.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class DonutComponentAlt implements OnInit {
  public chartConfig = {
    chartArea: {
      background: 'transparent',
      height: 230,
      top: 0,
      padding: 0,
      margin: 0,
      width: 400,
      autoFit: false,
    },
    legend: {
      visible: true,
      labels: {
        color: '#DCDCDC',
        font: '400 14px "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
        whiteSpace: 'pre',
        padding: { bottom: 5, top: 5 },
      },
    },
    series: [
      {
        holeSize: 45,
        margin: 4,
        size: 14,
        name: 'parts2',
        //autoFit: 'autofit',
        type: 'donut',
        border: {
          width: 2,
          color: 'black',
          dashType: 'solid',
        },
        explodeField: 'explode',

        data: [
          {
            category: 'Parts Sent On Time',
            value: 65,
            color: '#009a8c',
          },
          {
            category: 'Parts Sent Past Due',
            value: 35,
            color: '#e31b23',
          },
        ],
      },
      {
        // holeSize: 45,
        // margin: 2,
        size: 14,
        name: 'parts',
        type: 'donut',
        //autoFit: 'autofit',
        border: {
          width: 1,
          color: 'black',
          dashType: 'solid',
        },
        explodeField: 'explode',

        data: [
          {
            category: 'All Parts Sent',
            value: 100,
            color: '#065aa3',
          },
        ],
      },
    ],
  };
  ngOnInit(): void {}
  @ViewChild('donutoverviewalt') donutoverviewalt: ElementRef;
}

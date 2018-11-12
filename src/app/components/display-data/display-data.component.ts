import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const dataset = [10, 20, 30, 40, 50];

    const el = d3.select('body')
      .selectAll('p')
      .data(dataset)
      .enter()
      .append('p')
      .text(function (d) {
        return 'its bound to ' + d;
      })
      .style('color', function (d) {
        if (d > 25) {
          return 'red';
        }
        return 'blue';
      })
      .attr('class', function (d) {
        if (d > 25) {
          return 'foo';
        }
        return null;
      })
      .classed('bar', function (d) {
        return d < 25;
      });

    console.log(el);
  }

}

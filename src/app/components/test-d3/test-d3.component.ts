import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-test-d3',
  templateUrl: './test-d3.component.html',
  styleUrls: ['./test-d3.component.css']
})
export class TestD3Component implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const el = d3.select('body')
      .append('p')
      // .attr('class', 'foo')
      // .attr('class', 'bar')
      .classed('foo',  true)
      .classed('bar',  true)
      .text('Hello World!')
      .style('color', 'blue');
    console.log(el);
  }

}

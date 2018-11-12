import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.css']
})
export class BindingDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const dataset = [10, 20, 30, 40, 50];

    const el = d3.select('body')
      .selectAll('p')
      .data(dataset)
      .enter()
      .append('p')
      .text('hello World!');

      console.log(el);
  }

}

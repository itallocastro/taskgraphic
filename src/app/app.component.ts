import { Component } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskgraphic';
  data: number[] = [19,40,168,281,303,365];
  
  constructor()
  {
    
  }
  ngAfterContentInit()
  {
    d3.select(".chart").selectAll('div').data(this.data).enter().append("div").style("width",function(d){return d + "px";}).text(function(d){ return d; });
   
    
  }
  
  
  
}


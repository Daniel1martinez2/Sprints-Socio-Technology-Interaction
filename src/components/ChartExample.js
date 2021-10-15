import React, {Fragment, useEffect, useRef} from 'react';  
import * as d3 from 'd3';
// import menu from './menu.json'; 

const data = [
  {
    "name": "veg soup",
    "orders": 200
  },
  {
    "name": "veg curry",
    "orders": 500
  },
  {
    "name": "veg pasta",
    "orders": 300
  },
  {
    "name": "veg surprise",
    "orders": 900
  },
  {
    "name": "veg alo",
    "orders": 300
  },
  {
    "name": "veg jeje",
    "orders": 1200
  }
]; 


const ChartExample = props => {

  const svgRef = useRef(); 
  
  useEffect(()=>{
    const svg = d3.select(svgRef.current)
    .append('svg')
    .attr('width', 600)
    .attr('height',600);  

    const margin = {
      top:100,
      right:20,
      bottom:100,
      left:100 
  }
    const graphWidth = 600 -margin.left -margin.right; 
    const graphHeight = 600 -margin.top-margin.bottom; 
    const graph = svg.append('g')
    .attr('width', graphWidth) 
    .attr('height',graphHeight)
    .attr('transform',`translate(${margin.left},${margin.top})`);
    //axes
    const xAxisGroup = graph.append('g')
        .attr('transform', `translate(0,${graphHeight})`);
    const yAxisGroup = graph.append('g'); 
    //
    //set data file to work width
    // const min = d3.min(data, d=>d.orders); 
    // maximum
    const max = d3.max(data, d=>d.orders); 
    //linear scale
    const y = d3.scaleLinear()
        .domain([0,max])
        .range([graphHeight,0]); 
    //band scale
    const x = d3.scaleBand()
        .domain(data.map(item=>item.name))
        .range([0,500])
        .paddingInner(0.2)
        .paddingOuter(0.2);  
    //join data to rect, Dominio y luego rango
    const rects = graph.selectAll('rect')
        .data(data); 
    rects.attr('width',x.bandwidth)
        .attr('height',d=> graphHeight- y(d.orders))
        .attr('fill','orange')
        .attr('x',(d,i,n)=>x(d.name))
        .attr('y',d=>y(d.orders)); 
    //append enter selection
    rects.enter()
        .append('rect')
        .attr('width',x.bandwidth)
        .attr('height',d=> graphHeight- y(d.orders))
        .attr('fill','purple')
        .attr('x',(d,i,n)=>x(d.name))
        .attr('y',d=>y(d.orders)); 

    //create and call the axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickFormat(d => d + ' orders');
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis); 

    xAxisGroup.selectAll('text') 
        .attr('transform','rotate(-40)')
        .attr('text-anchor', 'end')
        .attr('fill', 'purple')
        .style('font-family','monospace');  
 
  },[]); 
  return (
    <Fragment>
      <div className="svg-example" ref={svgRef}></div>
    </Fragment>
  );
};
export default ChartExample;  



/*
const data = [21,3,45,5,43,6]; 

const ChartExample = props => {

  const svgRef = useRef(); 
  
  useEffect(()=>{
    const svg = select(svgRef.current); 
    svg
    .selectAll('circle')
    .data(data)
    .join(
      enter => enter.append('circle')
        .attr('r', value => value)
        .attr('cx', value => value * 2)
        .attr('cy', value => value * 2)
        .attr('stroke', 'red'),
      update => update.attr('class', 'updated'),
      exit => exit.remove()
    ); 
  },[]); 
  return (
    <Fragment>
      <svg className="svg-example" ref={svgRef}>

      </svg>
    </Fragment>
  );
};
export default ChartExample;  
*/
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from "d3";
import _ from "lodash";
import chroma from "chroma-js";

// constants
const width=300;
const height=200;

const numberData = 10;
const dummyData = _.range(numberData).map(element => `circle${element}`).map(function (x, i) { 
  return { name: x, value: _.range(numberData).map(element => 3*i + 1)[i] }
});

const BrushDemo = () => {
  const [data, setData] = useState(dummyData) // data
  const [brushExtent, setBrushExtent] = useState(0);

  // refs 
  const bigCircleRef = useRef();
  const circlesRef = useRef();
  const brushRef = useRef();

  // D3 code
  useEffect(() => {
    if (!data) {return}

    // select groups
    const bigCircleG = d3.select(bigCircleRef.current)
    const circlesG = d3.select(circlesRef.current)

    // Scales 
    const circlesScale = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([10, width-10])
      .padding(0.2)
    const colorScale = chroma.scale(['#f72585', '#4895ef']
      .map(color => chroma(color).saturate(1)))
      .domain([1, 30]) 

    /// Circles graph ///
    const circlesGraphBackground = circlesG
      .selectAll(".background-rect")
      .data([0])
      .join("rect")
      .classed("background-rect", true)
        .attr("width", width)
        .attr("y", 100)
        .attr("height", 100)
        .attr("fill", "#eee")
    const circlesGraph = circlesG
      .selectAll(".circle")
      .data(data)
      .join("circle")
        .classed("circle", true)
        .attr("r", d => d.value)
        .attr("cx", d => circlesScale(d.name))
        .attr("cy", 150)
        .style("fill", d => colorScale(d.value))
        .style("stroke", d => colorScale(d.value))
        .style("stroke-width", 3)
        .style("fill-opacity", 0.8)

    /// Big Circle graph //
    const bigCircle = bigCircleG
      .selectAll(".big-circle")
      .data([0])
      .join("circle")
      .classed("big-circle", true)
        .attr("r", 40)
        .attr("cx", width/2)
        .attr("cy", 50)
        .style("fill", d => colorScale(data[brushExtent].value))
        .style("stroke", d => colorScale(data[brushExtent].value))
        .style("stroke-width", 3)
        .style("fill-opacity", 0.8)
    
      /// Brush ///
      const defaultExtent = [[0, 100], [30, 200]]
      const brush = d3.brush()
        .extent([[0, 100], [width, 200]])
        .on('brush end', (event) => {
        const selectedElementIndex = Math.floor((event.selection[0][0] / circlesScale.step()));
        bigCircle
          .style("fill", d => colorScale(data[selectedElementIndex].value))
          .style("stroke", d => colorScale(data[selectedElementIndex].value))
        });

      d3.select(brushRef.current)
        .call(brush)
        .call(brush.move, defaultExtent)
      
  }, [data])


  return (
    <>
      <div className="wrapper">
        <svg width={width} height={height}>
          <g>
            <g ref={bigCircleRef}></g>
            <g ref={circlesRef}></g>
            <g ref={brushRef}></g>
          </g>
        </svg>
      </div>

    </>
  )
};

export default BrushDemo;
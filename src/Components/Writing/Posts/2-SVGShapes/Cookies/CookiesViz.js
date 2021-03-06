import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const cookiePath = `
      M501.791,236.285c-32.933-11.827-53.189-45.342-50.644-71.807c0-4.351-2.607-8.394-5.903-11.25
			c-3.296-2.842-8.408-4.072-12.686-3.384c-50.186,7.363-96.14-29.352-100.693-80.962c-0.41-4.658-2.959-8.848-6.914-11.353
			c-3.94-2.49-8.848-3.032-13.198-1.406C271.074,71.02,232.637,44.084,217.3,8.986c-2.871-6.563-9.99-10.181-17.007-8.628
			C84.82,26.125,0.001,137.657,0.001,256.002c0,140.61,115.39,256,256,256s256-115.39,256-256
			C511.584,247.068,511.522,239.771,501.791,236.285z M105.251,272.131c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15
			s15,6.714,15,15C120.251,265.415,113.534,272.131,105.251,272.131z M166.001,391.002c-24.814,0-45-20.186-45-45
			c0-24.814,20.186-45,45-45c24.814,0,45,20.186,45,45C211.001,370.816,190.816,391.002,166.001,391.002z M181.001,211.002
			c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C211.001,197.54,197.539,211.002,181.001,211.002z
			 M301.001,421.002c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30
			C331.001,407.54,317.539,421.002,301.001,421.002z M316.001,301.002c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45
			c24.814,0,45,20.186,45,45C361.001,280.816,340.816,301.002,316.001,301.002z M405.251,332.131c-8.284,0-15-6.716-15-15
			c0-8.286,6.716-15,15-15s15,6.714,15,15C420.251,325.415,413.534,332.131,405.251,332.131z
  `

const CookiesViz = ({ windowWidth }) => {

  //const width = 450;
  const height = 450; 
  const cookieColours = ['#b7094c', '#892b64', '#5c4d7d', '#2e6f95', '#0091ad']

  const numCookies = 180;
  const data = Array.from({ length: numCookies }, (_, i) => ({
    id: i, 
    colour: cookieColours[Math.floor(Math.random() * cookieColours.length)], 
    rotation: Math.floor(Math.random() * 360) // get random rotation between 0 and 360 degrees
  }))

  const svgRef = useRef();

  useEffect(() => {

    let width;
    let cookiesRadius; 
    if (windowWidth >= 550) {
      width = 450;
      cookiesRadius = 220;
    } else {
      width = 300;
      cookiesRadius = 190;
    }

  const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)

  const cookiesG = svg.selectAll("g").data([0]).join("g")
    .attr("transform", `translate(${width/2}, ${height/2})`)
    
  const cookies  = cookiesG
    .selectAll(".cookie-path")
    .data(data)
    .join("path")
    .classed('cookie-path', true)
        .attr("d", cookiePath)
        .attr("fill", d => d.colour)
        .attr("fill-opacity", 1)

  const simulation = d3.forceSimulation(data)
    .on("tick", () => {
      cookies.attr("transform", d => `scale(${0.05})translate(${d.x}, ${d.y})`)
    })
    .force("collide", d3.forceCollide().radius(cookiesRadius))

  }, [windowWidth])

  return (
    <div id="cookies-viz-container">
      <svg ref={svgRef}></svg>
    </div>
  )
};

export default CookiesViz;
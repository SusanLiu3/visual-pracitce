function drawAxis(
  d3,
  domain,
  range,
  axisFun,
  svgContainer,
  { translateX, translateY, className }
) {
  let scale = d3
    .scaleLinear()
    .domain(domain)
    .range(range);
  let axis = d3[axisFun](scale);
  let svg = svgContainer
    .append('g')
    .attr('transform', `translate(${translateX},${translateY})`)
    .attr('class', className);
  svg.call(axis);
  return { svg, axis, scale };
}
export {
  drawAxis
}

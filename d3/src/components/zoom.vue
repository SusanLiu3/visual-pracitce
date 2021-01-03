<template>
  <div class="zoom-wrap"></div>
</template>
<script>
export default {
  name: "zoom",
  mounted() {
    let d3 = this.d3;
    let svg = d3
      .select(".drag-wrap")
      .append("svg")
      .attr("width",500)
      .attr("height", 600)
      .attr('transform','translate(20px,20px)')
     let circle=svg
      .append("circle")
      .attr("cx", 200)
      .attr("cy", 200)
      .attr("r", 100)
      .attr('stroke','black')
      .attr('fill','#69a3b2')
      let zoomFun=d3.zoom().on('zoom',function (d) {
          d3.select(this).attr('transform',d.transform)
      })
      circle.call(zoomFun)
  }
};
</script>
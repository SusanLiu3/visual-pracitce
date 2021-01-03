<template>
  <div class="drag-wrap"></div>
</template>
<script>
export default {
  name: "drag",
  mounted() {
      let d3=this.d3
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
    let drag=d3.drag().on('start',function(d){
        console.log('开始拖动')
    }).on('end',function (d) {
        console.log('结束拖动')
    }).on('drag',function (d) {
        d3.select(this).attr('cx',event.x)
        .attr('cy',event.y)
        console.log(event)
    })
    circle.call(drag)
  }
};
</script>
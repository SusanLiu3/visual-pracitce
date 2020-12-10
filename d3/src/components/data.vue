<template>
  <!-- 数据集 -->
  <div class="list">
    <div class="item"></div>
    <div class="item"></div>
    <div class="data-item"></div>
    <div class="data-item2"></div>
    <div class="data-item2"></div>
    <div class="call"></div>
  </div>
</template>
<script>
export default {
  name:'data',
  mounted() {
    console.log(this.d3.selectAll('.list'));
    /**
     * select 选中单个元素;
     * selectAll 选中所有的元素;
     * datum : 给选中的元素绑定相同的value值;
     * data :给选中的元素分别绑定values中的每一组 ,第一个参数是数据，第二个是组件函数，可以更改绑定的顺序或者规则
     */
    this.d3
      .select('.list')
      .selectAll('.item')
      .datum('item')
      .text((i, idx) => {
        return '.' + i + idx;
      });
    let p = this.d3
      .select('.list')
      .selectAll('.data-item')
      .data(['水果', '蔬菜', '海鲜']);

    let enter = p
      .enter()
      .append('div')
      .attr('class', 'data-item')
      .text((d) => d);
    let update = p.text((d) => d);
    let data2 = ['蓝莓'];

    let p2 = this.d3
      .select('.list')
      .selectAll('.data-item2')
      .data(data2);
    p2.exit().text(function(d) {
      return 'exit';
    });
    // let exit = p2.exit().remove();
    let update2 = p2.text((d) => d);

    this.d3.selectAll('.call').call(function(item) {
      item.text((d) => 'test');
    });
  },
};
</script>

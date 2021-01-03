<template>
  <div id="app">
    test content
    <d3-data></d3-data>
    <scale-axis></scale-axis>
    <chart-builder></chart-builder>
    <chart-transition></chart-transition>
    <chart-drag></chart-drag>
    <chart-zoom></chart-zoom>
     <chart-export></chart-export>
  </div>
</template>
<script>
import d3Data from './components/data.vue';
import scaleAxis from './components/scaleAndAxis.vue';
import chartBuilder from './components/chartBuilder.vue';
import chartTransition from './components/transition.vue';
import chartDrag from './components/drag.vue';
import chartZoom from './components/zoom.vue';
import chartExport from './components/export.vue';
export default {
  components: {
    d3Data,
    chartBuilder,
    scaleAxis,
    chartTransition,
    chartDrag,
    chartZoom,
    chartExport
  },
};
</script>

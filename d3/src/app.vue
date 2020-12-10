<template>
  <div id="app">
    test content
    <d3-data></d3-data>
    <scale-axis></scale-axis>
  </div>
</template>
<script>
import d3Data from './components/data.vue';
import scaleAxis from './components/scaleAndAxis.vue';
export default {
  components: {
    d3Data,
    scaleAxis
  },
};
</script>

<template>
    <div id="app">
       <axis></axis>
       <graphic></graphic>
       <map-antv></map-antv>
    </div>
</template>
<script>
import axis from './components/axis.vue'
import graphic from './components/graphic.vue'
import mapAntv from './components/map.vue'
export default {
    components: {
        axis,
        graphic,
        mapAntv
    }
}
</script>
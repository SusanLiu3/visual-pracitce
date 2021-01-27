<template>
    <div id="app">
       <axis></axis>
       <graphic></graphic>
       <bubble-antv></bubble-antv>
       <!-- <map-antv></map-antv> -->
       <bubble-two-antv></bubble-two-antv>
    </div>
</template>
<script>
import axis from './components/axis.vue'
import graphic from './components/graphic.vue'
import mapAntv from './components/map.vue'
import bubbleAntv from './components/bubble.vue'
import bubbleTwoAntv from './components/bubble2.vue'
export default {
    components: {
        axis,
        graphic,
        mapAntv,
        bubbleAntv,
        bubbleTwoAntv
    }
}
</script>
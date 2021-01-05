<template>
    <div id="app">
        <canvas-api></canvas-api>
        <path2d></path2d>
        <color></color>
    </div>
</template>
<script>
import canvasApi from './components/api.vue'
import path2d from './components/path2d.vue'
import color from './components/color.vue'
export default {
    components:{
        canvasApi,
        path2d,
        color
    }
}
</script>
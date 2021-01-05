<template>
    <div id="app">
        <canvas-api></canvas-api>
        <path2d></path2d>
    </div>
</template>
<script>
import canvasApi from './components/api.vue'
import path2d from './components/path2d.vue'
export default {
    components:{
        canvasApi,
        path2d
    }
}
</script>
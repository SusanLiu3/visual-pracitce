<template>
    <div id="app">
        <canvas-api></canvas-api>
        <path2d></path2d>
        <color></color>
        <canvas-text></canvas-text>
        <canvas-img></canvas-img>
        <canvas-transform></canvas-transform>
        <canvas-clip></canvas-clip>
        <canvas-animate></canvas-animate>
        <canvas-clock></canvas-clock>
        <img-animate></img-animate>
    </div>
</template>
<script>
import canvasApi from './components/api.vue'
import path2d from './components/path2d.vue'
import color from './components/color.vue'
import canvasText from './components/text.vue'
import canvasImg from './components/image.vue'
import canvasTransform from './components/transform.vue'
import canvasClip from './components/clip.vue'
import canvasAnimate from './components/animation.vue'
import canvasClock from './components/clock.vue'
import imgAnimate from './components/imgAnimate.vue'
export default {
    components:{
        canvasApi,
        path2d,
        color,
        canvasText,
        canvasImg,
        canvasTransform,
        canvasClip,
        canvasAnimate,
        canvasClock,
        imgAnimate
    }
}
</script>
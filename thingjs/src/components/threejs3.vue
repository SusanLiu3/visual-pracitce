<template>
    <div id="threeWrap"></div>
</template>
<script>
import initMixins from './mixins/init.js'
export default {
    name:'threejs',
    mixins:[initMixins],
    data(){
        return {
           id:'threeWrap' 
        }
    },
    mounted(){
        this.init();
        this.createLight()
        this.createPlane()
        this.createVertice()
        this.createCube()
        this.createControls()
        this.createLine()
        this.renderer()
        this.newRender()
    }

}
</script>
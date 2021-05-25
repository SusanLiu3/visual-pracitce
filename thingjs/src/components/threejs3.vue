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
        this.createPlane()
        this.createVertice()
        this.renderer()
    }

}
</script>
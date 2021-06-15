 <!-- 
 略
 -->
<template>
    <div id="threeWrap"></div>
</template>
<script>
import * as THREE from 'three'
import initMixins from "./mixins/init";
export default {
    name: 'LatheGeo',
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mixins: [initMixins],
    mounted() {

        this.init();
        this.initController()
        this.animation()
        this.render.setClearColor(0xffffff, 1)
    },
    methods: {

    }
}
</script>
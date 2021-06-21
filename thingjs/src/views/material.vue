<!--
* @Author: 开发者
* @Change: 更改者
* @Date: 年-月-日
* @Description: 功能描述
-->
<template>
    <div id="threeWrap"></div>
</template>

<script>
import initMixins from "./mixins/init";
import materialMixins from "./mixins/material";
import { lightProcess } from "../utils/light";
import { geometryProcess } from "../utils/geometry";
export default {
    name: '',
    props: [],
    mixins: [initMixins,materialMixins],
    data() {
        return {
            id: 'threeWrap'
        };
    },
    mounted() {
        this.init();
        this.initController();
        this.createBasciMaterial()
        this.createPhongMaterial()
        this.createGeo()
        this.createLight();
        this.animation();
    },
    methods: {
        createGeo() {
            let funList = geometryProcess(this, this.scene)
            funList.createBasicMaterialBox()
            funList.createLightPlane();
        },
        createLight() {
            this.render.setClearColor(0xffffff, 1);
            let lightFun = lightProcess(this);
            lightFun.createAmbientLight()
        },
    },
    destroyed() { },
};
</script>

<style lang="scss" scoped>
</style>

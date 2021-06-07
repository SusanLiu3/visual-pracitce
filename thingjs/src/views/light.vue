<template>
  <div id="threeWrap"></div>
</template>
<script>
import initMixins from "./mixins/init";
import { lightProcess } from "../utils/light";
import { geometryProcess } from "../utils/geometry";
export default {
  name: "light",
  mixins: [initMixins],
  data() {
    return {
      id: "threeWrap"
    };
  },
  mounted() {
    this.init();
    this.initController();
    this.createGeo();
    this.createLight();
    this.animation();
  },
  methods: {
    createLight() {
      this.render.setClearColor(0xffffff, 1);
      let lightFun = lightProcess(this);
      lightFun.createAmbientLight();
      // lightFun.createSpotLight()
      lightFun.createHemiLight()
    },
    createGeo() {
      let geoFun = geometryProcess(this, this.scene);
      geoFun.createLightCylinder(16, 16, 20, [0, 10, 0]);
      geoFun.createLightCylinder(10, 16, 10, [0, 30, 0]);
      geoFun.createLightPlane();
    }
  }
};
</script>
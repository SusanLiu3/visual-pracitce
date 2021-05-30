<template>
  <div id="threeWrap"></div>
</template>
<script>
import initMixins from "./mixins/init.js";
import { geometryMixins } from "./mixins/geometry.js";
import { lightMixins } from "./mixins/light.js";
export default {
  name: "spotLight",
  mixins: [initMixins, geometryMixins,lightMixins],
  data() {
    return {
      id: "threeWrap"
    };
  },
  mounted() {
    this.init();
    this.createPlane();
    this.createVertice();
    this.createCube();
    this.createControls();
    this.createLine();
    this.createLight(true);
    this.createHemiLight()
    this.createSphere([20, 8, 0]);
    this.createCylinder([0, 17, -10]);
    this.createEqualCylinder([0, 10, -10]);
    // this.renderer();
    this.newRender();
  },
  methods: {
    
  }
};
</script>

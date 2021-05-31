<template>
  <div id="threeWrap"></div>
</template>
<script>
import initMixins from "./mixins/init.js";
import { geometryMixins } from "./mixins/geometry.js";
import { lightMixins } from "./mixins/light.js";
import { materialMixins } from "./mixins/material.js";
export default {
  mixins: [initMixins, geometryMixins, lightMixins, materialMixins],
  data() {
    return {
      id: "threeWrap"
    };
  },
  mounted() {
    this.init();
    // this.scene.overrideMaterial = new THREE.MeshDepthMaterial();

    this.createPlane();
    this.createLight(false);
    this.createBasicBox();
    this.newRender();
  },
  methods: {
    newRender() {
      this.box.rotation.y += 0.01;
      requestAnimationFrame(this.newRender);
      this.render.render(this.scene, this.camera);
    }
  }
};
</script>
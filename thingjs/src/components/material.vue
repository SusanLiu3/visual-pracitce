<template>
  <div id="threeWrap"></div>
</template>
<script>
import initMixins from "./mixins/init.js";
import { geometryMixins } from "./mixins/geometry.js";
import { lightMixins } from "./mixins/light.js";
export default {
  mixins: [initMixins, geometryMixins, lightMixins],
  data() {
    return {
      id: "threeWrap"
    };
  },
  mounted() {
    this.init();
    this.createPlane();
    this.createLight(false);
    this.createBox();
    this.newRender();
  },
  methods: {
    createBox() {
      let boxGeo = new THREE.BoxGeometry(4, 4, 4);
      let boxMaterial = new THREE.MeshBasicMaterial({
        color: 0xff77ff,
        // wireframe: true,
        // wireframeLinewidth: 30,
        // wireframeLineCap: "square"
      });
      let box = new THREE.Mesh(boxGeo, boxMaterial);
      box.position.x = 10;
      box.position.y = 2;
      box.position.z = 4;
      box.side = "back";
      this.box = box;
      this.scene.add(box);
    },
    newRender() {
      this.box.rotation.y += 0.01;
      requestAnimationFrame(this.newRender);
      this.render.render(this.scene, this.camera);
    }
  }
};
</script>
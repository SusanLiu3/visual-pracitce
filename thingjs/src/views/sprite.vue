<template>
  <div id="threeWrap"></div>
</template>
<script>
import initMixins from "./mixins/init";
import * as THREE from "three";
export default {
  mixins: [initMixins],
  data() {
    return {
      id: "threeWrap"
    };
  },
  mounted() {
    this.init();
    this.initController();
    this.createCloudSprites();
    this.animation();
  },
  methods: {
    createSprites() {
      let spriteMaterial = new THREE.SpriteMaterial();
      for (var x = -5; x < 5; x++) {
        for (var y = -5; y < 5; y++) {
          let sprite = new THREE.Sprite(spriteMaterial);
          sprite.position.set(x * 10, y * 10, 0);
          this.scene.add(sprite);
        }
      }
    },
    createCloudSprites() {
      let geo = new THREE.BufferGeometry();
      let material = new THREE.PointsMaterial({
        size: 4,
        transparent: true,
        opacity: 0.4,
        vertexColors: true,
        color: 0xffffff,
        sizeAttenuation: true
      });
      var range = 500;
      for (var i = 0; i < 15000; i++) {
        let points = new THREE.Vector3(
          Math.random() * range - range / 2,
          Math.random() * range - range / 2,
          Math.random() * range - range / 2
        );
        geo.setAttribute( 'position', new THREE.BufferAttribute( points, 3 ) );
        var color = new THREE.Color(0x00ff00);
        color.setHSL(
          color.getHSL().h,
          color.getHSL().s,
          Math.random() * color.getHSL().l
        );
        geo.colros.push(color);
      }
      let cloud = new THREE.PointCloud(geo, material);
      this.scene.add(cloud);
    }
  }
};
</script>
<template>
    <div id="threeWrap"></div>
</template>
<script>
import initMixins from './mixins/init.js'
export default {
    name: 'spotLight',
    mixins: [initMixins],
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mounted() {
        this.init();
        this.createLight()
        this.createPlane()
        this.createVertice()
        this.createCube()
        this.createControls()
        this.createLine()
        this.renderer()
        this.newRender()
    },
    methods: {
        createLight() {
            let ambientLight = new THREE.AmbientLight("#606008");
            this.scene.add(ambientLight)
            let spotLight = new THREE.SpotLight(0xffffff)
            spotLight.position.set(-60, 60, 0);
            spotLight.castShadow = true;
            this.scene.add(spotLight)
        }
    }
}
</script>

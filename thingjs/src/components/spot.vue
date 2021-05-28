<template>
    <div id="threeWrap"></div>
</template>
<script>
import initMixins from './mixins/init.js'
import { geometryMixins } from './mixins/geometry.js'
export default {
    name: 'spotLight',
    mixins: [initMixins, geometryMixins],
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mounted() {
        this.init();

        this.createPlane()
        this.createVertice()
        this.createCube()
        this.createControls()
        this.createLine()
        this.createLight()
        this.createSphere([20, 8, 0])
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
            spotLight.shadow.camera.near = 1
            spotLight.shadow.camera.far = 120
            spotLight.shadowCameraFov = 40
            spotLight.target = this.plane
            spotLight.distance = 0
            spotLight.angle =0.4
            this.scene.add(spotLight)
        },
        createPointLight() {
            let point = new THREE.PointLight('#ccffcc')
            point.distance = 100;
            this.scene.add(point);
        }
    }
}
</script>

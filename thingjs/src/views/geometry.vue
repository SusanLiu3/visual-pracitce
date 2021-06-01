<template>
    <div id="threeWrap"></div>
</template>
<script>
import initMixins from './mixins/init'
import geoMixins from './mixins/geometry'
import materialMixins from './mixins/material'
export default {
    name: 'Geometry',
    mixins: [initMixins, geoMixins, materialMixins],
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mounted() {
        this.init();
        this.createTextureMaterial()
        this.createLight();
        this.createGeometry()
        this.animation()
    },
    methods: {
        createGeometry() {
            this.createPlane()
            this.createBox()
            this.createSphere(true, [-60, 2, -10])
            this.createSphere(true, [-30, 20, -10], Math.PI / 6, Math.PI / 3)
            this.createSphere(true, [-0, 20, -10], null, null, Math.PI / 6, Math.PI / 3)
            this.createSphere2()
            this.createCircle(12, Math.PI / 6, Math.PI * 5 / 6)
            this.createCylinder(6, 6, 20, [-30, 0, 20])
            this.createCylinder(4, 6, 6, [-10, 0, 20], false, 0, Math.PI / 3)
            this.createTorus()
            this.createTorusKnot()
        }
    }
}
</script>
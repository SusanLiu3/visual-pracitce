<template>
    <div id="threeWrap"></div>
</template>
<script>
import initMixins from './mixins/init'
import { geometryProcess } from '../utils/geometry.js'
import materialMixins from './mixins/material'
export default {
    name: 'Geometry',
    mixins: [initMixins, materialMixins],
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mounted() {
        this.init();
        this.initController()
        this.createTextureMaterial()
        this.createLight();
        this.createGeometry()
        this.animation()
    },
    methods: {
        createGeometry() {
            let geometry = geometryProcess(this, this.scene)
            geometry.createPlane(false, [-30, 0, 3])
            geometry.createPlane(true, [-40, 0, 3])
            geometry.createBox()
            geometry.createSphere(true, [-60, 2, -10])
            geometry.createSphere(true, [-30, 20, -10], Math.PI / 6, Math.PI / 3)
            geometry.createSphere(true, [-0, 20, -10], null, null, Math.PI / 6, Math.PI / 3)
            geometry.createSphere2()
            geometry.createCircle(12, Math.PI / 6, Math.PI * 5 / 6)
            geometry.createCylinder(6, 6, 20, [-30, 0, 20])
            geometry.createCylinder(4, 6, 6, [-10, 0, 20], false, 0, Math.PI / 3)
            geometry.createTorus()
            geometry.createTorusKnot()
            geometry.createTetrahedron()
            geometry.createOctahedron()
            geometry.createIcosahedron()
            geometry.createRing([50, 0, 30])
            geometry.createRing([30, 0, 30], 0, Math.PI)
            geometry.createShape()
            geometry.createCone()
            geometry.createGeo()
        }
    }
}
</script>
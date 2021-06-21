<template>
    <div id="threeWrap"></div>
</template>
<script>
import * as THREE from 'three'
import initMixins from './mixins/init'
import { SceneUtils } from 'three/examples/jsm/utils/SceneUtils'
export default {
    name: 'tubeGeo',
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mixins: [initMixins],
    mounted() {
        this.init()
        this.initController()
        this.points = this.createPoitns()
        this.createTube()
        this.animation()
        this.render.setClearColor(0xffffff, 1)
    },
    methods: {
        createPoitns() {
            let points = []
            for (let i = 0; i < 10; i++) {
                let randomX = -15 + Math.round(Math.random() * 50)
                let randomY = -15 + Math.round(Math.random() * 30)
                let randomZ = -15 + Math.round(Math.random() * 40)
                points.push(new THREE.Vector3(randomX, randomY, randomZ))
            }
            return points
        },
        createTube() {
            let geo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(this.points), 6, 2, 4, false)
            let material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.2 })
            let wireFrameMat = new THREE.MeshBasicMaterial();
            wireFrameMat.wireframe = true;
            // create a multimaterial
            var mesh = SceneUtils.createMultiMaterialObject(geo, [material1, wireFrameMat]);
            this.scene.add(mesh)
        }
    }
}
</script>
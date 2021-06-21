<template>
    <div id="threeWrap"></div>
</template>
<script>
import * as THREE from 'three'
import initMixins from "./mixins/init";
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils'
export default {
    name: 'ExtrudeGeo',
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mixins: [initMixins],
    mounted() {
        this.init();
        this.initController()
        this.createExtrudeGeo()
        this.animation()
        this.render.setClearColor(0xffffff, 1)
    },
    // 基于二维图形创建三维
    methods: {
        createShape() {
            let shape = new THREE.Shape()
            shape.arc(10, 10, 5, 0, Math.PI * 2, false)
            return shape
        },
        createExtrudeGeo() {
            var options = {
                amount: 20,
                bevelThickness: 2,
                bevelSize: 2,
                bevelSegments: 5,
                bevelEnabled: true,
                curveSegments: 15,
                steps: 1
            };

            let geo = new THREE.ExtrudeGeometry(this.createShape(), options)
            let material1 = new THREE.MeshNormalMaterial({
                shading: THREE.FlatShading,
                transparent: true,
                opacity: 0.7
            })
             var wireFrameMat = new THREE.MeshBasicMaterial();
            wireFrameMat.wireframe = true;

            // create a multimaterial
            var mesh = SceneUtils.createMultiMaterialObject(geo, [material1]);
            this.scene.add(mesh)
        },

    }
}
</script>
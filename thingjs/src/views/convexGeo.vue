<template>
    <div id="threeWrap"></div>
</template>
<script>
import * as THREE from 'three'
import initMixins from "./mixins/init";
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry'
import { SceneUtils } from 'three/examples/jsm/utils/SceneUtils'
export default {
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mixins: [initMixins],
    mounted() {
        this.init();
        this.initController()
        this.points = this.createPoints();
        this.createSphere()
        this.createConvexGeo()
        this.animation();
        this.render.setClearColor(0xffffff, 1)
    },
    methods: {
        createPoints() {
            let points = []
            for (let i = 0; i < 15; i++) {
                let randomX = -15 + Math.round(Math.random() * 20)
                let randomY = -15 + Math.round(Math.random() * 20)
                let randomZ = -15 + Math.round(Math.random() * 20)
                points.push(new THREE.Vector3(randomX, randomY, randomZ))
            }
            return points
        },
        createSphere() {
            let material = new THREE.MeshBasicMaterial({
                color: 0xff0000, transparent: false
            })
            let group = new THREE.Group();
            // 创建球
            this.points.forEach(point => {
                let gGeo = new THREE.SphereGeometry(.2)
                let g = new THREE.Mesh(gGeo, material)
                g.position.copy(point) // 将球体定位到这些点上
                group.add(g) // 将这些球作为一组
            });
            this.scene.add(group)
        },
        // 创建凸体
        createConvexGeo() {
            let geo = new ConvexGeometry(this.points)
            let material1 = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                transparent: true,
                opacity: .2
            })
            material1.side = THREE.DoubleSide
            let material2 = new THREE.MeshBasicMaterial()
            material2.wireframe = true;
            // createMutiMaterialObject { geo :GeometryBuffer,[材质1,材质2]}
            let mesh = SceneUtils.createMultiMaterialObject(geo, [material1, material2])

            this.scene.add(mesh)

        }
    }
}
</script>
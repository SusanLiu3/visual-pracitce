import * as THREE from 'three'
export default {
    methods: {
        createTextureMaterial() {
            let map = new THREE.TextureLoader().load('/imgs/texture.jpg');
            //定义纹理在水平和垂直方向简单的重复到无穷大。
            map.wrapS = map.wrapT = THREE.RepeatWrapping;
            //定义兰伯特网孔材质
            var material = new THREE.MeshBasicMaterial({ map: map, side: THREE.DoubleSide });
            this.textureMaterial = material
        },
        createBasciMaterial() {
            let basicMaterial = new THREE.MeshBasicMaterial({
                color: 0x7777ff,
                wireframe: true
            })
            this.basicMaterial = basicMaterial;
        },
        createPhongMaterial(){
            let phongMaterial = new THREE.MeshPhongMaterial({
                color:0x7777ff,
            })
            this.phongMaterial =phongMaterial
        }
    }
}
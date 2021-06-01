export let materialMixins = {
    methods: {
        createBasicBox() {
            let boxGeo = new THREE.BoxGeometry(6, 8, 10,3,2,1);
            let boxMaterial = new THREE.MeshBasicMaterial({
                color: 0xff77ff,
                wireframe: true
            });
            let box = new THREE.Mesh(boxGeo, boxMaterial);
            box.position.x = 10;
            box.position.y = 4;
            box.position.z = 4;
            // box.side = "back";
            this.box = box;
            this.scene.add(box);
        },
        createDepthBox() {

        }
    },
}
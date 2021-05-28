export const geometryMixins = {
    methods: {
        // 创建球体
        createSphere(position) {
            let color = new THREE.Color('#f45')
            let sphereGeometry = new THREE.SphereGeometry(4);// 半径,>=3 默认8 ,
            let sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff })
            let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

            sphere.position.x = position[0];
            sphere.position.y = position[1];
            sphere.position.z = position[2];
            // sphere.position.set(position)
            sphere.castShadow = true;
            this.sphere = sphere;
            this.scene.add(sphere)
        },
        // 创建线
        createLine() {
            let lineMaterial = new THREE.LineBasicMaterial({
                color: 0x00ff00
            });
            let points = []
            points.push(new THREE.Vector3(-10, 0, 0));
            points.push(new THREE.Vector3(0, 10, 0))
            points.push(new THREE.Vector3(10, 0, 0))

            let geo = new THREE.BufferGeometry().setFromPoints(points)
            let line = new THREE.Line(geo, lineMaterial)
            this.scene.add(line)
        },
    }
}
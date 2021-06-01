export const geometryMixins = {
    methods: {
        createPlane() {
            let planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1)
            let planeMaterial = new THREE.MeshLambertMaterial({
                color: 0xffffff
            })
            let plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.rotation.x = -0.5 * Math.PI;
            plane.position.x = 15;
            plane.position.y = 0;
            plane.position.z = 0
            plane.receiveShadow = true
            this.plane = plane
            this.scene.add(plane)
        },
        // 创建球体
        createSphere(position) {
            let color = new THREE.Color('#f45')
            let sphereGeometry = new THREE.SphereGeometry(4,20,20);// 半径,>=3 默认8 ,
            let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff })
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
        // 创建圆柱体 上下半径不相等
        createCylinder(p) {
            let cylinderGeo = new THREE.CylinderGeometry(2, 8, 7, 40, 5, false);
            let cylinderMaterial = new THREE.MeshLambertMaterial({
                color: 0x0077ff
            })
            let cylinder = new THREE.Mesh(cylinderGeo, cylinderMaterial)
            cylinder.position.x = p[0]
            cylinder.position.y = p[1]
            cylinder.position.z = p[2]
            this.scene.add(cylinder)
        },
        // 创建圆柱体
        createEqualCylinder(p) {
            let cylinderGeo = new THREE.CylinderGeometry(8, 8, 7, 40, 5, false);
            let cylinderMaterial = new THREE.MeshLambertMaterial({
                color: 0x0077ff
            })
            let cylinder = new THREE.Mesh(cylinderGeo, cylinderMaterial)
            cylinder.position.x = p[0]
            cylinder.position.y = p[1]
            cylinder.position.z = p[2]
            this.scene.add(cylinder)
        }
    }
}
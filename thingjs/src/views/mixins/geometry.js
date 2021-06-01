import * as THREE from 'three';
export default {
    methods: {
        // 平面 长方形
        createPlane() {
            let planeGeometry = new THREE.PlaneGeometry(10, 5)
            let planeMaterial = new THREE.MeshLambertMaterial({
                color: 0xffff00,
                side: THREE.DoubleSide
            })
            let plane = new THREE.Mesh(planeGeometry, planeMaterial)
            plane.position.x = -30
            plane.position.z = 0;
            plane.position.y = 3;
            plane.receiveShadow = true;
            this.plane = plane
            this.scene.add(plane)
        },
        // 创建立方体
        createBox() {
            let boxGeometry = new THREE.BoxGeometry(10, 8, 6, 3, 2, 2)
            let boxMaterial = new THREE.MeshBasicMaterial()
            boxMaterial.color = new THREE.Color('#FFD700')
            boxMaterial.wireframe = true;// 线框
            let box = new THREE.Mesh(boxGeometry, boxMaterial)
            box.position.x = 10;
            box.position.y = 4;
            box.position.z = 0
            this.box = box
            this.scene.add(box)
        },
        // 球体
        createSphere(flag, position, hStart, hLen, vStart, vLen) {
            hStart = hStart || 0
            hLen = hLen || Math.PI * 2
            vStart = vStart || 0
            vLen = vLen || Math.PI
            let sphereGeo = new THREE.SphereGeometry(8, 10, 10, hStart, hLen, vStart, vLen);
            let sphereMaterial = new THREE.MeshBasicMaterial()
            sphereMaterial.color = new THREE.Color('#7FFF00');
            sphereMaterial.wireframe = flag
            let sphere = new THREE.Mesh(sphereGeo, sphereMaterial);
            sphere.position.x = position[0];
            sphere.position.y = position[1];
            sphere.position.z = position[2]
            this.scene.add(sphere)
        },
        createSphere2() {
            //球形网格 （半径长度，水平块的密度，垂直块的密度）
            let sphere = new THREE.Mesh(new THREE.SphereGeometry(12, 20, 10), this.textureMaterial);
            sphere.position.x = 75
            sphere.position.y = 0
            sphere.position.z = -35
            sphere.receiveShadow = true
            this.scene.add(sphere);
        },
        createCircle(segments, start, length) {
            segments = segments || 8
            start = start || 0
            length = length || Math.PI * 2
            let circleGeo = new THREE.CircleGeometry(8, segments, start, length)
            let circleMaterial = new THREE.MeshBasicMaterial({
                color: 0x00BFFF,
                wireframe: true,
                wireframeLinewidth: 8
            })
            let circle = new THREE.Mesh(circleGeo, circleMaterial);
            circle.position.x = 50
            circle.position.y = 0;
            circle.position.z = 20
            this.scene.add(circle);
        },
        createCylinder(topRadius, bottomRadius, height, position, openEnded, thetaStart, thetaLen) {
            thetaStart = thetaStart || 0
            thetaLen = thetaLen || Math.PI * 2
            let cylinderGeometry = new THREE.CylinderGeometry(topRadius, bottomRadius, height, 8, 1, openEnded, thetaStart, thetaLen)
            let cylinder = new THREE.Mesh(cylinderGeometry, this.textureMaterial);
            cylinder.position.x = position[0];
            cylinder.position.y = position[1]
            cylinder.position.z = position[2]
            this.scene.add(cylinder)
        },
        createTorus() {
            let torusGeometry = new THREE.TorusGeometry(10, 4, 8, 8, Math.PI * 2 / 3);
            let torusMaterial = new THREE.MeshBasicMaterial({
                color: 0xFFB6C1,
                wireframe: true
            })
            let torus = new THREE.Mesh(torusGeometry, torusMaterial);
            torus.position.x = -10
            this.scene.add(torus)
        },
        createTorusKnot() {
            let torusKnotGeo = new THREE.TorusKnotGeometry(8, 2, 64, 8,4,2)
            let torusKnot = new THREE.Mesh(torusKnotGeo, this.textureMaterial)
            torusKnot.position.x = 15
            torusKnot.position.z = 20
            this.scene.add(torusKnot)
        }
    }
}
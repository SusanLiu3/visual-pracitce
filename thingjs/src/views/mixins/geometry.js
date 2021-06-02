import * as THREE from 'three';
export default {
    methods: {
        // 平面 长方形
        createPlane(flag, position) {
            let planeGeometry = new THREE.PlaneGeometry(10, 5, 4, 2)
            let planeMaterial = new THREE.MeshBasicMaterial({
                color: 0xffff00,
                side: THREE.DoubleSide,
                wireframe: flag
            })
            let plane = new THREE.Mesh(planeGeometry, planeMaterial)
            plane.position.x = position[0]
            plane.position.z = position[1];
            plane.position.y = position[2];
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
            let torusKnotGeo = new THREE.TorusKnotGeometry(8, 2, 64, 8, 4, 2)
            let torusKnot = new THREE.Mesh(torusKnotGeo, this.textureMaterial)
            torusKnot.position.x = 15
            torusKnot.position.z = 20
            this.scene.add(torusKnot)
        },
        // 四面体
        createTetrahedron() {
            let tetrahedronGeo = new THREE.TetrahedronGeometry(4)
            let tetrahedronMaterial = new THREE.MeshBasicMaterial({
                color: 0x9400D3,
                wireframe: true
            })
            let tetrahedron = new THREE.Mesh(tetrahedronGeo, tetrahedronMaterial)
            tetrahedron.position.x = 30;
            tetrahedron.position.y = 15;
            tetrahedron.position.z = -25
            this.scene.add(tetrahedron)
        },
        createOctahedron() {
            let octaGeo = new THREE.OctahedronGeometry(8)
            let octaMaterial = new THREE.MeshBasicMaterial({
                color: 0x2E8B57,
                wireframe: true,
                wireframeLinewidth: 8,
                wireframeLinejoin: 'miter'
            })
            let octa = new THREE.Mesh(octaGeo, octaMaterial)
            octa.position.x = 38;
            octa.position.y = 5;
            octa.position.z = -15
            this.scene.add(octa)
        },
        createIcosahedron() {
            let icosahedronGeo = new THREE.IcosahedronGeometry(8)
            let icosahedronMaterial = new THREE.MeshBasicMaterial({
                color: 0x808000,
                wireframe: true,
                wireframeLinewidth: 8,
                wireframeLinejoin: 'miter'
            })
            let icosahedron = new THREE.Mesh(icosahedronGeo, icosahedronMaterial)
            icosahedron.position.x = 38;
            icosahedron.position.y = 15;
            icosahedron.position.z = 15
            this.scene.add(icosahedron)
        },
        createRing(pos, start, len) {
            start = start || 0
            len = len || Math.PI * 2
            let ringGeo = new THREE.RingGeometry(2, 6, 8, 4, start, len)
            let ringMaterial = new THREE.MeshBasicMaterial({
                color: 0xFFA500,
                wireframe: true,
            })
            let ring = new THREE.Mesh(ringGeo, ringMaterial);
            ring.position.x = pos[0]
            ring.position.y = pos[1];
            ring.position.z = pos[2]
            this.scene.add(ring);
        },
        createShape() {

            const x = -45, y = 20;
            const heartShape = new THREE.Shape();
            heartShape.moveTo(x + 5, y + 5);
            heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
            heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
            heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
            heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
            heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
            heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

            const geometry = new THREE.ShapeGeometry(heartShape);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, side: THREE.DoubleSide, });
            const mesh = new THREE.Mesh(geometry, material);
            this.scene.add(mesh);

            let circle = new THREE.Shape()
            circle.arc(-58, 0, 8, 0, Math.PI * 2)
            const cGeometry = new THREE.ShapeGeometry(circle);
            const cMaterial = new THREE.MeshBasicMaterial({ color: 0xFF6347, side: THREE.DoubleSide, });
            const cMesh = new THREE.Mesh(cGeometry, cMaterial);
            this.scene.add(cMesh);
        },
        createCone() {
            const coneGeo = new THREE.ConeGeometry(5, 20, 32);
            const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
            const cone = new THREE.Mesh(coneGeo, coneMaterial);
            cone.position.x = -50;
            cone.position.z = 20
            this.scene.add(cone);
        },
        createGeo() {
            let vertices = [
                new THREE.Vector3(-16, 12, -35),
                new THREE.Vector3(-8, 8, -20),
                new THREE.Vector3(-10, 0, -25),
                new THREE.Vector3(-20, 8, -20)
            ]
            // let geo = new THREE.Geometry() 废弃 https://sbcode.net/threejs/geometry-to-buffergeometry/
            let bufferGeo = new THREE.BufferGeometry()
            bufferGeo.setFromPoints([
                vertices[0],
                vertices[1],
                vertices[2],

                vertices[0],
                vertices[3],
                vertices[2],

                vertices[1],
                vertices[2],
                vertices[3],

                vertices[0],
                vertices[1],
                vertices[3],
            ])
            bufferGeo.computeVertexNormals()
            let material = new THREE.MeshBasicMaterial({
                color: 0xB22222,
                wireframe: true
            })
            let mesh = new THREE.Mesh(bufferGeo, material)
            this.scene.add(mesh)
        }
    }
}
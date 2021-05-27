export default {
    data() {
        return {
            camera: null,
            render: null,
            scene: null
        }
    },
    mounted() {

    },
    methods: {
        init() {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(45,
                window.innerWidth / window.innerHeight,
                .1,
                1000)
            this.render = new THREE.WebGLRenderer()
            this.render.setClearColor(new THREE.Color(0xeeeeee));
            this.render.setSize(window.innerWidth, window.innerHeight)
            this.render.shadowMap.enabled = true;
            this.camera.position.x = -30;
            this.camera.position.y = 40;
            this.camera.position.z = 30;
            this.camera.lookAt(this.scene.position);
            let spot = new THREE.SpotLight(0xffffff)
            spot.position.set(-40, 60, -10);
            spot.castShadow = true;
            this.scene.add(spot);
        },
        // 创建平面
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
            this.scene.add(plane)
        },
        renderer() {
            document.getElementById(this.id).appendChild(this.render.domElement);
            // this.render.render(this.scene, this.camera)
        },
        createVertice() {
            let vertices = [
                new THREE.Vector3(1, 3, 1),
                new THREE.Vector3(1, 3, -1),
                new THREE.Vector3(1, -1, 1),
                new THREE.Vector3(1, -1, -1),
                new THREE.Vector3(-1, 3, -1),
                new THREE.Vector3(-1, 3, 1),
                new THREE.Vector3(-1, -1, -1),
                new THREE.Vector3(-1, -1, 1),
            ]
            let faces = [
                new THREE.Face3(0, 2, 1),
                new THREE.Face3(2, 3, 1),
                new THREE.Face3(4, 6, 5),
                new THREE.Face3(6, 7, 5),
                new THREE.Face3(4, 5, 1),
                new THREE.Face3(5, 0, 1),
                new THREE.Face3(7, 6, 2),
                new THREE.Face3(6, 3, 2),
                new THREE.Face3(5, 7, 0),
                new THREE.Face3(7, 2, 0),
                new THREE.Face3(1, 3, 4),
                new THREE.Face3(3, 6, 4),
            ]

            let geo = new THREE.Geometry()
            geo.vertices = vertices;
            geo.faces = faces;
            geo.computeFaceNormals();
            var materials = [
                new THREE.MeshLambertMaterial({
                    opacity: 0.6,
                    color: 0x44ff44,
                    transparent: true
                }),
                new THREE.MeshBasicMaterial({
                    color: 0x000000,
                    wireframe: true
                })

            ];
            var mesh = THREE.SceneUtils.createMultiMaterialObject(geo, materials);
            mesh.children.forEach(function (e) {
                e.castShadow = true
            });

            this.scene.add(mesh);
        },
        createControls() {
            let that = this
            let controls = new function () {
                this.positionX = 0;
                this.positionY = 4;
                this.positionZ = 0;
            }
            let gui = new dat.GUI();
            let guiPosition = gui.addFolder('position');
            var contX = guiPosition.add(controls, 'positionX', -10, 10);
            var contY = guiPosition.add(controls, 'positionY', -4, 20);
            var contZ = guiPosition.add(controls, 'positionZ', -10, 10);
            contX.listen()
            contX.onChange(function () {
                that.cube.position.x = controls.positionX;
            })
            contY.listen()
            contY.onChange(function () {
                that.cube.position.y = controls.positionY;
            })
            contZ.listen()
            contZ.onChange(function () {
                that.cube.position.z = controls.positionZ;
            })
        },
        createCube() {
            let boxGeometry = new THREE.BoxGeometry(4, 4, 4)
            let boxMaterial = new THREE.MeshLambertMaterial({
                color: 0xfff000
            })
            let box = new THREE.Mesh(boxGeometry, boxMaterial)
            box.position.x = 0;
            box.position.y = 4;
            box.position.z = 0
            box.receiveShadow = true
            this.scene.add(box)
            this.cube = box
        },
        newRender() {
            requestAnimationFrame(this.newRender);
            this.render.render(this.scene, this.camera)
        },
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
        }
    },
}
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
            this.render.shadowMapEnabled = true;
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
            this.scene.add(plane)
        },
        renderer() {
            document.getElementById(this.id).appendChild(this.render.domElement);
            this.render.render(this.scene, this.camera)
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

            let geo =new THREE.Geometry()
            geo.vertices=vertices;
            geo.faces=faces;
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


             var mesh =new THREE.SceneUtils.createMultiMaterialObject(geo, materials);
             mesh.children.forEach(function (e) {
                 e.castShadow = true
             });

             this.scene.add(mesh);
        }
    },
}
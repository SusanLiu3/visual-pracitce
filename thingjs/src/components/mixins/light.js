export let lightMixins = {
    methods: {
        createLight(flag) {
            let ambientLight = new THREE.AmbientLight("#606008");
            this.scene.add(ambientLight);
            let spotLight = new THREE.SpotLight(0xffffff);
            spotLight.position.set(-30, 35, 25);
            spotLight.castShadow = true;
            spotLight.shadow.camera.near = 1;
            spotLight.shadow.camera.far = 120;
            spotLight.shadowCameraFov = 40;
            spotLight.target = this.plane;
            spotLight.distance = 0;
            spotLight.angle = 0.4;
            flag && this.scene.add(new THREE.CameraHelper(spotLight.shadow.camera));
            this.scene.add(spotLight);
        },
        createPointLight() {
            let point = new THREE.PointLight("#ccffcc");
            point.distance = 100;
            this.scene.add(point);
        },
        createHemiLight() {
            var hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6);
            hemiLight.position.set(0, 500, 0);
            this.scene.add(hemiLight);
        }
    },
}
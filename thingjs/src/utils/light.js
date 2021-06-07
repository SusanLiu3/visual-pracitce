import * as THREE from 'three'
export function lightProcess(cxt) {
    return {
        createAmbientLight() {
            let light = new THREE.AmbientLight(0x444444)
            cxt.scene.add(light)
        },
        createSpotLight() {
            let light = new THREE.SpotLight(0xffffff)
            light.position.set(-60, 30, 0);
            light.castShadow = true
            light.shadow.camera.near = 1
            light.shadow.camera.far = 100
            light.shadow.camera.fov = 120
            light.distance = 200
            light.angle = .4
            // let p = new THREE.Object3D();
            // p.position = new THREE.Vector3(60, 50, 0)

            light.target = cxt.plane
            cxt.scene.add(light)

            let lightHelper = new THREE.SpotLightHelper(light)
            cxt.scene.add(lightHelper)
        },
        createHemiLight(){
            let hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6);
            hemiLight.position.set(0, 500, 0);
            cxt.scene.add(hemiLight);
        }
    }
}
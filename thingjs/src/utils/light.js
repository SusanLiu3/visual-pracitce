import * as THREE from 'three'
export function lightProcess(cxt) {
    return {
        createAmbientLight() {
            let light = new THREE.AmbientLight('#606008')
            cxt.scene.add(light)
        },
        createSpotLight() {
            let light = new THREE.SpotLight(0xffffff)
            light.position.set(60, 30, 0);
            light.castShadow = true
            cxt.scene.add(light)
        }
    }
}
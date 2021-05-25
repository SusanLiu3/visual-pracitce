<template>
  <div id="threeWrap"></div>
</template>
<script>
export default {
  name: "threejs2",
  mounted() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let render = new THREE.WebGLRenderer();
    render.setClearColor(new THREE.Color(0xeeeeee));
    render.setSize(window.innerWidth, window.innerHeight);
    render.shadowMapEnabled = true;
    let spot = new THREE.SpotLight(0xffffff);
    spot.position.set(-40, 60, -10);
    spot.castShadow = true;
    scene.add(spot);

    // 添加平面
    let planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
    let planeMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, 0, 0);
    plane.receiveShadow = true;
    scene.add(plane);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    document.getElementById("threeWrap").appendChild(render.domElement);
    render1();

    let control = new (function() {
      this.addCube = function() {
        let boxGeometry = new THREE.BoxGeometry(4, 4, 4);
        let boxMaterial = new THREE.MeshLambertMaterial({
          color: 0xff0000
        });

        let box = new THREE.Mesh(boxGeometry, boxMaterial);
        box.castShadow = true;
        box.position.x = -4;
        box.position.y = 3;
        box.position.z = 0;
        scene.add(box);
      };
      this.removeCube = function() {};
    })();
    let gui = new dat.GUI();
    gui.add(control, "addCube");
    gui.add(control, "removeCube");
    function render1() {

      // rotate the cubes around its axes
      scene.traverse(function(e) {
        if (e instanceof THREE.Mesh && e != plane) {
          e.rotation.x += control.rotationSpeed;
          e.rotation.y += control.rotationSpeed;
          e.rotation.z += control.rotationSpeed;
        }
      });

      // render using requestAnimationFrame
      requestAnimationFrame(render1);
      render.render(scene, camera);
    }
  }
};
</script>
<template>
  <div id="threeWrap"></div>
</template>
<script>
export default {
  name: "threejs1",
  mounted() {
    // eslint-disable-next-line
    let scene = new THREE.Scene(); // 定义一个场景，容器，
    let camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let render = new THREE.WebGLRenderer(); // 渲染器
    render.setClearColor(new THREE.Color(0xeeeeee)); // 设置背景颜色
    render.setSize(window.innerWidth, window.innerHeight); //
    render.shadowMapEnabled = true; // 阴影

    // 创建坐标轴
    // let axis = new THREE.AxisHelper(10)
    // scene.add(axis);
    // 创建平面
    let planeGeometry = new THREE.PlaneGeometry(60, 20);
    // 纹理 // MeshBasicMaterial基本材质，对光源渲染无任何反应
    let planeMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);
    plane.receiveShadow = true;
    scene.add(plane);

    // 方块
    let boxGeometry = new THREE.BoxGeometry(4, 4, 4);
    let boxMaterial = new THREE.MeshLambertMaterial({
      color: 0xff0000,
    //   wireframe: true
    });
    let box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.castShadow = true;
    box.position.x = -4;
    box.position.y = 3;
    box.position.z = 0;
    scene.add(box);

    let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    box.castShadow = true;
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    scene.add(sphere);

    // 光源
    let spotLight = new THREE.SpotLight(0xffffff);
    // 光源位置
    spotLight.position.set(-40, 60, -10);
    // 开启阴影
    spotLight.castShadow = true;
    scene.add(spotLight);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    document.getElementById("threeWrap").appendChild(render.domElement);

    renderScene();
    let step=0
    function renderScene(){
          step+=.4;
          box.rotation.x+=.02
          box.rotation.y+=.02
          box.rotation.z+=.02
          render.render(scene,camera)

          sphere.position.x=20+10*Math.cos(step)
          sphere.position.y=2+10*Math.abs(Math.sin(step))
          requestAnimationFrame(renderScene)

    }
  }


};
</script>
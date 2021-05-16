<template>
    <div id="threeWrap"></div>
</template>
<script>
export default {
    name:'threejs1',
    mounted(){
        // eslint-disable-next-line
        let scene =new THREE.Scene();// 定义一个场景，容器，
        let camera= new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
        let render=new THREE.WebGLRenderer();// 渲染器
        render.setClearColor(new THREE.Color(0xEEEEEE));// 设置背景颜色
        render.setSize(window.innerWidth,window.innerHeight); // 
        
        // 创建坐标轴
        let axis = new THREE.AxisHelper(20)
        scene.add(axis);
        // 创建平面
        let planeGeometry = new THREE.PlaneGeometry(60,20);
        // 纹理
        let planeMaterial =new THREE.MeshBasicMaterial({
            color:0xAAAAAA
        })
        let plane=new THREE.Mesh(planeGeometry,planeMaterial)
        plane.rotation.x=-0.5 * Math.PI
        plane.position.set(15,0,0)
        scene.add(plane)

        camera.position.x = -0;
        camera.position.y = 10;
        camera.position.z = 30;
        camera.lookAt(scene.position);


        document.getElementById('threeWrap').appendChild(render.domElement)

        render.render(scene,camera)
        
    }
}
</script>

## three.js学习笔记
   ### 使用步骤
      1. 定义场景：场景用于保存、跟踪所要渲染的物体和光源
         ```
       let scene=  new THREE.Scene();
         ```
      2. 定义摄像机：决定了能够在场景看到什么
      ```
       let camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
      ```
      3. 定义渲染器：该对象会基于摄像机的角度计算出场景在浏览器中渲染成的样子
      ```
       let render = new THREE.WebGLRenderer(); 
      ```

      4. 光源:
      ```
      // 光源
    let spotLight = new THREE.SpotLight(0xffffff);
    // 光源位置
    spotLight.position.set(-40, 60, -10);
    // 开启阴影
    spotLight.castShadow = true;
    scene.add(spotLight);
      ```
      5. 相机位置

      6. 添加物体
         - 创建实例
         ```
         let bGeometry=new THREE.BoxGeometry(4,4,4)
         ```
         - 材质对象来设置物体的外观
         ```
         let material= new THREE.MeshLambertMaterial({
            color: 0xff0000,
            //   wireframe: true
         });
         ```
         - 
         ```
         let box = new THREE.Mesh(bGeometry, material);
         scene.add(box);
         ```
      7. 将渲染的结果挂载到某个物体
      ```
      document.getElementById().appendChild(render.domElement)
      ```
      8. 渲染器使用指定的场景和摄像机
      ```
      render.render(scene, camera);
      ```
  

## 解决git push unable acess to 
  ```
  git config --global http.proxy
  ```
## threejsAPI文档
   - [链接地址](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)


```
<p>test</p>
```
<style>
p{
   color:red
}
<style>

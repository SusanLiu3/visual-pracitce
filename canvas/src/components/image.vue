<template>
  <div>
    <canvas id="imgWrap" width="800" height="800" style="border:1px solid yellow"></canvas>
    <!-- <button @click="modifyImg">修改底色</button> -->
  </div>
</template>
<script>
import imgName from "../img/canvas.jpg";
import picImg from "../img/imgPic.jpg";
export default {
  data() {
    return {
      cxt: null
    };
  },
  mounted() {
    let canvas = document.getElementById("imgWrap");
    if (canvas.getContext) {
      this.cxt = canvas.getContext("2d");
      let img = new Image();
      img.src = imgName;
      let picImgName = new Image();
      picImgName.src = picImg;
      img.onload = () => {
        this.cxt.drawImage(img, 0, 0, 200, 200);
        // 平铺图像
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            this.cxt.drawImage(img, 200 + j * 50, i * 40, 50, 40);
          }
        }
      };
      picImgName.onload = ()=> {
        // 切片图像
        
        this.cxt.drawImage(picImgName, 0, 300);
        this.cxt.drawImage(img,80,100,180,200,90,360,320,230)
        this.cxt.webkitImageSmoothingEnabled=false
      };
    }
  },
  methods: {
    modifyImg() {
      let imgData = this.cxt.getImageData(0, 0, 200, 200);
      let { data } = imgData;
      let l = data.length;
      for (let i = 0; i < l; i += 4) {
        data[i] = 0;
        data[i + 1] = 0;
        // const r = data[i];
        // const g = data[i + 1];
        // const b = data[i + 2];
        // data[i] = 255 - r;
        // data[i + 1] = 255 - g;
        // data[i + 2] = 255 - b;
      }
      this.cxt.putImageData(imgData, 0, 0);
    }
  }
};
</script>

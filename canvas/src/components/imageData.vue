<template>
  <div>
    <canvas
      id="imgData"
      width="500"
      height="500"
      style="border:1px solid hsl(100,20%,20%)"
    ></canvas>
    <img :src="src" />
    <button @click="modify">改变</button>
    <button @click="revert">取反</button>
    <button @click="orginal">还原</button>
    <div
      :style="{
        backgroundColor: color,
        width: '200px',
        height: '200px',
        border: '1px solid green',
      }"
    >
      {{ color }}
    </div>
    <div
      :style="{
        backgroundColor: tempColor,
        width: '200px',
        height: '200px',
        border: '1px solid green',
      }"
    ></div>
  </div>
</template>
<script>
import country from '../img/canvas.jpg';
export default {
  data() {
    return {
      color: '',
      tempColor: '',
      cxt: null,
      canvas: null,
      src: '',
    };
  },
  mounted() {
    this.canvas = document.getElementById('imgData');
    if (this.canvas.getContext) {
      this.cxt = this.canvas.getContext('2d');
      this.orginal();
      this.canvas.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let imageData = this.cxt.getImageData(x, y, 10, 10).data;
        this.color = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3]})`;
        console.log(this.color);
        // 这种方式拿到的颜色会和实际的颜色有点出入
        let data2 = this.cxt.getImageData(0, 0, 500, 500).data;
        this.tempColor = `rgba(${data2[4 * (x - 1) * (y - 1)]},${
          data2[4 * (x - 1) * (y - 1) + 1]
        },${data2[4 * (x - 1) * (y - 1) + 2]},${
          data2[4 * (x - 1) * (y - 1) + 3]
        })`;
      });
    }
  },
  methods: {
    modify() {
      let imageData = this.cxt.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      let data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        let color = (data[i] + data[1 + i] + data[2 + i]) / 3;
        data[i] = color;
        data[i + 1] = color;
        data[i + 2] = color;
      }

      this.cxt.putImageData(imageData, 0, 0);
    },
    revert() {
      let imageData = this.cxt.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      let data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
      }
      this.cxt.putImageData(imageData, 0, 0);
    },
    orginal() {
      let img = new Image();
      img.src = country;
      img.onload = () => {
        this.cxt.drawImage(img, 0, 0);
        this.src = this.canvas.toDataURL();
        console.log(this.src);
      };
    },
  },
};
</script>

<template>
  <div id="mapWrap"></div>
</template>
<script>
export default {
  mounted() {
    new this.Scene({
      id: 'mapWrap',
      map: new this.Mapbox({
        style: 'dark',
        pitch: 0,
        center: [127.5671666579043, 7.445038892195569],
        zoom: 2.632456779444394,
        token:'pk.eyJ1IjoibHp4dWUiLCJhIjoiYnhfTURyRSJ9.Ugm314vAKPHBzcPmY1p4KQ'
      }),
      // map: new this.GaodeMap({
      //   pitch: 35.210526315789465,
      //   // style: 'blank',
      //   center: [104.288144, 31.239692],
      //   zoom: 4.4,
      // }),
    });
  },
};
</script>

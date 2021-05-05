<template>
  <div id="app">
   <div id="div3d"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
     /* eslint-disable-next-line */
    let app = new THING.App();
    app.create({
      type: "campus",
      url: "https://www.thingjs.com/static/models/storehouse"
    });
  }
}
</script>

<style>
</style>

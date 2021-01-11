<template>
    <div id="app">
       <axis></axis>
       <graphic></graphic>
    </div>
</template>
<script>
import axis from './components/axis.vue'
import graphic from './components/graphic.vue'
export default {
    components: {
        axis,
        graphic
    }
}
</script>
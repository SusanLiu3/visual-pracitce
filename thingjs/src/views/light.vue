<template>
    <div id="threeWrap"></div>
</template>
<script>
import initMixins from './mixins/init';
export default {
    name: 'light',
    mixins: [initMixins],
    data() {
        return {
            id: 'threeWrap'
        }
    },
    mounted() {
        this.init()
        
    },
    methods: {

    }
}
</script>
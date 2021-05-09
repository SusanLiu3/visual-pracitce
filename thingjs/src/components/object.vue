<!--
* @Author: 开发者
* @Change: 更改者
* @Date: 年-月-日
* @Description: app 对象
-->
<template>
    <div id="div3d"></div>
</template>

<script>
export default {
    name: '',
    props: [],
    data() {
        return {};
    },
    components: {},
    computed: {},
    watch: {},
    created() {},
    mounted() {
         /* eslint-disable-next-line */
        let app = new THING.App({
            cotainer: 'div3d',
            url: 'https://www.thingjs.com/static/models/storehouse',
        });
        app.create({
            type:'Sphere'
        })
    },
    methods: {},
    destroyed() {},
};
</script>

<style lang="scss" scoped>
</style>

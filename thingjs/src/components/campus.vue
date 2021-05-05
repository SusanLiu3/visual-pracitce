<template>
    <div id="div3d"></div>
</template>
<script>
export default {
    name: 'campus',
    mounted() {
        /* eslint-disable-next-line */
        let app = new THING.App({
            cotainer: 'div3d',
            url: 'https://www.thingjs.com/static/models/storehouse',
        });
        // 场景创建园区
        // let campus= app.create({
        //     type: 'Campus',
        //     url: 'https://www.thingjs.com/static/models/storehouse',
        // })
        app.on('load', function (ev) {
            let { campus } = ev;
            app.level.change(campus);
            // 分类对象提供三个属性
            let { buildings, things, ground } = campus
            console.log(buildings,things,ground)
            var build = app.query('107')[0];
            if (build.facade.visible) {
                build.facade.visible = false
                build.floors.visible = true
            }
        })
        // app.create({
        //     type: 'Campus',
        //     url: 'https://www.thingjs.com/static/models/chinesehouse'
        // })
    }
}
</script>
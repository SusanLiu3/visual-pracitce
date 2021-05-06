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
            console.log(buildings, things, ground)
            var build = app.query('107')[0];
            if (build.facade.visible) {
                build.facade.visible = false
                build.floors.visible = true
            }
            // app.on('enterlevel', '.Building', function (ev) {
            //     ev.current.expandFloors({
            //         time: 2000,
            //         complete: function () {
            //             console.log('expand floors complete')
            //         }
            //     })
            //     console.log(app.level.previous.type, '进入某建筑')
            // })
            // app.on('leavelevel', '.Building', function (ev) {
            //     ev.object.unexpandFloors({
            //         time: 1000,
            //     })
            //     console.log('从', app.level.previous.type, '退出')
            // })
            /* eslint-disable-next-line */
            app.on(THING.EventType.EnterLevel, '.Floor', function (ev) {
                let { brothers, animationNames=[]} = ev.object
                console.log(brothers,'888')
                brothers.fadeOut()
                if (animationNames.length){
                    ev.object.playAnimation({
                        name:animationNames[0]
                    })
                }
            })
            app.on('leavelevel','.Floor',function (ev) {
                let { brothers, animationNames=[]} = ev.object
                brothers.fadeIn()
                if (animationNames.length){
                    ev.object.playAnimation({
                        name:animationNames[0],
                        reverse:true
                    })
                }
            })
        })
        // app.create({
        //     type: 'Campus',
        //     url: 'https://www.thingjs.com/static/models/chinesehouse'
        // })
    }
}
</script>
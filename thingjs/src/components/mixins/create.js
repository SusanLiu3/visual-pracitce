export default {
    mounted() {
        /* eslint-disable-next-line */
        let app = new THING.App({
            cotainer: "div3d",
            // url: "https://www.thingjs.com/static/models/storehouse"
        });
        /**
         * create
         */
        // 球体
        app.create({
            type: 'Sphere',
            radius: 2,
            widthSegments: 16,
            heightSegments: 16,
            position: [0, 2, 0] // 球心所在的世界坐标
        })
        // 平面
        app.create({
            type: "Plane",
            width: 20, // 宽度
            height: 20, // 高度
            style: {
                doubleSide: true
            },
            angles: [90, 0, 0],
            position: [0, 0, 0] // 平面中心在世界坐标下的位置ƒ
        });
        // 圆柱
       let cylinder=app.create({
            type: 'Cylinder',
            radius: 2,
            height: 4,
            radiusSegment: 16,
            position: [10, 2, 0],
            angles: [90, 0, 0]
        })
        // 三角锥;
        let tt = app.create({
            type: "Tetrahedron",
            radius: 6,
            position: [2, 0, 2]
        });
        tt.destroy()
        app.on('update', function () {
            // 移动圆柱体(左右移动)
            cylinder.y = Math.cos(app.elapsedTime * 0.001) * 2;
        })
        // 设置最佳观看位置
        app.camera.fit();

        // 设置主灯光 开启阴影
        var mainLight = {
            shadow: true
        };
        app.lighting = {
            mainLight
        };
    },
}
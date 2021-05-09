export default  {
    mounted() {
        /* eslint-disable-next-line */
        let app = new THING.App({
            cotainer: "div3d",
            url: "https://www.thingjs.com/static/models/storehouse"
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
            width: 4, // 宽度
            height: 2, // 高度
            style: {
                doubleSide: true
            },
            position: [0, 9, 0] // 平面中心在世界坐标下的位置ƒ
        });
        // 圆柱
        app.create({
            type: 'Cylinder',
            radius: 2,
            height: 10,
            radiusSegment: 16,
            position: [10, 2, 0]
        })
        // 三角锥;
        app.create({
            type: "Tetrahedron",
            radius: 6,
            position: [2, 0, 2]
        });
    },
}
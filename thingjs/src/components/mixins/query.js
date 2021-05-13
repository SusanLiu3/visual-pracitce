export default {
    mounted() {
        /* eslint-disable-next-line */
        let app = new THING.App({
            cotainer: "div3d",
            url: "https://www.thingjs.com/static/models/storehouse"
        });
        app.on('load', function (e) {
            
        })
    },
}
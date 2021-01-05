# webpack jsx 配置

- [webpack jsx 配置](https://github.com/vuejs/babel-plugin-transform-vue-jsx)
- [模块热替换 webpack(5.10.0) webpack-cli(4.2.0) webpack-dev-server(3.11.0) 兼容性问题](http://www.mamicode.com/info-detail-3086761.html)

# visual-pracitce

# d3.js

## 数据相关

- [update enter exit 理解](https://www.cnblogs.com/koto/p/5980646.html)
  1、他们处理的是选择集和数据的数量不确定的情况，当数据和元素进行绑定时，会出现数据>元素、数据<元素 数据=元素这三种情况
  2、enter ：当 数据数量大于绑定的元素时（数据的数量比绑定元素多 3），这时会创建会创建 3 个空元素与数据对应，这部分称为 enter
  3、update ：当有元素和数据对应的部分称为 update
  4、exit ：当数据数量小于绑定的元素时（只有一个数据，三个元素这样），那么没有数据绑定的部分就称为 exit

  ```
   let p = this.d3
     .select('.list')
     .selectAll('.data-item')
     .data(['水果', '蔬菜', '海鲜']);

   let enter = p
     .enter()
     .append('div')
     .attr('class', 'data-item')
     .text((d) => d);
   let update = p.text((d) => d);
   let data2 = ['蓝莓'];

   let p2 = this.d3
     .select('.list')
     .selectAll('.data-item2')
     .data(data2);
   p2.exit().text(function(d) {
     return 'exit';
   });
   // let exit = p2.exit().remove();
   let update2 = p2.text((d) => d);
  ```

- call 允许选择集将自身作为参数传递给函数
  ```
  this.d3.selectAll('.call').call(function(item) {
      item.text((d) => 'test');
    });
  ```
- 其他 API 略

## 比例尺

- domain range 主要是根据数据映射到相应的位置数据
  1、domain 定义域，数据范围
  2、range 值域，位置数据范围
- 定量比例尺

  ### 线性比例尺 scaleLinear

  ```
    let scale = this.d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 500]);
  ```

  1、scale(x) 输入定义域返回值域
  2、scale.invert(y) 输入值域 返回定义域

  ```
    console.log(scale(5)); // 250 输入定义域获取值域
    console.log(scale(6)); // 300
    console.log(scale.invert(100)); // 2 输入值域返回定义域
  ```

  3、scale.domain() scale.range() 设置或者获取定义域、值域
  4、scale.ticks() 获取或者设置刻度值

  ```
   console.log(scale.domain()); // [0,10]
    console.log(scale.ticks()); // 获取刻度 项目用的还是比较多 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ```

  4、scale.nice() 将定义域的范围自动扩展为较为理想的范围

  ```
  let niceScale = this.d3
      .scaleLinear()
      .domain([0.1234, 0.23456])
      .range(0, 10);
    niceScale.nice();
    console.log(niceScale.domain()); // [0.12, 0.24]
  ```

  5、scale.tickFormat(count,[format]) 设置定义域内值得表现形式

  ```
  let ticksFormat = scale.tickFormat(5,'$');
    ticks.map((item, idx) => {
      ticks[idx] = ticksFormat(ticks[idx]);
    });
  ```

  ### 指数标尺和对数标尺 scalePow() scaleLog()

  - 方法和线性比例尺一样，多了一个 exponent()指定指数得方法

  ```
  // exponent() 指定指数
    let powScale =this.d3.scalePow().exponent(3)
    .domain([0,3])
    .range([0,10])

    console.log(powScale.invert(10))// 3
  ```

  ### 量化比例尺 scaleQuantize() 定义域连续 值域离散

  ```
   let scaleQ = this.d3
      .scaleQuantize()
      .domain([0, 10])
      .range(['apple', 'banana', 'peer']);
      // 将定义域分为3段 ，每段对应一个值
    console.log(scaleQ(2), 'scaleQuantize'); // apple
    console.log(scaleQ(3), 'scaleQuantize'); // apple
    console.log(scaleQ(4), 'scaleQuantize'); // banana
    console.log(scaleQ(6), 'scaleQuantize'); // banana
    console.log(scaleQ(7), 'scaleQuantize'); // peer
     console.log(scaleQ(10), 'scaleQuantize'); // peer
  ```

- 序数比例尺

  #### scaleOrdinal

  - 定义域 值域都是离散值 ，在求值域的时候，输入的值不在定义域内，则返回值域的第一个值

  ```
   let scaleO = this.d3
      .scaleOrdinal()
      .domain([1, 2, 3, 4, 5])
      .range(['水果', '蔬菜', '沙拉', '海鲜', '面食']);
    console.log(scaleO('3')); // 沙拉
    console.log(scaleO('6')); // 水果 超过domain的数量按照第一个返回
  ```

  #### scalePoint

  - ![padding,range](https://raw.githubusercontent.com/SusanLiu93/visual-pracitce/master/d3/img/ponit.png)
  - [参考](https://observablehq.com/@d3/d3-scalepoint)

  ```
      // scalePoint()  domain range padding
    let scaleP = this.d3
      .scalePoint()
      .domain(['A', 'B', 'C'])
      .range([0, 120]);
    console.log(scaleP('A')); // 0
    console.log(scaleP('B')); // 60
    console.log(scaleP('C')); // 120

    scaleP.padding('.5');
    // domain 分成两段，加上padding 两段 padding占据每一段的.5
    console.log(scaleP('A')); // 20
    console.log(scaleP('B')); // 60
    console.log(scaleP('C')); // 100
  ```

  #### scaleBand

  - ![padding(),paddingOuter(),paddingInner()](https://raw.githubusercontent.com/SusanLiu93/visual-pracitce/master/d3/img/band.png)
  - padding() 内边距和外边距设置为相同边距值的简写 默认是 0
  - paddingInner() 内边距 paddingOuter() 外边距 padding() 内外边距相同的简写
  - bandwidth() 每个频带的宽度
  - step() 相邻频带起始点的距离

  ```
      let scaleB = this.d3
      .scaleBand()
      .domain(['1', '2', '3', '4', '5'])
      .range([0, 100]);
    console.log(scaleB(3), 'band'); //20 根据定义域中的值，返回值域中频带的开始
    console.log(scaleB(5), 'band'); // 80
    console.log(scaleB.bandwidth(), 'band'); // 20 频带的宽度
    console.log(scaleB.step()); // 相邻频带起始点之间的距离

    scaleB.paddingOuter(0).paddingInner(0.5); // 内边距  step *.5
    console.log(scaleB.bandwidth()) // 11.11
    console.log(scaleB.step()) // 22.22
  ```

## 坐标轴

### 坐标轴 api

- axisTop(scale) axisBottom axisLeft axisRight 分别 给定一个 向上 向下 向左向右的刻度生成器 刻度大小是 6 填充是 3
- axis(context) 将轴传给上下文 它可以是 svg 容器 也可以是相应的转换
- tickValues([]) 设置或者获取坐标的指定刻度
- tickSize() 设置或者获取刻度长度
- tickSizeInner() 设置或获取坐标内部刻度的长度 ;内部刻度指非两端的刻度
- tickSizeOuter() 设置或获取坐标外部刻度的长度;外部刻度指两端的刻度
- ticks([count/interval],显示设置格式) 设置坐标的刻度数 或者 间隔 ;第二个参数需要显示设置格式
- 画坐标轴三步走
  1 定义比例尺
  2 定义刻度生成器，并且把比例尺传给刻度生成器
  3 定义 元素 g
  4 g.call(axis)

```
 // 定义scale 比例尺
    let scale = this.d3
      .scaleBand()
      .domain(['apple', 'orange', 'peer', 'banana'])
      .range([0, 320]);
    // 坐标 向上的刻度轴
    let tAxis = this.d3.axisTop(scale);
    // svg中添加g元素
    let gtAxis = svg.append('g').attr('transform', 'translate(50,50)');
    // 坐标轴给g 元素回调
    gtAxis.call(tAxis);

    let lAxis = this.d3.axisLeft(scale);
    let glAxis=svg.append('g').attr('transform','translate(40,0)')
    glAxis.call(lAxis)

    let scaleR=this.d3.scaleLinear().domain([0,10]).range([0, 320])
    let axisR=this.d3.axisRight(scaleR).tickValues([2,4,6,8]).tickSizeInner(3).tickSizeOuter(10)
    let svgR=svg.append('g').attr('transform','translate(50,60)')
    svgR.call(axisR)

    let scaleB=this.d3.scaleLinear().domain([0,10]).range([0,320])
    let axisB=this.d3.axisBottom(scaleB).ticks([2],'.1f')
    let svgB=svg.append('g').attr('transform','translate(50,60)')
    svgB.call(axisB)
    console.log(axisR.tickValues(),'*****')
```

## 图形生成器

### 颜色

- d3.rgb() 创建颜色
- d3.interpolate(color1,color2) 两个颜色直接的差值
- color.hex() 返回十六进制颜色形式

```
    let a = this.d3.rgb('red');
    let b = this.d3.rgb('green');
    this.compute = this.d3.interpolate(a, b); // 两个颜色直接的差值
    compute(0)
    compute(0.5)
    compute(1)
    a.hex()
```

### line 线段生成器

- d3.line() 创建折线生成器
- line.x(x) 将 x 生成器设置为指定的函数或者数值
- line.y(y) 将 y 生成器设置为指定的函数或者数值
- line.curve() 差值模式
- line.defined() 某个值是否存在在线段中
- [demo](./d3/src/components/chartBuilder/line.vue)

### 区域生成器

- 基础 api 同线段生成器一样，相交线段生成器多了以下几个 api
- line.x0(),line.y0(),line.x1(),line.y1()
- [demo](./d3/src/components/chartBuilder/area.vue)

### 弧形生成器

- d3.arc() 创建弧形生成器
- arc.innerRadius(radius) 设置内部半径
- arc.outerRadius(radius) 设置外部半径
- arc.centroid(d) 弧中心坐标 包含横纵坐标数组 [x,y]
- d3.pie(data) 可以将 data 转换成弧形会绘制的原始数据
  ![数据结构](https://raw.githubusercontent.com/SusanLiu93/visual-pracitce/master/d3/img/pie.png)
- d3.schemeCategory10 生成颜色
- [demo](./d3/src/components/chartBuilder/arc.vue)

## 过渡

- selection.transition([name]) 创建过渡 ,返回的是一个过渡对象
- delay() 过渡延时时间
- duration() 过渡持续时间
- ease() 指定的元素选中过渡函数
- attr(name,value) 将元素的指定属性过渡到目标值,value 可以是一个函数或者值
- attrTween(name,[factory]) 将属性使用插值函数进行过渡
- style(name,value) 将样式属性过渡到目标值
- transition.select() selectAll() filter() 选中过渡对象 以及过滤过渡对象
- transition.each(fun) 为每个过渡对象执行 fun 函数
- transition.call(fun) 当前过渡指定一次指定的函数

```
let svg = d3
      .select('.transition')
      .append('svg')
      .attr('width', 600)
      .attr('height', '40em');

    let data = [
      ['苹果', 2],
      ['李子', 4],
      ['香蕉', 10],
      ['橘子', 8],
    ];
    // 画轴 : 定义比例尺   定义axis  定义轴容器
    let scaleX = d3
      .scaleBand()
      .domain(['苹果', '李子', '香蕉', '橘子'])
      .range([0, 550])
      .paddingOuter(0.5)
      .paddingInner(0.5);

    let axisX = d3.axisBottom(scaleX);
    let gX = svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(50,600)');
    gX.call(axisX);

    let scaleY = d3
      .scaleLinear()
      .domain([0, 10])
      .range([550, 0]);
    let axisY = d3.axisLeft(scaleY);
    let gY = svg
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', 'translate(50,50)');
    gY.call(axisY);

    let step = scaleX.step();
    let inner = step * 0.5;

    // 画柱子
    svg
      .selectAll('rect')
      .data(data, (d) => d[1])
      .enter()
      .append('rect')
      .attr(
        'x',
        (d, idx) => 50 + scaleX(d[0]) + 15
      )
      .attr('y', (d) => scaleY(d[1]) + 50 )
      .attr('width', 30)
      .attr('height', 100)
      .attr('fill', 'red')
      .attr('stroke-width', 1)
      .transition()
      .duration(3000)
      .delay(200)
      .ease(d3.easeLinear)
      .attr('height', (d) => 550-scaleY(d[1]));
```

## 交互

- 过渡对象没有监听对象，如果想监听对象 需要把监听对象写在过渡之前
- selection('on',func)
- 事件类型

  - 鼠标事件
    - 代码
    ```
       rect.on('mouseover', function(d) {
      // 不可以使用箭头函数
       d3.select(this).transition()
         .duration(500)
         .attr('fill', 'yellow');
     })
     .on('mouseout',function(d) {
        d3.select(this).transition()
         .duration(500)
         .attr('fill', 'green');
     })
    ```
    - 事件类型
      | 事件 | 说明 |
      | :----: | :----:|
      | click | 点击事件 |
      | mouseover | 鼠标移动到目标上 |
      | mousemove | 鼠标移动 |
      | mouseout | 鼠标移出元素 |
      | mousedown | 鼠标按下 |
      | mouseup | 鼠标按下松开 |
  - 按键事件
    - 代码
    ```
     d3.select('body')
    .on('keydown', function () {
        rect.attr('fill', function (d) {
            if(d === String.fromCharCode(event.keyCode)) {
                return 'green'
            }else {
                 return 'red'
             }
        })
    })
    .on('keyup', function () {
        rect.attr('fill', 'green')
    })
    ```
    - 事件类型
      | 事件 | 说明 |
      | :----: | :----:|
      | keydown | 按键按下 |
      | keyup | 键盘松开 |
      | keypress | 特殊按键 |
  - 触摸事件
    | 事件 | 说明 |
    | :----: | :----:|
    | touchstart | 接触屏幕 |
    | touchmove | 在屏幕上移动 |
    | touchend | 离开屏幕 |  
     | touches(this) | 获取接触点的坐标 |

- 行为事件
  - drag
  - api
    - d3.drag 创建一个拖拽交互
    - drag() 将拖拽应用在元素上
    - drag.on('事件',callback)
      on('start') 拖拽开始 mousedown/touchstart
      on('end') 拖拽结束 mouseup/touchend
      on('drag')拖拽中 mousemove/touchmove
  ```
  let circle=svg
      .append("circle")
      .attr("cx", 200)
      .attr("cy", 200)
      .attr("r", 100)
      .attr('stroke','black')
      .attr('fill','#69a3b2')
    let drag=d3.drag().on('start',function(d){
        console.log('开始拖动')
    }).on('end',function (d) {
        console.log('结束拖动')
    }).on('drag',function (d) {
        d3.select(this).attr('cx',event.x)
        .attr('cy',event.y)
        console.log(event)
    })
    circle.call(drag)
  ```

## 导入导出

- 安装 d3-fetch
- d3 只能取服务器上的文件，不能读取本地
- .json ,.text ,.csv

# canvas 待定

[参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

- 定义：canvas 是可以使用脚本(javascript)绘图的元素，可以用来制作图片，图表，制作动画等；
- 关于<canavs>标签: id 不是必选; 宽高默认是 150 \* 300 ; 也可以像应用在 div 上的其他样式应用在 canvas 上
- 一些术语:
  - 栅格：在使用 canvas 时，我们定义了 canvas 的宽和高，这就形成了 500\*600 的坐标，左上角是起点(0,0)
    canvas 默认被网格覆盖，每一个单元格 代表 canvas 元素中的一个像素。
  - 渲染上下文：getContext('2d') 获取渲染上下文和绘图功能
  ```
   let canvas = document.getElementById('canvasWrap'); // canvas元素
    if (canvas.getContext) {
      // 兼容性处理
      let cxt = canvas.getContext('2d'); // 上下文, 后面的画图都是拿这个对象来进行绘制的
    } else {
      // 针对不支持canvas的浏览器做的优雅降级
    }
  ```
- 图形绘制

  - canvas 只支持两种形式的图形绘制：矩形和路径（由点连接成的线）

  ## 矩形

  - fillStyle 填充颜色, fillRect(x,y,width.height) 绘制一个填充矩形,strokeRect(x,y,width,height) 绘制一个矩形的边框
    clearRect(x,y,width,height) 清除指定矩形区域，让清除部分完全透明
  - rect(x,y,width,height) 额外的绘制矩形方法 

  ```
   // 兼容性处理
      let cxt = canvas.getContext('2d'); // 上下文, 后面的画图都是拿这个对象来进行绘制的
      cxt.fillStyle = 'hsla(360, 100%, 80%, 1)';
      cxt.fillRect(100, 100, 200, 200);

      // 从坐标为120 * 120 处 擦除宽高分别为20px
      cxt.clearRect(120,120,20,20)
      // 描边
      cxt.strokeStyle='hsla(170,60%,40%,1)'
      cxt.lineWidth=4 // 设置宽度
      cxt.strokeRect(200, 150, 50, 50);
  ```

  ## 路径

  - 图形的基本元素是路径；路径是多个不同颜色和宽度的线段或者曲线相连形成的不同形状的点的集合
  - 路径都是闭合的
  - 绘制步骤
    1. 创建路径起点
    2. 借助画图命令去画路径
    3. 把路径封闭
    4. 一旦路径形成，可以通过填充或者描边来丰富路径
  - api
    | api | 说明 |
    | :----: | :----: |
    | beginPath() | 新建一条路径，图形绘图命令被指向到路径上 |
    | closePath() | 闭合路径，图形绘图命令重新回到上下文中 |
    | stroke() | 通过线条来绘制图形轮廓,不会自动闭合路径，如果需要闭合路径，则需要调用 closePath() |
    | fill() | 通过填充路径的内容区域来生成实心图形,会自动闭合路径 |
  - demo

  ```
  // 填充三角形
    cxt.beginPath()
    cxt.moveTo(310,300)
    cxt.lineTo(310,350)
    cxt.lineTo(400,350)
    cxt.strokeStyle='green'
    cxt.fillStyle='hsl(160,20%,80%)'
    cxt.fill()
  // 描边三角形
    cxt.beginPath()
    cxt.moveTo(310,300)
    cxt.lineTo(310,350)
    cxt.lineTo(400,330)
    cxt.lineWidth=8 // 设置宽度
    cxt.fillStyle='hsl(160,20%,80%)'
    cxt.closePath() // 非必须，
    cxt.stroke()
  ```

  ## 笔触

  - moveTo() 移动笔触，移动到坐标为 x,y 的点，实际上不会画出任何东西，可以作为路径的起始点

  ## 线

  - lineTo(x,y) 绘制一条从当前点 到 x,y 坐标点 的线

  ## 弧

  - 绘制圆弧或者圆，使用 arc() 或者 arcTo() (不推荐,不够可靠)
  - arc(x,y,radius,startAngle,endAngle,anticlockwise)
    以坐标点 x,y 为圆心，绘制一个半径是 radius，从 startAngle 到 endAngle 的弧
    anticlockwise：false 顺时针(默认) true 逆时针
    弧度=(Math.PI/180)\*角度
  - arcTo(x1,y1,x2,y2,radius)
    根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点
  - demo

    ```
    // mdn 例子 四行三列
     for (var i = 0; i < 4; i++) {
       for (var j = 0; j < 3; j++) {
         cxt.beginPath();
         let x = 450 + j * 80;
         let y = 450 + i * 80;
         let radius = 20;
         let startAngle = 0;
         let endAngle = (Math.PI + (Math.PI * j)) / 2;
         let clockwise = j % 2 === 0 ? false : true;
         cxt.arc(x, y, radius, startAngle, endAngle, clockwise);

         if (i>1){
             cxt.fill() // 填充
         }else{
             cxt.stroke()
         }
       }
     }
    ```

  ## 贝塞尔曲线

  1. 二次贝塞尔曲线 quadraticCurveTo(控制点 x,控制点 y,结束点 x,结束点 y) [参考文档](https://zhuanlan.zhihu.com/p/83163681)

  ```
  cxt.beginPath();
   cxt.moveTo(10,450)
   cxt.quadraticCurveTo(120,480,100,600)
   cxt.fill() // cxt.stroke()
  ```

  ```
      cxt.beginPath();
      cxt.moveTo(40,450)
      cxt.quadraticCurveTo(35,470,40,600)
      cxt.quadraticCurveTo(55,600,70,600)
      cxt.quadraticCurveTo(75,610,55,625)
       cxt.quadraticCurveTo(100,610,100,600)
       cxt.quadraticCurveTo(150,605,180,600)
       cxt.quadraticCurveTo(185,500,180,450)
       cxt.closePath()
       cxt.stroke()
  ```

  2. 三次贝塞尔曲线

  ```
  // 三次贝塞尔曲线
      cxt.beginPath();
      cxt.moveTo(150, 650);
      cxt.bezierCurveTo(280, 620, 300, 750, 100, 850);
      cxt.moveTo(150, 650);
      cxt.bezierCurveTo(20, 620, 0, 750, 100, 850);
      cxt.fill();
  ```
  ## Path2D
    - 创建一个对象，路径的方法都可以用在上面
    - 实例方法；路径里面的rect() arc() lineTo() moveTo() closePath(),addPath()等都可以使用
    - 使用
    ```
     new Path2D()
     new Path2D(path)
     new Path2D(d)
    ```
    - demo1
    ```
    let cxt = canvas.getContext('2d');
      let rect = new Path2D();
      rect.rect(20, 20, 50, 50);
      cxt.fillStyle='hsl(135,60%,20%)'
      cxt.fill(rect);

      let arc=new Path2D()
      cxt.strokeStyle='hsl(0,80%,20%)'
      arc.arc(100,40,20,Math.PI*.45,Math.PI*.9,true)
      cxt.stroke(arc)

      let line =new Path2D()
      line.moveTo(200,20)
      line.lineTo(250,40)
      line.lineTo(300,20)
      // line.closePath()
      // cxt.stroke(line)
       cxt.fill(line)
    ```
    - demo2
    ```
    /**
       * xNew = a x + c y + e
         yNew = b x + d y + f
       */
      var m = document
        .createElementNS('http://www.w3.org/2000/svg', 'svg')
        .createSVGMatrix();
      m.a = 1;
      m.b = 0;
      m.c = 0;
      m.d = 1;
      m.e = 300;
      m.f = 0;
      rect.addPath(rect, m);
      cxt.fill(rect);
    ```
# svg 待定

# antv (图表可视化插件) 待定

# hsla() 
[参考文档](https://css-tricks.com/yay-for-hsla/)
- h 代表色相,0-360 , 0 或者 360 代表红色，120 代表绿色 ，240 代表蓝色
- s 饱和度 0% 完全变性(全灰度) ,100% 完全饱和(全色彩)
- l 亮度 0% 黑色, 100% 白色 ,50% 平均亮度
- a 透明度

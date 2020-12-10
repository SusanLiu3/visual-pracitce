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

  ### scaleOrdinal

  - 定义域 值域都是离散值 ，在求值域的时候，输入的值不在定义域内，则返回值域的第一个值

  ```
   let scaleO = this.d3
      .scaleOrdinal()
      .domain([1, 2, 3, 4, 5])
      .range(['水果', '蔬菜', '沙拉', '海鲜', '面食']);
    console.log(scaleO('3')); // 沙拉
    console.log(scaleO('6')); // 水果 超过domain的数量按照第一个返回
  ```

  ### scalePoint

  - [padding,range](<img rsc='./d3/img/point.png'/>)
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

  ### scaleBand

  - [padding(),paddingOuter(),paddingInner()](<img src='./d3/img/band.png' />)
  - padding() 内边距和外边距设置为相同边距值的简写 默认是 0
  - bandwidth() 每个频带的宽度
  - step() 相邻频带起始点的距离
  - paddingInner() 内边距 paddingOuter() 外边距 padding() 内外边距相同的简写

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
  ### 坐标轴api
  - scaleTop(scale)
  
# svg 待定

# canvas 待定

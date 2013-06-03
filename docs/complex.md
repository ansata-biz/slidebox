# SlideboxComplex

---

Slidebox 提供了列表切换的动画效果，适合横向纵向、无限循环、自动循环等场景。

---


## 配置说明

### template `string`

.tpl 文件路径，内容模板。

### parentNode `element`

浮层的父元素，默认为 document.body，只读。

### dataSource `array | function`

商品数据，与 tpl 模板的变量对应上。默认模板对应的数组内的每项均是对象，包含每个商品的信息。

```js
[
	{
		title: 'Hot selling Mini Player...', // 截取的商品标题
		url: 'http://www.aliexpress.com/item/Free-shipping-subwoofer-in-ear-earphones-mp3-mp4-mobile-phone-computer-general-earphone-bass-high-qaulity/848391895.html', // 商品 detail 的 URL
		image: 'http://i00.i.aliimg.com/wsphoto/v1/596759706/Hot-new-Free-size-S-M-lace-gloves-with-cloth-black-font-b-sexy-b-font.summ.jpg', // 商品图片地址
		description: 'Hot selling Mini Player 8GB portable Clip-on MP3 Player (Purple)', // 商品描述或完整标题
		price: 'US $156.20', // 售价
		originalPrice: 'US $198.80', // 原价
		unit: 'piece',	// 单位
		rating: '0.85', // 评分, 0 到 1 之间
		ratingCount: '1258', // 评价数量
		order: '5126' // 下单数量
	}
]
```

### includeButtons `boolean`

是否显示按钮，默认为 `true`。

### unlimited `boolean`

无限量的，默认为 `false`。

### mode `string`

展示模式，可输入 `horizontal`|`vertical`，默认为 `horizontal`。

### minSpace `number`

每个区块的最小空间，默认为 170。这个决定了每页显示多少个区块。

### steps `number`

每批滑动个数，默认为 0。设置为 0 或负数，按页分批。

### autoplay `boolean`

是否自动滚动，默认为 `false`。

### interval `number`

自动滚动时间间隔，默认为 3000。当 `autoplay` 为 `false` 该设置失效。


## 方法说明

### render()

生成 Slidebox 的 DOM 结构和样式并插入文档流。


## 最佳实践

1. 传入数据构建

	```html
	<div id="slidebox"></div>
	```

	```js
	seajs.use(['slidebox-commplex'], function(Slidebox) {
		new SlideboxCommplex({
			parentNode: '#slidebox',
			dataSource: [
				{
					title: 'One piece seamless panties viscose...',
					url: '#',
					image: 'http://i00.i.aliimg.com/wsphoto/v0/900802532/One-piece-seamless-panties-viscose-women-s-panties-cool-font-b-sexy-b-font-women-s.jpg_50x50.jpg',
					description: 'One piece seamless panties viscose women\'s panties cool sexy women\'s briefs',
					price: 'US $56.20',
					unit: 'piece'
				},
				{
					title: 'One piece seamless panties viscose...',
					url: '#',
					image: 'http://i00.i.aliimg.com/wsphoto/v0/900802532/One-piece-seamless-panties-viscose-women-s-panties-cool-font-b-sexy-b-font-women-s.jpg_50x50.jpg',
					description: 'One piece seamless panties viscose women\'s panties cool sexy women\'s briefs',
					price: 'US $56.20',
					unit: 'piece'
				},
				{
					title: 'One piece seamless panties viscose...',
					url: '#',
					image: 'http://i00.i.aliimg.com/wsphoto/v0/900802532/One-piece-seamless-panties-viscose-women-s-panties-cool-font-b-sexy-b-font-women-s.jpg_50x50.jpg',
					description: 'One piece seamless panties viscose women\'s panties cool sexy women\'s briefs',
					price: 'US $56.20',
					unit: 'piece'
				}
			]
		}).render();
	});
	```

2. 异步请求数据构建

	```html
	<div id="slidebox"></div>
	```

	```js
	seajs.use(['slidebox-commplex'], function(Slidebox) {
		new SlideboxComplex({
			parentNode: '#slidebox',
			dataSource: function(value, done) {
				var that = this;
				$.ajax('http://api.aliexpress.com/data-source.json', {
					dataType: 'json'
				}).success(function(xhr) {
					var data = xhr.productlist['2056'];
					var items = [];
					for(var i=0,len=data.length; i<len; i++) {
						var description = data[i].subject;
						var title = description;
						if(description.length > 33) {
							title = title.substring(0, 30) + '...'
						}
						var item = {
							title: title,
							url: data[i].detail_url,
							image: data[i].img_url,
							description: description,
							price: data[i].currency_symbol + data[i].min_product_price,
							unit: data[i].product_unit
						};
						items.push(item);
					}
					done(items);
				});
				return false;
			}
		}).render();
	});
	```

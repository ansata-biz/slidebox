# Slidebox

---

Slidebox 提供了列表切换的动画效果，适合横向纵向、无限循环、自动循环等场景。运行于 [AraleJS](https://github.com/aralejs) 框架。

[API 文档](http://arale.alizoo.com/slidebox/) | [Demo 示例](http://arale.alizoo.com/slidebox/examples/)

---


## 配置说明

### element `element`

滑动区域的 jQuery 对象。

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

### prev()

翻到上一批。

### next()

翻到下一批。

### resize()

重置 slider 尺寸。


## 最佳实践

1. 水平滚动区域

	```html
	<div class="ui-slidebox clearfix" id="slidebox">

		<div class="ui-slidebox-wrap">
			<div class="ui-slidebox-container">

				<div class="ui-slidebox-slider" data-role="slider">
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
					</ul>
				</div>

			</div>
		</div>

		<div class="ui-slidebox-prev">
			<a class="ui-slidebox-disabled" data-role="prev">Preview</a>
		</div>

		<div class="ui-slidebox-next">
			<a class="ui-slidebox-disabled" data-role="next">Next</a>
		</div>

	</div>
	```

	```js
	seajs.use(['slidebox'], function(Slidebox) {
		new Slidebox({
			element: '#slidebox'
		}).render();
	});
	```

2. 垂直滚动区域

	```html
	<div class="ui-slidebox ui-slidebox-vertical clearfix" id="slidebox">

		<div class="ui-slidebox-wrap">
			<div class="ui-slidebox-container">

				<div class="ui-slidebox-slider" data-role="slider">
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
					</ul>
				</div>

			</div>
		</div>

		<div class="ui-slidebox-prev">
			<a class="ui-slidebox-disabled" data-role="prev">Preview</a>
		</div>

		<div class="ui-slidebox-next">
			<a class="ui-slidebox-disabled" data-role="next">Next</a>
		</div>

	</div>
	```

	```js
	seajs.use(['slidebox'], function(Slidebox) {
		new Slidebox({
			element: '#slidebox',
			mode: 'vertical'
		}).render();
	});
	```

3. Widget 方式加载组件

	```html
	<div class="ui-slidebox clearfix" data-widget="slidebox">

		<div class="ui-slidebox-wrap">
			<div class="ui-slidebox-container">

				<div class="ui-slidebox-slider" data-role="slider">
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
					</ul>
				</div>

			</div>
		</div>

		<div class="ui-slidebox-prev">
			<a class="ui-slidebox-disabled" data-role="prev">Preview</a>
		</div>

		<div class="ui-slidebox-next">
			<a class="ui-slidebox-disabled" data-role="next">Next</a>
		</div>

	</div>
	```

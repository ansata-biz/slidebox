define(function(require, exports, module) {
	var $ = require('$');
	var Templatable = require('templatable');
	var Slidebox = require('slidebox');
	var DataSource = require('./data-source');
	var template = require('./slidebox.tpl');

	var ROLE_SLIDER = 'slider';
	var VERTICAL = 'vertical';

	var SlideboxComplex = Slidebox.extend({
		Implements: [Templatable],

		attrs: {
			template: template,
			dataSource: [],
			includeButtons: true,

			// 商品数据 (私有, 不对外开放)
			data: []
		},

		/**
		 * Handlebars 自定义方法
		 */
        templateHelpers: {
			// 格式化数值, 每 3 位一个逗号
			digits: function(num) {
				return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
			},

			// 乘法, 参数: 被乘数, 乘数, 小数保留位数
			multiple: function(multiplicand, multiplier, fixed) {
				var value = multiplicand * multiplier;
				return value.toFixed(fixed);
			},

			// rating 的百分比, 因为 IE 系列浏览器处理 style="{{xxx}}" 的内容时会丢弃掉样式代码, 所以被迫将这段代码放在这里
			ratingPrecent: function(val) {
				var result = '<span style="width:' + val * 100 + '%"></span>';
				return new Handlebars.SafeString(result);
			}
		},

		/**
		 * override
		 * 初始商品列表为空
		 */
		parseElement: function() {
			this.template = this.get('template');
			this.model = {
				items: [],
				includeButtons: this.get('includeButtons')
			};
			if(this.get('mode') === VERTICAL) {
				this.model.vertical = true;
			}

			// 执行继承的方法
			SlideboxComplex.superclass.parseElement.call(this);
		},

		/**
		 * 初始化时, 获取数据并回调刷新商品列表
		 */
		setup: function() {
			var that = this;

			// 定义数据源对象
			var  dataSource = new DataSource({
				source: this.get('dataSource')
			});

			// 定义获得数据后的回调方法: 修改商品数据
			dataSource.on('data', function(data) {
				that.set('data', data);
			}, this);

			// 获取数据
			dataSource.getData();
		},

		/**
		 * 商品数据改变时, 更新内容并且绑定 Slidebox 事件
		 */
		_onRenderData: function(data) {
			this.model.items = data;
			this._refreshSlider();
		},

		/**
		 * 刷新商品列表
		 */
		_refreshSlider: function() {
			var that = this;

			var tid = setTimeout(function() {
				// 如果已经渲染过, 撤销循环检测, 刷新商品列表, 绑定 Slidebox 事件
				if(that.rendered) {
					clearTimeout(tid);
					that.renderPartial('[data-role=' + ROLE_SLIDER + ']');
					SlideboxComplex.superclass.setup.call(that);

				// 否则继续等待渲染完成
				} else {
					that._renderSlider();
				}

			}, 80);
		}

	});

	module.exports = SlideboxComplex;
});
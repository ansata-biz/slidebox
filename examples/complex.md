# JavaScript 构建 Slidebox

---

<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/core/core-ws.css" />
<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/mod/rating/rating-ws.css" />
<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/mod/assets/cost/cost-ws.css" />
<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/mod/assets/slidebox/slidebox-ws.css" />
<style>
.ui-slidebox{margin:20px 0;}
</style>

## 通过数据构建 Slidebox, 传入数据

````html
<div id="slidebox-sync"></div>
````

````js
seajs.use(['js/6v/lib/icbu/slidebox/slidebox-complex.js'], function(SlideboxComplex) {
	new SlideboxComplex({
		parentNode: '#slidebox-sync',
		includeButtons: false,
		unlimited: true,
		autoplay:true,
		mode: 'vertical',
		minSpace: 120,
		dataSource: [
			{
				title: 'One piece seamless panties viscose...',
				url: '#',
				image: 'http://i00.i.aliimg.com/wsphoto/v0/900802532/One-piece-seamless-panties-viscose-women-s-panties-cool-font-b-sexy-b-font-women-s.jpg_50x50.jpg',
				description: 'One piece seamless panties viscose women\'s panties cool sexy women\'s briefs',
				price: 'US $56.20',
				originalPrice: 'US $78.20',
				unit: 'piece',
				rating: 0.9,
				ratingCount: 1346,
				order: 25
			},
			{
				title: 'Hot selling Mini Player 8GB portab...',
				url: '#',
				image: 'http://i00.i.aliimg.com/wsphoto/v1/596759706/Hot-new-Free-size-S-M-lace-gloves-with-cloth-black-font-b-sexy-b-font.jpg_50x50.jpg',
				description: 'Hot selling Mini Player 8GB portable Clip-on MP3 Player (Purple)',
				price: 'US $56.20',
				unit: 'piece',
				rating: 0.65,
				ratingCount: 46,
				order: 34
			},
			{
				title: 'sexy lingerie Hot Black babydoll...',
				url: '#',
				image: 'http://i01.i.aliimg.com/wsphoto/v1/711479797/-font-b-sexy-b-font-lingerie-Hot-Black-babydoll-lace-skirt-nighty-dress-Flowers-costume.jpg_50x50.jpg',
				description: 'sexy lingerie Hot Black babydoll lace skirt nighty dress Flowers costume sexy sleepwear, Free Size Free Shipping W1217',
				price: 'US $56.20',
				originalPrice: 'US $98.70',
				unit: 'lot',
				rating: 0.75,
				ratingCount: 396,
				order: 1228
			},
			{
				title: 'Lowset price NEW SEXY HOT MESH...',
				url: '#',
				image: 'http://i00.i.aliimg.com/wsphoto/v0/431021082/Free-shipping-Lowset-price-NEW-font-b-SEXY-b-font-HOT-MESH-LACE-OPEN-LINGERIE-Bikini.jpg_50x50.jpg',
				description: 'Free shipping + Lowset price NEW SEXY HOT MESH LACE OPEN LINGERIE Bikini BRA THONG Black/Pink/Purple 16898',
				price: 'US $56.20',
				unit: 'piece',
				rating: 0.83,
				ratingCount: 415,
				order: 687
			},
			{
				title: 'Sexy Lingerie Pink Lace Dress+G...',
				url: '#',
				image: 'http://i00.i.aliimg.com/wsphoto/v0/721917366/-font-b-Sexy-b-font-Lingerie-Pink-Lace-Dress-G-String-one-size-Sleepwear-Underwear.jpg_50x50.jpg',
				description: 'Sexy Lingerie Pink Lace Dress+G String one size Sleepwear, Underwear, Uniform, Kimono Costume W1361',
				price: 'US $56.20',
				originalPrice: 'US $198.98',
				unit: 'piece',
				rating: 0.58,
				ratingCount: 211,
				order: 324
			},
			{
				title: 'Sexy lingerie Hot babydoll lace...',
				url: '#',
				image: 'http://i00.i.aliimg.com/wsphoto/v0/817606392/-font-b-Sexy-b-font-lingerie-Hot-babydoll-lace-skirt-nighty-dress-font-b-sexy.jpg_50x50.jpg',
				description: 'Sexy lingerie Hot babydoll lace skirt nighty dress sexy costume sexy sleepwear, Free Size Free Shipping',
				price: 'US $56.20',
				originalPrice: 'US $98.70',
				unit: 'piece',
				rating: 0.76,
				ratingCount: 33,
				order: 3369
			},
			{
				title: 'Sexy lingerie bridal Lace...',
				url: '#',
				image: 'http://i01.i.aliimg.com/wsphoto/v0/705138275/-font-b-Sexy-b-font-lingerie-bridal-Lace-belted-corset-top-garter-belt-g-string.jpg_50x50.jpg',
				description: 'Sexy lingerie bridal Lace belted corset top+garter belt+g-string',
				price: 'US $56.20',
				originalPrice: 'US $298.80',
				unit: 'piece',
				rating: 0.67,
				ratingCount: 3,
				order: 23
			},
			{
				title: 'Sexy Lingerie Pink Lace...',
				url: '#',
				image: 'http://i01.i.aliimg.com/wsphoto/v8/709632347/-font-b-Sexy-b-font-Lingerie-Pink-Lace-Dress-G-String-Sleepwear-Underwear-Uniform-Kimono.jpg_50x50.jpg',
				description: 'Sexy Lingerie Pink Lace Dress+G String Sleepwear,Underwear ,Uniform ,Kimono Costume Free Size Free Shipping Dropshipping W1211',
				price: 'US $56.20',
				unit: 'piece',
				rating: 0.86,
				ratingCount: 46,
				order: 1112
			},
			{
				title: 'Sexy Ladies Open Crotch Thongs...',
				url: '#',
				image: 'http://i00.i.aliimg.com/wsphoto/v0/725056236/-font-b-Sexy-b-font-Ladies-Open-Crotch-Thongs-G-string-V-string-Panties-Knickers.jpg_50x50.jpg',
				description: 'Sexy Ladies Open Crotch Thongs G-string V-string Panties Knickers Underwear 6 Color Free Shipping[240207]',
				price: 'US $56.20',
				originalPrice: 'US $1,564.80',
				unit: 'piece',
				rating: 0.85,
				ratingCount: 4362,
				order: 223
			},
			{
				title: 'New Fashion Women\'s Sexy Leopard...',
				url: '#',
				image: 'http://i00.i.aliimg.com/wsphoto/v0/735013026_1/New-Fashion-Women-s-font-b-Sexy-b-font-Leopard-Mini-Dress-Sweatshirts-Hoodie-double-breasted.jpg_50x50.jpg',
				description: 'New Fashion Women\'s Sexy Leopard Mini Dress Sweatshirts Hoodie double breasted Pullover Tops for Women Plus size , Free Shipping',
				price: 'US $56.20',
				unit: 'piece',
				rating: 0.59,
				ratingCount: 315,
				order: 98
			}
		]
	}).render();
});
````

## 通过数据构建 Slidebox, 异步请求数据

````html
<div id="slidebox-asyn"></div>
````

````js
seajs.use(['$', 'js/6v/lib/icbu/slidebox/slidebox-complex.js'], function($, SlideboxComplex) {
	new SlideboxComplex({
		parentNode: '#slidebox-asyn',
		dataSource: function(value, done) {
			var that = this;

			// 异步请求
			$.ajax('data-source.json', {
				dataType: 'json'

			// 请求成功，加工数据，拼接 items 作为商品数据数组
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
````

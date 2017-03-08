/* FullPage Plugin */
;(function ($) {
	var FullPage = (function () {
		function fullpage (element, options) {
			this.settings = $.extend(true, {}, $.fn.FullPage.defaults, options || {});
			this.element = element;
			// 初始化插件
			this.init();
		}

		fullpage.prototype = {
			init: function () {
				// 插件初始化方法
			},
		};

		return fullpage;
	})();

	$.fn.FullPage = function (options) {
		// 创建插件实例
		// 外界唯一入口函数 （由于闭包的存在）

	};

	$.fn.FullPage.defaults = {
		selectors: {
			sections: '.sections',
			section: '.section',
			pages: '.pages',
		},
		easing: 'ease',
		duration: 500,
		loop: false,
		direct: 'vertical',
		keyboard: true,
		isPages: true,
		isScroll: false,
		callback: null,
	};

})(jQuery);
/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	// Helper vars and functions.
	const extend = function (a, b) {
		for (let key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	};

	// from http://www.quirksmode.org/js/events_properties.html#position
	const getMousePos = function (ev) {
		let posx = 0;
		let posy = 0;
		if (!ev) ev = window.event;
		if (ev.pageX || ev.pageY) {
			posx = ev.pageX;
			posy = ev.pageY;
		} else if (ev.clientX || ev.clientY) {
			posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return {
			x: posx,
			y: posy
		};
	};

	const TiltObj = function (el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.DOM = {};
		this.DOM.img = this.el.querySelector('.content__img');
		this.DOM.title = this.el.querySelector('.content__title');
		this._initEvents();
	}

	TiltObj.prototype.options = {
		movement: {
			img: {
				translation: {
					x: -40,
					y: -40
				}
			},
			title: {
				translation: {
					x: 20,
					y: 20
				}
			},
		}
	};

	TiltObj.prototype._initEvents = function () {
		this.mouseenterFn = (ev) => {
			anime.remove(this.DOM.img);
			anime.remove(this.DOM.title);
		};

		this.mousemoveFn = (ev) => {
			requestAnimationFrame(() => this._layout(ev));
		};

		this.mouseleaveFn = (ev) => {
			requestAnimationFrame(() => {
				anime({
					targets: [this.DOM.img, this.DOM.title],
					duration: 1500,
					easing: 'easeOutElastic',
					elasticity: 400,
					translateX: 0,
					translateY: 0
				});
			});
		};

		this.el.addEventListener('mousemove', this.mousemoveFn);
		this.el.addEventListener('mouseleave', this.mouseleaveFn);
		this.el.addEventListener('mouseenter', this.mouseenterFn);
	};

	TiltObj.prototype._layout = function (ev) {
		// Mouse position relative to the document.
		const mousepos = getMousePos(ev);
		// Document scrolls.
		const docScrolls = {
			left: document.body.scrollLeft + document.documentElement.scrollLeft,
			top: document.body.scrollTop + document.documentElement.scrollTop
		};
		const bounds = this.el.getBoundingClientRect();
		// Mouse position relative to the main element (this.DOM.el).
		const relmousepos = {
			x: mousepos.x - bounds.left - docScrolls.left,
			y: mousepos.y - bounds.top - docScrolls.top
		};

		// Movement settings for the animatable elements.
		const t = {
			img: this.options.movement.img.translation,
			title: this.options.movement.title.translation,
		};

		const transforms = {
			img: {
				x: (-1 * t.img.x - t.img.x) / bounds.width * relmousepos.x + t.img.x,
				y: (-1 * t.img.y - t.img.y) / bounds.height * relmousepos.y + t.img.y
			},
			title: {
				x: (-1 * t.title.x - t.title.x) / bounds.width * relmousepos.x + t.title.x,
				y: (-1 * t.title.y - t.title.y) / bounds.height * relmousepos.y + t.title.y
			}
		};
		this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
		this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
	};

	const DOM = {};
	DOM.svg = document.querySelector('.morph');
	DOM.shapeEl = DOM.svg.querySelector('path');
	DOM.contentElems = Array.from(document.querySelectorAll('.content-wrap'));
	DOM.contentLinks = Array.from(document.querySelectorAll('.content__link'));
	DOM.footer = document.querySelector('.content--related');
	const contentElemsTotal = DOM.contentElems.length;
	const shapes = [{
			//瓶子
			path: 'M754.85,430.02c0,10.01,10.01,11.68,10.01,26.69c0,11.68-10.48,22.17-8.34,26.69c15.01,31.69,11.68,141.79,1.67,150.13c-10.87,9.06-110.09,13.34-126.77,0c-12.89-10.32-11.68-126.77-10.01-135.11c1.64-8.18,8.34-10.01,8.34-23.35c0-11.68-8.34-11.68-8.34-23.35c0-11.68,11.68-13.34,11.68-23.35c0-8.34-10.01-13.34-10.01-26.69c0-25.02-10.01-170.14,35.03-208.51c14.48-12.33-1.67-46.71,10.01-63.39c1.35-1.93,3.34-3.34,13.34-3.34c6.67,0,25.02-1.67,33.36,1.67c5.58,2.23,7.7,8.36,8.34,16.68c1.67,21.68-5,38.37,0,43.37c46.82,46.82,38.37,166.7,38.37,216.85C761.52,413.34,754.85,421.68,754.85,430.02z',
			pathAlt: 'M754.85,430.02c0,10.01,10.01,11.68,10.01,26.69c0,11.68-10.48,22.17-8.34,26.69c15.01,31.69,11.68,141.79,1.67,150.13c-10.87,9.06-110.09,13.34-126.77,0c-12.89-10.32-11.68-126.77-10.01-135.11c1.64-8.18,8.34-10.01,8.34-23.35c0-11.68-8.34-11.68-8.34-23.35c0-11.68,11.68-13.34,11.68-23.35c0-8.34-10.01-13.34-10.01-26.69c0-25.02-10.01-170.14,35.03-208.51c14.48-12.33-1.67-46.71,10.01-63.39c1.35-1.93,3.34-3.34,13.34-3.34c6.67,0,25.02-1.67,33.36,1.67c5.58,2.23,7.7,8.36,8.34,16.68c1.67,21.68-5,38.37,0,43.37c46.82,46.82,38.37,166.7,38.37,216.85C761.52,413.34,754.85,421.68,754.85,430.02z',
			scaleX: 1.3,
			scaleY: 1.3,
			rotate: 70,
			tx: 0,
			ty: -100,
			fill: {
				color: '#342560',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 1000,
					easing: 'easeOutElastic'
				},
				svg: {
					duration: 1000,
					easing: 'easeInOutQuad'
				}
			}
		},
		{
			//塑料袋 平滑
			path: 'M761,358.43c3,18,9,47,8,61c-1.78,24.94-23.86,162.58-25,166c-3,9-13.72,12.8-24,11c-40-7-110.98-11.6-164-58c-8-7-7.55-18.23-7-21c1-5,7-19,19-42c8.51-16.31,12-23,23-42c4.3-7.42,28-43,36-52c6.27-7.05,7-11,21-29c12.47-16.03,22-28,26-31c3.58-2.68,10-5,18,0c5.69,3.56,7,10,6,14c-4.37,17.49-25.11,44.89-14,56c6,6,23,16,37,14c9.08-1.3,7-7,11-19c7.11-21.32,7-22,12-31C748.18,347.91,759.68,350.54,761,358.43z',
			pathAlt: 'M761,358.43c3,18,9,47,8,61c-1.78,24.94-23.86,162.58-25,166c-3,9-13.72,12.8-24,11c-40-7-110.98-11.6-164-58c-8-7-7.55-18.23-7-21c1-5,7-19,19-42c8.51-16.31,12-23,23-42c4.3-7.42,28-43,36-52c6.27-7.05,7-11,21-29c12.47-16.03,22-28,26-31c3.58-2.68,10-5,18,0c5.69,3.56,7,10,6,14c-4.37,17.49-25.11,44.89-14,56c6,6,23,16,37,14c9.08-1.3,7-7,11-19c7.11-21.32,7-22,12-31C748.18,347.91,759.68,350.54,761,358.43z',
			scaleX: 1.5,
			scaleY: 1.5,
			rotate: 0,
			tx: 0,
			ty: 1,
			fill: {
				color: '#d65640',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 1000,
					easing: 'easeOutElastic'
				},
				svg: {
					duration: 1000,
					easing: 'easeInOutQuad'
				}
			}
		},
		{
			//塑料袋 毛
			path: 'M855.43,167.89c0,46.93,56.4,132.99,46.8,176.19c-5.51,24.78-23.1,23.6-38.54,66.07c-11.01,30.28,41.29,74.33,5.51,148.66c-17.9,37.17-100.62,158.36-140.4,140.4c-170.68-77.08-168.18,4.01-220.23-24.78c-52.05-28.79-83.18-79.78-115.62-129.39c-25.76-39.39-26.9-40.09-35.79-88.09c-3.99-21.57,43.61-40.06,57.81-57.81c33.03-41.29,7.86-65.05,55.06-115.62c38.54-41.29,13.76-66.07,55.06-110.12c22.45-23.94,11.83-100.76,44.05-110.12c32.22-9.35,49.45-13.87,85.34,22.02c11.01,11.01-96.35,129.39-35.79,159.67c35.97,17.98,68.46,20.25,107.36,13.76c49.55-8.26,44.05-88.09,66.07-170.68c5.02-18.81,77.08-33.03,88.09-5.51C890.79,109.01,855.43,138.12,855.43,167.89z',
			pathAlt: 'M855.43,167.89c0,46.93,56.4,132.99,46.8,176.19c-5.51,24.78-23.1,23.6-38.54,66.07c-11.01,30.28,41.29,74.33,5.51,148.66c-17.9,37.17-100.62,158.36-140.4,140.4c-170.68-77.08-168.18,4.01-220.23-24.78c-52.05-28.79-83.18-79.78-115.62-129.39c-25.76-39.39-26.9-40.09-35.79-88.09c-3.99-21.57,43.61-40.06,57.81-57.81c33.03-41.29,7.86-65.05,55.06-115.62c38.54-41.29,13.76-66.07,55.06-110.12c22.45-23.94,11.83-100.76,44.05-110.12c32.22-9.35,49.45-13.87,85.34,22.02c11.01,11.01-96.35,129.39-35.79,159.67c35.97,17.98,68.46,20.25,107.36,13.76c49.55-8.26,44.05-88.09,66.07-170.68c5.02-18.81,77.08-33.03,88.09-5.51C890.79,109.01,855.43,138.12,855.43,167.89z',
			scaleX: 1,
			scaleY: 1,
			rotate: 40,
			tx: -100,
			ty: 200,
			fill: {
				color: '#bfb37c',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 1000,
					easing: 'easeOutElastic'
				},
				svg: {
					duration: 1000,
					easing: 'easeOutQuad'
				}
			}
		},
		{
			//垃圾1
			path: 'M648,349.5c-5.04,17.63-10,41-13,57c-3.31,17.66-2.77,41.94-1,49c1,4-18-5-24-11c-11.4-11.4-18.88-19.39-35-24c-7-2-45-10-58-16c-21.11-9.74-90.45-37.11-99-42c-7-4-16.24-9.29-14-16c5-15,50-45,53-54c2.86-8.59,22-46,37-64c6.92-8.31,8.74-27.12,13-47c3-14,3-73,5-73c4,0,41,14,45,16s83.41,33.16,98,39c5,2,69,26,77,30c2,1-16.85,16.38-31,27c-8,6-26.44,18.28-28,37C671,281.5,652,335.5,648,349.5z',
			pathAlt: 'M648,349.5c-5.04,17.63-10,41-13,57c-3.31,17.66-2.77,41.94-1,49c1,4-18-5-24-11c-11.4-11.4-18.88-19.39-35-24c-7-2-45-10-58-16c-21.11-9.74-90.45-37.11-99-42c-7-4-16.24-9.29-14-16c5-15,50-45,53-54c2.86-8.59,22-46,37-64c6.92-8.31,8.74-27.12,13-47c3-14,3-73,5-73c4,0,41,14,45,16s83.41,33.16,98,39c5,2,69,26,77,30c2,1-16.85,16.38-31,27c-8,6-26.44,18.28-28,37C671,281.5,652,335.5,648,349.5z',
			scaleX: 1.5,
			scaleY: 1.5,
			rotate: -20,
			tx: 0,
			ty: -50,
			fill: {
				color: '#1e71bf',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 1000,
					easing: 'easeOutElastic'
				},
				svg: {
					duration: 1000,
					easing: 'easeInOutQuad'
				}
			}
		},
		{
			//可乐瓶
			path: 'M642.45,505.46c-2.43,16.99-9.71,38.82-9.71,58.24c0,43.59,4.85,53.38,7.28,63.09c4.71,18.83,4.28,28.97,0,46.1c-2.43,9.71-7.98,17.89-14.56,21.84C613.34,702,572.09,702,555.1,702s-54.77-3.32-65.51-4.85c-16.99-2.43-24.26-9.71-21.84-38.82c1.73-20.73,14.31-78.43,9.71-99.48c-16.99-77.65-19.41-89.78-16.99-148.01c2.96-70.97,24.26-126.18,55.81-179.56c6.65-11.25-7.28-41.25,0-70.37c1.32-5.26,7.28-19.41,26.69-19.41c9.71,0,31.54-2.43,41.25,4.85c2.75,2.06,9.71,7.28,9.71,29.12s-4.85,46.1-2.43,55.81c9.15,36.59,38.05,53.12,50.96,138.31C654.59,449.65,647.99,466.72,642.45,505.46z',
			pathAlt: 'M642.45,505.46c-2.43,16.99-9.71,38.82-9.71,58.24c0,43.59,4.85,53.38,7.28,63.09c4.71,18.83,4.28,28.97,0,46.1c-2.43,9.71-7.98,17.89-14.56,21.84C613.34,702,572.09,702,555.1,702s-54.77-3.32-65.51-4.85c-16.99-2.43-24.26-9.71-21.84-38.82c1.73-20.73,14.31-78.43,9.71-99.48c-16.99-77.65-19.41-89.78-16.99-148.01c2.96-70.97,24.26-126.18,55.81-179.56c6.65-11.25-7.28-41.25,0-70.37c1.32-5.26,7.28-19.41,26.69-19.41c9.71,0,31.54-2.43,41.25,4.85c2.75,2.06,9.71,7.28,9.71,29.12s-4.85,46.1-2.43,55.81c9.15,36.59,38.05,53.12,50.96,138.31C654.59,449.65,647.99,466.72,642.45,505.46z',
			scaleX: 1.3,
			scaleY: 1.3,
			rotate: 0,
			tx: 0,
			ty: 0,
			fill: {
				color: '#44b7a3',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 1000,
					easing: 'easeOutElastic'
				},
				svg: {
					duration: 1000,
					easing: 'easeOutQuad'
				}
			}
		},
		{//碎片
			path: 'M1020.09,392c0,7.06-120.05,44.14-162.42,61.79c-29.28,12.2-125.35,47.67-157.13,60.03c-36.57,14.22-110.34,43.84-148.3,56.49c-10.59,3.53-59.93,1.77-90.04,1.77c-21.19,0-45.78,1.35-51.2,0c-7.06-1.77-3.53-88.27-3.53-93.57c0-5.3,1.77-40.61,1.77-47.67c0-5.58,1.77-40.82,1.77-56.49c0-51.3,0-28.19,0-75.92c0-5.3-3.53-30.01-0.02-32.83c4.58-3.67,41.9-15.54,63.57-23.67c14.12-5.3,84.64-39.25,111.22-45.9c7.06-1.77,128.88,60.03,144.77,65.32c10.59,3.53,68.85,31.78,82.98,38.84c24.73,12.36,66.06,30.31,91.8,40.61c8.83,3.53,28.79,13.6,54.73,24.72C972.42,370.82,1020.09,392,1020.09,392z',
			pathAlt: 'M1020.09,392c0,7.06-120.05,44.14-162.42,61.79c-29.28,12.2-125.35,47.67-157.13,60.03c-36.57,14.22-110.34,43.84-148.3,56.49c-10.59,3.53-59.93,1.77-90.04,1.77c-21.19,0-45.78,1.35-51.2,0c-7.06-1.77-3.53-88.27-3.53-93.57c0-5.3,1.77-40.61,1.77-47.67c0-5.58,1.77-40.82,1.77-56.49c0-51.3,0-28.19,0-75.92c0-5.3-3.53-30.01-0.02-32.83c4.58-3.67,41.9-15.54,63.57-23.67c14.12-5.3,84.64-39.25,111.22-45.9c7.06-1.77,128.88,60.03,144.77,65.32c10.59,3.53,68.85,31.78,82.98,38.84c24.73,12.36,66.06,30.31,91.8,40.61c8.83,3.53,28.79,13.6,54.73,24.72C972.42,370.82,1020.09,392,1020.09,392z',
			scaleX: 1,
			scaleY: 1,
			rotate: 180,
			tx: 0,
			ty: 0,
			fill: {
				color: '#4b66b3',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 2000,
					easing: 'easeOutElastic',
					elasticity: 400
				},
				svg: {
					duration: 2000,
					easing: 'easeOutQuad'
				}
			}
		},
		{
			path: 'M961.14,392c0,35.18-34.17,80.3-43.56,75.39c-38.53-20.11-12.42-97.98-45.24-105.55c-21.78-5.03-54.2,25.55-55.29,43.56c-3.35,55.29-44.64,100.61-97.17,137.38c-50.26,35.18-176.94,62.08-145.76,18.43c16.75-23.46,40.21-30.16,48.59-40.21c19.72-23.66,36.83-40.41,31.83-75.39c-1.68-11.73-36.98,8.57-154.14,0c-68.69-5.03-110.36,71.03-169.22,75.39c-45.24,3.35-26.81-51.94-3.35-68.69c17.48-12.49,38.53-20.11,63.67-41.89c16.6-14.38,43.56-175.92,241.26-196.02c88.73-9.02,155.81,18.43,192.67,28.48c14.64,3.99,26.81,6.7,38.53,0c18.63-10.65,64.85-59.05,105.55-25.13c40.21,33.51-38.19,80.49-36.86,93.82C934.33,328.34,961.14,336.61,961.14,392z',
			pathAlt: 'M961.14,392c0,35.18-34.17,80.3-43.56,75.39c-38.53-20.11-12.42-97.98-45.24-105.55c-21.78-5.03-54.2,25.55-55.29,43.56c-3.35,55.29-44.64,100.61-97.17,137.38c-50.26,35.18-176.94,62.08-145.76,18.43c16.75-23.46,40.21-30.16,48.59-40.21c19.72-23.66,36.83-40.41,31.83-75.39c-1.68-11.73-36.98,8.57-154.14,0c-68.69-5.03-110.36,71.03-169.22,75.39c-45.24,3.35-26.81-51.94-3.35-68.69c17.48-12.49,38.53-20.11,63.67-41.89c16.6-14.38,43.56-175.92,241.26-196.02c88.73-9.02,155.81,18.43,192.67,28.48c14.64,3.99,26.81,6.7,38.53,0c18.63-10.65,64.85-59.05,105.55-25.13c40.21,33.51-38.19,80.49-36.86,93.82C934.33,328.34,961.14,336.61,961.14,392z',
			scaleX: 1,
			scaleY: 1,
			rotate: -45,
			tx:0 ,
			ty:0 ,
			fill: {
				color: '#4b66b3',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 2000,
					easing: 'easeOutElastic',
					elasticity: 400
				},
				svg: {
					duration: 2000,
					easing: 'easeOutQuad'
				}
			}
		}
	];
	let step;

	const initShapeLoop = function (pos) {
		pos = pos || 0;
		anime.remove(DOM.shapeEl);
		anime({
			targets: DOM.shapeEl,
			easing: 'linear',
			d: [{
				value: shapes[pos].pathAlt,
				duration: 1500
			}, {
				value: shapes[pos].path,
				duration: 1500
			}],
			loop: true,
			fill: {
				value: shapes[pos].fill.color,
				duration: shapes[pos].fill.duration,
				easing: shapes[pos].fill.easing
			},
			direction: 'alternate'
		});
	};

	const initShapeEl = function () {
		anime.remove(DOM.svg);
		anime({
			targets: DOM.svg,
			duration: 1,
			easing: 'linear',
			scaleX: shapes[0].scaleX,
			scaleY: shapes[0].scaleY,
			translateX: shapes[0].tx + 'px',
			translateY: shapes[0].ty + 'px',
			rotate: shapes[0].rotate + 'deg'
		});

		initShapeLoop();
	};

	const createScrollWatchers = function () {
		DOM.contentElems.forEach((el, pos) => {
			const scrollElemToWatch = pos ? DOM.contentElems[pos] : DOM.footer;
			pos = pos ? pos : contentElemsTotal;
			const watcher = scrollMonitor.create(scrollElemToWatch, -350);

			watcher.enterViewport(function () {
				step = pos;
				anime.remove(DOM.shapeEl);
				anime({
					targets: DOM.shapeEl,
					duration: shapes[pos].animation.path.duration,
					easing: shapes[pos].animation.path.easing,
					elasticity: shapes[pos].animation.path.elasticity || 0,
					d: shapes[pos].path,
					fill: {
						value: shapes[pos].fill.color,
						duration: shapes[pos].fill.duration,
						easing: shapes[pos].fill.easing
					},
					complete: function () {
						initShapeLoop(pos);
					}
				});

				anime.remove(DOM.svg);
				anime({
					targets: DOM.svg,
					duration: shapes[pos].animation.svg.duration,
					easing: shapes[pos].animation.svg.easing,
					elasticity: shapes[pos].animation.svg.elasticity || 0,
					scaleX: shapes[pos].scaleX,
					scaleY: shapes[pos].scaleY,
					translateX: shapes[pos].tx + 'px',
					translateY: shapes[pos].ty + 'px',
					rotate: shapes[pos].rotate + 'deg'
				});
			});

			watcher.exitViewport(function () {
				const idx = !watcher.isAboveViewport ? pos - 1 : pos + 1;

				if (idx <= contentElemsTotal && step !== idx) {
					step = idx;
					anime.remove(DOM.shapeEl);
					anime({
						targets: DOM.shapeEl,
						duration: shapes[idx].animation.path.duration,
						easing: shapes[idx].animation.path.easing,
						elasticity: shapes[idx].animation.path.elasticity || 0,
						d: shapes[idx].path,
						fill: {
							value: shapes[idx].fill.color,
							duration: shapes[idx].fill.duration,
							easing: shapes[idx].fill.easing
						},
						complete: function () {
							initShapeLoop(idx);
						}
					});

					anime.remove(DOM.svg);
					anime({
						targets: DOM.svg,
						duration: shapes[idx].animation.svg.duration,
						easing: shapes[idx].animation.svg.easing,
						elasticity: shapes[idx].animation.svg.elasticity || 0,
						scaleX: shapes[idx].scaleX,
						scaleY: shapes[idx].scaleY,
						translateX: shapes[idx].tx + 'px',
						translateY: shapes[idx].ty + 'px',
						rotate: shapes[idx].rotate + 'deg'
					});
				}
			});
		});
	};

	const init = function () {
		imagesLoaded(document.body, () => {
			initShapeEl();
			createScrollWatchers();
			Array.from(document.querySelectorAll('.content--layout')).forEach(el => new TiltObj(el));
			// Remove loading class from body
			document.body.classList.remove('loading');
		});
	}

	init();
};
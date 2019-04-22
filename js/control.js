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
  // const getMousePos = function (ev) {
  // 	let posx = 0;
  // 	let posy = 0;
  // 	if (!ev) ev = window.event;
  // 	if (ev.pageX || ev.pageY) {
  // 		posx = ev.pageX;
  // 		posy = ev.pageY;
  // 	} else if (ev.clientX || ev.clientY) {
  // 		posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  // 		posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  // 	}
  // 	return {
  // 		x: posx,
  // 		y: posy
  // 	};
  // };

  // const TiltObj = function (el, options) {
  // 	this.el = el;
  // 	this.options = extend({}, this.options);
  // 	extend(this.options, options);
  // 	this.DOM = {};
  // 	this.DOM.img = this.el.querySelector('.content__img');
  // 	this.DOM.title = this.el.querySelector('.content__title');
  // 	this._initEvents();
  // }

  // TiltObj.prototype.options = {
  // 	movement: {
  // 		img: {
  // 			translation: {
  // 				x: -40,
  // 				y: -40
  // 			}
  // 		},
  // 		title: {
  // 			translation: {
  // 				x: 20,
  // 				y: 20
  // 			}
  // 		},
  // 	}
  // };

  // TiltObj.prototype._initEvents = function () {
  // 	this.mouseenterFn = (ev) => {
  // 		anime.remove(this.DOM.img);
  // 		anime.remove(this.DOM.title);
  // 	};

  // 	this.mousemoveFn = (ev) => {
  // 		requestAnimationFrame(() => this._layout(ev));
  // 	};

  // 	this.mouseleaveFn = (ev) => {
  // 		requestAnimationFrame(() => {
  // 			anime({
  // 				targets: [this.DOM.img, this.DOM.title],
  // 				duration: 1500,
  // 				easing: 'easeOutElastic',
  // 				elasticity: 400,
  // 				translateX: 0,
  // 				translateY: 0
  // 			});
  // 		});
  // 	};

  // 	this.el.addEventListener('mousemove', this.mousemoveFn);
  // 	this.el.addEventListener('mouseleave', this.mouseleaveFn);
  // 	this.el.addEventListener('mouseenter', this.mouseenterFn);
  // };

  // TiltObj.prototype._layout = function (ev) {
  // 	// Mouse position relative to the document.
  // 	const mousepos = getMousePos(ev);
  // 	// Document scrolls.
  // 	const docScrolls = {
  // 		left: document.body.scrollLeft + document.documentElement.scrollLeft,
  // 		top: document.body.scrollTop + document.documentElement.scrollTop
  // 	};
  // 	const bounds = this.el.getBoundingClientRect();
  // 	// Mouse position relative to the main element (this.DOM.el).
  // 	const relmousepos = {
  // 		x: mousepos.x - bounds.left - docScrolls.left,
  // 		y: mousepos.y - bounds.top - docScrolls.top
  // 	};

  // 	// Movement settings for the animatable elements.
  // 	const t = {
  // 		img: this.options.movement.img.translation,
  // 		title: this.options.movement.title.translation,
  // 	};

  // 	const transforms = {
  // 		img: {
  // 			x: (-1 * t.img.x - t.img.x) / bounds.width * relmousepos.x + t.img.x,
  // 			y: (-1 * t.img.y - t.img.y) / bounds.height * relmousepos.y + t.img.y
  // 		},
  // 		title: {
  // 			x: (-1 * t.title.x - t.title.x) / bounds.width * relmousepos.x + t.title.x,
  // 			y: (-1 * t.title.y - t.title.y) / bounds.height * relmousepos.y + t.title.y
  // 		}
  // 	};
  // 	this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
  // 	this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
  // };
  const floatItems = new Array();
  const DOM = {};
  DOM.svg = document.querySelector(".morph");
  DOM.shapeEl = DOM.svg.querySelector("path");
  DOM.contentElems = Array.from(document.querySelectorAll(".content-wrap"));
  DOM.contentLinks = Array.from(document.querySelectorAll(".content__link"));
  DOM.footer = document.querySelector(".content--related");
  const contentElemsTotal = DOM.contentElems.length;
  const shapes = [{
      //塑料袋 毛
      path: "M 209.2 12.2 C 213.2 20.2 202.9 35.5 199.2 52.2 C 197.2 61.2 208.4 84.7 212.2 96.2 C 214.2 102.2 220.2 111.2 216.2 118.2 C 208.4 131.8 203.2 131 203.2 151.2 C 203.2 171.2 216.2 178.2 202.2 212.2 C 199.4 218.9 179.9 246.7 158.2 260.2 C 142.2 270.2 146.2 266.2 93.2 266.2 C 56.2 266.2 22.2 229.2 18.2 221.2 C 14.9 214.7 -2.8 185.2 1.2 167.2 C 6.3 144.4 21.5 134.9 24.2 128.2 C 31.2 111.2 27.9 103.7 49.2 78.2 C 54.2 72.2 52.2 57.2 67.2 42.2 C 74.2 35.2 72.2 21.2 80.2 6.2 C 82.1 2.6 115.2 -7.8 116.2 13.2 C 116.7 24.2 78.9 60.6 101.2 79.2 C 107.2 84.2 144.2 93.2 157.2 77.2 C 176.7 53.2 170.1 25.1 176.2 17.2 C 186.2 4.2 206.5 7 209.2 12.2 Z",
      pathAlt: "M 206.6 8.6 C 210.6 16.6 205 38.1 201.3 54.8 C 199.3 63.8 209.4 84.7 213.2 96.2 C 215.2 102.2 216.9 114.6 212.9 121.6 C 205.1 135.2 204.2 131 204.2 151.2 C 204.2 171.2 217.2 178.2 203.2 212.2 C 200.4 218.9 189.3 240.5 165.1 245.2 C 141.8 250.8 130.2 265.8 93 262.8 C 56.1 259.8 18.9 237.6 14.9 229.6 C 11.6 223.1 -2.7 188.1 1.3 170.1 C 6.4 147.3 19.2 138.3 21.9 131.6 C 26.9 116.3 16.9 104.3 38.2 78.8 C 46.2 64.5 48.4 61.7 63.1 41.9 C 68.3 34.9 73.2 21.3 81.2 6.3 C 83.1 2.7 116.2 -7.7 117.2 13.3 C 117.7 24.3 79.9 60.7 102.2 79.3 C 108.2 84.3 147.8 96.8 160.8 80.8 C 180.3 56.8 169 34.2 175.1 26.3 C 185 13.2 203.9 3.4 206.6 8.6 Z",
      scaleX: 1.2,
      scaleY: 1.2,
      rotate: 0,
      tx: 400,
      ty: 300,
      fill: {
        color: "#b4d3e0",

        duration: 500,
        easing: "linear"
      },
      animation: {
        path: {
          duration: 1000,
          easing: "easeOutElastic"
        },
        svg: {
          duration: 1000,
          easing: "easeOutQuad"
        }
      }
    },
    {
      //瓶子
      path: "M 213.588 149.7 C 209.588 154.7 214.088 163.4 210.588 169.7 C 205.588 178.7 197.588 176.7 193.588 182.7 C 189.588 188.7 197.888 190.4 193.588 200.7 C 181.588 229.7 155.588 304.7 121.588 325.7 C 113.788 330.5 104.388 330.1 100.588 336.7 C 88.588 357.7 82.688 375.7 75.588 375.7 C 63.588 375.7 40.588 361.7 42.588 351.7 C 43.788 345.5 50.188 334 57.588 320.7 C 62.588 311.7 51.388 308.9 53.588 286.7 C 56.888 252.4 76.588 196.7 99.588 156.7 C 105.788 145.8 108.588 151.7 112.588 144.7 C 116.188 138.4 106.288 135.2 113.588 121.7 C 120.588 108.7 126.888 113 127.588 105.7 C 128.588 94.7 145.588 48.7 163.588 15.7 C 167.188 9 169.888 -2.2 182.588 0.7 C 208.588 6.7 240.588 19.7 255.588 34.7 C 260.588 39.7 263.888 43.8 260.588 55.7 C 246.588 105.7 220.188 141.4 213.588 149.7 Z",
      pathAlt: "M 213.588 149.7 C 209.588 154.7 214.088 163.4 210.588 169.7 C 205.588 178.7 197.588 176.7 193.588 182.7 C 189.588 188.7 197.888 190.4 193.588 200.7 C 181.588 229.7 155.588 304.7 121.588 325.7 C 113.788 330.5 104.388 330.1 100.588 336.7 C 88.588 357.7 82.688 375.7 75.588 375.7 C 63.588 375.7 40.588 361.7 42.588 351.7 C 43.788 345.5 50.188 334 57.588 320.7 C 62.588 311.7 51.388 308.9 53.588 286.7 C 56.888 252.4 76.588 196.7 99.588 156.7 C 105.788 145.8 108.588 151.7 112.588 144.7 C 116.188 138.4 106.288 135.2 113.588 121.7 C 120.588 108.7 126.888 113 127.588 105.7 C 128.588 94.7 145.588 48.7 163.588 15.7 C 167.188 9 169.888 -2.2 182.588 0.7 C 208.588 6.7 240.588 19.7 255.588 34.7 C 260.588 39.7 263.888 43.8 260.588 55.7 C 246.588 105.7 220.188 141.4 213.588 149.7 Z",
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 200,
      ty: 350,
      fill: {
        color: "#e3847c",
        duration: 500,
        easing: "linear"
      },
      animation: {
        path: {
          duration: 1000,
          easing: "easeInOutQuad"
        },
        svg: {
          duration: 1000,
          easing: "easeInOutQuad"
        }
      }
    },
    {
      //可乐瓶
      path: "M 289.904 84.135 C 285.096 91.346 285.337 110.817 280.288 127.404 C 273.077 151.442 250.721 191.827 241.827 206.731 C 227.404 230.769 187.981 266.346 167.308 283.654 C 152.885 295.673 145.673 302.885 136.058 317.308 C 125.24 333.413 119.231 348.558 109.615 360.577 C 91.346 383.413 80.769 370.192 73.558 365.385 C 49.519 349.279 18.029 322.356 8.654 314.904 C -3.365 305.288 -0.962 286.058 3.846 278.846 C 17.548 258.173 23.077 257.212 37.5 245.192 C 47.837 236.538 63.702 224.519 73.558 201.923 C 90.385 163.462 113.942 139.904 126.442 125 C 138.462 110.577 161.779 90.385 193.75 72.115 C 210.577 62.5 234.375 60.337 246.635 48.077 C 253.846 40.865 258.654 28.846 270.673 12.019 C 276.683 3.606 285.096 -2.404 297.115 2.404 C 304.087 5.288 313.942 14.423 318.75 19.231 C 328.365 28.846 325.962 38.462 323.558 43.269 C 317.788 54.808 304.087 62.74 289.904 84.135 Z",
      pathAlt: "M 289.904 84.135 C 285.096 91.346 285.337 110.817 280.288 127.404 C 273.077 151.442 250.721 191.827 241.827 206.731 C 227.404 230.769 187.981 266.346 167.308 283.654 C 152.885 295.673 145.673 302.885 136.058 317.308 C 125.24 333.413 119.231 348.558 109.615 360.577 C 91.346 383.413 80.769 370.192 73.558 365.385 C 49.519 349.279 18.029 322.356 8.654 314.904 C -3.365 305.288 -0.962 286.058 3.846 278.846 C 17.548 258.173 23.077 257.212 37.5 245.192 C 47.837 236.538 63.702 224.519 73.558 201.923 C 90.385 163.462 113.942 139.904 126.442 125 C 138.462 110.577 161.779 90.385 193.75 72.115 C 210.577 62.5 234.375 60.337 246.635 48.077 C 253.846 40.865 258.654 28.846 270.673 12.019 C 276.683 3.606 285.096 -2.404 297.115 2.404 C 304.087 5.288 313.942 14.423 318.75 19.231 C 328.365 28.846 325.962 38.462 323.558 43.269 C 317.788 54.808 304.087 62.74 289.904 84.135 Z",
      scaleX: 0.5,
      scaleY: 0.5,
      rotate: 0,
      tx: 0,
      ty: 0,
      fill: {
        color: "#EDC6B2",
        duration: 500,
        easing: "linear"
      },
      animation: {
        path: {
          duration: 1000,
          easing: "easeOutElastic"
        },
        svg: {
          duration: 1000,
          easing: "easeOutQuad"
        }
      }
    },
    {
      //塑料袋 平滑
      path: "M 319.01 51.25 C 319.01 58.75 325.26 97.083 325.26 126.25 C 325.26 147.917 326.719 141.042 325.26 149.167 C 323.177 161.667 321.094 184.583 319.01 203.333 C 317.135 219.583 305.885 284.583 302.344 299.167 C 298.177 315.833 297.344 347.292 291.927 359.583 C 283.594 378.333 269.427 378.125 250.26 376.25 C 208.594 372.083 56.51 320 39.844 299.167 C 31.51 288.75 29.844 274.375 33.594 261.667 C 39.844 240.833 68.802 191.25 75.26 176.25 C 81.51 161.667 101.094 130.625 121.094 103.333 C 144.01 72.083 186.094 20.833 196.094 7.5 C 202.344 -0.833 217.135 -1.25 223.177 3.333 C 231.51 9.583 233.594 20.208 231.51 28.333 C 229.427 36.667 202.344 84.583 206.51 92.917 C 210.469 100.833 249.635 121.667 260.677 120 C 275.26 117.917 286.094 63.125 296.094 42.917 C 298.177 38.75 302.344 28.333 308.594 30.417 C 317.344 33.333 319.01 38.75 319.01 51.25 Z",
      pathAlt: "M 319.01 51.25 C 319.01 58.75 325.26 97.083 325.26 126.25 C 325.26 147.917 326.719 141.042 325.26 149.167 C 323.177 161.667 321.094 184.583 319.01 203.333 C 317.135 219.583 305.885 284.583 302.344 299.167 C 298.177 315.833 297.344 347.292 291.927 359.583 C 283.594 378.333 269.427 378.125 250.26 376.25 C 208.594 372.083 56.51 320 39.844 299.167 C 31.51 288.75 29.844 274.375 33.594 261.667 C 39.844 240.833 68.802 191.25 75.26 176.25 C 81.51 161.667 101.094 130.625 121.094 103.333 C 144.01 72.083 186.094 20.833 196.094 7.5 C 202.344 -0.833 217.135 -1.25 223.177 3.333 C 231.51 9.583 233.594 20.208 231.51 28.333 C 229.427 36.667 202.344 84.583 206.51 92.917 C 210.469 100.833 249.635 121.667 260.677 120 C 275.26 117.917 286.094 63.125 296.094 42.917 C 298.177 38.75 302.344 28.333 308.594 30.417 C 317.344 33.333 319.01 38.75 319.01 51.25 Z",
      scaleX: 0.5,
      scaleY: 0.5,
      rotate: 0,
      tx: 200,
      ty: -200,
      fill: {
        color: "#b8cfd8",
        duration: 500,
        easing: "linear"
      },
      animation: {
        path: {
          duration: 1000,
          easing: "easeOutElastic"
        },
        svg: {
          duration: 1000,
          easing: "easeInOutQuad"
        }
      }
    },

    {
      //碎片
      path: "M 202.725 52.497 C 216.925 59.77 258.371 77.087 283.654 90.363 C 317.826 108.835 354.076 125.228 362.158 128.576 C 375.088 134.002 396.907 146.471 404.527 149.126 C 411.915 151.55 416.533 153.282 426.346 158.939 C 405.912 171.638 390.442 178.796 378.551 182.952 C 367.584 186.762 361.811 188.032 352.807 191.726 C 342.763 196.228 338.953 196.921 330.872 200.962 C 321.867 204.771 297.623 215.046 285.27 220.588 C 277.189 223.243 261.026 230.401 248.327 233.864 C 238.283 237.905 227.315 241.368 209.537 248.179 C 190.257 253.836 163.82 264.919 155.969 266.997 C 134.842 275.887 124.567 280.274 100.785 288.932 C 87.74 290.202 55.646 290.895 42.369 288.701 C 36.828 289.51 23.089 291.241 3.81 288.932 C 2.309 274.848 1.27 204.771 1.385 188.262 C 1.963 179.258 1.501 79.973 3.81 67.274 C 40.291 52.266 104.941 26.636 126.184 16.477 C 154.237 29.984 184.023 43.261 202.725 52.497 Z",
      pathAlt: "M 202.725 52.497 C 216.925 59.77 258.371 77.087 283.654 90.363 C 317.826 108.835 354.076 125.228 362.158 128.576 C 375.088 134.002 396.907 146.471 404.527 149.126 C 411.915 151.55 416.533 153.282 426.346 158.939 C 405.912 171.638 390.442 178.796 378.551 182.952 C 367.584 186.762 361.811 188.032 352.807 191.726 C 342.763 196.228 338.953 196.921 330.872 200.962 C 321.867 204.771 297.623 215.046 285.27 220.588 C 277.189 223.243 261.026 230.401 248.327 233.864 C 238.283 237.905 227.315 241.368 209.537 248.179 C 190.257 253.836 163.82 264.919 155.969 266.997 C 134.842 275.887 124.567 280.274 100.785 288.932 C 87.74 290.202 55.646 290.895 42.369 288.701 C 36.828 289.51 23.089 291.241 3.81 288.932 C 2.309 274.848 1.27 204.771 1.385 188.262 C 1.963 179.258 1.501 79.973 3.81 67.274 C 40.291 52.266 104.941 26.636 126.184 16.477 C 154.237 29.984 184.023 43.261 202.725 52.497 Z",
      scaleX: 1.2,
      scaleY: 1.2,
      rotate: 0,
      tx: 550,
      ty: 200,
      fill: {
        color: "#b8cfd8",
        duration: 500,
        easing: "linear"
      },
      animation: {
        path: {
          duration: 2000,
          easing: "easeOutElastic",
          elasticity: 400
        },
        svg: {
          duration: 2000,
          easing: "easeOutQuad"
        }
      }
    },

    {
      //海归
      path: "M 333.2 39.2 C 344.2 35.2 357.2 1.9 387.2 0.2 C 423.2 -1.8 417.2 31.2 413.2 39.2 C 408.2 49.2 394.2 64.2 394.2 71.2 C 394.2 80.2 424.2 88.2 426.2 130.2 C 427.3 153.5 417.7 179.6 408.2 179.2 C 386.2 178.2 380.2 116.6 365.2 115.2 C 343.2 113.2 336.2 140.2 331.2 149.2 C 327.2 156.4 341 193 304.2 238.2 C 260.2 292.2 203.3 310.1 195.2 306.2 C 176.2 297.2 212.2 267.2 218.2 258.2 C 225.7 247 233 200.4 226.2 202.2 C 207.2 207.2 182.2 213.2 160.2 217.2 C 119.5 224.6 97.2 234.2 88.2 242.2 C 85.1 244.9 42.8 311.1 7.2 303.2 C -1.8 301.2 -3.8 276.2 7.2 262.2 C 11.9 256.2 44.2 231.2 46.2 220.2 C 57.6 157.4 69.5 105.1 165.2 57.2 C 225.2 27.2 316.8 45.2 333.2 39.2 Z",
      pathAlt: "M 333.2 39.2 C 344.2 35.2 357.2 1.9 387.2 0.2 C 423.2 -1.8 417.2 31.2 413.2 39.2 C 408.2 49.2 394.2 64.2 394.2 71.2 C 394.2 80.2 424.2 88.2 426.2 130.2 C 427.3 153.5 417.7 179.6 408.2 179.2 C 386.2 178.2 380.2 116.6 365.2 115.2 C 343.2 113.2 336.2 140.2 331.2 149.2 C 327.2 156.4 341 193 304.2 238.2 C 260.2 292.2 203.3 310.1 195.2 306.2 C 176.2 297.2 212.2 267.2 218.2 258.2 C 225.7 247 233 200.4 226.2 202.2 C 207.2 207.2 182.2 213.2 160.2 217.2 C 119.5 224.6 97.2 234.2 88.2 242.2 C 85.1 244.9 42.8 311.1 7.2 303.2 C -1.8 301.2 -3.8 276.2 7.2 262.2 C 11.9 256.2 44.2 231.2 46.2 220.2 C 57.6 157.4 69.5 105.1 165.2 57.2 C 225.2 27.2 316.8 45.2 333.2 39.2 Z",
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      tx: 200,
      ty: 150,
      fill: {
        color: "#b8cfd8",
        duration: 500,
        easing: "linear"
      },
      animation: {
        path: {
          duration: 2000,
          easing: "easeOutElastic",
          elasticity: 400
        },
        svg: {
          duration: 2000,
          easing: "easeOutQuad"
        }
      }
    },

    {
      //垃圾1
      path: "M 347.255 78.315 C 355.861 82.618 429.012 104.133 429.012 108.436 C 429.012 112.739 363.606 165.667 355.861 181.588 C 351.558 190.194 342.952 228.921 338.648 246.133 C 333.485 267.218 321.436 302.073 317.133 314.982 C 308.958 339.939 304.224 392.436 299.921 401.042 C 295.618 409.648 304.224 444.073 299.921 448.376 C 295.618 452.679 274.103 444.073 265.497 435.467 C 261.194 431.164 252.588 413.952 226.77 405.345 C 197.079 395.448 149.315 388.133 123.497 375.224 C 111.448 369.2 20.224 332.194 7.315 323.588 C -5.594 314.982 5.164 299.921 15.921 289.164 C 28.83 276.255 68.418 246.564 71.861 237.527 C 80.467 216.012 106.285 172.982 119.194 151.467 C 128.23 136.406 127.8 125.648 132.103 112.739 C 133.394 108.867 136.406 78.315 136.406 69.709 C 136.406 60.242 140.709 49.055 140.709 0.861 C 140.709 -3.442 248.285 39.588 256.891 43.891 C 262.485 46.473 343.812 76.164 347.255 78.315 Z",
      pathAlt: "M 347.255 78.315 C 355.861 82.618 429.012 104.133 429.012 108.436 C 429.012 112.739 363.606 165.667 355.861 181.588 C 351.558 190.194 342.952 228.921 338.648 246.133 C 333.485 267.218 321.436 302.073 317.133 314.982 C 308.958 339.939 304.224 392.436 299.921 401.042 C 295.618 409.648 304.224 444.073 299.921 448.376 C 295.618 452.679 274.103 444.073 265.497 435.467 C 261.194 431.164 252.588 413.952 226.77 405.345 C 197.079 395.448 149.315 388.133 123.497 375.224 C 111.448 369.2 20.224 332.194 7.315 323.588 C -5.594 314.982 5.164 299.921 15.921 289.164 C 28.83 276.255 68.418 246.564 71.861 237.527 C 80.467 216.012 106.285 172.982 119.194 151.467 C 128.23 136.406 127.8 125.648 132.103 112.739 C 133.394 108.867 136.406 78.315 136.406 69.709 C 136.406 60.242 140.709 49.055 140.709 0.861 C 140.709 -3.442 248.285 39.588 256.891 43.891 C 262.485 46.473 343.812 76.164 347.255 78.315 Z",
      scaleX: 0.25,
      scaleY: 0.25,
      rotate: -34,
      tx: -400,
      ty: 400,
      fill: {
        color: "#b8cfd8",
        duration: 500,
        easing: "linear"
      },
      animation: {
        path: {
          duration: 1000,
          easing: "easeOutElastic"
        },
        svg: {
          duration: 1000,
          easing: "easeInOutQuad"
        }
      }
    },
    {
      //垃圾1
      path: "M 347.255 78.315 C 355.861 82.618 429.012 104.133 429.012 108.436 C 429.012 112.739 363.606 165.667 355.861 181.588 C 351.558 190.194 342.952 228.921 338.648 246.133 C 333.485 267.218 321.436 302.073 317.133 314.982 C 308.958 339.939 304.224 392.436 299.921 401.042 C 295.618 409.648 304.224 444.073 299.921 448.376 C 295.618 452.679 274.103 444.073 265.497 435.467 C 261.194 431.164 252.588 413.952 226.77 405.345 C 197.079 395.448 149.315 388.133 123.497 375.224 C 111.448 369.2 20.224 332.194 7.315 323.588 C -5.594 314.982 5.164 299.921 15.921 289.164 C 28.83 276.255 68.418 246.564 71.861 237.527 C 80.467 216.012 106.285 172.982 119.194 151.467 C 128.23 136.406 127.8 125.648 132.103 112.739 C 133.394 108.867 136.406 78.315 136.406 69.709 C 136.406 60.242 140.709 49.055 140.709 0.861 C 140.709 -3.442 248.285 39.588 256.891 43.891 C 262.485 46.473 343.812 76.164 347.255 78.315 Z",
      pathAlt: "M 347.255 78.315 C 355.861 82.618 429.012 104.133 429.012 108.436 C 429.012 112.739 363.606 165.667 355.861 181.588 C 351.558 190.194 342.952 228.921 338.648 246.133 C 333.485 267.218 321.436 302.073 317.133 314.982 C 308.958 339.939 304.224 392.436 299.921 401.042 C 295.618 409.648 304.224 444.073 299.921 448.376 C 295.618 452.679 274.103 444.073 265.497 435.467 C 261.194 431.164 252.588 413.952 226.77 405.345 C 197.079 395.448 149.315 388.133 123.497 375.224 C 111.448 369.2 20.224 332.194 7.315 323.588 C -5.594 314.982 5.164 299.921 15.921 289.164 C 28.83 276.255 68.418 246.564 71.861 237.527 C 80.467 216.012 106.285 172.982 119.194 151.467 C 128.23 136.406 127.8 125.648 132.103 112.739 C 133.394 108.867 136.406 78.315 136.406 69.709 C 136.406 60.242 140.709 49.055 140.709 0.861 C 140.709 -3.442 248.285 39.588 256.891 43.891 C 262.485 46.473 343.812 76.164 347.255 78.315 Z",
      scaleX: 0.5,
      scaleY: 0.5,
      rotate: -20,
      tx: 0,
      ty: -50,
      fill: {
        color: "#b8cfd8",
        duration: 500,
        easing: "linear"
      },
      animation: {
        path: {
          duration: 1000,
          easing: "easeOutElastic"
        },
        svg: {
          duration: 1000,
          easing: "easeInOutQuad"
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
      easing: "linear",
      d: [{
          value: shapes[pos].pathAlt,
          duration: 1500
        },
        {
          value: shapes[pos].path,
          duration: 1500
        }
      ],
      loop: true,
      fill: {
        value: shapes[pos].fill.color,
        duration: shapes[pos].fill.duration,
        easing: shapes[pos].fill.easing
      },
      direction: "alternate"
    });
  };

  const initShapeEl = function () {
    anime.remove(DOM.svg);
    anime({
      targets: DOM.svg,
      duration: 1,
      easing: "linear",
      scaleX: shapes[0].scaleX,
      scaleY: shapes[0].scaleY,
      translateX: shapes[0].tx + "px",
      translateY: shapes[0].ty + "px",
      rotate: shapes[0].rotate + "deg"
    });

    initShapeLoop();
  };

  const createHandScrollWatchers = function () {
    var handElement = document.getElementById("handElement");
    var handElementWatcher = scrollMonitor.create(handElement);
    var waveElement = document.getElementById("waveElement");
    var waveElementWatcher = scrollMonitor.create(waveElement);
    waveElementWatcher.enterViewport(function () {
      anime({
        targets: "#svg_4",
        d: "M1046.6,141.8v241.1H-1.4V136.6c0,0,336.4,85,662.9,12.4C661.5,149,828,101.6,1046.6,141.8z",
        easing: "easeOutQuad",
        duration: 6000,
        loop: true,
        direction: "alternate"
      });
    });

    waveElementWatcher.exitViewport(function () {});

    var anime8 = document.querySelectorAll(".js-anime8");

    var explodeElementWatcher = scrollMonitor.create(anime8,-150);
    explodeElementWatcher.enterViewport(function () {
      anime({
        targets: anime8,
        translateX: function () {
          return anime.random(-450, 450);
        },
        translateY: function () {
          return anime.random(-300, 300);
        },
        rotate: function () {
          return anime.random(0, 360);
        },
        scale: {
          value: function () {
            return anime.random(1, 3);
          }
        },
        duration: function () {
          return anime.random(500, 1000);
        },
        delay: function () {
          return anime.random(500, 750);
        },
        easing: "easeInOutQuad"
      });
    });

    explodeElementWatcher.exitViewport(function () {
      anime({
        targets: anime8,
        translateX: 0,
        translateY: 0
      });
    });

    handElementWatcher.enterViewport(function () {
      anime({
        targets: "#handElement",
        translateX: 0,
        easing: "easeInOutQuart",
        delay: 2.5
      });
    });
    handElementWatcher.exitViewport(function () {
      anime({
        targets: "#handElement",
        translateX: -700,
        easing: "easeInOutExpo"
      });
    });
  };

  const floatWatchers = function () {
    var floatElements = Array.from(
      document.querySelectorAll(".content__float")
    );
    floatElements.forEach((el, pos) => {
      const scrollElemToWatch = floatElements[pos];
      const watcher = scrollMonitor.create(scrollElemToWatch, 0);
      watcher.enterViewport(function () {
        var floatItem = anime({
          targets: el,
          translateX: function (el) {
            return anime.random(-20, 20);
          },
          translateY: function (el) {
            return anime.random(-30, 30);
          },
          easing: "easeInOutQuart",
          direction: "alternate",
          loop: true,
          duration: 2500
        });
        floatItems.push(floatItem);
        // console.log(floatItems[1].animatables[0].target);

        var float__mouseoverEle = document.querySelector(".content__rb1");

        function objFn(obj, objIndex, objs) {
          return obj.animatables[0].target == float__mouseoverEle;
        }
        // console.log(floatItems.find(objFn));
      });
    });
  };

  const textWatchers = function () {
    var textElements = Array.from(
      document.querySelectorAll(".textIn")
    );
    textElements.forEach((el, pos) => {
      const scrollElemToWatch = textElements[pos];
      const watcher = scrollMonitor.create(scrollElemToWatch, -160);
      watcher.enterViewport(function () {
        var textItem = anime({
          targets: el,
          opacity: 1,
          easing: "easeInOutQuart"
        });

      });

      watcher.exitViewport(function () {
        var textItem = anime({
          targets: el,
          opacity: 0,
          easing: "easeInOutQuart",
          delay:2
        });

      });
    });
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
          translateX: shapes[pos].tx + "px",
          translateY: shapes[pos].ty + "px",
          rotate: shapes[pos].rotate + "deg"
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
            translateX: shapes[idx].tx + "px",
            translateY: shapes[idx].ty + "px",
            rotate: shapes[idx].rotate + "deg"
          });
        }
      });
    });
  };

  //鼠标悬停事件
  var mouseover__bottle = document.querySelector(".content__cup");

  mouseover__bottle.onclick = function () {
    function objFn(obj, objIndex, objs) {
      return obj.animatables[0].target == mouseover__bottle;
    }
    var x = floatItems.findIndex(objFn);
    console.log(floatItems[x]);
    var b = floatItems[x];
    b.pause;
  };

  const init = function () {
    imagesLoaded(document.body, () => {
      // animeInitialization();
      initShapeEl();
      createScrollWatchers();
      createHandScrollWatchers();
      floatWatchers();
      textWatchers();
      // Array.from(document.querySelectorAll('.content--layout')).forEach(el => new TiltObj(el));
      // Remove loading class from body
      document.body.classList.remove("loading");
    });
  };

  init();
}
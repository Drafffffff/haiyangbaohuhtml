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
  const extend = function(a, b) {
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

  const DOM = {};
  DOM.svg = document.querySelector(".morph");
  DOM.shapeEl = DOM.svg.querySelector("path");
  DOM.contentElems = Array.from(document.querySelectorAll(".content-wrap"));
  DOM.contentLinks = Array.from(document.querySelectorAll(".content__link"));
  DOM.footer = document.querySelector(".content--related");
  const contentElemsTotal = DOM.contentElems.length;
  const shapes = [
    {
      //塑料袋 毛
      path:
        "M 176.85 43.95 C 176.85 60.13 196.3 89.81 192.99 104.7 C 191.09 113.24 185.03 112.84 179.7 127.48 C 175.9 137.92 193.94 153.11 181.6 178.74 C 175.43 191.55 146.9 233.34 133.19 227.15 C 74.34 200.57 75.2 228.54 57.25 218.61 C 39.29 208.68 28.55 191.1 17.37 174 C 8.48 160.42 8.1 160.18 5.03 143.62 C 3.65 136.18 20.07 129.81 24.96 123.69 C 36.35 109.45 27.67 101.26 43.95 83.82 C 57.24 69.58 48.7 61.04 62.94 45.85 C 70.68 37.59 67.02 11.11 78.13 7.88 C 89.24 4.65 95.18 3.1 107.56 15.47 C 111.36 19.27 74.34 60.09 95.22 70.53 C 107.63 76.73 118.83 77.52 132.24 75.28 C 149.33 72.43 147.43 44.9 155.02 16.43 C 156.75 9.95 181.6 5.04 185.4 14.53 C 189.04 23.64 176.85 33.68 176.85 43.95 Z",
      pathAlt:
        "M 176.85 43.95 C 176.85 60.13 196.3 89.81 192.99 104.7 C 191.09 113.24 185.03 112.84 179.7 127.48 C 175.9 137.92 193.94 153.11 181.6 178.74 C 175.43 191.55 146.9 233.34 133.19 227.15 C 74.34 200.57 75.2 228.54 57.25 218.61 C 39.29 208.68 28.55 191.1 17.37 174 C 8.48 160.42 8.1 160.18 5.03 143.62 C 3.65 136.18 20.07 129.81 24.96 123.69 C 36.35 109.45 27.67 101.26 43.95 83.82 C 57.24 69.58 48.7 61.04 62.94 45.85 C 70.68 37.59 67.02 11.11 78.13 7.88 C 89.24 4.65 95.18 3.1 107.56 15.47 C 111.36 19.27 74.34 60.09 95.22 70.53 C 107.63 76.73 118.83 77.52 132.24 75.28 C 149.33 72.43 147.43 44.9 155.02 16.43 C 156.75 9.95 181.6 5.04 185.4 14.53 C 189.04 23.64 176.85 33.68 176.85 43.95 ",
      scaleX: 2,
      scaleY: 2,
      rotate: 0,
      tx: 400,
      ty: 300,
      fill: {
        color: "#bfb37c",

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
      path:
        "M 253.852 284.37 C 253.852 293.08 262.562 294.53 262.562 307.59 C 262.562 317.75 253.442 326.88 255.302 330.81 C 268.362 358.39 265.462 454.19 256.752 461.44 C 247.292 469.32 160.952 473.05 146.442 461.44 C 135.222 452.47 136.282 351.13 137.732 343.87 C 139.152 336.76 144.992 335.16 144.992 323.55 C 144.992 313.39 137.732 313.39 137.732 303.23 C 137.732 293.07 147.892 291.62 147.892 282.91 C 147.892 275.65 139.182 271.3 139.182 259.69 C 139.182 237.92 130.472 111.64 169.662 78.25 C 182.262 67.52 168.212 37.61 178.372 23.09 C 179.552 21.41 181.272 20.19 189.982 20.19 C 195.792 20.19 211.752 18.74 219.012 21.64 C 223.872 23.58 225.722 28.91 226.272 36.15 C 227.722 55.02 221.922 69.53 226.272 73.89 C 267.012 114.63 259.652 218.94 259.652 262.58 C 259.662 269.86 253.852 277.11 253.852 284.37 Z",
      pathAlt:
        "M 253.852 284.37 C 253.852 293.08 262.562 294.53 262.562 307.59 C 262.562 317.75 253.442 326.88 255.302 330.81 C 268.362 358.39 265.462 454.19 256.752 461.44 C 247.292 469.32 160.952 473.05 146.442 461.44 C 135.222 452.47 136.282 351.13 137.732 343.87 C 139.152 336.76 144.992 335.16 144.992 323.55 C 144.992 313.39 137.732 313.39 137.732 303.23 C 137.732 293.07 147.892 291.62 147.892 282.91 C 147.892 275.65 139.182 271.3 139.182 259.69 C 139.182 237.92 130.472 111.64 169.662 78.25 C 182.262 67.52 168.212 37.61 178.372 23.09 C 179.552 21.41 181.272 20.19 189.982 20.19 C 195.792 20.19 211.752 18.74 219.012 21.64 C 223.872 23.58 225.722 28.91 226.272 36.15 C 227.722 55.02 221.922 69.53 226.272 73.89 C 267.012 114.63 259.652 218.94 259.652 262.58 C 259.662 269.86 253.852 277.11 253.852 284.37 Z",
      scaleX: 1.5,
      scaleY: 1.5,
      rotate: -160,
      tx: -730,
      ty: -200,
      fill: {
        color: "#476268",
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
      path:
        "M 197.151 198.245 C 195.874 207.183 192.043 218.675 192.043 228.89 C 192.043 251.835 194.597 256.981 195.874 262.088 C 198.351 271.997 198.134 277.334 195.874 286.349 C 194.597 291.456 191.673 295.759 188.213 297.84 C 181.828 301.671 160.122 301.671 151.184 301.671 C 142.246 301.671 122.365 299.922 116.709 299.117 C 107.771 297.84 103.94 294.01 105.217 278.687 C 106.123 267.783 112.75 237.419 110.324 226.336 C 101.386 185.477 100.109 179.092 101.386 148.448 C 102.944 111.1 114.155 82.051 130.754 53.96 C 134.253 48.035 126.924 32.253 130.754 16.931 C 131.444 14.16 134.585 6.716 144.8 6.716 C 149.907 6.716 161.399 5.439 166.506 9.27 C 167.949 10.355 171.614 13.101 171.614 24.592 C 171.614 36.084 169.06 48.853 170.337 53.96 C 175.151 73.215 190.358 81.911 197.151 126.741 C 203.535 168.877 200.062 177.867 197.151 198.245 Z",
      pathAlt:
        "M 197.151 198.245 C 195.874 207.183 192.043 218.675 192.043 228.89 C 192.043 251.835 194.597 256.981 195.874 262.088 C 198.351 271.997 198.134 277.334 195.874 286.349 C 194.597 291.456 191.673 295.759 188.213 297.84 C 181.828 301.671 160.122 301.671 151.184 301.671 C 142.246 301.671 122.365 299.922 116.709 299.117 C 107.771 297.84 103.94 294.01 105.217 278.687 C 106.123 267.783 112.75 237.419 110.324 226.336 C 101.386 185.477 100.109 179.092 101.386 148.448 C 102.944 111.1 114.155 82.051 130.754 53.96 C 134.253 48.035 126.924 32.253 130.754 16.931 C 131.444 14.16 134.585 6.716 144.8 6.716 C 149.907 6.716 161.399 5.439 166.506 9.27 C 167.949 10.355 171.614 13.101 171.614 24.592 C 171.614 36.084 169.06 48.853 170.337 53.96 C 175.151 73.215 190.358 81.911 197.151 126.741 C 203.535 168.877 200.062 177.867 197.151 198.245 Z",
      scaleX: 1,
      scaleY: 1,
      rotate: -30,
      tx: 800,
      ty: -300,
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
          easing: "easeOutQuad"
        }
      }
    },
    {
      //塑料袋 平滑
      path:
        "M 244.4 44.777 C 247.723 64.713 254.368 96.831 253.26 112.336 C 251.289 139.958 226.835 292.398 225.572 296.186 C 222.25 306.154 210.377 310.362 198.992 308.369 C 154.691 300.616 76.078 295.521 17.357 244.132 C 8.497 236.379 8.995 223.942 9.605 220.874 C 10.712 215.336 17.357 199.831 30.648 174.358 C 40.073 156.294 43.938 148.885 56.121 127.842 C 60.883 119.624 87.131 80.218 95.992 70.25 C 102.936 62.442 103.744 58.068 119.25 38.132 C 133.061 20.378 143.615 7.121 148.045 3.799 C 152.01 0.831 159.121 -1.739 167.981 3.799 C 174.283 7.742 175.734 14.874 174.626 19.304 C 169.786 38.675 146.816 69.021 159.121 81.326 C 165.766 87.971 184.594 99.046 200.099 96.831 C 210.155 95.391 207.852 89.078 212.282 75.788 C 220.156 52.176 220.035 51.422 225.572 41.455 C 230.202 33.126 242.938 36.039 244.4 44.777 Z",
      pathAlt:
        "M 244.4 44.777 C 247.723 64.713 254.368 96.831 253.26 112.336 C 251.289 139.958 226.835 292.398 225.572 296.186 C 222.25 306.154 210.377 310.362 198.992 308.369 C 154.691 300.616 76.078 295.521 17.357 244.132 C 8.497 236.379 8.995 223.942 9.605 220.874 C 10.712 215.336 17.357 199.831 30.648 174.358 C 40.073 156.294 43.938 148.885 56.121 127.842 C 60.883 119.624 87.131 80.218 95.992 70.25 C 102.936 62.442 103.744 58.068 119.25 38.132 C 133.061 20.378 143.615 7.121 148.045 3.799 C 152.01 0.831 159.121 -1.739 167.981 3.799 C 174.283 7.742 175.734 14.874 174.626 19.304 C 169.786 38.675 146.816 69.021 159.121 81.326 C 165.766 87.971 184.594 99.046 200.099 96.831 C 210.155 95.391 207.852 89.078 212.282 75.788 C 220.156 52.176 220.035 51.422 225.572 41.455 C 230.202 33.126 242.938 36.039 244.4 44.777 Z",
      scaleX: 0.8,
      scaleY: 0.8,
      rotate: 0,
      tx: 310,
      ty: 0,
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
      path:
        "M 519.206 270.14 C 482.804 277.804 412.184 310.508 387.009 319.953 C 341.028 337.196 215.327 386.569 208.832 388.925 C 187.757 396.589 172.583 406.168 160.935 406.168 C 137.944 406.168 107.29 407.26 80.467 408.084 C 60.101 408.716 19.159 410 7.664 408.084 C -1.973 406.475 0.747 354.535 1.916 342.944 C 3.832 323.785 3.832 260.561 5.748 235.654 C 7.012 219.273 5.748 203.084 7.664 187.757 C 9.905 169.824 3.832 95.794 7.664 76.636 C 8.507 72.44 84.299 44.065 91.963 38.318 C 98.821 33.183 187.757 -3.832 197.336 0 C 209.272 4.771 285.908 38.95 293.131 42.15 C 327.617 57.477 417.568 99.569 444.486 113.037 C 452.15 116.869 484.72 132.196 501.963 139.86 C 518.018 147.006 651.517 195.536 668.645 212.664 C 670.561 214.579 632.243 229.907 620.748 233.738 C 605.114 238.95 534.207 266.979 519.206 270.14 Z",
      pathAlt:
        "M 519.206 270.14 C 482.804 277.804 412.184 310.508 387.009 319.953 C 341.028 337.196 215.327 386.569 208.832 388.925 C 187.757 396.589 172.583 406.168 160.935 406.168 C 137.944 406.168 107.29 407.26 80.467 408.084 C 60.101 408.716 19.159 410 7.664 408.084 C -1.973 406.475 0.747 354.535 1.916 342.944 C 3.832 323.785 3.832 260.561 5.748 235.654 C 7.012 219.273 5.748 203.084 7.664 187.757 C 9.905 169.824 3.832 95.794 7.664 76.636 C 8.507 72.44 84.299 44.065 91.963 38.318 C 98.821 33.183 187.757 -3.832 197.336 0 C 209.272 4.771 285.908 38.95 293.131 42.15 C 327.617 57.477 417.568 99.569 444.486 113.037 C 452.15 116.869 484.72 132.196 501.963 139.86 C 518.018 147.006 651.517 195.536 668.645 212.664 C 670.561 214.579 632.243 229.907 620.748 233.738 C 605.114 238.95 534.207 266.979 519.206 270.14 Z",
      scaleX: 0.1,
      scaleY: 0.1,
      rotate: 0,
      tx: 1000,
      ty: -1000,
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
      path:
        "M 643.441 215.756 C 643.441 250.138 610.058 294.229 600.873 289.432 C 563.216 269.785 588.74 193.685 556.667 186.285 C 535.382 181.373 503.701 211.253 502.637 228.854 C 499.363 282.883 459.021 327.171 407.676 363.108 C 358.559 397.491 234.766 423.769 265.235 381.118 C 281.608 358.197 304.529 351.648 312.716 341.824 C 331.986 318.706 348.703 302.334 343.824 268.148 C 342.186 256.687 307.689 276.53 193.196 268.148 C 126.069 263.236 85.35 337.567 27.833 341.824 C -16.373 345.099 1.637 291.069 24.559 274.697 C 41.652 262.499 62.216 255.05 86.775 233.765 C 103 219.701 129.343 61.854 322.539 42.207 C 409.248 33.382 474.804 60.216 510.824 70.04 C 525.133 73.937 537.02 76.589 548.48 70.04 C 566.687 59.643 611.859 12.343 651.627 45.481 C 690.922 78.226 614.298 124.135 615.608 137.167 C 617.245 153.54 643.441 161.628 643.441 215.756 Z",
      pathAlt:
        "M 643.441 215.756 C 643.441 250.138 610.058 294.229 600.873 289.432 C 563.216 269.785 588.74 193.685 556.667 186.285 C 535.382 181.373 503.701 211.253 502.637 228.854 C 499.363 282.883 459.021 327.171 407.676 363.108 C 358.559 397.491 234.766 423.769 265.235 381.118 C 281.608 358.197 304.529 351.648 312.716 341.824 C 331.986 318.706 348.703 302.334 343.824 268.148 C 342.186 256.687 307.689 276.53 193.196 268.148 C 126.069 263.236 85.35 337.567 27.833 341.824 C -16.373 345.099 1.637 291.069 24.559 274.697 C 41.652 262.499 62.216 255.05 86.775 233.765 C 103 219.701 129.343 61.854 322.539 42.207 C 409.248 33.382 474.804 60.216 510.824 70.04 C 525.133 73.937 537.02 76.589 548.48 70.04 C 566.687 59.643 611.859 12.343 651.627 45.481 C 690.922 78.226 614.298 124.135 615.608 137.167 C 617.245 153.54 643.441 161.628 643.441 215.756 Z",
      scaleX: 1,
      scaleY: 1,
      rotate: -15,
      tx: 0,
      ty: 0,
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
      path:
        "M 497.154 464.366 C 487.423 498.407 477.846 543.53 472.053 574.424 C 465.662 608.522 466.705 655.403 470.122 669.035 C 472.053 676.758 435.367 659.38 423.782 647.795 C 401.771 625.784 387.328 610.356 356.203 601.455 C 342.687 597.594 269.315 582.147 244.215 570.562 C 203.455 551.756 69.57 498.909 53.062 489.467 C 39.546 481.744 21.705 471.529 26.03 458.573 C 35.684 429.611 122.572 371.686 128.364 354.308 C 133.887 337.722 170.843 265.49 199.805 230.735 C 213.167 214.69 216.681 178.371 224.906 139.986 C 230.699 112.954 230.699 -0.965 234.56 -0.965 C 242.284 -0.965 313.725 26.066 321.448 29.928 C 329.171 33.79 482.499 93.954 510.67 105.231 C 520.324 109.092 643.898 155.432 659.344 163.156 C 663.206 165.086 626.81 194.783 599.488 215.288 C 584.042 226.873 548.437 250.584 545.425 286.729 C 541.563 333.069 504.877 437.334 497.154 464.366 Z",
      pathAlt:
        "M 497.154 464.366 C 487.423 498.407 477.846 543.53 472.053 574.424 C 465.662 608.522 466.705 655.403 470.122 669.035 C 472.053 676.758 435.367 659.38 423.782 647.795 C 401.771 625.784 387.328 610.356 356.203 601.455 C 342.687 597.594 269.315 582.147 244.215 570.562 C 203.455 551.756 69.57 498.909 53.062 489.467 C 39.546 481.744 21.705 471.529 26.03 458.573 C 35.684 429.611 122.572 371.686 128.364 354.308 C 133.887 337.722 170.843 265.49 199.805 230.735 C 213.167 214.69 216.681 178.371 224.906 139.986 C 230.699 112.954 230.699 -0.965 234.56 -0.965 C 242.284 -0.965 313.725 26.066 321.448 29.928 C 329.171 33.79 482.499 93.954 510.67 105.231 C 520.324 109.092 643.898 155.432 659.344 163.156 C 663.206 165.086 626.81 194.783 599.488 215.288 C 584.042 226.873 548.437 250.584 545.425 286.729 C 541.563 333.069 504.877 437.334 497.154 464.366 Z",
      scaleX: 1.5,
      scaleY: 1.5,
      rotate: -20,
      tx: 0,
      ty: -50,
      fill: {
        color: "#1e71bf",
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

  const initShapeLoop = function(pos) {
    pos = pos || 0;
    anime.remove(DOM.shapeEl);
    anime({
      targets: DOM.shapeEl,
      easing: "linear",
      d: [
        {
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

  const initShapeEl = function() {
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

  const createHandScrollWatchers = function() {
    var handElement = document.getElementById("handElement");
    var handElementWatcher = scrollMonitor.create(handElement);
    var bottleElement = document.getElementById("bottleElement");
    var bottleElementWatcher = scrollMonitor.create(bottleElement);
    bottleElementWatcher.enterViewport(function() {
      anime({
        targets: "#bottleElement",
        translateX: function(el) {
          return anime.random(-20, 20);
        },
        translateY: function(el) {
          return anime.random(-20, 20);
        },
        easing: "easeInOutQuart",
        direction: "alternate",
        loop: true,
        duration: 2500
      });
    });

    bottleElementWatcher.exitViewport(function() {});

    var waveElement = document.getElementById("waveElement");
    var waveElementWatcher = scrollMonitor.create(waveElement);
    waveElementWatcher.enterViewport(function() {

      anime({
        targets: "#svg_4",
        d:
          "M1046.8,188.6v194.3H-1.2V184.4c0,0,222,67.6,662.9,10C661.7,194.4,864.8,161.9,1046.8,188.6z",
        easing: "easeOutQuad",
        duration: 6000,
        loop: true,
        direction: "alternate"
      });
    });

    waveElementWatcher.exitViewport(function() {});
	var explodeFlag =true;
    var anime8 = document.querySelectorAll(".js-anime8");
    var explodeElementWatcher = scrollMonitor.create(anime8);
    explodeElementWatcher.enterViewport(function() {
      if (explodeFlag) {
        anime({
          targets: anime8,
          translateX: function() {
            return anime.random(-450, 450);
          },
          translateY: function() {
            return anime.random(-300, 300);
		  },
		  rotate: function() {
            return anime.random(0, 360);
		  },
          scale: {
			  value:function() {
            return anime.random(1, 3);
		  }

		},
          duration: function() {
            return anime.random(500, 1000);
          },
          delay: function() {
            return anime.random(500, 750);
          },
          easing: "easeInOutQuad"
        });
        explodeFlag = false;
      }
    });

    handElementWatcher.enterViewport(function() {
      anime({
        targets: "#handElement",
        translateX: 0,
        easing: "easeInOutQuart",
        delay: 1.5
      });
    });
    handElementWatcher.exitViewport(function() {
      anime({
        targets: "#handElement",
        translateX: -700,
        easing: "easeInOutExpo"
      });
    });
  };

  const createScrollWatchers = function() {
    DOM.contentElems.forEach((el, pos) => {
      const scrollElemToWatch = pos ? DOM.contentElems[pos] : DOM.footer;
      pos = pos ? pos : contentElemsTotal;
      const watcher = scrollMonitor.create(scrollElemToWatch, -350);
      watcher.enterViewport(function() {
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
          complete: function() {
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

      watcher.exitViewport(function() {
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
            complete: function() {
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

  const init = function() {
    imagesLoaded(document.body, () => {
      // animeInitialization();
      initShapeEl();
      createScrollWatchers();
      createHandScrollWatchers();
      // Array.from(document.querySelectorAll('.content--layout')).forEach(el => new TiltObj(el));
      // Remove loading class from body
      document.body.classList.remove("loading");
    });
  };

  init();
}

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
      });
    });
  };


  floatWatchers();
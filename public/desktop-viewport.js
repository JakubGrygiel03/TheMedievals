(function () {
  try {
    var ua = navigator.userAgent;
    if (/iPhone|iPod|Android.+Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
      return;
    }
    if (Math.min(screen.width, screen.height) > 500) {
      return;
    }
    var m = document.querySelector('meta[name="viewport"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "viewport";
      document.head.appendChild(m);
    }
    m.setAttribute("content", "width=1280");
  } catch {
    /* ignore */
  }
})();

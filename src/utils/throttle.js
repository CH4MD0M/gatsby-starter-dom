export function throttle(callBack, delay) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        callBack.apply(this, arguments);
        timer = null;
      }, delay);
    }
  };
}

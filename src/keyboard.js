function keyListener(context, open, close) {
  var origin = window.orientation,
    height = document.documentElement.clientHeight || document.body.clientHeight;

  return function () {
    if (origin !== window.orientation) {
      return false;
    }
    var heightCurrent = document.documentElement.clientHeight || document.body.clientHeight;

    if (height - heightCurrent > 0) {
//            键盘展开
      open.call(context);
    } else {
//            键盘收起
      close.call(context);
    }
  }
};

export default keyListener

export const beforefn = function (fn, before) {
  var __self = this;

  return function () {
    before.apply(__self, arguments);
    return fn.apply(__self, arguments);
  }
}

export const afterfn = function (fn, after) {
  var __self = this;
  return function () {
    var ret = fn.apply(__self, arguments);
    after.apply(__self, arguments);
    return ret;
  }
}

export default {
  beforefn,
  afterfn
};

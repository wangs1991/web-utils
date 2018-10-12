// 职责链模式
const Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
};
Chain.prototype = {
  constructor: 'Chain',
  setNextSuccessor: function (successor) {
    return this.successor = successor;
  },
  passRequest: function () {
    var ret = this.fn.apply(this, arguments);

    if (ret === 'nextSuccessor') {
      if (this.successor) {
        return this.successor.passRequest.apply(this.successor, arguments);
      } else {
        this.errorThrow();
      }
    }
    return ret;
  },
  next: function () {
    if (this.successor) {
      return this.successor.passRequest.apply(this.successor, arguments);
    } else {
      this.errorThrow();
    }
  },
  errorThrow: function () {
    console.warn('A chained call is not executed!')
  },
  setFinally: function (fn) {
    this.errorThrow = fn ||this.errorThrow;
  }
};

export default Chain;

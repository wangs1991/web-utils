let browser = {
  versions: function () {
    var u = navigator.userAgent;

    return {
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
      mobile: (function () {
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
          if (u.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return !flag;
      })(),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') === -1,
      QQbrw: u.indexOf('MQQBrowser') > -1,
      weiXin: u.indexOf('MicroMessenger') > -1,
      ucLowEnd: u.indexOf('UCWEB7.') > -1,
      ucSpecial: u.indexOf('rv:1.2.3.4') > -1,
      ucweb: (function () {
        try {
          return parseFloat(u.match(/ucweb\d+\.\d+/gi).toString().match(/\d+\.\d+/).toString()) >= 8.2
        } catch (e) {
          if (u.indexOf('UC') > -1) {
            return true;
          } else {
            return false;
          }
        }
      })(),
      Symbian: u.indexOf('Symbian') > -1,
      ucSB: u.indexOf('Firefox/1.') > -1,
      Quark: u.indexOf('Quark') > -1,
      Hbuilder: u.indexOf('Html5Plus') > -1
    };
  }
};

export default browser;

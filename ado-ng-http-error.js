
angular
  .module('ado.http-error', [])
  .service('httpError', ['$q', function ($q) {

    return function httpError(res) {
      res.data = res.data || {};
      var errMsg = 'Something went wrong';
      if (typeof res.data == 'string')
        return res.data;
      else if(typeof res.data.error == 'string')
        return res.data.error;
      else if(typeof res.data.message == 'string')
        return res.data.message;
      else {
        if (res.status === 413)
          return 'File too large';
      }
      return errMsg;
    };

  }]);

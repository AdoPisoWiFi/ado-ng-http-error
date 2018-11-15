# Extracts error message from http response

This module provides `httpError` service - function that extracts error string from http response object

# Usage

Module name: `ado-ng-http-error`
Service name: `httpError`

```javascript
$http.get('/url').catch(function (res) {
  var errStr = httpError(res);
  console.log(errStr);
});
```

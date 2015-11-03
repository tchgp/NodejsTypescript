/// <reference path="../typings/tsd.d.ts" />
var hello = require('./libs/hello');
var Hello = new hello.Hello();
console.log(Hello.message());

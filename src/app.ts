/// <reference path="../typings/tsd.d.ts" />
import hello = require('./libs/hello');

var Hello = new hello.Hello();
console.log(Hello.message());

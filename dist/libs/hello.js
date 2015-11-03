var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.message = function () {
        return "Привет Node.js. Я - Typescript!";
    };
    return Hello;
})();
exports.Hello = Hello;

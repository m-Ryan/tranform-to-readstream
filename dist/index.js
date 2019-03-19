"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var TranformToReadStream = /** @class */ (function (_super) {
    __extends(TranformToReadStream, _super);
    function TranformToReadStream(data, options) {
        var _this = _super.call(this, options) || this;
        _this.options = {
            highWaterMark: 16,
            encoding: 'utf8',
            objectMode: false
        };
        _this.data = data;
        return _this;
    }
    TranformToReadStream.prototype._read = function () {
        var _this = this;
        process.nextTick(function () {
            var buffer = _this.data;
            if (!Buffer.isBuffer(buffer)) {
                buffer = new Buffer(_this.data, _this.options.encoding);
            }
            _this.push(buffer);
            _this.push(null);
        });
    };
    return TranformToReadStream;
}(stream_1.Readable));
exports.default = TranformToReadStream;
//# sourceMappingURL=index.js.map
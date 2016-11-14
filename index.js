 function Response(options) {
 	var ops = options || {};
 	this.code = '00000';
 	for (var key in ops) {
 		this[key] = ops[key];
 	}
 };
 Response.prototype = {
 	constructor: Response,
 	__code: {
 		"00000": "success",

 		"10010": "create failed",
 		"10020": "insert  failed",
 		"10030": "update  failed",
 		"10040": "search  failed",
 		"10050": "delete  failed",

 		"99999": "unknown mistake"
 	},
 	setCode: function(code, message) {
 		this.__code[code] = message;
 	},
 	getCode: function() {
 		return this.__code[this.code];
 	},

 	format: function() {
 		var _this = this;
 		return {
 			code: _this.code,
 			data: _this.data || null,
 			message: this.message || _this.getCode() || '',
 			time: new Date().getTime()
 		};
 	}
 };
 module.exports = Response;
module.exports.coolMethod = function (success, error, args) {
    if (args.length === 0 || typeof args[0] !== 'string' || args[0].length === 0) {
        error('Invalid arguments');
    } else {
        success(args[0]);
    }
};


module.exports.subtract = function (success, error, args) {
    if (args.length === 0 || typeof args[0] !== 'string' || args[0].length === 0) {
        error('Invalid arguments');
    } else {
    	if (args[0].param1 && args[0].param1) {
    		var total = args[0].param1 + args[0].param2;
			success(total);
    	} else {
    		error('Invalid params');
    	}
        
    }
};

module.exports.subtract = function (success, error, args) {
    if (args.length === 0 || typeof args[0] !== 'string' || args[0].length === 0) {
        error('Invalid arguments');
    } else {
    	if (args[0].param1 && args[0].param1) {
    		var total = args[0].param1 - args[0].param2;
			success(total);
    	} else {
    		error('Invalid params');
    	}
        
    }
};

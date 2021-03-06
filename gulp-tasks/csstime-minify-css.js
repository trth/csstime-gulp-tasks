'use strict';

var task = require('../tasks/minify-named-css');

module.exports = function (gulp, plugins, config) {
	return {
		dependencies: ['csstime-handle-css'],
		task: function (cb) {
			return task.run(config.stylesFileName, gulp, plugins, config, cb);
		}
	};
};

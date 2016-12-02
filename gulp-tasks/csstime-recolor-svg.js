'use strict';

var path = require('path'),
	fs = require('fs');

module.exports = function (gulp, plugins, config) {
	return {
		task: function (cb) {
			// https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-task-steps-per-folder.md
			var folders = fs.readdirSync(config.componentsRootDirs[0])
				.filter(function(file) {
					return fs.statSync(path.join(config.componentsRootDirs[0], file)).isDirectory();
				});

			console.log(folders);

			//var recolorSvgConfigPattern = plugins.lib.pathHelper
			//		.getAssetsGlobPatterns(
			//			config,
			//			path.join('svg_recolor')
			//		);
			//
			//console.log(recolorSvgConfigPattern);
			//
			//var recolorSvgPattern = [];
			//gulp.src(recolorSvgConfigPattern, {base: process.cwd()})
			//	.pipe(plugins.flatmap(function (stream, file) {
			//		recolorSvgConfig.push(file.relative.replace('/recolorSvg.json', ''));
			//		return stream.unpipe(file);
			//	}))
			//	.src[recolorSvgConfig]
			//	.on('error', function (error) {
			//		cb(error);
			//	});

			//return gulp.src(['./src/components/burger/assets/svg/**/*.svg'])
			//	.pipe(plugins['recolor-svg'].GenerateVariants(
			//		[
			//			plugins['recolor-svg'].ColorMatcher(plugins.color('#000000'))
			//		],
			//		[{
			//			suffix: '--red',
			//			colors: [plugins.color('red')]
			//		}]
			//	))
			//	.on('error', function (error) {
			//		cb(error);
			//	})
 			//	.pipe(gulp.dest('./build/components/burger/svg/'));

			//var svgPattern = plugins.lib.pathHelper
			//		.getAssetsGlobPatterns(
			//			config,
			//			path.join(config.svgDir, '**', '*.svg')
			//		),
			//	destination = config.isRelease ?
			//		plugins.lib.pathHelper
			//			.getTemporaryAssetsDestinationDirectory(config) :
			//		plugins.lib.pathHelper
			//			.getAssetsDestinationDirectory(config);
			//
			//return gulp.src(svgPattern, {base: process.cwd()})
			//	.pipe(plugins.if(
			//		!config.isRelease,
			//		plugins.changed(plugins.lib.pathHelper
			//			.getAssetsDestinationDirectory(config))
			//	))
			//	.pipe(plugins.if(
			//		config.isRelease && config.useSvgOptimization,
			//		plugins.imagemin(config.imageminConfig)
			//	))
			//	.pipe(plugins.rename(function (filePath) {
			//		plugins.lib.pathHelper
			//			.renamePathToComponentName(config, filePath);
			//	}))
			//	.on('error', function (error) {
			//		cb(error);
			//	})
			//	.pipe(gulp.dest(destination));
		}
	};
};

# Migrations

## Migration from 5.* to 6.*
Added SASS support.

Removed options:
* "spritesmithConfig.cssTemplatePath"

New options:
* "spritesmithConfig.lessTemplatePath": "configs/.sprite.less.mustache",
* "spritesmithConfig.sassTemplatePath": "configs/.sprite.sass.mustache""
* "preprocessor": "less", // can be sass
  	"preprocessorsConfig": {
  		"less": {
  			"ext": "less"
  		},
  		"sass": {
  			"ext": "scss"
  		}
  	},
* "sassDir": "sass",
* "sassThemesDir": "themes".

## Migration from 4.* to 5.*
Removed SVG rasterization support.

Removed options:
* "useSvgRasterization"

## Migration from 3.* to 4.*
Changed expected file system structure. See current state in [readme](../README.md).
File `component.json` (you can configure this name) is required now in component directory.

Removed options from default config:
* "componentsRootDir": "catberry_components",
* "publicRootDir": "public",
* "componentsDir": "assets".

Changed options:
* "destinationDir": "build",
* "cdnPath": "/components/".

New options:
* "componentsRootDirs": ["src/components"],
* "componentAssetsDir": "assets",
* "componentJSON": "component.json",
* "shouldClearDestinationDuringRelease": false.

If you use [Catberry.js](http://catberry.org) v4 and csstime-gulp-tasks v3,
you can simple migrate to csstime-gulp-tasks v4 doing so:
```javascript
'use strict';

var gulp = require('gulp'),
	csstime = require('csstime-gulp-tasks');

csstime.loadGulpTasks(gulp, {
    componentsRootDirs: ['catberry_components'],
    componentJSON: 'cat-component.json',
    destinationDir: 'public/static',
    destinationComponentsDir: 'assets',
    cdnPath: '/static/assets/'
});
```

const htmlmin = require("html-minifier");

module.exports = function (content, outputPath) {
	if (outputPath.endsWith(".html")) {
		let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true,
		});
		return minified;
	}
	return content;
};

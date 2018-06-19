var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var watch = require('metalsmith-watch');
var sass = require('metalsmith-sass');

var metalsmith = Metalsmith(__dirname);

// add any variable you want use them in layout-files
metalsmith.metadata({

});

metalsmith.source('src/pages')
    .destination('dist')
    .clean(true);

if (process.env.WATCH) {
    metalsmith.use(watch({
        paths: {
            '${source}/**/*': true,
            'src/layouts/**/*': '**/*'
        }
    }));
}

metalsmith.use(collections({

}));

metalsmith.use(sass({
    outputDir: 'assets/css',
    outputStyle: 'compressed',
    sourceMap: true,
    sourceMapContents: true
}));

metalsmith.use(markdown());

metalsmith.use(permalinks({
    relative: false
}));

metalsmith.use(layouts({
    engine: 'pug',
    default: 'basic.pug',
    directory: './src/layouts'
}));

metalsmith.build(function(error) {
    if (error) { throw error; }
});

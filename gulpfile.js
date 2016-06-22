const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const vendorFiles = [
  'node_modules/three/build/three.js',
]

const libFiles = [
  'node_modules/tween.js/src/Tween.js',
  'src/lib/controls/OrbitControls.js',
  'src/lib/controls/DeviceOrientationControls.js',
  'src/lib/modifier/BendModifier.js',
  'src/lib/effects/CardboardEffect.js',
  'src/lib/GSVPano.js',
];

const panolensFiles = [
  'src/Panolens.js',
  'src/DataImage.js',
  'src/Modes.js',
  'src/util/Utils.js',
  'src/util/ImageLoader.js',
  'src/util/TextureLoader.js',
  'src/util/CubeTextureLoader.js',
  'src/panorama/Panorama.js',
  'src/panorama/ImagePanorama.js',
  'src/panorama/GoogleStreetviewPanorama.js',
  'src/panorama/CubePanorama.js',
  'src/panorama/BasicPanorama.js',
  'src/panorama/VideoPanorama.js',
  'src/panorama/EmptyPanorama.js',
  'src/interface/Reticle.js',
  'src/interface/Tile.js',
  'src/interface/TileGroup.js',
  'src/interface/SpriteText.js',
  'src/widget/Widget.js',
  'src/infospot/Infospot.js',
  'src/viewer/Viewer.js',
  'src/util/font/Bmfont.js',
];

const readme = [
  'README.md',
];

const jsdocConfig = {
  opts: {
    destination: './docs',
  },
  templates: {
    outputSourceFiles: true,
    theme: 'paper',
  }
};

const sources = panolensFiles.slice(0, 1)
  .concat(libFiles)
  .concat(panolensFiles.slice(1));

const bundleSources = vendorFiles.concat(sources);

gulp.task('default', ['minify', 'docs']);

gulp.task('minify', () => gulp.src(sources)
    .pipe(concat('panolens.js', { newLine: ';' }))
    .pipe(gulp.dest('./dist'))
    .pipe(concat('panolens.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
);

gulp.task('bundle', () => gulp.src(bundleSources)
    .pipe(concat('panolens.bundle.js', { newLine: ';' }))
    .pipe(gulp.dest('./dist'))
    .pipe(concat('panolens.bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
);


gulp.task('docs', () =>
  gulp.src(panolensFiles.concat(readme), { read: false })
    .pipe(jsdoc(jsdocConfig))
);

gulp.task('build', ['minify']);
gulp.task('default', ['build']);

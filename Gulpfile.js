const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const libFiles = [
  'node_modules/tween.js/src/Tween.js',
  'src/lib/controls/OrbitControls.js',
  'src/lib/controls/DeviceOrientationControls.js',
  'src/lib/modifier/BendModifier.js',
  'src/lib/effects/CardboardEffect.js',
  'src/lib/GSVPano.js'
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
  'src/util/font/Bmfont.js'
];

const readmeFiles = [
  'README.md'
];

const jsdocConfig = {
  opts: {
    destination: './docs'
  },
  templates: {
    outputSourceFiles: true,
    theme: 'paper'
  }
};

gulp.task('docs', () => {
  return gulp.src(panolensFiles.concat(readmeFiles), { read: false })
    .pipe(jsdoc(jsdocConfig));
});

gulp.task('minify', () => {
  return gulp.src(libFiles.concat(panolensFiles))
    .pipe(concat('panolens.js', { newLine: ';' }))
    .pipe(gulp.dest('./dist/'))
    .pipe(concat('panolens.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['minify', 'docs']);
gulp.task('default', ['build']);

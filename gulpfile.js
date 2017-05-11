const gulp = require('gulp')
const jsdoc = require('gulp-jsdoc3')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const _libfiles = [
  'node_modules/iphone-inline-video/dist/iphone-inline-video.min.js',
  'node_modules/tween.js/src/Tween.js',
  'node_modules/three/build/three.js',
  'node_modules/three/examples/js/effects/StereoEffect.js',
  'src/lib/controls/OrbitControls.js',
  'src/lib/controls/DeviceOrientationControls.js',
  'src/lib/modifier/BendModifier.js',
  'src/lib/effects/CardboardEffect.js',
  'src/lib/GSVPano.js'
]

const _panolensfiles = [
  'src/Panolens.js',
  'src/DataImage.js',
  'src/Modes.js',
  'src/util/Utils.js',
  'src/util/ImageLoader.js',
  'src/util/TextureLoader.js',
  'src/util/CubeTextureLoader.js',
  'src/shaders/StereographicShader.js',
  'src/panorama/Panorama.js',
  'src/panorama/ImagePanorama.js',
  'src/panorama/GoogleStreetviewPanorama.js',
  'src/panorama/CubePanorama.js',
  'src/panorama/BasicPanorama.js',
  'src/panorama/VideoPanorama.js',
  'src/panorama/EmptyPanorama.js',
  'src/panorama/LittlePlanet.js',
  'src/panorama/ImageLittlePlanet.js',
  'src/interface/Reticle.js',
  'src/interface/Tile.js',
  'src/interface/TileGroup.js',
  'src/interface/SpriteText.js',
  'src/widget/Widget.js',
  'src/infospot/Infospot.js',
  'src/viewer/Viewer.js',
  'src/util/font/Bmfont.js'
]

const _readme = [
  'README.md'
]

const jsdocConfig = {
  opts: {
    destination: './docs'
  },
  templates: {
    outputSourceFiles: true,
    theme: 'paper'
  }
}

const _sources = _panolensfiles.slice(0, 1)
  .concat(_libfiles)
  .concat(_panolensfiles.slice(1))

gulp.task('default', ['build', 'docs'])

gulp.task('build', () => gulp
  .src(_sources)
  .pipe(concat('panolens.js', { newLine: ';' }))
  .pipe(gulp.dest('./dist'))
  .pipe(concat('panolens.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist'))
)

gulp.task('docs', () => gulp
  .src(_panolensfiles.concat(_readme), {read: false})
  .pipe(jsdoc(jsdocConfig)))

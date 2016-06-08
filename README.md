# [Panolens.js][pchen66/about]

[pchen66]: https://pchen66.github.io
[pchen66/about]: https://pchen66.github.io/Panolens
[pchen66/demo]: https://github.com/pchen66/pchen66.github.io/blob/master/Panolens/images/panolens.gif?raw=true
[pchen66/docs]: https://pchen66.github.io/Panolens/docs/index.html
[pchen66/examples]: https://pchen66.github.io/Panolens/#Example

[sbolel/pano]: https://github.com/sbolel/pano

[jquery]: https://github.com/jquery/jquery
[threejs]: https://github.com/mrdoob/three.js
[panolensjs]: https://github.com/sbolel/panolens.js

##### Fork of [`Panolens.js`][pchen66/about] by [**pchen66**][pchen66]

Panolens.js is an event-driven and WebGL based panorama viewer built on top of [Three.JS][threejs]. 

![Panorama Demo][pchen66/demo]

## Installation

Using npm:

    npm install --save panolens

Building from source:

    git clone git@github.com:sbolel/panolens.js.git
    cd ./panolens
    npm run build

## Usage

#### Attaching a single Panolens viewer to the document `<body>`

Include [`three.min.js`][threejs] and [`panolens.min.js`](dist/panolens.min.js)

```html
<script src="js/three.min.js"></script>
<script src="js/panolens.min.js"></script>
```

This code creates a 360 image panorama. The first panorama added to the viewer will be the entry point. To link panoramas, simply use `panorama.link( other_panorama )` to connect the two. See [pchen66/examples][pchen66/about] and [documentation][pchen66/docs] for more details.

```html
<script>
  const panorama = new PANOLENS.ImagePanorama('asset/equirectangular.jpg');
  const viewer = new PANOLENS.Viewer();
  viewer.add(panorama);
</script>
```

#### Initializing multiple Panolens viewers on a page

See [**`pano`**][sbolel/pano] for creating multiple panoramic viewers on a single page

#### Configuring PANOLENS.Viewer

All attributes of the configuration object are optional:

```html
<script>
  viewer = new PANOLENS.Viewer({
    autoHideControlBar: false,  // Auto hide control bar
    autoHideInfospot: true,     // Auto hide infospots
    autoReticleSelect: true,    // Auto select a clickable target after dwellTime
    cameraFov: 60,              // Camera field of view in degree
    container: document.body,   // A DOM Element container. Default: document.body
    controlBar: true,           // Vsibility of bottom control bar.
    controlButtons: [],         // Buttons in control bar. Default: ['fullscreen','navigation','vr','video']
    dwellTime: 1500,            // Dwell time for reticle selection in millisecond
    enableReticle: false,       // Enable reticle for mouseless interaction
    horizontalView: false,      // Allow only horizontal camera control
    passiveRendering: false,    // Render only when control triggered by user input 
    reverseDragging: false,     // Reverse orbit control direction
  });
</script>
```


#### How to add an infospot (hotspot)

Move cursor on a specific point in a panorama and press `Ctrl` with mouse clicking or hovering, which will generate position (x, y, z) in the console. See [Panorama Infospot](http://pchen66.github.io/Panolens/examples/panorama_infospot.html) example for creating and attaching infospots.

![Panorama Finding Infospot Position](https://github.com/pchen66/pchen66.github.io/blob/master/Panolens/images/panolens_add_infospot_480p.gif?raw=true)

## Examples

Check Panolens [examples page][pchen66/examples]

## Features

* Support equirectangular image
* Support cubemap images
* Support google streetview with panoId ([How to get Panorama ID](http://stackoverflow.com/questions/29916149/google-maps-streetview-how-to-get-panorama-id))
* Support 360 equirectangular video (like youtube/facebook 360 video) even on iOS!
* Support text/image/domElement annotations (Infospot)
* Built-in Orbit / DeviceOrientation camera controls
* Built-in fullscreen and video control widgets

## Dependency

Panolens.js includes [Tween.js][tween] by default

## Future

* ES6
* Add dwell animation
* Add AR capability

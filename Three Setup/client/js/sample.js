
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var controls = new THREE.PointerLockControls(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new THREE.ObjectLoader();
loader.load("testScene_BaroqueDone.json", function ( obj ) {
    scene.add( obj );

});

    // scene.add(controls.getObject())

// camera.position.z = 5;

var render = function () {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();

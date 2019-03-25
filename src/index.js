// var THREE = require('three');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 2, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var geometry2 = new THREE.BoxGeometry( 1, 1, 2 );
var material2 = new THREE.MeshBasicMaterial( { color: 0xff } );
var cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );

camera.position.z = 5;





var controls = new THREE.TrackballControls( camera );
controls.rotateSpeed = 5.0;
controls.zoomSpeed = 3.2;
controls.panSpeed = 0.8;
controls.noZoom = false;
controls.noPan = true;
controls.staticMoving = false;
controls.dynamicDampingFactor = 0.2;

function renderPhone() {
    renderer.render( scene, camera );
}


var animate = function () {
    requestAnimationFrame( animate );
    controls.update();
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.03;

    cube2.rotation.x += 0.04;
    cube2.rotation.y += 0.01;



    renderPhone();
};
controls.addEventListener( 'change', renderPhone );
animate();


window.addEventListener( 'resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    controls.handleResize();
    renderPhone();
}, false );


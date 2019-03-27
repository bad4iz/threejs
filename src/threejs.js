// var THREE = require('three');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.querySelectorAll('canvas')
    .forEach(canvas=>canvas.remove());

document.body.appendChild( renderer.domElement );
const arr = [];

for (let i = 0; i < 100; i++) {
    const geometry = new THREE.BoxGeometry( 1, 2, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    arr.push(cube);
    scene.add( cube );

    cube.position.x =  Math.cos( i * 20) * 200;
    cube.position.y =   Math.sin( i * 20) * 200;
}

camera.position.z = 500;

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

    arr.forEach(cube=>{
        // cube.rotation.x += Math.random();
        // cube.rotation.y += Math.random();
        // cube.rotation.z += Math.random();
        cube.rotation.x += Math.random() /  Math.random() / 50;
        cube.rotation.y +=  Math.random() /  Math.random() / 50;
        cube.z = Math.random();
    });

    renderPhone();
};
controls.addEventListener( 'change', renderPhone );


window.addEventListener( 'resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    controls.handleResize();
    renderPhone();
}, false );

export default animate;

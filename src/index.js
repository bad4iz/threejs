import animate from './threejs';
if (module.hot) {
    module.hot.accept('./threejs', function() {
        console.log('dfasdf');
        animate();
    });
}

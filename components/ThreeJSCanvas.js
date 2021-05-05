import { useEffect, useRef } from 'react';
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

export default function ThreeJSCanvas() {
  const threeRef = useRef()

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    threeRef.current.appendChild( renderer.domElement );
  
    const controls = new OrbitControls(camera, renderer.domElement);

    const f = new THREE.Shape();
    f.moveTo( 0,0 );
    f.lineTo( 0,10);
    f.lineTo( 7,10);
    f.lineTo( 7,8);
    f.lineTo( 2,8);
    f.lineTo( 2,6);
    f.lineTo( 6,6);
    f.lineTo( 6,4);
    f.lineTo( 2,4);
    f.lineTo( 2,2);
    f.lineTo( 2,0);
    f.lineTo( 0, 0 );

    const rect = new THREE.Shape();
    rect.moveTo(-2, -2);
    rect.moveTo(-2, 12);
    rect.moveTo(12, 12);
    rect.moveTo(-2, -2);

    const extrudeSettings = {
      steps: 2,
      depth: 3,
      bevelEnabled: false,
    };

    var geometry1 = new THREE.ExtrudeGeometry( f, extrudeSettings );
    var material1 = new THREE.MeshNormalMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
    var mesh = new THREE.Mesh( geometry1, material1 );

    // var rectGeometry = new THREE.ExtrudeGeometry( rect, extrudeSettings );
    // var material1 = new THREE.MeshNormalMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
    // var mesh = new THREE.Mesh( rectGeometry, material1 );


    const geometry2 = new THREE.TorusGeometry( 12, 1.8, 10, 4, 6.3 );
    const material2 = new THREE.MeshNormalMaterial( { color: 0xffff00 } );
    const torus = new THREE.Mesh( geometry2, material2 );
    
    scene.add( mesh );
    // scene.add(rectGeometry);
    scene.add( torus );
    
    mesh.position.x = -3;
    mesh.position.y = -5.5;


    camera.position.z = 20;
    var animate = function () {
      requestAnimationFrame( animate );
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();

    return () => threeRef.current.removeChild( renderer.domElement )
  }, [])

  return (
    <div ref={threeRef} />
  )
}
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import anime from 'animejs/lib/anime.js';

@Component({
  selector: 'app-dotted-sphere',
  templateUrl: './dotted-sphere.component.html',
  styleUrls: ['./dotted-sphere.component.scss'],
})
export class DottedSphereComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  rendererCanvas!: ElementRef;

  ngOnInit() {
    //this.gptAnime();
    //this.hybridAnimation();
    this.finalGlobeAnime();
  }

  finalGlobeAnime() {
    // Setup scene, camera, clock and renderer
    const canvas = this.rendererCanvas.nativeElement;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor( 0xffffff, 0 );
    var clock = new THREE.Clock();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.2,
      1000
    );
    camera.position.z = 500;

    // Add event listener for mouse move
    document.addEventListener('mousemove', onMouseMove, false);

    // Resize event
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    // Create particle geometry
    const distance = Math.min(250, window.innerWidth / 5);
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 1000; i++) {
      const theta = Math.acos(THREE.MathUtils.randFloatSpread(5));
      const phi = THREE.MathUtils.randFloatSpread(360);
      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);
      vertices.push(x, y, z);
    }
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0x3bffb1, size: 4 })
    );
    particles.geometry.boundingSphere = new THREE.Sphere(
      new THREE.Vector3(),
      30
    );

    // Add particles to the scene
    const renderingParent = new THREE.Group();
    renderingParent.add(particles);
    const resizeContainer = new THREE.Group();
    resizeContainer.add(renderingParent);
    scene.add(resizeContainer);
    // Animation properties
    const animProps = { scale: 1, xRot: 0, yRot: 0 };

    // Animation update function
    function onUpdateScale() {
      renderingParent.scale.set(
        animProps.scale,
        animProps.scale,
        animProps.scale
      );
      //renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
    }
    function onUpdateRotate() {
      // renderingParent.scale.set(
      //   animProps.scale,
      //   animProps.scale,
      //   animProps.scale
      // );
      renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
      //update();
    }

    // Scaling animation
    anime({
      targets: animProps,
      scale: 1.5,
      duration: 10000,
      easing: 'easeInOutSine',
      //direction: 'alternate',
      loop: true,
      update: update,
    });

    // Rotation animation
    anime({
      targets: animProps,
      xRot: Math.PI * 2,
      yRot: Math.PI * 4,
      duration: 120000,
      easing: 'linear',
      //direction: 'alternate',
      loop: true,
      update: update,
    });

    // Mouse move event function
    function onMouseMove(event: any) {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      anime({
        targets: particles.rotation,
        x: mouseY * -1,
        y: mouseX,
        duration: 100,
        easing: 'linear',
      });
    }
    function update() {
      
      // Calculate elapsed time
      var deltaTime = clock.getDelta();
      //console.log(deltaTime)
      // Rotate parent around x and y axes
      renderingParent.rotation.x += 0.01 * deltaTime;
      renderingParent.rotation.y += 0.4 * deltaTime;
      // Scale parent
      var scale = Math.sin(clock.elapsedTime * 2.0) * 0.25 + 1.0;
      renderingParent.scale.set(scale, scale, scale);

      // Render the scene
      renderer.render(scene, camera);
    }
    // Render loop
    function animate() {
      requestAnimationFrame(animate);
      //update();
      renderer.render(scene, camera);
    }
    animate();
  }

}

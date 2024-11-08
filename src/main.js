import * as THREE from './node_modules/three/build/three.module.js';

// Set up scene, camera, renderer, etc.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(50, 50); // Smaller size to fit in the top-left
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '10px'; // Adjust these values as needed
renderer.domElement.style.left = '10px';
document.body.appendChild(renderer.domElement);

// Load texture from the image file
const textureLoader = new THREE.TextureLoader();
const logoTexture = textureLoader.load('./textures/logo.png');

// Adjust texture to cover the whole face
logoTexture.wrapS = THREE.ClampToEdgeWrapping;
logoTexture.wrapT = THREE.ClampToEdgeWrapping;
logoTexture.center.set(0.2, 0.2);
logoTexture.repeat.set(1.05, 1.05);

// Create materials for each face with the adjusted texture
const materials = [
  new THREE.MeshBasicMaterial({ map: logoTexture }),
  new THREE.MeshBasicMaterial({ map: logoTexture }),
  new THREE.MeshBasicMaterial({ map: logoTexture }),
  new THREE.MeshBasicMaterial({ map: logoTexture }),
  new THREE.MeshBasicMaterial({ map: logoTexture }),
  new THREE.MeshBasicMaterial({ map: logoTexture }),
];

// Create a cube geometry and apply the array of materials
const geometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

// Variable to control rotation
let isHovered = false;
const targetRotation = { x: 0, y: 0 };

function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the cube only if hovered
  if (isHovered) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }else {
    // Smoothly transition to target rotation when not hovered
    cube.rotation.x += (targetRotation.x - cube.rotation.x) * 0.1;
    cube.rotation.y += (targetRotation.y - cube.rotation.y) * 0.1;
  }
  
  renderer.render(scene, camera);
}

// Event listeners for hover effect
renderer.domElement.addEventListener('mouseenter', () => {
  isHovered = true;
});
renderer.domElement.addEventListener('mouseleave', () => {

  isHovered = false;
});

// Start the animation loop
animate();

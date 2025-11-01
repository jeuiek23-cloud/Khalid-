# Khalid-
// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.8, 400);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// AI Integration (mock; replace with real API)
document.getElementById('ai-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('user-input').value;
    // Mock AI response (replace with fetch to OpenAI API)
    const response = `AI says: "${input}" - changing cube color!`;
    document.getElementById('ai-response').textContent = response;
    // Change cube color based on input length
    cube.material.color.setHex(input.length > 5 ? 0xff0000 : 0x0000ff);
});

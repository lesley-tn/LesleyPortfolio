import gsap from 'gsap';

export function CameraMove({ camera, position, targetPosition }) {

    gsap.to(camera.position, {
        x: position.x,
        y: position.y,
        z: position.z,
        duration: 2,
        ease: "power2.inOut", 
        onUpdate: () => {
            camera.lookAt(targetPosition.x, targetPosition.y, targetPosition.z);
        },
        onComplete: () => {
            camera.lookAt(targetPosition.x, targetPosition.y, targetPosition.z);
        }
    });
}

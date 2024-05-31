import React from 'react';
import Tilt from 'react-parallax-tilt';

export function AboutMe() {
    const skills = [
        { icon: '/img/js.png', name: 'JavaScript' },
        { icon: '/img/react.png', name: 'React' },
        { icon: '/img/vue.png', name: 'Vue' },
        { icon: '/img/unity.png', name: 'Unity' },
        { icon: '/img/threeJs.png', name: 'Three.js' },
        { icon: '/img/blender.png', name: 'Blender' },
        { icon: '/img/figma.png', name: 'Figma' },
        { icon: '/img/photoshop.png', name: 'Photoshop' },
       
        
    ];

    return (
        <div className="aboutme bubblegum-sans-regular">
            <h1>About me</h1>
            <h2>Welcome to my digital realm where creativity plays in every shadow. </h2>
            <h3>
                I am a <strong>web developer/designer</strong> with a focus on <strong>UX design and research</strong>. 
                I hold a Bachelor's degree in communication science, which helps me create engaging digital experiences.
                <br /><br />I am passionate about the intersection of technology and human interaction. 
                I enjoy creating digital solutions that are visually appealing, user-friendly, and immersive.</h3>

                Welcome to my digital realm where creativity plays in every shadow. 
                I'm Lesley, a web developer and designer specialized in UX design and research.
                As I blend technology with human-centric design, I create engaging, immersive experiences that captivate and connect. 

                Let the haunting melodies of the piano guide you through my world, where design meets dynamism, and every interaction is a note in our ongoing symphony of user engagement. Dive into the depths of my creations, where the blend of visual appeal and functionality brings your digital interactions to life.
            <h1>My Skills</h1>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <Tilt 
                        className="tilt-skill" 
                        key={index} 
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.1}
                        gyroscope={true}
                        style={{ backgroundImage: `url(${skill.icon})`, backgroundSize: 'cover' }}>
                        <div className="skill-label">{skill.name}</div>
                    </Tilt>
                ))}
            </div>
        </div>
    );
}


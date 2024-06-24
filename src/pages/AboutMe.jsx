import React from 'react';
import Tilt from 'react-parallax-tilt';
import { CloseButton } from '../components';

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
            <CloseButton />
            <h1>About me</h1>
            <h2>Welcome to my digital realm where creativity plays in every shadow. </h2>
            <h3>
                I'm Lesley,  a <strong>web developer/designer</strong> with a focus on <strong>UX design and research</strong>. 
                I hold a Bachelor's degree in communication science, which helps me create engaging digital experiences.
                <br /><br />
                
                As I blend technology with human-centric design, I create engaging, immersive experiences that are visually appealing and user-friendly.
              
            </h3>

                
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


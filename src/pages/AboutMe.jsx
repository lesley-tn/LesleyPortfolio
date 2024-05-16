import React from 'react';
import Tilt from 'react-parallax-tilt';

export function AboutMe() {
    const skills = [
        { icon: '/img/js.png', name: 'JavaScript' },
        { icon: '/img/react.png', name: 'React' },
        { icon: '/img/threeJs.png', name: 'Three.js' },
        { icon: '/img/vue.png', name: 'Vue' },
        { icon: '/img/figma.png', name: 'Figma' },
        { icon: '/img/photoshop.png', name: 'Photoshop' }
    ];

    return (
        <div className="aboutme bubblegum-sans-regular">
            <h1>About me</h1>
            <h2>Hello! I am Lesley.</h2>
            <h3>
                I am a <strong>web developer/designer</strong> with a focus on <strong>UX design and research</strong>. 
                I hold a Bachelor's degree in communication science, which helps me create engaging digital experiences.
                <br /><br />I am passionate about the intersection of technology and human interaction. 
                I enjoy creating digital solutions that are visually appealing, user-friendly, and immersive.</h3>

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

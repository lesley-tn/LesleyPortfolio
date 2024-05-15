import React from 'react';

export function FocuStudy() {
    return (
        <div className="focus">
            <div className="header">
                <h1>FocuStudy</h1>
                <img src="/img/FocuStudyShowCase.png" alt="FocuStudy Interface" />
            </div>
            <div className="project-details">
                <h2>Project Details</h2>
                <p><strong>Project Type:</strong> UX/UI Design, UX Research, Prototyping</p>
                <p><strong>Tools Used:</strong> Figma</p>
                <p><strong>Duration:</strong> 3 months</p>
            </div>
            <div className="about">
                <h2>About</h2>
                <p>FocuStudy is designed to enhance the studying experience for college students through focused study sessions, group collaboration, and progress tracking. The goal was to create an intuitive, engaging platform that motivates students to achieve their academic goals while fostering a sense of community.</p>
            </div>
            <div className="challenges">
                <h2>Challenges</h2>
                <p>Many students were facing difficulties while concentrating on studying due to distractions such as social media and the need to stay connected, especially during the pandemic with increased home-based study.</p>
            </div>
            <div className="design-process">
                <h2>Design Process</h2>
                <ul>
                    <li><strong>Ideation:</strong> Brainstorming sessions led to features like customizable focus timers, interactive study groups, and gamified progress tracking.</li>
                    <li><strong>User Flows & Wireframes:</strong> User journeys for setting up study sessions, joining groups, and tracking achievements were developed.</li>
                    <li><strong>Prototyping & Testing:</strong> Interactive prototypes were created and tested with students, leading to iterative improvements.</li>
                </ul>
            </div>
            <div className="research-insights">
                <h2>Research & Insights</h2>
                <p>Surveys and interviews with 30 college students revealed challenges such as difficulty maintaining focus, lack of motivation, and poor time management. These insights guided the development of key features like the study timer and communal study spaces.</p>
            </div>

            <div className="First-design">
                <h2>First Prototype</h2>
                <div className="First-prototype"> 
                <iframe  width="420px" height='900px' src="https://rkybuq.axshare.com/timer.html" scrolling='no'></iframe>
                </div>
            </div>
            <div className="features-functionality">
                <h2>Key Features & Functionality</h2>
                <ul>
                    <li><strong>Customizable Focus Timer:</strong> Allows students to set personalized study intervals with breaks.</li>
                    <li><strong>Interactive Study Groups:</strong> Facilitates group collaboration and accountability.</li>
                    <li><strong>Progress Tracking:</strong> Visual dashboard displays milestones and rewards.</li>
                </ul>
            </div>
            <div className="final-design">
                <h2>Final Design & Reflections</h2>
                <p>The final design showcases a polished interface with intuitive navigation and a cohesive design system aimed at enhancing usability and accessibility.</p>
                <iframe  width="420px" height='800px' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRXg58uzJeDt6YKJ7rXW2n5%2FFocuStudy%3Ftype%3Ddesign%26node-id%3D112-50%26t%3DBop5Pyqc1gvhEhNS-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D112%253A50%26mode%3Ddesign"  allowfullscreen></iframe>
            </div>
        </div>
    );
}



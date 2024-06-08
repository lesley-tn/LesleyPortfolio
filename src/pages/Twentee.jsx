import React from 'react';
import { CloseButton } from '../components';

export function Twentee() {
    return (
        <div className="twentee bubblegum-sans-regular">
            <CloseButton />
            <div className='header'>
                <h1>Twentee</h1>
                <h4>A mobile game:  Campus quest design for University of Twente</h4>
            </div>
            <h2>Project Overview</h2>
            <div className='project-info'>

                <div className="project-details">
                    <span><strong>Duration:</strong> 3 Months</span> |
                    <span><strong>Tools:</strong>Unity</span> |
                    <span><strong>Role:</strong> UX/UI Designer, C# Developer</span>
                </div>
            </div>

            <h2>Game Showcase</h2>
            <h3>Game Demo:</h3>
            <section className="prototypes">
                <iframe
                    width="420px"
                    height="800px"
                    src="https://i.simmer.io/@lesley23/twentee?audio=0" // Adjust the query to control audio based on your URL's capabilities
                    allow="autoplay"
                ></iframe>
            </section>
            
            <h3>MiniGames:</h3>
            <img src='/img/t2.png' />
            <h3>Geolocation:</h3>
                <img src='/img/geo.png' />
          

<h3>Find Location</h3>
            <h2>Challenge</h2>
            <p>
            Starting university is exciting for many young adults, 
            but requires a significant adjustment. However, 
            this process requires a severe level of adjustment from individual. 
            The demands and responsibilities asked from students of University of Twente, 
            particularly in the beginning of their study, are reasonably stressful. 
            This stress is intensified when students struggle to find their way around campus and are unaware of the facilities that are offered, 
            which could aim them in coping with their studies.
            </p>
            
            <h2>Solution</h2>
            <p>
                To make our game accessible to our target group, we created a mobile game-a Campus Quest. 
                Combining physical and digital interaction can enhance active learning. 
                Our team-based quest aims to familiarize students with the campus of University of Twente, 
                build personal connections, and encourage social interaction. 
                To simplify the discovery of complex information and enrich comprehension, 
                we decided to include AR elements despite potential setbacks.
            </p>
            <h2>Game Flow</h2>
            <img src='/img/t1.png' />

            <h2>User Feedback</h2>
            <ul>
                <li><strong>Memorable Experience:</strong>  “As a new student to uni, this game is a great ice breaker.”</li>   
                <li><strong>Facilitates Interaction:</strong> The game effectively drives conversation and interaction among student, making it an excellent tool for social engagement.</li>
                <li><strong>Navigational Clarity</strong>“Sometimes it was not that clear where to go.” To address this, hints have now been added to each task.</li>
                <li><strong>Encourages Competition: </strong>A leaderboard has been introduced to foster a competitive spirit among teams, enhancing engagement by tracking who completes tasks faster.</li>
            </ul>
           
           
        </div>
    );
}

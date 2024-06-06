import React from 'react';

export function FocuStudy() {
    return (
        <div className="focus inter">
            <header className="header">
                <h1>FocuStudy</h1>
                <p>A mobile app esigned to improve concentration and foster community among students.</p>
            </header>
            
            <div className='project-info'>
                <h2>Project Overview</h2>
                <div className="project-details">
                    <span><strong>Duration:</strong> 3 Months</span> |
                    <span><strong>Tools:</strong> Figma, Axure</span> |
                    <span><strong>Role:</strong> UX/UI Designer, Researcher, Prototyper</span>
                </div>
                <p  class="challenge" >
                    <strong>Challenge:</strong>
                    <span>
                    Many students faced difficulties in maintaining focus during their study sessions, 
                    primarily due to various internet distractions such as social media and the continual need to stay connected. 
                    During the pandemic, the shift to home-based learning further compounded these challenges, 
                    presenting even more significant obstacles to effective study habits.
                    </span>
                </p>
            </div>

            <h2>Project Process</h2>
            <img src='/img/f2.png' />
           

            <h2>User Analysis</h2>
         <div className="list-container">

        <p>&#x2022; <highlight>100%</highlight> of participants reported getting easily distracted while studying.</p>
        <p>&#x2022; <highlight>83%</highlight> cited electronic devices as the primary source of distraction.</p>
        <p>&#x2022; <highlight>67%</highlight> found environmental noises and the home setting contributing to distractions.</p>
  
        </div>
          

           
            <h2>Solution Implemented</h2>
            <ul>
                <li><strong>Timer & Reward System: </strong> Rewards users with a digital fish upon completing planned study sessions.</li>
                <li><strong>Focus Management:</strong> Penalty for turning off the app before achieving set goals to encourage focus.</li>
                <li><strong>Study Groups:</strong> Facilitates joining groups for collaborative study.</li>
                <li><strong>Progress Tracking:</strong> Visual and quantifiable tracking of study hours.</li>
            </ul>
           


            <section className="prototypes">
                <h2>Explore First Prototype:</h2>
                <iframe title="First Prototype" width="100%" height="900px" src="https://rkybuq.axshare.com/timer.html" scrolling="no"></iframe>
            </section>

        
                <h2>User Feedback on First Prototype</h2>
                <ul>
                    <li><strong>Improve UI:</strong> The UI needs to be more appealing.</li>
                    <li><strong>Implement the Reward Better: </strong>Make the reward concept clearer and more accessible.</li>
                    <li><strong>Join Study Group: </strong>Improve the study group page to distinguish between joined and available groups, and add a search function.</li>
                    <li><strong>Unclear Progress Page:</strong> Show actual study time data in the progress page.</li>
                </ul>
      

            <section className="prototypes">
                <h2>Explore Second Prototype:</h2>
                <iframe title="Second Prototype" width="100%" height="800px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRXg58uzJeDt6YKJ7rXW2n5%2FFocuStudy%3Ftype%3Ddesign%26node-id%3D112-50%26t%3DBop5Pyqc1gvhEhNS-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D112%253A50%26mode%3Ddesign" allowFullScreen></iframe>
            </section>
        </div>
    );
}


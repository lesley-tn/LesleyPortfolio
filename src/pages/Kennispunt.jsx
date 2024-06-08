import React from 'react';
import { CloseButton } from '../components';

export function Kennispunt() {
    return (
        <div className="kennispunt inter">
            <CloseButton />
            <h1>Optimize Usability of Data Dashboards</h1>
            
            <h2>Project Background</h2>
            <h3>The TMSD website, managed by Kennispunt Twente, presents data on youth care, 
                youth protection, and social support services across municipalities in the Twente region. 
                Kennispunt Twente wanted to understand how users interact with the data dashboards on the TMSD website to 
                identify any potential usability issues and areas for improvement.    
            </h3>

            <div className="info-container">
                <div className="info-box">
                    <h3>Role</h3>
                    <p>UX Research Intern</p>
                </div>
                    
                <div className="info-box">
                    <h3>Client</h3>
                    <p>Kennispunt Twente</p>
                </div>

                <div className="info-box">
                    <h3>Goal</h3>
                    <p>• &nbsp;&nbsp; Discover pain points on TMSD website<br/>
                    • &nbsp;&nbsp; Provide design recommendations to improve usability</p>
                </div> 
            </div>

            <h2>Research Process</h2>
            <img src="/img/k2.png" alt="Research Process"></img>
            <h2>Key Findings</h2>
            <h4>Google Analytics</h4>
            <ol>
                <li>High Bounce rate:
                    <ul>
                        <li>Indicating potential issues with user engagement and navigation.</li>
                    </ul>
                </li>
                <li>Short Average Duration:
                    <ul>
                        <li>Suggesting that users are not finding value quickly.</li>
                    </ul>
                </li>
                <li>High Drop Off Rate:
                    <ul>
                        <li>Especially for home page, reflecting difficulties in navigation.</li>
                    </ul>
                </li>
            </ol>

            <h4>Usability Testing</h4>
            <div className='info-container'>
                <div className='info-box'>
                    <h3>Tasks Designed</h3>
                    <p>• &nbsp;&nbsp;Home Page Interaction</p>
                    <p>• &nbsp;&nbsp;Exploratory</p>
                    <p>• &nbsp;&nbsp;Specific Page Interaction</p>
                    <p>• &nbsp;&nbsp;Goal Oriented</p>
                    <p>• &nbsp;&nbsp;Deep Navigation</p>
                    <p>• &nbsp;&nbsp;Content understanding</p>
                </div>
                <div className='info-box'>
                    <h3>Recruiting Criteria</h3>
                    <p> • &nbsp;&nbsp;Sample Size: 9</p>
                    <p> • &nbsp;&nbsp;2 females & 7 males</p>
                    <p> • &nbsp;&nbsp;Citizen in Twente region</p>
                    <p> • &nbsp;&nbsp;First time users</p>
                </div>
            </div>

            <ol>
                <li>Challenges in Information Retrieval:
                    <ul>
                        <li>Tasks related to finding specific information on the data dashboards had low success rates and took longer to complete, indicating that information retrieval from the dashboards was challenging for users.</li>
                    </ul>
                </li>
                <li>Content Understanding:
                    <ul>
                        <li>Tasks related to understanding content from the About and Disclaimer pages had high success rates, demonstrating that the content on these pages was clear and accessible.</li>
                    </ul>
                </li>
            </ol>

            <h4>Post-test Interview</h4>
            <ol>
                <li>Complexity and Navigability Issues:
                    <ul>
                        <li>Users expressed difficulties with the complexity and navigability of the website and the data dashboards.</li>
                    </ul>
                </li>
                <li>Appreciation for Clarity:
                    <ul>
                        <li>Despite navigational challenges, users appreciated the clarity of the information once they were able to find it.</li>
                    </ul>
                </li>
            </ol>

            <h2>Recommendations for Improvement</h2>
            <ol>
                <li>Improve Navigation:
                    <ul>
                        <li>Simplify navigation by combining general information of data dashboards to the homepage.</li>
                        <li>Highlight the active page in the navigation bar.</li>
                        <li>Label buttons clearly.</li>
                        <li>Add a search bar for easier information retrieval.</li>
                    </ul>
                </li>
                <li>Add User Guide:
                    <ul>
                        <li>Provide a user guide or add introduction for first-time users.</li>
                        <li>Highlight data filters to ensure users get the correct information.</li>
                    </ul>
                </li>
                <li>Improve Site Performance:
                    <ul>
                        <li>Optimize loading times for data dashboards.</li>
                        <li>Ensure faster access to critical information.</li>
                    </ul>
                </li>
            </ol>

            <h2>Research Impact</h2>
            <h3>Kennispunt Twente, a research agency focused on data collection and analysis, had never conducted UX research before.
                My work provided them with the first comprehensive view of user experience on their websites, revealing several usability issues.
            </h3>

            <ol>
                <li>Uncovering User Experience Issues:
                    <ul>
                        <li>The research highlighted that, while the TMSD website contains rich data, new users struggled to find what they needed due to confusing buttons and unclear navigation.</li>
                    </ul>
                </li>
                <li>Benefiting Stakeholders:
                    <ul>
                        <li>Citizens of the Twente Region: Easier access to important information.</li>
                        <li>Municipalities and Policymakers: Better access to organized data for improved decision-making and policy formulation.</li>
                    </ul>
                </li>
            </ol>

            <h3>By following the recommendations, Kennispunt Twente will improve the usability of their website, ultimately benefiting all stakeholders.</h3>
  
        </div>
    );
}

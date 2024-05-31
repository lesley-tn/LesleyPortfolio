import React from 'react';

export function Kennispunt() {
    return (
        <div className="kennispunt inter">
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

                <div className="info-box ">
                    <h3>Goal</h3>
                    <p>• &nbsp;&nbsp; Discover pain points on TMSD website<br/>
                    • &nbsp;&nbsp; Provide design recommendations to improve usability</p>
                </div> 
            </div>

            <h2>Research Process</h2>
            <img src="/img/k2.png"></img>
            <h2>Key Findings</h2>
            <h4>Google Analytics</h4>
            <ol>
             <li>High Bounce rate</li>
             <ul>Indicating potential issues with user engagement and navigation.</ul>
             <li>Short Average Duration</li>
             <ul>Suggesting that users are not finding value quickly.</ul>
             <li>High Drop Off Rate</li>
             <ul>Especially for home page, reflecting difficulties in navigation.</ul>
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
                <li>Challenges in Information Retrieval</li>
                <ul> Tasks related to finding specific information on the data dashboards had low success rates and took longer to complete, indicating that information retrieval from the dashboards was challenging for users.</ul>

                <li>Content Understadning</li>
                <ul> Tasks related to understanding content from the About and Disclaimer pages had high success rates, demonstrating that the content on these pages was clear and accessible.</ul>
            </ol>
              

            <h3>Post-test Interview</h3>
            <ol>
                <li>Complexity and Navigability Issues:</li>
                <ul>Users expressed difficulties with the complexity and navigability of the website and the data dashboards.</ul>

                <li>Appreciation for Clarity</li>
                <ul>Despite navigational challenges, users appreciated the clarity of the information once they were able to find it.</ul>
            </ol>
           
 

           
            <h2>Recommendations for Improvement</h2>
            <ol>
                <li>Improve Navigation: 
                    <ul>Simplify navigation by combining general information of data dashboards to the homepage.</ul>
                    <ul>Hightlight the active page in the navigation bar.</ul>
                    <ul>Lable buttons clearly.</ul>
                    <ul>Add a search bar for easier information retrieval.</ul>
                </li>
                
                <li>Add User Guiide:
                    <ul>Provide a user guide or add introduction for first-time users.</ul>
                    <ul>Highlight data filters to ensure user get the correct information</ul>
                </li>

                <li>Improve Site Performance:
                    <ul>Optimize loading times for data dashboards</ul>
                    <ul>Ensure faster access to critical information</ul>
                </li>

            </ol>

            <h2>Research Impact</h2>
  
        </div>
    );
}


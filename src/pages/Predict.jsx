import React from 'react';

export function Predict() {
    return (
        <div className="predict">
            <h1>Data Centralization Webapp</h1>

            
            <h2>
                This webapp specifically designed to help OW Onderhoudspartner Lenferink, 
                a maintenance company, achieve predictive maintenance through better data management. 
                However, they faced the challenge of inconsistent and insufficient data for training their machine learning models.
                <br/><br/>
                I developed this webapp to address this issue by centralizing all maintenance data.
                With a front-end built using Vue.js and a back-end powered by Supabase, the webapp ensures data consistency and comprehensiveness.
                Additionally,, it also assists in managing maintenance project tasks. 
                With this webapp, Ow Onderhoudspartner Lenferink can efficiently manage their maintenance operations, 
                paving the way for predictive maintenance and enhanced project oversight.
</h2>

<h2>Play with the demo:</h2>
            <div className="ipad-frame">
                <iframe src="https://ink-ai.netlify.app/"></iframe>
            </div>
        </div>
    );
}


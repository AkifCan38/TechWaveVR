import React from "react";
import './NewsFeed.css';

function NewsFeed() {
    return(
        <div className="news-container">
        <h2>News Feed</h2>
        <div className="news-item">
            <h3>Release Date Announcement</h3>
            <p>Stay tuned for the official release date of TechWave VR!</p>
        </div>
            <div className="news-item">
                <h3>Update:New Features</h3>
                <p> Innovatech has once again pushed the boundaries of technology with the unveiling of the Innovatech VR Pro. Set to transform the VR industry, the VR Pro promises an unprecedented immersive experience, combining cutting-edge visuals with state-of-the-art motion tracking and audio technology.

                    Industry experts are already hailing the Innovatech VR Pro as a game-changer, with its potential applications spanning from gaming and entertainment to education and professional training. The VR Pro is equipped with a high-resolution display that offers crystal-clear images and a wide field of view, providing users with a truly immersive experience.

                    Innovatech's CEO stated, "We believe the VR Pro will set a new standard in virtual reality technology, making it more accessible and enjoyable for everyone."</p>
            </div>
            {/* fvgybhujnkml*/}
        </div>

    );
}
export default NewsFeed;
import React from 'react'
import './Hemisphere.css'
import northernhemisphere from './images/Northern-hemisphere.jpg';
import southernhemisphere from './images/Southern-hemisphere.jpg';

const hemisphereConfig = {
    Northern: {
    text: 'You are in the northern hemisphere',
    picture: northernhemisphere
    },
    Southern: {
    text: 'You are in the southern hemisphere',
    picture: southernhemisphere
    }
}


const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere];

    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
            <div>
            <img src={picture} alt="hemisphere picture" />
            </div> 
            <div className='ui teal bottom label'>
            <h1>{ text }</h1>
            </div>
        </div>
        </div>
        
    )
}

export default HemisphereDisplay

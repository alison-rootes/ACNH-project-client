import React from 'react';
import './titleScreen.css';
import {Link} from 'react-router-dom';

const TitleScreen = () => {
    return (
        <div id='titleScreenBody'>
            <div className="button">
                <Link to="/Auth">
                    <button>Continue</button>
                </Link>
            </div>
        </div>
    )
}


export default TitleScreen;
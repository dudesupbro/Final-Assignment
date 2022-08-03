import React from 'react';
import MasterList from '../pages/MasterList';


export default class Casino extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-title'>
                <h2>{this.props.Casino.casinoName}</h2>
                </div>
                <div className='card-text'>
                    <p>{this.props.Casino.safety}</p>
                </div>
                
            </div>

        );
    }
}
import React from 'react';
import MasterList from '../pages/MasterList';
import '../styles/casinoStyled.css';
import Card from 'react-bootstrap/Card';
import '../styles/CasinoCard.css';
import Stars from '../components/Stars.js';
import ReviewList from '../components/reviewList';


export default class Casino extends React.Component {
    render() {
        return (
            <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>{this.props.casino.casinoName}</h2>

                </div>
                <div className='card-text'>
                    <Stars 
                        />
                    <p>Safety: {this.props.casino.safety}</p>
                    <p>Lighting: {this.props.casino.lighting}</p>
                    <p>Bathroom: {this.props.casino.bathroom}</p>
                    <p>Atmosphere: {this.props.casino.atmosphere}</p>
                    <p>Clientelle: {this.props.casino.clientelle}</p>
                    <p>Drinks: {this.props.casino.drinks}</p>
                    <p>Comments: {this.props.casino.comments}</p>
                </div>                
            </div>
            </div>
        );
    }
}
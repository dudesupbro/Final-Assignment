import React from 'react';
import MasterList from '../pages/MasterList';
import '../styles/casinoStyled.css';
import Card from 'react-bootstrap/Card';
import '../styles/CasinoCard.css';


export default class Casino extends React.Component {
    render() {
        return (
            <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>{this.props.casino.casinoName}</h2>
                </div>
                <div className='card-text'>
                    <p>{this.props.casino.safety}</p>
                    <p>{this.props.casino.lighting}</p>
                    <p>{this.props.casino.bathroom}</p>
                    <p>{this.props.casino.atmosphere}</p>
                    <p>{this.props.casino.clientelle}</p>
                    <p>{this.props.casino.drinks}</p>
                </div>                
            </div>
            </div>
        );
    }
}
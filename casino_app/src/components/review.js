import React from 'react';

export default class Review extends React.Component {
    render() {
        return (
            <div className='card' id='review'>
                <div className='card-body' id='review'>
                <p className='card-text'>
                    {this.props.review.text} <br/>
                </p>
                </div>
            </div>
        )
    }
}
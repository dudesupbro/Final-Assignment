import React from 'react';
import './Review';

export default class ReviewEdit extends React.Component {

    onPush(index) {
        this.setState(reviews => {
            let newData = reviews.data.slice()
            newData.splice(index,1)
            return {data: newData} 
        })        
    };
    
    render() {
        return(
            <button class='btn btn-danger' onClick={this.onPush}>Delete Comment</button>

        )
    };
}
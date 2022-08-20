import React from 'react';
import ReviewForm from '../pages/ReviewForm';
import Stars from 'react-rating-stars-component';
import '../styles/Review.css';
import ReviewEdit from './ReviewEdit';


export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        };
    }

    handleReviewChange = (e) => {
        this.setState({
            review: e.target.value        
        })
    } 

    handleReviewSubmit = (e) => {
        e.preventDefault()
        this.setState({
            reviews: [...this.state.reviews, this.state]
        })
    }

    render() {
        return(
            <div>
                <form className='commentForm' onSubmit={this.handleReviewSubmit}>
                    <input type='text' placeholder='Comment' onChange={this.handleReviewChange} />
                    <button class='btn btn-primary form-control'>Post Comment</button>
                </form>
                {this.state.reviews.map((review, index) => (<p key={index}>{review.review}</p>)

                )}   

                   
            </div>
        )
    };
}
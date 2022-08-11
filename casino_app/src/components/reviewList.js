import React from 'react';
import Review from './review'
import './pages/ReviewForm'
import ReactStars from 'react-rating-stars-component';


export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        };
    }

    addReview = (newReview) => {
        this.setState((state) => ({reviews: this.state.reviews.concat([newReview])}));
    };

    ratingChanged = (newRating) => {
        console.log(newRating);
    };

    render() {
        return (
            <div className='container'>
                {this.props.reviews.map((review, index) => (
                    <Review review={review} key={index} />
                ))}
                <ReactStars
                    count={5}
                    onChange={this.ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    />,

                {this.state.reviews.map((review, index) => (
                    <Review review={review} key={index} />
                ))}
                <ReviewForm onSubmit={this.addReview} />
            </div>
        );
    }
}

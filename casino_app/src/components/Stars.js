import { render } from '@testing-library/react';
import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ratingChanged = (newRating) => {
    console.log(newRating);
};

render(
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    />,
);

export default ReactStars

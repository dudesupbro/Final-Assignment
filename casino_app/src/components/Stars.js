import React from 'react';
import ReactStars from 'react-rating-stars-component';

export default class Stars extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stars: [],
        rating: 0,
        hovered: 0,
        fullStar: "\u{2605}",
        emptyStar: "\u{2606}",
      };
  
      for (let i = 0; i < 5; i++) {
        this.state.stars.push(i + 1);
      }
    }
  
    render() {
      const { stars, rating, hovered, emptyStar, fullStar } = this.state;
  
      return (
        <div>
          <div className="rating" style={{ fontSize: "1em", color: "yellow" }}>
            {stars.map((star, index) => {
              return (
                <span
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.changeRating(star);
                  }}
                  onMouseEnter={() => {
                    this.hoverRating(0);
                  }}
                >
                  {rating < star
                    ? hovered < stars
                      ? emptyStar
                      : fullStar
                    : fullStar}
                </span>
              );
            })}
          </div>
        </div>
      );
    }
  }

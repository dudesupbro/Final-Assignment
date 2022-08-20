import React from 'react';
import '../styles/MasterList.css';
import Casino from '../components/casino.js';
import Card from 'react-bootstrap/Card';
import '../styles/MasterList.css';
import Review from '../components/Review';
import ReviewEdit from '../components/ReviewEdit';





export default class MasterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterList: [
                {
                    id: 0,
                    rating: "1\u{2605}",
                    casinoName: "JR's",
                    safety: "Bad neighborhood. Clients with less money on average. Cheaper selection of cars outside",
                    lighting: "Fine.",
                    bathroom: "Single occupant male or female. Clean",
                    atmosphere: "Machines placed very close to each other. Small casino.",
                    clientelle: "Smaller, lower income betters. One might say 'crackheads.'",
                    drinks: "Only draught beers are free",
                    comments: "this might be #1 on the list. It's a gas-station casino with a bunch of crackheads. Last time we went, the casino attendant was obviously involved in a domestic dispute. It's not in the best neighborhood, the cars outside are often dilapidated. BONUS: there is a laundromat in the casino.",
                   
                },
                {
                    id: 1,
                    casinoName: "Nickel Nats",
                    safety: "Bad neighborhood. Clients with less money on average. Cheaper selection of cars outside. Conveniently located across the street from JR's",
                    lighting: "Fine.",
                    bathroom: "Single occupant male or female. Clean",
                    atmosphere: "Average casino size with plenty of space between machines.",
                    clientelle: "Smaller, lower income betters. One might say 'crackheads.'",
                    drinks: "Complimentary beer and wine",
                    comments: "Right up there with JR's but a little nicer. ",   

                },
                {
                    id: 2,
                    casinoName: "Bobo's",
                    safety: "Not in the best neighborhood. On the edge of town near the Air Force base. Clients with less money on average. Cheaper selection of cars outside",
                    lighting: "Very bright fluorescent lighting.",
                    bathroom: "Single occupant male or female. Clean",
                    atmosphere: "Larger casino. The garbages inbetween machines are empty 5 gallon buckets with garbage bags in them.",
                    clientelle: "Smaller, lower income betters. One might say 'crackheads.'",
                    drinks: "Complimentary beer and wine",
                    comments: "Origionally we rated this one number one due to the garbages and extremely bright lighting. Rumor has it there used to be a clown on a string that would swing around the casino. ",  
                },
            ],
        };
    }

    updateMasterList = (reviews) => {
        this.setState((state) => ({masterList: this.state.masterList.concat(reviews)} ));
        console.log(this.state.masterList);
    }
    
    render() {
        return(
            <Card className='Container'>
                <Card.Body>
                    <Card.Text>
                        <Casino casino ={this.state.masterList[0]} /> 
                        <Review /> <br />
                        <ReviewEdit />
                        <Casino casino ={this.state.masterList[1]} />
                        <Review /> <br />
                        <ReviewEdit />
                        <Casino casino ={this.state.masterList[2]} />
                        <Review /> <br />
                        <ReviewEdit />
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
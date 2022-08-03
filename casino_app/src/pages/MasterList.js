import React from 'react';
import '../styles/MasterList.css';
import ReactStars from "react-rating-stars-component";
import Casino from '../components/casino.js'




export default class MasterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterList: [
                {
                    id: 0,
                    casinoName: "JR's",
                    safety: "bad neighborhood. clients with less money on average. cheaper selection of cars outside",
                    lighting: "fine.",
                    bathroom: "single occupant male or female. Clean",
                    atmosphere: "Machines placed very close to each other. Small casino.",
                    clientelle: "smaller, lower income betters. One might say 'crackheads.'",
                    drinks: "only draught beers are free",
                    reviews: [
                        {
                            text: "this might be #1 on the list. It's a gas-station casino with a bunch of crackheads. Last time we went, the casino attendant was obviously involved in a domestic dispute. It's not in the best neighborhood, the cars outside are often dilapidated.",
                            stars: <ReactStars />
                        },
                    ],           
                },
                {
                    id: 1,
                    casinoName: "JR's",
                    safety: "bad neighborhood. clients with less money on average. cheaper selection of cars outside",
                    lighting: "fine.",
                    bathroom: "single occupant male or female. Clean",
                    atmosphere: "Machines placed very close to each other. Small casino.",
                    clientelle: "smaller, lower income betters. One might say 'crackheads.'",
                    drinks: "only draught beers are free",
                    reviews: [
                        {
                            text: "this might be #1 on the list. It's a gas-station casino with a bunch of crackheads. Last time we went, the casino attendant was obviously involved in a domestic dispute. It's not in the best neighborhood, the cars outside are often dilapidated.",
                            stars: <ReactStars />
                        },
                    ],     

                },
                {
                    id: 2,
                    casinoName: "JR's",
                    safety: "bad neighborhood. clients with less money on average. cheaper selection of cars outside",
                    lighting: "fine.",
                    bathroom: "single occupant male or female. Clean",
                    atmosphere: "Machines placed very close to each other. Small casino.",
                    clientelle: "smaller, lower income betters. One might say 'crackheads.'",
                    drinks: "only draught beers are free",
                    reviews: [
                        {
                            text: "this might be #1 on the list. It's a gas-station casino with a bunch of crackheads. Last time we went, the casino attendant was obviously involved in a domestic dispute. It's not in the best neighborhood, the cars outside are often dilapidated.",
                            stars: <ReactStars />
                        },
                    ],     
                },
            ],
        };
    }

    render() {
        return (
            <div className='container'>
                <h1 id='title'>Master List</h1>
                <Casino casino ={this.state.masterList[0]} />
                <Casino casino ={this.state.masterList[1]} />
                <Casino casino ={this.state.masterList[2]} />
            </div>
        );
    }
}
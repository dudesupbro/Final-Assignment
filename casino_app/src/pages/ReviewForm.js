import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/ReviewForm.css'

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            reviewInfo: {
                casinoName: "",
                safety: "",
                lighting: "",
                bathroom: "",
                atmosphere: "",
                clientelle: "",
                drinks: "",
            },
        };
        {
            this.changeChild = React.createRef();
        }
    }

    onNameChange = (event) => {
        this.setState((state) => {
            const copyOfInfo = { ...this.state.reviewInfo};
            copyOfInfo.casinoName = event.target.value;
            return { reviewInfo: copyOfInfo};
        });
    };

    onSafetyChange = (event) => {
        this.setState((state) => {
            const copyOfInfo = {...this.state.reviewInfo};
            copyOfInfo.safety = event.target.value;
            return { reviewInfo: copyOfInfo};
        });
    };

    onLightingChange = (event) => {
        this.setState((state) => {
            const copyOfInfo = {...this.state.reviewInfo};
            copyOfInfo.lighting = event.target.value;
            return { reviewInfo: copyOfInfo};
        });
    };

    onBathroomChange = (event) => {
        this.setState((state) => {
            const copyOfInfo = {...this.state.reviewInfo};
            copyOfInfo.bathroom = event.target.value;
            return { reviewInfo: copyOfInfo};
        });
    };

    onAtmosphereChange = (event) => {
        this.setState((state) => {
            const copyOfInfo = {...this.state.reviewInfo};
            copyOfInfo.atmosphere = event.target.value;
            return { reviewInfo: copyOfInfo};
        });
    };

    onClientelleChange = (event) => {
        this.setState((state) => {
            const copyOfInfo = {...this.state.reviewInfo};
            copyOfInfo.clientelle = event.target.value;
            return { reviewInfo: copyOfInfo};
        });
    };

    onDrinkChange = (event) => {
        this.setState((state) => {
            const copyOfInfo = {...this.state.reviewInfo};
            copyOfInfo.drinks = event.target.value;
            return { reviewInfo: copyOfInfo};
        });
    };

    onUserSubmit = () => {
        const newReview = {
            casinoName: this.state.reviewInfo.casinoName,
            safety: this.state.reviewInfo.safety,
            lighting: this.state.reviewInfo.lighting,
            bathroom: this.state.reviewInfo.bathroom,
            atmosphere: this.state.reviewInfo.atmosphere,
            clientelle: this.state.reviewInfo.clientelle,
            drinks: this.state.reviewInfo.drinks,
        };
        this.props.onSubmit(newReview);
        this.setState({ reviewInfo: { casinoName: "", safety: "", lighting: "", bathroom: "", atmosphere: "", clientelle: "", drinks: ""} });
    };

    render() {
        return (
            <div className='container'>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Casino Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={this.state.casinoName} onChange={this.onNameChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Safety</Form.Label>
                    <Form.Control type="text" placeholder="How safe did you feel?" value={this.state.safety} onChange={this.onSafetyChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lighting</Form.Label>
                    <Form.Control type="text" placeholder="Dimly lit? Brightly lit?" value={this.state.lighting} onChange={this.onLightingChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bathroom</Form.Label>
                    <Form.Control type="text" placeholder="Clean? Dirty? Small?" value={this.state.bathroom} onChange={this.onBathroomChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Atmosphere</Form.Label>
                    <Form.Control type="text" placeholder="Lively, Sad, Scary?" value={this.state.atmosphere} onChange={this.onAtmosphereChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Clientelle</Form.Label>
                    <Form.Control type="text" placeholder="Crackheads? Richfolk?" value={this.state.clientelle} onChange={this.onClientelleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Drinks</Form.Label>
                    <Form.Control type="text" placeholder="Complimentary or paid?" value={this.state.drinks} onChange={this.onDrinkChange}/>
                </Form.Group>

                <Button variant="success" type="submit" onClick={this.onUserSubmit}>
                    Submit
                </Button>
            </Form>
            </div>
        )
    };   
}


// empty array, push to array
// mock api, use hook or class component, set state to empty array of reviews, onchange, onsubmit, map to location .
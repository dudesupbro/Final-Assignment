import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            reviewInfo: {
                casinoName: '',
                safety: '',
                lighting: '',
                bathroom: '',
                atmosphere: '',
                clientelle: '',
                drinks: '',
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

    onTextChange = (event) => {
        this.setState((state) => {
            const copyOfInfo = { ...this.state.reviewInfo};
            copyOfInfo.safety = event.target.value;
            copyOfInfo.lighting = event.target.value;
            copyOfInfo.bathroom = event.target.value;
            copyOfInfo.atmosphere = event.target.value;
            copyOfInfo.clientelle = event.target.value;
            copyOfInfo.drinks = event.target.value;
            
            return { reviewInfo: copyOfInfo};
        });
    };

    onUserSubmit = () => {
        const newReview = {
            casinoName: this.state.reviewInfo.casinoName,
            text: this.state.reviewInfo.text,
        };
        this.props.onSubmit(newReview);
        this.setState({ reviewInfo: { casinoName: '', safety: '', lighting: '', bathroom: '', atmosphere: '', clientelle: '', drinks: '',} });
    };

    render() {
        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Casino Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Safety</Form.Label>
                    <Form.Control type="text" placeholder="How safe did you feel?" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lighting</Form.Label>
                    <Form.Control type="text" placeholder="Dimly lit? Brightly lit?"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bathroom</Form.Label>
                    <Form.Control type="text" placeholder="Clean? Dirty? Small?" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Atmosphere</Form.Label>
                    <Form.Control type="text" placeholder="Lively, Sad, Scary?"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Clientelle</Form.Label>
                    <Form.Control type="text" placeholder="Crackheads? Richfolk?" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Drinks</Form.Label>
                    <Form.Control type="text" placeholder="Complimentary or paid?" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }

   
}


// empty array, push to array
// mock api, use hook or class component, set state to empty array of reviews, onchange, onsubmit, map to location .
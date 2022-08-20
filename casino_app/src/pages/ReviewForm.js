import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/ReviewForm.css'

export default class ReviewForm extends React.Component {

    handleSubmit(e) {
        alert("Submitted for review");
    }

    render() {
        return (
            <div className='container'>
                <div className='title'>
                <h2>Have us review a Casino!</h2>
                </div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Casino Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Safety</Form.Label>
                    <Form.Control type="text" placeholder="How safe did you feel?"/>
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
                    <Form.Control type="text" placeholder="Lively, Sad, Scary?" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Clientelle</Form.Label>
                    <Form.Control type="text" placeholder="Crackheads? Richfolk?" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Drinks</Form.Label>
                    <Form.Control type="text" placeholder="Complimentary or paid?" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="text" placeholder="Additional Comments" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        )
    };   
}

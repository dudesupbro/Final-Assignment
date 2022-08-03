import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Home.css'



export default function Home() {
    return (
        <div className="CasinoContainer">
            <Card className="CasinoCard" style={{ width: '38rem' }}>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/540/936/small/CASINO_alphabet_sign_marquee_light_bulb_vintage_carnival_or_circus_style__Vector_illustration.jpg" />
                    <Card.Body>
                        <Card.Title>The Best Worst Casinos in Great Falls, Montana</Card.Title> <br />
                            <Card.Text>
                                Gambling is legal in the state of Montana. It is relatively easy to attain a gaming license from the state,
                                and those lucky enough to have a coveted liquor license(costs about $600,000 these days) are allowed to have up to
                                twenty machines in their establishemnt. Gambling is a pretty popular activity and creates massive revenues to the casino owners
                                 as well as the state of Montana. For these reasons, and more, you will find about one casino per square mile in a city. This includes bars
                                 with gaming machines. 
                                With casinos being so ubiquitious, my friend and I set out to find the worst of them. We asked ourselves why we would want to find
                                the worst casinos in Great Falls, and we were unable to answer the question. But, it's the journey and not the destination that matters.
                            </Card.Text>
                                <Button variant="success">Proceed to Master List</Button>
                    </Card.Body>
            </Card>
        </div>
    );
  }
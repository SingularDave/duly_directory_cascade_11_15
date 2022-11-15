import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function locationString(locations) {
    if (locations.length === 1) {
        return locations[0];
    } else if (locations.length === 2) {
        return locations[0] + " and " + locations[1];
    } else if (locations.length === 3) {
        return locations[0] + ", " + locations[1] + ", and " + locations[2];
    }
}

function EmployeeCard(props) {
    if (!props.search_engaged) {
        return null;
    }
    return (
        <div>
            <Container className="mt-2 mb-2" key={props.name}>
                <Row>
                    <Col/>
                    <Col>
                        <Card key={props.name} className="card small bg-primary text-white">
                            <Card.Img src={props.image} alt={`${props.name} image`}/>
                            <Card.Body>
                                <Card.Title>
                                    <Card.Link className="text-white" href={props.website_url}>
                                        {props.name}
                                    </Card.Link>
                                </Card.Title>
                                <Card.Text>{props.specialty}</Card.Text>
                                <Card.Text>{locationString(props.location)}</Card.Text>
                                <Card.Text>{props.email}</Card.Text>
                                <Card.Text>{props.cell_phone_number}</Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        </div>
    );
}

export default EmployeeCard;

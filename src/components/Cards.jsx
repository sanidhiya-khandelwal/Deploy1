import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/z/7/-original-imagzbs5yww8gwjw.jpeg?q=70" />
            <Card.Body>
                <Card.Title>realme C55 (Sunshower, 64 GB)  (6 GB RAM)</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now</Button> &nbsp; &nbsp;
                <Button variant="primary">ADD TO CART</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/be256a40023dcbfe.jpg?q=50"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/cef7065320f2499d.jpg?q=50"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/2ffe80d45cc64b2c.jpg?q=50"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;